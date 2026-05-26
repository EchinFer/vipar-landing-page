# PostHog post-wizard report

The wizard has completed a full PostHog integration for the VIPAR landing page (Astro hybrid, static output). Here is a summary of all changes made:

**New files created:**
- `src/components/posthog.astro` — PostHog web snippet initialized via environment variables using `is:inline` to prevent Astro TypeScript processing errors.
- `.env` — `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` set (covered by `.gitignore`).

**Modified files:**
- `src/layouts/Layout.astro` — imported `PostHog` component and rendered `<PostHog />` inside `<head>` so every page initializes analytics automatically.
- `src/pages/servicios/box-de-bano.astro` — added `service_page_viewed` event on page load.
- `src/pages/servicios/ventanas.astro` — added `service_page_viewed` event on page load.
- `src/pages/servicios/mamparas-divisorias.astro` — added `service_page_viewed` event on page load.
- `src/pages/obras/[slug].astro` — added `obra_detail_viewed` event on page load, passing obra slug, title, and sector.
- `src/pages/servicios.astro` — added `service_filter_applied` event inside the existing filter change listener.
- `src/pages/obras.astro` — added `obra_filter_applied` event inside the existing filter change listener.

**Package installed:** `posthog-js@1.376.1`

---

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `service_page_viewed` | Fired when a user lands on a specific service detail page. Marks the top of the service-to-quote conversion funnel. | `src/pages/servicios/box-de-bano.astro`, `ventanas.astro`, `mamparas-divisorias.astro` |
| `obra_detail_viewed` | Fired when a user views an individual project (obra) detail page. Signals portfolio engagement before a quote request. | `src/pages/obras/[slug].astro` |
| `service_filter_applied` | Fired when a user applies a category filter on the services catalog page. Indicates which service categories attract the most interest. | `src/pages/servicios.astro` |
| `obra_filter_applied` | Fired when a user applies a category filter on the portfolio/obras page. Indicates which project types drive the most engagement. | `src/pages/obras.astro` |

*Note: `form_start`, `form_submit`, `whatsapp_click`, `phone_click`, `email_click`, and `file_upload_attempt` were already tracked via the existing `viparTrack` (gtag) integration and are also available in PostHog via autocapture.*

---

## Next steps

We've built a dashboard and five insights for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1630600)
- [Service page views by service](/insights/RciNXxPo) — bar chart of which service pages get the most traffic, broken down by service name.
- [Portfolio (obra) detail views](/insights/43qCBSHF) — daily trend of unique visitors engaging with individual project pages.
- [Service page → WhatsApp contact funnel](/insights/DVyUlZ0p) — core conversion funnel from service page view to WhatsApp click.
- [Contact form conversion funnel](/insights/9uKBnKYG) — drop-off analysis from form start to form submission.
- [Catalog filter interactions](/insights/ssNYq7aS) — how often visitors filter services vs. portfolio catalogs.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-astro-hybrid/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
