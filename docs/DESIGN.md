---
version: "alpha"
name: "VIPAR Architectural Systems"
description: "Sistema visual para una empresa paraguaya especializada en cristales templados, aluminio, cerramientos y terminaciones arquitectónicas para obras."
colors:
  primary: "#0F2A3D"
  secondary: "#5D6A72"
  tertiary: "#8FA7B3"
  accent: "#2F80A8"
  neutral: "#E7EAEC"
  surface: "#FFFFFF"
  surface-muted: "#F5F7F8"
  surface-strong: "#EEF2F4"
  on-surface: "#172027"
  on-surface-muted: "#5D6A72"
  background: "#FAFAF8"
  border: "#D9DEE2"
  border-strong: "#B8C2C8"
  success: "#2F6F4E"
  warning: "#A86E2F"
  error: "#B23A3A"
typography:
  headline-display:
    fontFamily: "Inter"
    fontSize: "56px"
    fontWeight: 720
    lineHeight: 1.02
    letterSpacing: "-0.045em"
  headline-lg:
    fontFamily: "Inter"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline-md:
    fontFamily: "Inter"
    fontSize: "30px"
    fontWeight: 680
    lineHeight: 1.16
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: "Inter"
    fontSize: "22px"
    fontWeight: 650
    lineHeight: 1.22
    letterSpacing: "-0.01em"
  body-lg:
    fontFamily: "Inter"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.58
  body-sm:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "0.03em"
  label-sm:
    fontFamily: "Inter"
    fontSize: "12px"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "0.06em"
rounded:
  none: "0px"
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
  3xl: "96px"
  4xl: "128px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "14px 22px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "12px 0px"
  card-service:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-project:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  input-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  badge:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "8px 12px"
---

# VIPAR Architectural Systems

## Overview

El sistema visual de VIPAR debe transmitir precisión técnica, experiencia en obra y confianza comercial. La estética debe sentirse arquitectónica: limpia, estructurada, sobria y orientada a proyectos reales.

La interfaz no debe parecer una plantilla genérica de construcción. Debe ordenar servicios concretos: cristales templados, aluminio, fachadas, mamparas, cielos rasos, puertas, ventanas y box de baño.

El objetivo principal de cada página es facilitar la solicitud de presupuesto.

## Colors

La paleta usa azul grafito como color principal para representar confianza técnica y solidez. Los fondos claros cálidos ayudan a que la web se sienta limpia y profesional. Los grises azulados conectan visualmente con vidrio, aluminio y arquitectura.

Usar `primary` para CTAs, navegación activa y titulares destacados. Usar `accent` solo para detalles pequeños, indicadores o links importantes. No abusar del azul claro.

## Typography

La tipografía debe ser sans serif, precisa y legible. Los titulares deben ser fuertes, compactos y directos. El cuerpo debe ser cómodo de leer, especialmente en secciones de servicios y procesos.

Evitar textos centrados extensos. Priorizar composición editorial con titulares a la izquierda y bloques escaneables.

## Layout

Usar grilla de 12 columnas en desktop. Contenedor máximo recomendado: 1200px. En mobile, usar una sola columna con CTAs visibles y cards apiladas.

El layout debe alternar secciones amplias con módulos compactos:
- Hero amplio.
- Servicios en grilla.
- Proyectos con imagen dominante.
- Proceso en timeline.
- Contacto con formulario claro.

Usar mucho whitespace. No llenar la pantalla con demasiados servicios al mismo nivel sin jerarquía.

## Elevation & Depth

La profundidad debe ser sutil. Preferir bordes finos sobre sombras fuertes. Las cards pueden tener sombra mínima o solo borde. El sitio debe sentirse arquitectónico y limpio, no pesado.

## Shapes

Usar radios suaves de 10px a 24px. Los botones deben tener radio medio. Las imágenes de proyectos pueden usar radio xl para sentirse premium sin volverse decorativas.

Evitar formas demasiado orgánicas o blobs. La geometría debe ser precisa.

## Components

Los botones primarios deben reservarse para “Solicitar presupuesto”. Los botones secundarios para “Ver servicios” o “Ver obras”.

Las cards de servicios deben incluir:
- nombre del servicio,
- descripción breve,
- CTA específico,
- posible imagen o detalle visual relacionado al material.

Las cards de proyecto deben incluir:
- imagen real,
- nombre del proyecto,
- ciudad/zona,
- tipo de servicio,
- CTA para cotizar algo similar.

El formulario debe ser claro, con campos agrupados y posibilidad de adjuntar imagen o plano.

## Do's and Don'ts

Do:
- Usar fotos reales de obras.
- Mostrar servicios con nombres concretos.
- Mantener CTAs claros.
- Priorizar presupuesto como acción principal.
- Usar grillas limpias y mucho espacio en blanco.
- Hacer que la Home explique rápido qué hace VIPAR.

Don't:
- No decir “líderes del mercado” sin prueba.
- No usar claims vacíos como “excelencia y compromiso”.
- No usar íconos genéricos de construcción en exceso.
- No convertir la Home en una lista interminable.
- No usar colores sin rol.
- No mezclar estilos visuales entre páginas.