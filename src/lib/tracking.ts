import { clearAttribution, normalizeContactEvent, resolveAttribution, safePageUrl, sanitizeAnalyticsProperties } from "./analytics-context.ts";
import { findContactService, serviceFromPath } from "./service-context.ts";

const CTA_LOCATIONS: Record<string, string> = {
  footer: "footer_cta", header_primary: "header_cta", home_hero_primary: "hero_cta",
  home_hero_secondary: "hero_cta", legacy_home_hero_primary: "hero_cta",
  legacy_home_hero_secondary: "hero_cta", obra_hero_primary: "hero_cta", about_primary: "hero_cta",
  about_secondary: "final_cta", home_contact_info: "final_cta", contact_form_alt: "contact_form",
  carpinteria_aluminio_hero: "service_cta", box_bano_hero: "service_cta",
  cielo_raso_hero: "service_cta", mamparas_divisorias_hero: "service_cta", hero: "service_cta",
  aluminum_systems_card: "service_cta", services_hub_quoting: "services_hub_cta",
};

export function createPageViewGate() {
  const sent = new Set<string>();
  return (key: string, send: () => boolean) => {
    if (sent.has(key) || !send()) return false;
    sent.add(key);
    return true;
  };
}

export function initializeTracking() {
  if (window.__viparTrackingInitialized) return;
  window.__viparTrackingInitialized = true;
  const enabled = ["vipar.com.py", "www.vipar.com.py"].includes(window.location.hostname);
  let gate = createPageViewGate();
  let consent = false;
  let currentBody: HTMLElement | null = null;
  let gaConfigured = false;
  let pendingPosthog: Array<[string, Record<string, unknown>]> = [];
  const storage = (kind: "localStorage" | "sessionStorage") => {
    try { return window[kind]; } catch { return undefined; }
  };
  const posthogReady = () => Boolean(window.__viparPosthogReady && window.posthog?.capture);

  function context(extra: Record<string, unknown> = {}) {
    const service = findContactService(String(extra.service_slug || extra.service_name || document.body.dataset.serviceName || ""));
    return sanitizeAnalyticsProperties({
      ...extra,
      ...resolveAttribution({ url: new URL(window.location.href), referrer: document.referrer,
        local: storage("localStorage"), session: storage("sessionStorage"), consent: consent && enabled }),
      page_path: window.location.pathname, page_title: document.title,
      page_type: document.body.dataset.pageType,
      service_name: service?.name, service_slug: service?.slug,
      device_type: /iPad|Tablet|Android(?!.*Mobile)/i.test(navigator.userAgent) ? "tablet" :
        /Mobi|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
      measurement_version: "2",
    });
  }

  function sendPosthog(name: string, payload: Record<string, unknown>) {
    if (!enabled || !consent || !posthogReady()) return false;
    window.posthog?.capture(name, payload);
    return true;
  }

  function configureGa() {
    const measurementId = document.body.dataset.measurementId;
    if (gaConfigured || !enabled || !consent || !measurementId || !window.gtag) return;
    window.gtag("config", measurementId, {
      send_page_view: false,
      page_location: safePageUrl(window.location.href, true),
      page_referrer: safePageUrl(document.referrer),
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    gaConfigured = true;
  }

  function measurePage() {
    if (!enabled || !consent) return;
    configureGa();
    const payload = context();
    const pageProperties = {
      ...payload, page_location: safePageUrl(window.location.href, true),
      page_referrer: safePageUrl(document.referrer),
    };
    gate("ga-page", () => {
      if (!gaConfigured || !window.gtag) return false;
      window.gtag("event", "page_view", pageProperties);
      return true;
    });
    gate("ph-page", () => sendPosthog("$pageview", {
      ...payload, $current_url: pageProperties.page_location, $referrer: pageProperties.page_referrer,
    }));
    if (document.body.dataset.pageType === "service") {
      gate("ga-service", () => {
        if (!gaConfigured || !window.gtag) return false;
        window.gtag("event", "service_page_viewed", payload);
        return true;
      });
      gate("ph-service", () => sendPosthog("service_page_viewed", payload));
    }
  }

  window.viparLeadContext = context;
  window.viparTrack = (rawName, extra = {}) => {
    if (!enabled || !consent) return false;
    const name = normalizeContactEvent(rawName);
    // Old lead/form aliases cannot generate additional contact conversions.
    if (["lead_email_captured", "form_submit"].includes(name)) return false;
    const payload = context(extra);
    if (window.gtag) window.gtag("event", name, {
      ...payload, page_location: safePageUrl(window.location.href, true), page_referrer: safePageUrl(document.referrer),
    });
    if (!sendPosthog(name, payload)) {
      pendingPosthog.push([name, payload]);
      pendingPosthog = pendingPosthog.slice(-50);
    }
    return true;
  };
  window.viparBuildWhatsappUrl = (href) => href;

  function applyConsent() {
    try { consent = JSON.parse(storage("localStorage")?.getItem("vipar_consent_v1") || "null")?.analytics === true; }
    catch { consent = false; }
    // This also covers browsers where saving the preference is blocked.
    if (typeof window.__viparAnalyticsConsent === "boolean") consent = window.__viparAnalyticsConsent;
    if (!consent) {
      pendingPosthog = [];
      clearAttribution(storage("localStorage"), storage("sessionStorage"));
      return;
    }
    measurePage();
  }

  window.addEventListener("vipar:consent-changed", applyConsent);
  window.addEventListener("vipar:posthog-ready", () => {
    measurePage();
    if (consent) for (const [name, payload] of pendingPosthog) sendPosthog(name, payload);
    pendingPosthog = [];
  });

  function pageLoaded() {
    if (currentBody === document.body) return;
    currentBody = document.body;
    gate = createPageViewGate();
    applyConsent();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", pageLoaded, { once: true });
  else pageLoaded();
  document.addEventListener("astro:page-load", pageLoaded);

  document.addEventListener("click", (event) => {
    const anchor = event.target instanceof Element ? event.target.closest("a") : null;
    if (!(anchor instanceof HTMLAnchorElement)) return;
    const href = anchor.getAttribute("href") || "";
    let url: URL;
    try { url = new URL(href, window.location.origin); } catch { return; }
    const service = findContactService(anchor.dataset.serviceName || document.body.dataset.serviceName || "") || serviceFromPath(window.location.pathname);
    if (url.origin === window.location.origin && url.pathname === "/contacto/" && service && !url.searchParams.has("servicio")) {
      url.searchParams.set("servicio", service.slug);
      anchor.href = url.toString();
    }
    const isWhatsapp = url.hostname === "wa.me" || url.hostname === "api.whatsapp.com";
    const rawName = anchor.dataset.trackEvent ||
      (href.startsWith("tel:") ? "phone_click" : href.startsWith("mailto:") ? "email_click" : "");
    const name = isWhatsapp ? "whatsapp_handoff" : normalizeContactEvent(rawName);
    if (!name) return;
    const rawLocation = anchor.dataset.ctaLocation || anchor.closest<HTMLElement>("[data-cta-location]")?.dataset.ctaLocation || "";
    window.viparTrack?.(name, {
      cta_location: CTA_LOCATIONS[rawLocation] || rawLocation || "unknown",
      service_name: service?.name,
      legacy_event_name: rawName && rawName !== name ? rawName : undefined,
      whatsapp_message_type: isWhatsapp ? anchor.dataset.whatsappMessageType || (url.searchParams.has("text") ? "prefilled" : "generic") : undefined,
    });
  });
}
