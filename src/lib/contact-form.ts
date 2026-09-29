import { serviceForContact } from "./service-context.ts";

export function initializeContactForms() {
  document.querySelectorAll<HTMLFormElement>("form[data-smart-form]").forEach((form) => {
    if (form.dataset.initialized) return;
    form.dataset.initialized = "true";
    const formId = form.id;
    const email = form.querySelector<HTMLInputElement>('input[name="email"]');
    const serviceInput = form.querySelector<HTMLInputElement>('input[name="service"]');
    const consultationInput = form.querySelector<HTMLInputElement>('input[name="consultation_type"]');
    const message = document.getElementById(`${formId}-message`);
    const status = document.getElementById(`${formId}-status`);
    const preselected = serviceForContact(new URL(window.location.href), document.referrer);
    const values = { service: preselected?.name || "", consultation_type: "Presupuesto" };
    let started = false;
    const track = (name: string, extra: Record<string, unknown> = {}) => window.viparTrack?.(name, {
      ...extra, cta_location: form.dataset.variant === "home" ? "home_contact_form" : "contact_form",
      form_id: formId, form_source: form.dataset.formSource, variant: form.dataset.variant,
      service_name: values.service, consultation_type: values.consultation_type,
      service_preselected: Boolean(preselected), has_email: Boolean(email?.value.trim()),
    }) || false;

    function select(group: "service" | "consultation", value: string) {
      form.querySelectorAll<HTMLButtonElement>(`.option-btn[data-group="${group}"]`).forEach((button) => {
        const selected = button.dataset.option === value;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
      const chip = form.querySelector<HTMLElement>(`[data-summary-chip="${group}"]`);
      if (chip) {
        chip.textContent = value || "Consulta general";
        chip.classList.toggle("is-filled", Boolean(value));
      }
      if (group === "service" && serviceInput) serviceInput.value = value;
      if (group === "consultation" && consultationInput) consultationInput.value = value;
    }
    select("service", values.service);
    select("consultation", values.consultation_type);

    function start(entryStep: string) {
      if (!started) started = track("form_start", { entry_step: entryStep });
    }
    form.querySelectorAll<HTMLButtonElement>(".option-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const group = button.dataset.group === "service" ? "service" : "consultation";
        start(`${group}_selection`);
        const value = button.dataset.option || "";
        if (group === "service") values.service = value;
        else values.consultation_type = value;
        select(group, value);
        track(group === "service" ? "form_service_selected" : "form_consultation_selected", {
          selected_step: `${group}_selection`,
        });
      });
    });
    email?.addEventListener("input", () => start("email_optional"));

    function setStatus(type: string, text: string) {
      if (status) { status.hidden = false; status.dataset.state = type; }
      if (message) message.textContent = text;
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (status) status.hidden = true;
      start("submit");
      track("form_submit_attempt");
      const providedEmail = email?.value.trim() || "";
      if (email) email.value = providedEmail;
      if (form.querySelector<HTMLInputElement>('input[name="website"]')?.value) {
        setStatus("error", "No se pudo continuar. Probá de nuevo.");
        return;
      }
      if (!form.reportValidity()) {
        track("form_error", { field: "email", error_type: "invalid_email" });
        setStatus("error", "Revisá el email o dejalo vacío para continuar por WhatsApp.");
        return;
      }
      track("form_validated");
      const text = [
        "Hola VIPAR, quiero solicitar una consulta.",
        values.service ? `Me interesa: ${values.service}.` : "",
        `Tipo de consulta: ${values.consultation_type}.`,
        providedEmail ? `Email para presupuesto o documentación: ${providedEmail}.` : "",
        "Puedo enviar fotos, medidas o detalles por acá.",
      ].filter(Boolean).join("\n");
      const number = (form.dataset.whatsappNumber || "").replace(/\D/g, "");
      const href = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
      // Opening WhatsApp is contact intent; it cannot confirm message delivery or receipt.
      try {
        window.open(href, "_blank", "noopener,noreferrer");
      } catch {
        track("form_error", { field: "handoff", error_type: "navigation_failed" });
        setStatus("error", "No se pudo abrir WhatsApp. Usá el enlace a WhatsApp de esta página.");
        return;
      }
      track("whatsapp_handoff", { whatsapp_message_type: "smart_form" });
      setStatus("success", "Continuá en WhatsApp y enviá el mensaje para que VIPAR reciba tu consulta.");
      // Keep the choices so the user can retry without re-entering the context.
    });

    // A form/step impression requires visibility and consent, rather than mere rendering.
    const seen = new Set<Element>();
    const visible = new Set<Element>();
    const elements: Element[] = [form, ...form.querySelectorAll("[data-step-name]")];
    function measureVisible() {
      for (const element of visible) {
        if (seen.has(element)) continue;
        const sent = track(element === form ? "form_view" : "form_step_viewed",
          element === form ? {} : { step_name: (element as HTMLElement).dataset.stepName });
        if (sent) seen.add(element);
      }
    }
    if (typeof IntersectionObserver === "function") {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        measureVisible();
      }, { threshold: [0, 0.2] });
      elements.forEach((element) => observer.observe(element));
    }
    window.addEventListener("vipar:consent-changed", measureVisible);
  });
}
