import test from "node:test";
import assert from "node:assert/strict";
import { sanitizeAnalyticsProperties, safePageUrl, resolveAttribution, inferTouch, normalizeContactEvent, SESSION_TIMEOUT_MS, ATTRIBUTION_KEY, SESSION_KEY } from "../src/lib/analytics-context.ts";
import { initializeTracking, createPageViewGate } from "../src/lib/tracking.ts";
import { serviceForContact } from "../src/lib/service-context.ts";

const storage = () => {
  const values = new Map();
  return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: (key) => values.delete(key) };
};

test("contact PII, nested data and messages cannot cross the analytics boundary", () => {
  assert.deepEqual(sanitizeAnalyticsProperties({ email: "persona@example.test", name: "Persona", phone: "+595981234567",
    email_domain: "example.test", message: "Consulta privada", user_id: "personal-id", nested: { email: "x@y.test" },
    link_url: "https://wa.me/595981234567?text=email%40example.test", service_name: "Box de Baño", has_email: true,
    form_id: "vipar-contact-form", cta_location: "contact_form", form_source: "vipar-contacto",
  }), { service_name: "Box de baño", service_slug: "box-de-bano", has_email: true, form_id: "vipar-contact-form",
    cta_location: "contact_form", form_source: "vipar-contacto" });
  assert.deepEqual(sanitizeAnalyticsProperties({ session_source: "persona%40example.test", cta_location: "+595981234567" }), {});
});

test("page URLs exclude arbitrary query values, fragments, email UTMs and message text", () => {
  assert.equal(safePageUrl("https://vipar.com.py/contacto/?email=private%40example.test&utm_source=google&utm_campaign=user%40mail.test&servicio=cielo-raso#secret", true),
    "https://vipar.com.py/contacto/?utm_source=google");
  assert.equal(safePageUrl("https://google.com/search?q=private%40mail.test"), "https://google.com/search");
  assert.equal(safePageUrl("https://vipar.com.py/?gclid=Abc_123-xyz", true), "https://vipar.com.py/?gclid=Abc_123-xyz");
});

test("Google → home → service → contact preserves consented acquisition without self-referrals", () => {
  const local = storage(), session = storage();
  resolveAttribution({ url: new URL("https://vipar.com.py/"), referrer: "https://www.google.com/", local, session, consent: true, now: 1000 });
  const context = resolveAttribution({ url: new URL("https://vipar.com.py/servicios/cielo-raso/"), referrer: "https://vipar.com.py/", local, session, consent: true, now: 2000 });
  assert.equal(context.first_touch_source, "google");
  assert.equal(context.session_source, "google");
  assert.equal(context.session_medium, "organic");
  assert.equal(context.current_referrer, "vipar.com.py");
  assert.equal(context.session_landing, "/");
});

test("a new direct session keeps first touch while changing session touch after inactivity", () => {
  const local = storage(), session = storage();
  resolveAttribution({ url: new URL("https://vipar.com.py/"), referrer: "https://google.com/", local, session, consent: true, now: 1000 });
  const later = resolveAttribution({ url: new URL("https://vipar.com.py/contacto/"), referrer: "", local, session, consent: true, now: 1001 + SESSION_TIMEOUT_MS });
  assert.equal(later.first_touch_source, "google");
  assert.equal(later.session_source, "direct");
  assert.equal(later.session_landing, "/contacto/");
});

test("no attribution is stored without consent; internal entry without history is unknown", () => {
  const local = storage(), session = storage();
  const context = resolveAttribution({ url: new URL("https://vipar.com.py/contacto/"), referrer: "https://www.vipar.com.py/", local, session, consent: false });
  assert.equal(context.session_source, "unattributed");
  assert.equal(local.getItem(ATTRIBUTION_KEY), null);
  assert.equal(session.getItem(SESSION_KEY), null);
});

test("missing UTM medium remains unknown and Google Ads click identifiers remain paid", () => {
  assert.equal(inferTouch(new URL("https://vipar.com.py/?utm_source=campaign"), "").medium, "unknown");
  assert.equal(inferTouch(new URL("https://vipar.com.py/?gclid=abc"), "").medium, "cpc");
  assert.equal(inferTouch(new URL("https://vipar.com.py/"), "https://google.com.attacker.test/").medium, "referral");
});

