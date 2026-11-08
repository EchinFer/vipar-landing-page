# Pendientes

No frenan la web. No se publican montos mientras estos huecos sigan vacíos.

## Lo que dicen los datos (agosto a noviembre de 2026)

Los archivos están en `docs/seo/datos-2026-11-07/`.

- Buena parte de las consultas piden precio: "cielo raso pvc precio m2 paraguay", "precio box de baño", "costo mamparas". Hoy las notas de precio explican de qué depende el monto, pero no dan un número. Mientras VIPAR no pase rangos, esa búsqueda queda a medias y otro sitio con números puede ganar el clic.
- "vidrieria asuncion" y "vidrieria cerca de mi" llegan a la home. "Cerca de mí" se gana sobre todo con la ficha de Google Maps (Perfil de Empresa), no con la web. No sabemos si VIPAR tiene una.
- Entre febrero y mayo de 2026 Search Console casi no registra clics. No se sabe por qué (pudo ser un cambio de sitio, de dominio o de indexación). Antes de publicar conviene saberlo, porque una migración mal hecha puede repetirlo.
- El 79 % de las sesiones son en celular, y el CTR en celular (2,5 %) es la mitad que en computadora (5 %).

## Para VIPAR, cuando haya un minuto

```
Hola. Para la web nueva, tres líneas:

1. Box de cristal 8 mm, 0,90 × 1,90, Gran Asunción, con instalación: de Gs. ____ a ____
2. Cielo raso por m², con instalación, de Gs. ____ a ____ en PVC, ____ a ____ en yeso o Durlock, ____ a ____ desmontable
3. Mampara divisoria de cristal por m², con instalación: de Gs. ____ a ____
4. ¿Tienen ficha de VIPAR en Google Maps? ¿Quién la maneja?
5. ¿Publico fotos de Hiper Luisitos y del peaje? Sí / No

El precio final se cierra en la medición.
```

Los rangos se cargan en `src/lib/pedido.ts`, en el objeto `precios`. Hoy están en `null` y la pantalla no muestra un monto. Si alguien carga números de prueba, tiene que marcar `ejemplo: true`. Con esa marca, la interfaz y el WhatsApp dicen `PRECIO DE EJEMPLO`. No se publica así.

Hoy `precios` solo tiene lugar para box y ventana. Los rangos por m² de cielo raso y mamparas necesitan un cambio chico en `rangoDe` cuando lleguen, y conviene sumarlos también a las notas de "cuánto cuesta".

## Fotos

Esta pasada usa las fotos que ya estaban en vipar.com.py.

Dos fichas quedaron sin foto porque el sitio anterior mostraba la de otra obra:

- Residencia San Lorenzo usaba una foto de Recoleta.
- Oficinas Itaú usaban una foto de la Cooperativa Medalla Milagrosa.

Hiper Luisitos, el peaje y el álbum nuevo no entraron. Hace falta el permiso de la pregunta 5.

## Dominio

No está confirmado quién administra vipar.com.py ni el hosting. No se tocó el DNS.

## Fotos de baja resolución

La foto de portada de `/servicios/box-de-bano/` viene del sitio anterior y se ve pixelada en pantalla ancha. Hace falta el original.

## Marca

El logo completo del sitio actual es blanco, para fondo oscuro. Por eso la cabecera y el pie son azul marino (`#002046`). No tenemos una versión del logo completo en azul para fondo blanco; si existe, se puede cambiar.

## Diseño

- Esta pasada rehízo la home, las fichas de servicio, las listas de obras y las cabeceras. Los límites siguen siendo las fotos: varias son de baja resolución y se ven así en pantallas grandes (por ejemplo Sucursal Tigo en el cuadro grande de la home).
- No hay logos de clientes ni reseñas. Los logos piden permiso de cada empresa. Las reseñas de Google se pueden mostrar cuando VIPAR tenga ficha en Maps con reseñas.
- La cifra "33 obras" cuenta las fichas de esta web, no el total histórico de VIPAR. El sitio viejo decía "+1000 obras" y no hay forma de verificarlo.
