/**
 * VIPAR Performance Test Suite
 * ─────────────────────────────────────────────────────────────────────────────
 * Corre Lighthouse en mobile sobre las páginas clave de VIPAR y valida contra
 * los criterios mínimos definidos para el proyecto.
 *
 * Uso:
 *   node scripts/perf-test.mjs [--url http://localhost:4321] [--page /]
 *
 * Por defecto corre sobre todas las páginas con --url http://localhost:4321
 * Asegurate de tener el servidor corriendo antes: pnpm preview
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { createRequire } from "module";
import { execSync, spawn } from "child_process";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = resolve(__dirname, "..");
const REPORTS_DIR = join(ROOT, "perf-reports");

// ─── Colores ANSI ─────────────────────────────────────────────────────────────
const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
};

const pass = (msg) => `${c.green}✔ PASS${c.reset}  ${msg}`;
const fail = (msg) => `${c.red}✘ FAIL${c.reset}  ${msg}`;
const warn = (msg) => `${c.yellow}⚠ WARN${c.reset}  ${msg}`;
const info = (msg) => `${c.cyan}ℹ${c.reset}  ${msg}`;
const header = (msg) =>
  `\n${c.bold}${c.cyan}${"─".repeat(60)}\n  ${msg}\n${"─".repeat(60)}${c.reset}`;

// ─── Configuración de páginas ──────────────────────────────────────────────────

/**
 * Nivel "standard": mínimo aceptable para VIPAR
 * Nivel "strict":   criterio exigente para páginas de servicio clave
 */
const THRESHOLDS = {
  standard: {
    performance: 85,
    accessibility: 90,
    "best-practices": 90,
    seo: 95,
    lcp: 2500,   // ms
    cls: 0.1,
    inp: 200,    // ms (aproximado por TBT)
    tbt: 300,    // ms (proxy para INP en laboratorio)
  },
  strict: {
    performance: 90,
    accessibility: 95,
    "best-practices": 95,
    seo: 100,
    lcp: 2000,   // ms
    cls: 0.05,
    inp: 150,    // ms
    tbt: 200,    // ms
  },
};

const PAGES = [
  { path: "/",                          label: "Home",                  level: "standard" },
  { path: "/servicios",                 label: "Servicios (hub)",       level: "standard" },
  { path: "/servicios/cielo-raso",      label: "Cielo Raso",            level: "strict"   },
  { path: "/servicios/box-de-bano",     label: "Box de Baño",           level: "strict"   },
  { path: "/servicios/mamparas-divisorias", label: "Mamparas Divisorias", level: "strict" },
  { path: "/servicios/fachadas",        label: "Fachadas",              level: "strict"   },
  { path: "/contacto",                  label: "Contacto",              level: "standard" },
  { path: "/obras",                     label: "Obras",                 level: "standard" },
];

// ─── Utilidades ───────────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const result = { baseUrl: "http://localhost:4321", page: null };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--url" && args[i + 1]) result.baseUrl = args[++i];
    if (args[i] === "--page" && args[i + 1]) result.page = args[++i];
  }
  return result;
}

function score(value) {
  if (value >= 90) return `${c.green}${value}${c.reset}`;
  if (value >= 80) return `${c.yellow}${value}${c.reset}`;
  return `${c.red}${value}${c.reset}`;
}

function msColor(ms, threshold) {
  if (ms <= threshold * 0.8) return `${c.green}${ms} ms${c.reset}`;
  if (ms <= threshold) return `${c.yellow}${ms} ms${c.reset}`;
  return `${c.red}${ms} ms${c.reset}`;
}

function clsColor(val, threshold) {
  const rounded = val.toFixed(3);
  if (val <= threshold * 0.8) return `${c.green}${rounded}${c.reset}`;
  if (val <= threshold) return `${c.yellow}${rounded}${c.reset}`;
  return `${c.red}${rounded}${c.reset}`;
}

// ─── Runner de Lighthouse ──────────────────────────────────────────────────────

async function runLighthouse(url, outputPath) {
  let lighthouse, chromeLauncher;
  try {
    ({ default: lighthouse } = await import("lighthouse"));
    chromeLauncher = await import("chrome-launcher");
  } catch {
    console.error(
      `\n${c.red}${c.bold}ERROR:${c.reset} Faltan dependencias. Instalá con:\n\n` +
      `  pnpm add -D lighthouse chrome-launcher\n`
    );
    process.exit(1);
  }

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"],
  });

  const options = {
    logLevel: "error",
    output: "json",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    port: chrome.port,
    formFactor: "mobile",
    screenEmulation: {
      mobile: true,
      width: 390,
      height: 844,
      deviceScaleFactor: 3,
      disabled: false,
    },
    throttlingMethod: "simulate",
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 4,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0,
    },
  };

  const runnerResult = await lighthouse(url, options);
  await chrome.kill();

  if (outputPath) {
    mkdirSync(REPORTS_DIR, { recursive: true });
    writeFileSync(outputPath, runnerResult.report);
  }

  return runnerResult.lhr;
}

