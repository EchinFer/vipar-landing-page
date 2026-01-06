import type { APIRoute } from "astro";

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
  // Best-effort: depends on hosting/proxy
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim();
  return request.headers.get("x-real-ip") ?? "";
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

    const contentType = request.headers.get("content-type") ?? "";

    let payload: {
      name?: string;
      email?: string;
      phone?: string;
      city?: string;
      message?: string;
      source?: string;
      page?: string;
    } = {};

    if (contentType.includes("application/json")) {
      payload = (await request.json()) as typeof payload;
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const text = await request.text();
      const params = new URLSearchParams(text);
      payload = {
        name: params.get("name") ?? undefined,
        email: params.get("email") ?? undefined,
        phone: params.get("phone") ?? undefined,
        city: params.get("city") ?? undefined,
        message: params.get("message") ?? undefined,
        source: params.get("source") ?? undefined,
        page: params.get("page") ?? undefined,
      };
    } else if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      const get = (key: string) => {
        const value = form.get(key);
        if (typeof value === "string") return value;
        return undefined;
      };
      payload = {
        name: get("name"),
        email: get("email"),
        phone: get("phone"),
        city: get("city"),
        message: get("message"),
        source: get("source"),
        page: get("page"),
      };
    } else {
      // Best-effort fallback: try JSON, then text.
      try {
        payload = (await request.json()) as typeof payload;
      } catch {
        const text = await request.text();
        try {
          payload = JSON.parse(text) as typeof payload;
        } catch {
          payload = {};
        }
      }
    }

    const name = (payload.name ?? "").toString().trim();
    const email = (payload.email ?? "").toString().trim();
    const phone = (payload.phone ?? "").toString().trim();
    const city = (payload.city ?? "").toString().trim();
    const message = (payload.message ?? "").toString().trim();
    const source = (payload.source ?? "vipar-landing").toString().trim();
    const page = (payload.page ?? "").toString().trim();

    if (!name || !email || !message) {
      return jsonResponse(
        {
          ok: false,
          error: "Campos requeridos: name, email, message",
          debug: {
            contentType,
            receivedKeys: Object.keys(payload ?? {}),
            hasName: Boolean(name),
            hasEmail: Boolean(email),
            hasMessage: Boolean(message),
          },
        },
        { status: 400 }
      );
    }

    // Construir URL destino (CMS_API_URL ya suele ser .../wp-json)
    const base = cmsApiBase.replace(/\/+$/, "");
    const wpEndpoint = `${base}/vipar/v1/leads`;

    const auth = Buffer.from(`${wpUser}:${wpAppPassword}`, "utf8").toString(
      "base64"
    );

    const clientIp = getClientIp(request);

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
        message,
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
          error: "WordPress rechazó la solicitud",
          status: wpResponse.status,
          details: wpBody,
        },
        { status: 502 }
      );
    }

    return jsonResponse({ ok: true, wp: wpBody }, { status: 200 });
  } catch (err) {
    return jsonResponse(
      { ok: false, error: "Error interno", details: String(err) },
      { status: 500 }
    );
  }
};
