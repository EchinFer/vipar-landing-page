# VIPAR Unified Measurement Rollout

## Implemented in code
- `whatsapp_click` is now the canonical WhatsApp conversion event across the site.
- `service_page_viewed` is emitted centrally for every service landing through `Layout.astro`.
- WhatsApp links are enriched client-side with landing, source, medium, campaign, CTA location, form ID, and email when available.
- Service hub and legacy WhatsApp CTA names are normalized to a shared taxonomy.
- Legacy service slugs now redirect to the current canonical URLs:
  - `/servicios/mampara-divisoria/` -> `/servicios/mamparas-divisorias/`
  - `/servicios/fachada/` -> `/servicios/fachadas/`
  - `/servicios/ventana/` -> `/servicios/ventanas/`

## Manual GA4 follow-up
- Mark these events as `Key events` in GA4:
  - `whatsapp_click`
  - `form_submit`
  - `lead_email_captured`
- Validate in DebugView that these properties arrive consistently:
  - `page_path`
  - `page_type`
  - `service_name`
  - `cta_location`
  - `device_type`
  - `lead_source`
  - `lead_medium`
  - `campaign`
  - `form_id`

## Manual PostHog follow-up
- Repair any form funnel that still starts on `form_start`.
- Preferred funnels:
  - `service_page_viewed -> whatsapp_click`
  - `form_view -> lead_email_captured -> form_submit -> whatsapp_click`
- Recommended breakdowns:
  - `service_name`
  - `cta_location`
  - `page_type`
  - `device_type`
  - `form_id`

## QA checklist
- Confirm every service page emits one `service_page_viewed` on load.
- Confirm WhatsApp CTAs no longer create fragmented primary events like `whatsapp_service_click` or `whatsapp_fab_click`.
- Confirm both `vipar-home-form` and `vipar-contact-form` emit:
  - `form_view`
  - `form_start`
  - `lead_email_captured`
  - `form_submit`
  - `whatsapp_click`
- Confirm `cta_location` does not accumulate meaningful traffic in `unknown`.