// ─── Validador de resultados ───────────────────────────────────────────────────

function validateResult(lhr, level, label) {
  const t = THRESHOLDS[level];
  const results = [];
  let passed = 0;
  let failed = 0;

  // Scores de categorías
  const cats = lhr.categories;
  const perfScore = Math.round((cats.performance?.score ?? 0) * 100);
  const a11yScore = Math.round((cats.accessibility?.score ?? 0) * 100);
  const bpScore = Math.round((cats["best-practices"]?.score ?? 0) * 100);
  const seoScore = Math.round((cats.seo?.score ?? 0) * 100);

  const checkScore = (name, actual, min) => {
    const ok = actual >= min;
    if (ok) passed++; else failed++;
    return ok
      ? pass(`${name}: ${score(actual)} (mín ${min})`)
      : fail(`${name}: ${score(actual)} (mín ${min})`);
  };

  results.push("", `${c.bold}Lighthouse scores (mobile simulado):${c.reset}`);
  results.push(checkScore("Performance    ", perfScore, t.performance));
  results.push(checkScore("Accessibility  ", a11yScore, t.accessibility));
  results.push(checkScore("Best Practices ", bpScore, t["best-practices"]));
  results.push(checkScore("SEO            ", seoScore, t.seo));

  // Core Web Vitals desde el reporte LH
  const audits = lhr.audits;
  const lcpMs = audits["largest-contentful-paint"]?.numericValue ?? null;
  const clsVal = audits["cumulative-layout-shift"]?.numericValue ?? null;
  const tbtMs = audits["total-blocking-time"]?.numericValue ?? null;
  const speedIdxMs = audits["speed-index"]?.numericValue ?? null;

  results.push("", `${c.bold}Core Web Vitals (lab):${c.reset}`);

  if (lcpMs !== null) {
    const ok = lcpMs <= t.lcp;
    if (ok) passed++; else failed++;
    results.push(
      ok
        ? pass(`LCP: ${msColor(Math.round(lcpMs), t.lcp)} (máx ${t.lcp} ms)`)
        : fail(`LCP: ${msColor(Math.round(lcpMs), t.lcp)} (máx ${t.lcp} ms)`)
    );
  }

  if (clsVal !== null) {
    const ok = clsVal <= t.cls;
    if (ok) passed++; else failed++;
    results.push(
      ok
        ? pass(`CLS: ${clsColor(clsVal, t.cls)} (máx ${t.cls})`)
        : fail(`CLS: ${clsColor(clsVal, t.cls)} (máx ${t.cls})`)
    );
  }

  if (tbtMs !== null) {
    const ok = tbtMs <= t.tbt;
    if (ok) passed++; else failed++;
    results.push(
      ok
        ? pass(`TBT (proxy INP): ${msColor(Math.round(tbtMs), t.tbt)} (máx ${t.tbt} ms)`)
        : fail(`TBT (proxy INP): ${msColor(Math.round(tbtMs), t.tbt)} (máx ${t.tbt} ms)`)
    );
    if (tbtMs > t.tbt) {
      results.push(
        warn(
          `TBT alto indica posible INP lento (target INP ≤ ${t.inp} ms). ` +
          `Revisá scripts bloqueantes en el thread principal.`
        )
      );
    }
  }

  // Auditorías de imágenes y estructura
  results.push("", `${c.bold}Imágenes y assets:${c.reset}`);

  const modernFormats = audits["uses-webp-images"] ?? audits["modern-image-formats"];
  if (modernFormats) {
    const ok = modernFormats.score === 1 || modernFormats.score === null;
    if (ok) passed++; else failed++;
    results.push(
      ok
        ? pass("Formatos modernos (WebP/AVIF): OK")
        : fail(
            `Formatos modernos: hay imágenes sin WebP/AVIF → ` +
            `${modernFormats.details?.items?.length ?? "?"} elementos`
          )
    );
  }

  const imgSizeAudit = audits["uses-responsive-images"];
  if (imgSizeAudit) {
    const ok = imgSizeAudit.score === 1 || imgSizeAudit.score === null;
    if (ok) passed++; else failed++;
    results.push(
      ok
        ? pass("Imágenes responsivas: OK")
        : fail(
            `Imágenes sobredimensionadas: ` +
            `${imgSizeAudit.details?.items?.length ?? "?"} imágenes`
          )
    );
  }

  const imgAspect = audits["unsized-images"];
  if (imgAspect) {
    const ok = imgAspect.score === 1 || imgAspect.score === null;
    if (ok) passed++; else failed++;
    results.push(
      ok
        ? pass("Imágenes con width/height definidos: OK")
        : fail(
            `Imágenes sin dimensiones (riesgo CLS): ` +
            `${imgAspect.details?.items?.length ?? "?"} imágenes`
          )
    );
  }

  const lazyLoad = audits["offscreen-images"];
  if (lazyLoad) {
    const savings = lazyLoad.details?.overallSavingsBytes ?? 0;
    const ok = lazyLoad.score === 1 || lazyLoad.score === null || savings < 50000;
    if (ok) passed++; else failed++;
    results.push(
      ok
        ? pass("Lazy loading off-screen: OK")
        : fail(
            `Imágenes fuera del fold cargando eagerly: ` +
            `${Math.round(savings / 1024)} KB ahorrables`
          )
    );
  }

  // SEO técnico
  results.push("", `${c.bold}SEO técnico:${c.reset}`);

  const metaDesc = audits["meta-description"];
  if (metaDesc) {
    const ok = metaDesc.score === 1;
    if (ok) passed++; else failed++;
    results.push(ok ? pass("Meta description presente") : fail("Meta description ausente"));
  }

  const docTitle = audits["document-title"];
  if (docTitle) {
    const ok = docTitle.score === 1;
    if (ok) passed++; else failed++;
    results.push(ok ? pass("Title tag presente") : fail("Title tag ausente"));
  }

  const canonical = audits["canonical"];
  if (canonical) {
    const ok = canonical.score === 1 || canonical.score === null;
    if (ok) passed++; else failed++;
    results.push(ok ? pass("Canonical correcto") : fail("Canonical incorrecto o ausente"));
  }

  const hreflang = audits["hreflang"];
  const robotsTxt = audits["robots-txt"];
  if (robotsTxt) {
    const ok = robotsTxt.score === 1 || robotsTxt.score === null;
    results.push(ok ? pass("robots.txt válido") : warn("robots.txt con problema"));
  }

  const crawlAnchors = audits["crawlable-anchors"];
  if (crawlAnchors) {
    const ok = crawlAnchors.score === 1 || crawlAnchors.score === null;
    if (ok) passed++; else failed++;
    results.push(
      ok
        ? pass("Links rastreables: OK")
        : fail(`Links no rastreables: ${crawlAnchors.details?.items?.length ?? "?"} encontrados`)
    );
  }

  const tapTargets = audits["tap-targets"];
  if (tapTargets) {
    const ok = tapTargets.score === 1 || tapTargets.score === null || tapTargets.score >= 0.9;
    if (ok) passed++; else failed++;
    results.push(
      ok
        ? pass("Tap targets (mobile) adecuados")
        : fail(`Tap targets demasiado pequeños: ${tapTargets.details?.items?.length ?? "?"} elementos`)
    );
  }

  // Viewport
  const viewport = audits["viewport"];
  if (viewport) {
    const ok = viewport.score === 1;
    if (ok) passed++; else failed++;
    results.push(ok ? pass("Meta viewport configurado") : fail("Meta viewport faltante"));
  }

  // Render blocking
  results.push("", `${c.bold}Carga y bloqueo:${c.reset}`);

  const renderBlock = audits["render-blocking-resources"];
  if (renderBlock) {
    const savings = renderBlock.details?.overallSavingsMs ?? 0;
    const ok = savings < 500;
    if (ok) passed++; else failed++;
    results.push(
      ok
        ? pass(`Recursos bloqueantes: ${Math.round(savings)} ms de ahorro posible`)
        : fail(`Recursos bloqueantes: ${Math.round(savings)} ms de retraso detectado`)
    );
  }

  const unusedJs = audits["unused-javascript"];
  if (unusedJs) {
    const savings = unusedJs.details?.overallSavingsBytes ?? 0;
    const ok = savings < 100 * 1024; // < 100 KB
    results.push(
      ok
        ? pass(`JS no usado: ${Math.round(savings / 1024)} KB`)
        : warn(`JS no usado: ${Math.round(savings / 1024)} KB (idealmente < 100 KB)`)
    );
  }

  const unusedCss = audits["unused-css-rules"];
  if (unusedCss) {
    const savings = unusedCss.details?.overallSavingsBytes ?? 0;
    results.push(
      savings < 50 * 1024
        ? pass(`CSS no usado: ${Math.round(savings / 1024)} KB`)
        : warn(`CSS no usado: ${Math.round(savings / 1024)} KB (idealmente < 50 KB)`)
    );
  }

  // LCP element info
  const lcpEl = audits["largest-contentful-paint-element"];
  if (lcpEl?.details?.items?.length) {
    const el = lcpEl.details.items[0];
    const elStr = el?.node?.snippet ?? el?.node?.nodeLabel ?? "(desconocido)";
    results.push("", info(`Elemento LCP detectado: ${elStr.substring(0, 120)}`));
  }

  // Resumen
  const total = passed + failed;
  const pct = total > 0 ? Math.round((passed / total) * 100) : 0;
  const statusColor = failed === 0 ? c.bgGreen : failed <= 3 ? c.yellow : c.bgRed;

  results.push(
    "",
    `${c.bold}${statusColor} Resultado: ${passed}/${total} checks pasados (${pct}%) ${c.reset}`,
    ""
  );

  return { lines: results, passed, failed, total, perfScore, seoScore, lcpMs, clsVal, tbtMs };
}