test("preselection accepts real service slugs and internal referrers, never an external referrer", () => {
  assert.equal(serviceForContact(new URL("https://vipar.com.py/contacto/?servicio=vidrio-templado"), "")?.name, "Vidrio templado");
  assert.equal(serviceForContact(new URL("https://vipar.com.py/contacto/?servicio=cristales-templados"), "")?.slug, "vidrio-templado");
  assert.equal(serviceForContact(new URL("https://vipar.com.py/contacto/?servicio=cielo-raso"), "")?.name, "Cielo raso");
  assert.equal(serviceForContact(new URL("https://vipar.com.py/contacto/"), "https://vipar.com.py/servicios/box-de-bano/")?.name, "Box de baño");
  assert.equal(serviceForContact(new URL("https://vipar.com.py/contacto/?servicio=made-up"), "https://other.test/servicios/cielo-raso/"), undefined);
});

test("a dropped view is retried, while a successfully sent view is deduplicated", () => {
  const gate = createPageViewGate();
  assert.equal(gate("ph-service", () => false), false);
  assert.equal(gate("ph-service", () => true), true);
  assert.equal(gate("ph-service", () => { throw new Error("duplicate send"); }), false);
  assert.equal(normalizeContactEvent("whatsapp_fab_click"), "whatsapp_handoff");
});

function browserFixture(t, hostname = "vipar.com.py") {
  const ga = [], ph = [];
  const win = new EventTarget();
  Object.assign(win, { location: { hostname, origin: `https://${hostname}`, href: `https://${hostname}/servicios/cielo-raso/`, pathname: "/servicios/cielo-raso/" },
    localStorage: storage(), sessionStorage: storage(), __viparAnalyticsConsent: false, __viparPosthogReady: false,
    gtag: (...args) => ga.push(args), posthog: { capture: (...args) => ph.push(args) },
  });
  const doc = new EventTarget();
  Object.assign(doc, { readyState: "complete", referrer: "https://google.com/", title: "Cielo raso | VIPAR",
    body: { dataset: { pageType: "service", serviceName: "Cielo raso", measurementId: "G-TEST" } } });
  const previous = { window: globalThis.window, document: globalThis.document };
  globalThis.window = win; globalThis.document = doc;
  t.after(() => { globalThis.window = previous.window; globalThis.document = previous.document; });
  initializeTracking();
  return { win, ga, ph, consent: (value) => { win.__viparAnalyticsConsent = value; win.dispatchEvent(new Event("vipar:consent-changed")); } };
}

test("delayed consent and SDK load send exactly one view per provider and one sanitized handoff", (t) => {
  const { win, ga, ph, consent } = browserFixture(t);
  assert.equal(win.viparTrack("whatsapp_click", { email: "x@y.test" }), false);
  assert.equal(ga.length + ph.length, 0);
  consent(true);
  win.viparTrack("whatsapp_click", { email: "x@y.test", phone: "+595981234567", cta_location: "fab" });
  assert.equal(ph.length, 0);
  win.__viparPosthogReady = true;
  win.dispatchEvent(new Event("vipar:posthog-ready"));
  consent(true); win.dispatchEvent(new Event("vipar:posthog-ready"));
  assert.deepEqual(ph.map(([name]) => name), ["$pageview", "service_page_viewed", "whatsapp_handoff"]);
  assert.equal(ga.filter(([, name]) => name === "service_page_viewed").length, 1);
  assert.equal(ga.filter(([, name]) => name === "page_view").length, 1);
  assert.equal(ga.filter(([, name]) => name === "whatsapp_handoff").length, 1);
  assert.ok(!JSON.stringify({ ga, ph }).includes("x@y.test"));
  assert.ok(!JSON.stringify({ ga, ph }).includes("595981234567"));
  assert.equal(win.viparTrack("lead_email_captured", {}), false);
  assert.equal(win.viparTrack("form_submit", {}), false);
  consent(false);
  assert.equal(win.localStorage.getItem(ATTRIBUTION_KEY), null);
  assert.equal(win.sessionStorage.getItem(SESSION_KEY), null);
  assert.equal(win.viparTrack("whatsapp_handoff", {}), false);
});

test("local and preview hosts cannot send production analytics", (t) => {
  const { win, ga, ph, consent } = browserFixture(t, "localhost");
  consent(true); win.__viparPosthogReady = true;
  win.dispatchEvent(new Event("vipar:posthog-ready"));
  assert.equal(win.viparTrack("whatsapp_handoff", {}), false);
  assert.equal(ga.length + ph.length, 0);
});
