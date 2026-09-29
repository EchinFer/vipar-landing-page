// Uses an existing Playwright installation; no production analytics requests are sent.
// VIPAR_PLAYWRIGHT_MODULE can point to an installed Playwright index.mjs.
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { cacheName } from "../scripts/image-health.mjs";
import { resolve, extname, sep } from "node:path";
import { pathToFileURL } from "node:url";

const { chromium } = await import(process.env.VIPAR_PLAYWRIGHT_MODULE ? pathToFileURL(process.env.VIPAR_PLAYWRIGHT_MODULE).href : "playwright");
const root = resolve("dist");
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2" };
const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  let file = resolve(root, `.${decodeURIComponent(pathname)}`);
  if (file !== root && !file.startsWith(`${root}${sep}`)) { response.writeHead(403).end(); return; }
  if (pathname.endsWith("/")) file = resolve(file, "index.html");
  try { response.setHeader("Content-Type", mime[extname(file)] || "application/octet-stream"); response.end(await readFile(file)); }
  catch { response.writeHead(404).end(); }
});
await new Promise((done) => server.listen(0, "127.0.0.1", done));
const local = `http://127.0.0.1:${server.address().port}`;
let browser;
const reports = [];
try {
  browser = await chromium.launch({ headless: true, args: ["--disable-gpu"], ...(process.env.VIPAR_BROWSER_PATH ? { executablePath: process.env.VIPAR_BROWSER_PATH } : {}) });
  for (const viewport of [{ width: 390, height: 844 }, { width: 1440, height: 900 }]) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    // Render the local build under the production hostname to exercise the real bridge.
    // All requests for SDKs and external assets are blocked before reaching the network.
    await context.route("**/*", async (route) => {
      const url = new URL(route.request().url());
      if (url.hostname === "vipar.moochsoft.com") {
        // Real photos from the fresh image audit; the browser still sends no external requests.
        try { await route.fulfill({ status: 200, body: await readFile(resolve("image-health-cache", cacheName(url.href))), contentType: mime[extname(url.pathname)] || "image/webp" }); }
        catch { await route.abort(); }
        return;
      }
      if (url.origin !== "https://vipar.com.py") { await route.abort(); return; }
      const response = await fetch(`${local}${url.pathname}${url.search}`);
      await route.fulfill({ status: response.status, body: Buffer.from(await response.arrayBuffer()), contentType: response.headers.get("content-type") || "text/plain" });
    });
    await page.addInitScript(() => {
      window.__testOpened = [];
      window.open = (href) => { window.__testOpened.push(href); return null; };
    });
    const capture = async path => {
      await page.bringToFront();
      // Bring the audited page forward after WhatsApp's target=_blank interaction.
      const { data } = await cdp.send("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false });
      await writeFile(path, Buffer.from(data, "base64"));
    };

    await page.goto("https://vipar.com.py/contacto/?servicio=cielo-raso", { waitUntil: "networkidle" });
    await page.waitForFunction(() => typeof window.viparTrack === "function");
    await page.evaluate(() => {
      window.__testGa = []; window.__testPh = [];
      window.gtag = (...args) => window.__testGa.push(args);
      window.posthog = { capture: (...args) => window.__testPh.push(args), opt_in_capturing() {}, opt_out_capturing() {} };
    });
    await page.click("#consent-accept");
    await page.evaluate(() => { window.__viparPosthogReady = true; window.dispatchEvent(new Event("vipar:posthog-ready")); });
    const form = page.locator("#vipar-contact-form");
    assert.equal(await form.locator('input[name="service"]').inputValue(), "Cielo raso");
    assert.equal(await form.locator('input[name="consultation_type"]').inputValue(), "Presupuesto");
    assert.equal(await form.locator('input[name="email"]').getAttribute("required"), null);
    assert.equal(await form.locator('[data-option="Cielo raso"]').getAttribute("aria-pressed"), "true");
    await form.locator('button[type="submit"]').click();
    let events = await page.evaluate(() => ({ ga: window.__testGa, ph: window.__testPh, opened: window.__testOpened }));
    assert.equal(events.opened.length, 1);
    assert.ok(decodeURIComponent(events.opened[0]).includes("Cielo raso"));
    assert.ok(!decodeURIComponent(events.opened[0]).includes("Email para"));
    assert.equal(events.ga.filter(([, name]) => name === "whatsapp_handoff").length, 1);
    assert.equal(events.ph.filter(([name]) => name === "whatsapp_handoff").length, 1);
    assert.equal(events.ga.filter(([, name]) => ["form_submit", "lead_email_captured", "whatsapp_click"].includes(name)).length, 0);
    assert.ok((await page.locator("#vipar-contact-form-message").innerText()).includes("enviá el mensaje"));
    assert.equal(await form.locator('input[name="service"]').inputValue(), "Cielo raso");

    await form.locator('input[name="email"]').fill("private@example.test");
    await form.locator('button[type="submit"]').click();
    events = await page.evaluate(() => ({ ga: window.__testGa, ph: window.__testPh, opened: window.__testOpened }));
    assert.ok(decodeURIComponent(events.opened[1]).includes("private@example.test"));
    assert.ok(!JSON.stringify({ ga: events.ga, ph: events.ph }).includes("private@example.test"));
    assert.ok(!events.ga.some(([, name, payload]) => name === "whatsapp_handoff" && ("email" in payload || "name" in payload || "phone" in payload)));
    await form.locator('input[name="email"]').fill("invalid-email");
    await form.locator('button[type="submit"]').click();
    assert.equal(await page.evaluate(() => window.__testOpened.length), 2);
    assert.ok((await page.locator("#vipar-contact-form-message").innerText()).includes("dejalo vacío"));
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true);

    // Actual service view: delay PostHog until after consent; retry without double sending.
    await page.goto("https://vipar.com.py/servicios/cielo-raso/", { waitUntil: "networkidle" });
    await page.waitForFunction(() => typeof window.viparTrack === "function");
    await page.evaluate(() => {
      window.__testPh = [];
      window.posthog = { capture: (...args) => window.__testPh.push(args), opt_in_capturing() {}, opt_out_capturing() {} };
      window.__viparPosthogReady = true;
      window.dispatchEvent(new Event("vipar:posthog-ready"));
      window.dispatchEvent(new Event("vipar:posthog-ready"));
      window.dispatchEvent(new Event("vipar:consent-changed"));
    });
    assert.equal(await page.evaluate(() => window.__testPh.filter(([name]) => name === "service_page_viewed").length), 1);
    assert.equal(await page.evaluate(() => window.__testPh.filter(([name]) => name === "$pageview").length), 1);
    assert.equal((await page.locator("h1").textContent()).replace(/\s+/g, " ").trim(), "Cielo raso en Paraguay: instalación en PVC, Durlock, yeso y desmontable");
    assert.equal(await page.locator('a[href="/blog/cuanto-cuesta-cielo-raso-paraguay/"]').count(), 1);
    const fab = page.locator('a[data-cta-location="floating_fab"]');
    assert.equal(await fab.count(), 1);
    await fab.click();
    assert.equal(await page.evaluate(() => window.__testPh.filter(([name, props]) => name === "whatsapp_handoff" && props.cta_location === "floating_fab").length), 1);
    for (const popup of context.pages()) if (popup !== page) await popup.close();
    const contact = page.locator('a[href="/contacto/"]').last();
    await contact.click();
    await page.waitForURL("**/contacto/?servicio=cielo-raso");
    assert.equal(await page.locator('#vipar-contact-form input[name="service"]').inputValue(), "Cielo raso");

    await page.goto("https://vipar.com.py/servicios/box-de-bano/", { waitUntil: "networkidle" });
    assert.equal(await page.title(), "Box de baño y mamparas para baño en Paraguay | VIPAR");
    assert.equal((await page.locator("h1").textContent()).replace(/\s+/g, " ").trim(), "Box de baño y mamparas de ducha a medida");
    assert.ok(await page.locator('a[href^="/obras/vivienda-box-de-bano"]').count() > 0);
    await page.goto("https://vipar.com.py/blog/cuanto-cuesta-cielo-raso-paraguay/", { waitUntil: "networkidle" });
    assert.equal(await page.getByRole("link", { name: "Ver instalación de cielo raso", exact: true }).getAttribute("href"), "/servicios/cielo-raso/");
    assert.equal(await page.locator('a[href="/blog/cielo-raso-pvc-vs-yeso/"]').count(), 1);
    await mkdir("image-health-cache/screenshots", { recursive: true });
    for (const slug of ["cielo-raso", "box-de-bano", "mamparas-divisorias", "vidrio-templado"]) {
      console.log(`QA ${slug} @ ${viewport.width}px`);
      await page.goto(`https://vipar.com.py/servicios/${slug}/`, { waitUntil: "networkidle" });
      await page.waitForFunction(() => typeof window.viparTrack === "function");
      const gallery = page.locator("main > .ds-related-works");
      assert.equal(await gallery.count(), 1);
      const sections = await page.locator("main > section").evaluateAll(nodes => nodes.map(node => node.className));
      assert.ok(sections[2].includes("ds-related-works"), `${slug}: proof must be third`);
      const heroImage = page.locator("main > section").first().locator("img").first();
      await page.waitForFunction(() => document.querySelector("main > section img")?.naturalWidth > 0);
      assert.equal(await page.locator("h1").count(), 1);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true, slug);
      await page.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; window.scrollTo(0, 0); });
      await capture(`image-health-cache/screenshots/${slug}-${viewport.width}-hero.png`);
      await gallery.evaluate(node => { window.scrollTo(0, node.getBoundingClientRect().top + window.scrollY - 80); });
      await gallery.locator("img").evaluateAll(images => Promise.all(images.map(image => image.decode())));
      await capture(`image-health-cache/screenshots/${slug}-${viewport.width}-works.png`);
      if (slug === "vidrio-templado") {
        assert.equal(await page.title(), "Vidrio templado y Blindex en Paraguay | A medida | VIPAR");
        await page.evaluate(() => {
          window.__testPh = [];
          window.posthog = { capture: (...args) => window.__testPh.push(args), opt_in_capturing() {}, opt_out_capturing() {} };
          window.__viparPosthogReady = true;
          window.dispatchEvent(new Event("vipar:posthog-ready"));
        });
        assert.equal(await page.evaluate(() => window.__testPh.filter(([name, props]) => name === "service_page_viewed" && props.service_name === "Vidrio templado").length), 1);
        await page.locator('a[href="/contacto/?servicio=vidrio-templado"]').click();
        await page.waitForURL("**/contacto/?servicio=vidrio-templado");
        assert.equal(await page.locator('#vipar-contact-form input[name="service"]').inputValue(), "Vidrio templado");
      }
    }
    await page.goto("https://vipar.com.py/", { waitUntil: "networkidle" });
    assert.equal(await page.locator("#servicios").count(), 1);
    const homeOrder = await page.locator("main > section").evaluateAll(nodes => nodes.map(node => node.id || node.className));
    assert.equal(homeOrder[1], "servicios");
    assert.equal(homeOrder[2], "obras");
    assert.ok(await page.locator('a[href="/servicios/vidrio-templado/"]').count() > 0);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true, "home");
    await page.locator("#obras").evaluate(node => { window.scrollTo(0, node.getBoundingClientRect().top + window.scrollY - 80); });
    await page.locator("#obras img").evaluateAll(images => Promise.all(images.map(image => image.decode())));
    await capture(`image-health-cache/screenshots/home-${viewport.width}-works.png`);
    assert.deepEqual(errors, []);
    reports.push({ viewport, result: "passed", checked: ["service preselection", "email optional", "invalid email", "one handoff", "no PII in GA4 or PostHog", "late SDK service view once", "FAB handoff", "service → contact context", "SEO titles", "cluster links", "box project", "early real works on four services and home", "hero image decoded", "vidrio templado service event and form context", "no horizontal overflow", "no page errors"] });
    await context.close();
  }
  const report = { checkedAt: new Date().toISOString(), status: "passed", analytics_network: "blocked", images: "cached real photos from HTTP audit", sdk: "mocked", reports };
  await writeFile("image-health-cache/browser-report.json", JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser?.close();
  await new Promise((done) => server.close(done));
}