// ─── Checklist manual ─────────────────────────────────────────────────────────

function printManualChecklist() {
  console.log(header("Checklist manual — Validar en producción con PageSpeed"));
  const items = [
    "[ ] Lighthouse Performance mobile: 85+ (strict pages: 90+)",
    "[ ] Lighthouse SEO: 95+ (strict pages: 100)",
    "[ ] LCP en producción: ≤ 2.5s (strict: ≤ 2.0s)",
    "[ ] CLS en producción: ≤ 0.1 (strict: ≤ 0.05)",
    "[ ] INP en producción: ≤ 200ms (strict: ≤ 150ms)",
    "[ ] Imagen hero en WebP o AVIF",
    "[ ] Imagen hero ≤ 350 KB en mobile",
    "[ ] Hero con fetchpriority=high y loading=eager",
    "[ ] Imágenes de servicios/obras en WebP/AVIF con lazy loading",
    "[ ] Todas las imágenes con width/height o aspect-ratio",
    "[ ] Sin layout shift visible al cargar",
    "[ ] CTA arriba del fold (sin scroll)",
    "[ ] WhatsApp FAB visible y funcional",
    "[ ] Formulario funcional y corto",
    "[ ] Formulario con campo de servicio, ubicación y foto/plano",
    "[ ] Cada página con title único",
    "[ ] Cada página con meta description única",
    "[ ] Un solo H1 por página",
    "[ ] H1 visible sin JS",
    "[ ] Canonical correcto en cada página",
    "[ ] Servicios enlazan a URLs reales (/servicios/cielo-raso, etc.)",
    "[ ] No hay scroll horizontal en mobile (390px)",
    "[ ] Botones con tap target ≥ 48px en mobile",
    "[ ] Menú mobile responde < 100ms",
    "[ ] Schema básico implementado (Organization / LocalBusiness)",
    "[ ] Sitemap actualizado y enviado a Search Console",
    "[ ] Validado en PageSpeed Insights con URL de producción",
  ];
  items.forEach((item) => console.log(`  ${item}`));
  console.log();
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  const { baseUrl, page: singlePage } = parseArgs();

  console.log(header(`VIPAR — Suite de performance (${new Date().toLocaleString()})`));
  console.log(info(`Base URL: ${c.bold}${baseUrl}${c.reset}`));
  console.log(info(`Modo: mobile simulado (Moto G4 — 4G lenta, CPU x4 throttle)`));
  console.log(
    warn(
      `Esto es Lighthouse de laboratorio. El criterio definitivo es PageSpeed Insights en producción.`
    )
  );

  const pagesToTest = singlePage
    ? PAGES.filter((p) => p.path === singlePage)
    : PAGES;

  if (pagesToTest.length === 0) {
    console.error(fail(`Página "${singlePage}" no está en la lista de páginas configuradas.`));
    console.log(info(`Páginas disponibles: ${PAGES.map((p) => p.path).join(", ")}`));
    process.exit(1);
  }

  mkdirSync(REPORTS_DIR, { recursive: true });

  const summary = [];

  for (const pg of pagesToTest) {
    const url = `${baseUrl}${pg.path}`;
    const slug = pg.path.replace(/\//g, "-").replace(/^-/, "") || "home";
    const reportPath = join(REPORTS_DIR, `${slug}.json`);

    console.log(header(`${pg.label}  [${pg.level.toUpperCase()}]  →  ${url}`));
    console.log(info(`Corriendo Lighthouse... (puede tardar 30-60 seg)`));

    let lhr;
    try {
      lhr = await runLighthouse(url, reportPath);
    } catch (err) {
      console.error(fail(`No se pudo auditar ${url}: ${err.message}`));
      if (err.message.includes("ECONNREFUSED")) {
        console.error(
          warn(
            `Servidor no encontrado en ${baseUrl}. ` +
            `Asegurate de correr "pnpm preview" o "pnpm dev" antes.`
          )
        );
      }
      summary.push({ label: pg.label, path: pg.path, error: err.message });
      continue;
    }

    const result = validateResult(lhr, pg.level, pg.label);
    result.lines.forEach((line) => console.log(line));

    console.log(info(`Reporte guardado en: perf-reports/${slug}.json`));

    summary.push({
      label: pg.label,
      path: pg.path,
      level: pg.level,
      passed: result.passed,
      failed: result.failed,
      total: result.total,
      perfScore: result.perfScore,
      seoScore: result.seoScore,
      lcpMs: result.lcpMs ? Math.round(result.lcpMs) : null,
      clsVal: result.clsVal ? result.clsVal.toFixed(3) : null,
      tbtMs: result.tbtMs ? Math.round(result.tbtMs) : null,
    });
  }

  // ─── Resumen global ──────────────────────────────────────────────────────────
  console.log(header("Resumen global"));
  console.log(
    `${"Página".padEnd(28)} ${"Nivel".padEnd(10)} ${"Perf".padEnd(6)} ${"SEO".padEnd(6)} ${"LCP".padEnd(10)} ${"CLS".padEnd(8)} ${"TBT".padEnd(10)} Checks`
  );
  console.log("─".repeat(95));

  let totalPassed = 0;
  let totalFailed = 0;
  let anyFailed = false;

  for (const r of summary) {
    if (r.error) {
      console.log(`${r.label.padEnd(28)} ${c.red}ERROR: ${r.error.substring(0, 50)}${c.reset}`);
      anyFailed = true;
      continue;
    }

    const t = THRESHOLDS[r.level];
    const perfOk = r.perfScore >= t.performance;
    const seoOk = r.seoScore >= t.seo;
    const lcpOk = r.lcpMs !== null && r.lcpMs <= t.lcp;
    const clsOk = r.clsVal !== null && parseFloat(r.clsVal) <= t.cls;
    const tbtOk = r.tbtMs !== null && r.tbtMs <= t.tbt;
    const pageOk = perfOk && seoOk && lcpOk && clsOk && tbtOk && r.failed === 0;

    if (!pageOk) anyFailed = true;
    totalPassed += r.passed;
    totalFailed += r.failed;

    const statusIcon = pageOk ? `${c.green}✔${c.reset}` : `${c.red}✘${c.reset}`;

    console.log(
      `${statusIcon} ${r.label.padEnd(26)} ` +
      `${r.level.padEnd(10)} ` +
      `${(perfOk ? c.green : c.red) + String(r.perfScore).padEnd(5) + c.reset} ` +
      `${(seoOk ? c.green : c.red) + String(r.seoScore).padEnd(5) + c.reset} ` +
      `${(lcpOk ? c.green : c.red) + (r.lcpMs ? `${r.lcpMs}ms` : "?").padEnd(9) + c.reset} ` +
      `${(clsOk ? c.green : c.red) + (r.clsVal ?? "?").padEnd(7) + c.reset} ` +
      `${(tbtOk ? c.green : c.red) + (r.tbtMs ? `${r.tbtMs}ms` : "?").padEnd(9) + c.reset} ` +
      `${r.passed}/${r.total}`
    );
  }

  console.log("─".repeat(95));
  console.log(
    `Total checks: ${c.green}${totalPassed} passed${c.reset} / ${c.red}${totalFailed} failed${c.reset}`
  );

  if (anyFailed) {
    console.log(
      `\n${c.bgRed}${c.bold} ✘ Suite FALLIDA — hay páginas que no cumplen el criterio mínimo ${c.reset}\n`
    );
  } else {
    console.log(
      `\n${c.bgGreen}${c.bold} ✔ Suite PASADA — todas las páginas cumplen el criterio mínimo ${c.reset}\n`
    );
  }

  printManualChecklist();

  process.exit(anyFailed ? 1 : 0);
}

main().catch((err) => {
  console.error(`\n${c.red}Error inesperado:${c.reset}`, err);
  process.exit(1);
});
