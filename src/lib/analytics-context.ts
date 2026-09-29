import { findContactService } from "./service-context.ts";

export const ATTRIBUTION_KEY = "vipar_attribution_v2";
export const SESSION_KEY = "vipar_session_attribution_v2";
export const SESSION_TIMEOUT_MS = 30 * 60 * 1000;
const FIRST_TOUCH_TTL_MS = 180 * 24 * 60 * 60 * 1000;

// No free-text contact fields, identifiers, complete link URLs or WhatsApp messages.
const SAFE_PROPERTIES = new Set([
  "page_path", "page_title", "page_type", "service_name", "service_slug", "device_type",
  "cta_location", "form_id", "form_source", "variant", "consultation_type", "has_email",
  "field", "error_type", "step_name", "entry_step", "selected_step", "visible_sections",
  "whatsapp_message_type", "legacy_event_name", "measurement_version", "service_preselected",
  "first_touch_source", "first_touch_medium", "first_touch_campaign", "first_touch_landing",
  "session_source", "session_medium", "session_campaign", "session_landing", "current_referrer",
  "obra_slug", "obra_category", "filter", "filter_name", "filter_value",
]);

export function safeAnalyticsText(value: unknown): string | undefined {
  if (typeof value !== "string" || !value.trim()) return undefined;
  let decoded = value;
  try { decoded = decodeURIComponent(value); } catch { /* Keep malformed text for screening. */ }
  // Defense in depth for emails or phone numbers accidentally placed in an allowed field.
  if (/@|\b\+?\d[\d\s().-]{6,}\d\b/.test(decoded)) return undefined;
  return value.slice(0, 100);
}

export function sanitizeAnalyticsProperties(properties: Record<string, unknown>) {
  const result: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(properties)) {
    if (!SAFE_PROPERTIES.has(key)) continue;
    if (typeof value === "boolean") result[key] = value;
    else if (typeof value === "number" && Number.isFinite(value)) result[key] = value;
    else {
      const safeValue = safeAnalyticsText(value);
      if (safeValue) result[key] = safeValue;
    }
  }
  const service = findContactService(String(result.service_slug || result.service_name || ""));
  if (service) {
    result.service_name = service.name;
    result.service_slug = service.slug;
  }
  return result;
}

export function safePageUrl(rawUrl: string, includeCampaign = false) {
  try {
    const url = new URL(rawUrl);
    const clean = new URL(url.pathname, url.origin);
    if (includeCampaign) {
      for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
        const value = safeAnalyticsText(url.searchParams.get(key));
        if (value) clean.searchParams.set(key, value);
      }
      // Keep anonymous ad-click identifiers so native GA4 paid attribution continues to work.
      for (const key of ["gclid", "dclid", "gbraid", "wbraid"]) {
        const value = url.searchParams.get(key);
        if (value && /^[a-zA-Z0-9_-]{1,250}$/.test(value)) clean.searchParams.set(key, value);
      }
    }
    return clean.toString();
  } catch { return ""; }
}

export interface Touch {
  source: string;
  medium: string;
  campaign?: string;
  landing: string;
}
interface FirstTouch { touch: Touch; createdAt: number }
interface SessionTouch { touch: Touch; lastActivity: number }
type SafeStorage = Pick<Storage, "getItem" | "setItem" | "removeItem"> | undefined;

function read<T>(storage: SafeStorage, key: string): T | undefined {
  try { return JSON.parse(storage?.getItem(key) || "null") || undefined; } catch { return undefined; }
}
function write(storage: SafeStorage, key: string, value: unknown) {
  try { storage?.setItem(key, JSON.stringify(value)); } catch { /* Storage can be unavailable. */ }
}
export function clearAttribution(local: SafeStorage, session: SafeStorage) {
  try { local?.removeItem(ATTRIBUTION_KEY); } catch { /* Blocked storage. */ }
  try { session?.removeItem(SESSION_KEY); } catch { /* Blocked storage. */ }
}
export function referrerHost(referrer: string) {
  try { return new URL(referrer).hostname.toLowerCase(); } catch { return ""; }
}

export function inferTouch(url: URL, referrer: string): Touch {
  const host = referrerHost(referrer);
  const ownHosts = new Set([url.hostname, "vipar.com.py", "www.vipar.com.py"]);
  const source = safeAnalyticsText(url.searchParams.get("utm_source"));
  const medium = safeAnalyticsText(url.searchParams.get("utm_medium"));
  const campaign = safeAnalyticsText(url.searchParams.get("utm_campaign"));
  const landing = url.pathname;
  if (source) return { source, medium: medium || "unknown", campaign, landing };
  if (url.searchParams.has("gclid") || url.searchParams.has("gbraid") || url.searchParams.has("wbraid")) {
    return { source: "google", medium: "cpc", campaign, landing };
  }
  if (!host) return { source: "direct", medium: "none", landing };
  // Consent granted after internal navigation cannot recover an unobserved acquisition.
  if (ownHosts.has(host)) return { source: "unattributed", medium: "unknown", landing };
  const engines: Array<[RegExp, string]> = [
    [/(^|\.)google\.[a-z]{2,3}(?:\.[a-z]{2})?$/, "google"], [/(^|\.)bing\.com$/, "bing"],
    [/(^|\.)duckduckgo\.com$/, "duckduckgo"], [/(^|\.)search\.yahoo\.com$/, "yahoo"],
  ];
  const engine = engines.find(([pattern]) => pattern.test(host));
  return { source: engine?.[1] || host, medium: engine ? "organic" : "referral", landing };
}

function isTouch(value: unknown): value is Touch {
  if (!value || typeof value !== "object") return false;
  const touch = value as Touch;
  return typeof touch.source === "string" && typeof touch.medium === "string" && typeof touch.landing === "string";
}

// This is consented browser attribution, independent of GA4's native channel grouping.
export function resolveAttribution({ url, referrer, local, session, now = Date.now(), consent }: {
  url: URL; referrer: string; local?: SafeStorage; session?: SafeStorage; now?: number; consent: boolean;
}) {
  const incoming = inferTouch(url, referrer);
  let first = consent ? read<FirstTouch>(local, ATTRIBUTION_KEY) : undefined;
  let current = consent ? read<SessionTouch>(session, SESSION_KEY) : undefined;
  if (!isTouch(first?.touch) || !Number.isFinite(first?.createdAt) || now - first!.createdAt >= FIRST_TOUCH_TTL_MS) {
    first = { touch: incoming, createdAt: now };
  }
  if (!isTouch(current?.touch) || !Number.isFinite(current?.lastActivity) || now - current!.lastActivity >= SESSION_TIMEOUT_MS) {
    current = { touch: incoming, lastActivity: now };
  } else { current!.lastActivity = now; }
  if (consent) {
    write(local, ATTRIBUTION_KEY, first);
    write(session, SESSION_KEY, current);
  }
  return {
    first_touch_source: first!.touch.source, first_touch_medium: first!.touch.medium,
    first_touch_campaign: first!.touch.campaign, first_touch_landing: first!.touch.landing,
    session_source: current!.touch.source, session_medium: current!.touch.medium,
    session_campaign: current!.touch.campaign, session_landing: current!.touch.landing,
    current_referrer: referrerHost(referrer),
  };
}

export function normalizeContactEvent(name: string) {
  return ["whatsapp_click", "whatsapp_fab_click", "whatsapp_service_click", "whatsapp_service_hub_click"]
    .includes(name) ? "whatsapp_handoff" : name;
}
