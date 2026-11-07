# Pendientes

No frenan la web. No se publican montos mientras estos huecos sigan vacíos.

## Search Console (lo más importante antes de publicar)

Faltan `docs/seo/gsc-paginas.csv` y `docs/seo/gsc-consultas.csv`. Sin ellos:

- No se sabe qué consultas traen clics hoy, así que `seo-comparar` no puede avisar si alguna se perdió del título o del H1.
- Las seis notas del blog que redirigen (`box-de-bano-vidrio-vs-acrilico`, `como-elegir-box-de-bano-ideal`, `medidas-estandar-box-de-bano`, `mamparas-divisorias-oficinas`, `como-dividir-oficinas-sin-obras-mayores`, `como-elegir-cielo-raso`) se decidieron sin datos. Si alguna tiene clics, se reescribe en su URL y se saca de `redirects.mjs`.
- Las tres notas de "cuánto cuesta" (box, cielo raso, mamparas) se conservaron en su URL y se reescribieron sin montos. Esa elección fue por tipo de consulta, no por datos.

## Para VIPAR, cuando haya un minuto

```
Hola. Para la web nueva, tres líneas:

1. Box de cristal 8 mm, 0,90 × 1,90, Gran Asunción, con instalación: de Gs. ____ a ____
2. Ventana corrediza 1,20 × 1,10, misma zona, con instalación: de Gs. ____ a ____
3. ¿Publico fotos de Hiper Luisitos y del peaje? Sí / No

El precio final se cierra en la medición.
```

Los rangos se cargan en `src/lib/pedido.ts`, en el objeto `precios`. Hoy están en `null` y la pantalla no muestra un monto. Si alguien carga números de prueba, tiene que marcar `ejemplo: true`. Con esa marca, la interfaz y el WhatsApp dicen `PRECIO DE EJEMPLO`. No se publica así.

## Fotos

Esta pasada usa las fotos que ya estaban en vipar.com.py.

Dos fichas quedaron sin foto porque el sitio anterior mostraba la de otra obra:

- Residencia San Lorenzo usaba una foto de Recoleta.
- Oficinas Itaú usaban una foto de la Cooperativa Medalla Milagrosa.

Hiper Luisitos, el peaje y el álbum nuevo no entraron. Hace falta el permiso de la pregunta 3.

## Dominio

No está confirmado quién administra vipar.com.py ni el hosting. No se tocó el DNS.

## Fotos de baja resolución

La foto de portada de `/servicios/box-de-bano/` viene del sitio anterior y se ve pixelada en pantalla ancha. Hace falta el original.

## Marca

El logo completo del sitio actual es blanco, para fondo oscuro. Por eso la cabecera y el pie son azul marino (`#002046`). No tenemos una versión del logo completo en azul para fondo blanco; si existe, se puede cambiar.
