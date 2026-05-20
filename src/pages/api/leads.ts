import type { APIRoute } from "astro";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  message?: string;
  source?: string;
  page?: string;
  page_path?: string;
  page_title?: string;
  page_type?: string;
  service_name?: string;
  cta_location?: string;
  lead_source?: string;
  lead_medium?: string;
  campaign?: string;
  device_type?: string;
  website?: string;
  form_started_at?: string;
  captcha_a?: string;
  captcha_b?: string;
  captcha_answer?: string;
  file_upload_attempt?: string;
};

type RateLimitEntry = {
  count: number;
  firstSeenAt: number;
  lastSeenAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_MIN_INTERVAL_MS = 15 * 1000;
const MIN_FORM_FILL_MS = 3 * 1000;

function jsonResponse(body: unknown, init?: ResponseInit) {
  return new Response(JSON.stringify(body), {
    status: init?.status ?? 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...(init?.headers ?? {}),
    },
  });
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "";
  return request.headers.get("x-real-ip") ?? "";
}

function getRequestHost(request: Request) {
  try {
    return new URL(request.url).hostname;
  } catch {
    return "";
  }
}

function normalizeValue(value: FormDataEntryValue | string | null | undefined) {
  if (typeof value === "string") return value.trim();
  return "";
}

async function readPayload(request: Request): Promise<LeadPayload> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as LeadPayload;
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const text = await request.text();
    const params = new URLSearchParams(text);
    return Object.fromEntries(params.entries()) as LeadPayload;
  }

  if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    const fileValue = form.get("file");
    return {
      name: normalizeValue(form.get("name")),
      email: normalizeValue(form.get("email")),
      phone: normalizeValue(form.get("phone")),
      city: normalizeValue(form.get("city")),
      message: normalizeValue(form.get("message")),
      source: normalizeValue(form.get("source")),
      page: normalizeValue(form.get("page")),
      page_path: normalizeValue(form.get("page_path")),
      page_title: normalizeValue(form.get("page_title")),
      page_type: normalizeValue(form.get("page_type")),
      service_name: normalizeValue(form.get("service_name")),
      cta_location: normalizeValue(form.get("cta_location")),
      lead_source: normalizeValue(form.get("lead_source")),
      lead_medium: normalizeValue(form.get("lead_medium")),
      campaign: normalizeValue(form.get("campaign")),
      device_type: normalizeValue(form.get("device_type")),
      website: normalizeValue(form.get("website")),
      form_started_at: normalizeValue(form.get("form_started_at")),
      captcha_a: normalizeValue(form.get("captcha_a")),
      captcha_b: normalizeValue(form.get("captcha_b")),
      captcha_answer: normalizeValue(form.get("captcha_answer")),
      file_upload_attempt:
        fileValue instanceof File && fileValue.size > 0 ? "true" : normalizeValue(form.get("file_upload_attempt")),
    };
  }

  try {
    return (await request.json()) as LeadPayload;
  } catch {
    return {};
  }
}

function shouldDropForEnvironment(request: Request) {
  if (import.meta.env.DEV) return true;
  const host = getRequestHost(request);
  return host === "localhost" || host === "127.0.0.1";
}

function isRateLimited(ip: string) {
  if (!ip) return false;

  const now = Date.now();

  for (const [key, entry] of rateLimitStore.entries()) {
    if (now - entry.lastSeenAt > RATE_LIMIT_WINDOW_MS) {
      rateLimitStore.delete(key);
    }
  }

  const current = rateLimitStore.get(ip);
  if (!current) {
    rateLimitStore.set(ip, {
      count: 1,
      firstSeenAt: now,
      lastSeenAt: now,
    });
    return false;
  }

  if (now - current.lastSeenAt < RATE_LIMIT_MIN_INTERVAL_MS) {
    current.count += 1;
    current.lastSeenAt = now;
    rateLimitStore.set(ip, current);
    return true;
  }

  if (now - current.firstSeenAt > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, {
      count: 1,
      firstSeenAt: now,
      lastSeenAt: now,
    });
    return false;
  }

  current.count += 1;
  current.lastSeenAt = now;
  rateLimitStore.set(ip, current);
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function isCaptchaValid(payload: LeadPayload) {
  const hasCaptchaFields =
    payload.captcha_a || payload.captcha_b || payload.captcha_answer;

  if (!hasCaptchaFields) return true;

  const a = Number(payload.captcha_a);
  const b = Number(payload.captcha_b);
  const answer = Number(payload.captcha_answer);

  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(answer)) {
    return false;
  }

  return a + b === answer;
}

