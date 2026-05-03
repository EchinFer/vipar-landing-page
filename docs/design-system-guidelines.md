# Sistema Atómico VIPAR

- Fuente de verdad: `docs/DESIGN.md`.
- Tokens globales: `src/styles/design-system.css`.
- Primitives UI: `src/components/ui/*`.

## Reglas

1. No usar colores hardcoded en componentes/páginas; usar variables `--ds-*`.
2. No usar spacing arbitrario; usar escala `--ds-space-*`.
3. Padding horizontal estándar:
   - Mobile: `--ds-container-padding-mobile` (16px)
   - Desktop: `--ds-container-padding-desktop` (24px)
4. Botones deben usar variantes de sistema (`primary`, `secondary`, `ghost`).
5. Cards deben usar border/radius/shadow del sistema (`--ds-*`).
6. Evitar `style="..."` para diseño visual salvo casos excepcionales documentados.