function isFormFillTooFast(formStartedAt: string) {
  const startedAt = Number(formStartedAt);
  if (!Number.isFinite(startedAt)) return false;
  return Date.now() - startedAt < MIN_FORM_FILL_MS;
}

function buildForwardedMessage(message: string, payload: LeadPayload) {
  const contextLines = [
    payload.service_name ? `Servicio: ${payload.service_name}` : "",
    payload.page_path ? `Pagina: ${payload.page_path}` : "",
    payload.page_title ? `Titulo: ${payload.page_title}` : "",
    payload.cta_location ? `CTA: ${payload.cta_location}` : "",
    payload.lead_source || payload.lead_medium || payload.campaign
      ? `Origen: ${[payload.lead_source, payload.lead_medium, payload.campaign]
          .filter(Boolean)
          .join(" / ")}`
      : "",
    payload.device_type ? `Dispositivo: ${payload.device_type}` : "",
    payload.file_upload_attempt === "true" ? "Adjunto: si" : "",
  ].filter(Boolean);

  if (!contextLines.length) return message;
  return `${contextLines.join("\n")}\n\n${message}`;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const cmsApiBase = import.meta.env.CMS_API_URL as string | undefined;
    const wpUser = import.meta.env.WP_API_USER as string | undefined;
    const wpAppPassword = import.meta.env.WP_APP_PASSWORD as string | undefined;

    if (!cmsApiBase) {
      return jsonResponse(
        { ok: false, error: "Falta configurar CMS_API_URL" },
        { status: 500 }
      );
    }

    if (!wpUser || !wpAppPassword) {
      return jsonResponse(
        {
          ok: false,
          error:
            "Falta configurar WP_API_USER / WP_APP_PASSWORD en variables de entorno del servidor",
        },
        { status: 500 }
      );
    }

    const payload = await readPayload(request);

    if (shouldDropForEnvironment(request)) {
      return jsonResponse({ ok: true, dropped: "local_environment" }, { status: 202 });
    }

    if (payload.website) {
      return jsonResponse({ ok: true, dropped: "honeypot" }, { status: 202 });
    }

    if (!isCaptchaValid(payload)) {
      return jsonResponse(
        { ok: false, error: "Verificacion invalida. Probá nuevamente." },
        { status: 403 }
      );
    }

    if (payload.form_started_at && isFormFillTooFast(payload.form_started_at)) {
      return jsonResponse(
        { ok: false, error: "El envio fue demasiado rapido. Probá nuevamente." },
        { status: 400 }
      );
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return jsonResponse(
        { ok: false, error: "Demasiadas solicitudes. Intentá nuevamente más tarde." },
        { status: 429 }
      );
    }

    const name = normalizeValue(payload.name);
    const email = normalizeValue(payload.email);
    const phone = normalizeValue(payload.phone);
    const city = normalizeValue(payload.city);
    const message = normalizeValue(payload.message);
    const source = normalizeValue(payload.source) || "vipar-landing";
    const page = normalizeValue(payload.page);

    if (!name || !message || (!email && !phone)) {
      return jsonResponse(
        {
          ok: false,
          error: "Campos requeridos: name, message y al menos uno entre email o phone",
        },
        { status: 400 }
      );
    }

    const base = cmsApiBase.replace(/\/+$/, "");
    const wpEndpoint = `${base}/vipar/v1/leads`;
    const auth = Buffer.from(`${wpUser}:${wpAppPassword}`, "utf8").toString("base64");
    const enrichedMessage = buildForwardedMessage(message, payload);

    const wpResponse = await fetch(wpEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        city,
        message: enrichedMessage,
        source,
        page,
        ...(clientIp ? { client_ip: clientIp } : {}),
      }),
    });

    const text = await wpResponse.text();
    let wpBody: unknown = null;
    try {
      wpBody = text ? JSON.parse(text) : null;
    } catch {
      wpBody = text;
    }

    if (!wpResponse.ok) {
      return jsonResponse(
        {
          ok: false,
          error: "WordPress rechazo la solicitud",
          status: wpResponse.status,
          details: wpBody,
        },
        { status: 502 }
      );
    }

    return jsonResponse({ ok: true, wp: wpBody }, { status: 200 });
  } catch (error) {
    return jsonResponse(
      { ok: false, error: "Error interno", details: String(error) },
      { status: 500 }
    );
  }
};
