# Pendientes

No frenan la web.

## Lo que dicen los datos (agosto a noviembre de 2026)

Los archivos están en `docs/seo/datos-2026-11-07/`.

- Buena parte de las consultas piden precio: "cielo raso pvc precio m2 paraguay", "precio box de baño", "costo mamparas". Cielo raso y mamparas ya tienen precios por m² (ver abajo). Box de baño sigue sin número, y es la segunda página con más clics.
- "vidrieria asuncion" y "vidrieria cerca de mi" llegan a la home. "Cerca de mí" se gana sobre todo con la ficha de Google Maps (Perfil de Empresa), no con la web. La ficha existe: ver "Ficha de Google Maps" abajo.
- Entre febrero y mayo de 2026 Search Console casi no registra clics. Fue un problema del hosting, según VIPAR. El sitio recuperó y duplicó el tráfico después, pero muestra cuánto depende del hosting: el nuevo tiene que ser estable y conviene una alerta de caída (por ejemplo UptimeRobot, gratis) desde el primer día.
- El 79 % de las sesiones son en celular, y el CTR en celular (2,5 %) es la mitad que en computadora (5 %).

## Precios

VIPAR pasó precios por m² de cielo raso y mamparas de Eucatex el 8 de noviembre de 2026. Están en `src/lib/pedido.ts`, en `preciosM2`, y de ahí salen el armador, las fichas, las guías de precio y sus descripciones para Google. Para cambiar un precio se toca solo ese objeto; para cambiar el mes, `preciosVigencia`.

Antes de publicar, confirmar con VIPAR:

```
Hola. Antes de publicar los precios en la web, cuatro dudas:

1. Los precios por m², ¿incluyen material e instalación? ¿Incluyen IVA?
2. ¿Valen para todo el país o solo Gran Asunción? ¿Hay un mínimo de m²?
3. En yeso junta tomada pusiste la buña a 25 mil "el m2". ¿Es por metro lineal, como en Durlock?
4. ¿Qué diferencia hay entre Durlock (yeso cartón) y yeso junta tomada lisa? La web los muestra como dos opciones y el cliente va a preguntar por qué uno es más barato.

Y lo que falta:
5. Box de cristal 8 mm, 0,90 × 1,90, Gran Asunción, con instalación: de Gs. ____ a ____
6. Mampara de cristal templado y tabique de Durlock por m²: Gs. ____ y Gs. ____
7. ¿Quién maneja la ficha de VIPAR en Google Maps? (ver "Ficha de Google Maps")
8. ¿Publico fotos de Hiper Luisitos y del peaje? Sí / No
```

Cada precio publicado va con el aviso de `avisoPrecios` (en `pedido.ts`): son de referencia, pueden cambiar y los trabajos grandes se calculan con más datos por WhatsApp. Si se publica un precio nuevo en otra página, tiene que llevar ese aviso.

Los precios en guaraníes se desactualizan. Conviene revisarlos cada tres meses y cambiar `preciosVigencia` aunque no cambien, para que la web no muestre un mes viejo.

Los rangos de box y ventana se cargan en `precios`, en el mismo archivo. Hoy están en `null` y la pantalla no muestra un monto. Si alguien carga números de prueba, tiene que marcar `ejemplo: true`. Con esa marca, la interfaz y el WhatsApp dicen `PRECIO DE EJEMPLO`. No se publica así.

## Confianza: lo que solo puede aportar VIPAR

El diseño ya muestra obras reales, nombres de lugares donde se trabajó, precios con aviso y el showroom. Lo que más sumaría ahora no se puede diseñar:

- **Fotos de box de baño.** Es la segunda página con más clics y tiene solo 2 obras con foto. Con 6 a 10 fotos de baños terminados (aunque sean de celular, bien iluminadas y derechas), la ficha cambia.
- **Una foto del equipo o de la familia en el showroom.** Una cara genera más confianza que cualquier texto, y más en una empresa familiar.
- **Reseñas de Google.** La ficha tiene 24, pero la más nueva visible es de hace unos 4 años. Hace falta pedirles reseña a los clientes conformes (ver abajo).
- **Nombres en la franja "Algunas obras donde trabajamos".** Son obras que ya figuran en las fichas. Si VIPAR prefiere no nombrar alguna (por ejemplo, porque trabajó como subcontratista), se saca de `dondeTrabajamos` en `src/pages/index.astro`.
- **Garantía.** Si VIPAR da garantía de instalación o de herrajes, decirla con plazo concreto es una de las señales más fuertes. No se publica sin confirmar.

## Ficha de Google Maps

Ficha: https://maps.app.goo.gl/jw2H1smUUeKxwoqY6 (revisada el 8 de noviembre de 2026). La web ya la enlaza ("Cómo llegar" en pie, banda de contacto, contacto y nosotros) y la declara en los datos estructurados (`hasMap`, `sameAs`, `geo`). Los clics se miden en GA4 con el evento `mapa_click`.

Lo que muestra hoy:

- Nombre "VIPAR S.A", categoría "Tienda de cristales".
- 4,1 estrellas con 24 reseñas: 14 de 5, 3 de 4, 4 de 3, 1 de 2 y 2 de 1. Las primeras que muestra Google son de hace 4 a 9 años.
- 21 fotos.
- Teléfono (021) 963 973. Horario lunes a viernes de 7:00 a 17:00.
- Dirección "Pdte. Franco, Ñemby 111212". El pin sí está bien: cae en el barrio Salinas, sobre la calle San Francisco.

Lo que no coincide con la web, y Google lo cruza:

| Dato | Web | Ficha |
|---|---|---|
| Dirección | San Francisco 770 c/ Sexta, Bo. Salinas | Pdte. Franco |
| Teléfono | +595 981 256 510 (WhatsApp) | (021) 963 973 |
| Horario | 7:30 a 17:00 | 7:00 a 17:00 |

Para quien maneje la ficha (todo desde business.google.com, no se toca la web):

1. Corregir la dirección a la de la web, sin mover el pin.
2. Poner el celular de WhatsApp como teléfono principal y la línea baja como adicional, si alguien la atiende. El botón "Llamar" de Maps hoy marca la línea baja.
3. Dejar un solo horario. Si es 7:00, avisar y se cambia en `src/data/empresa.ts` y en `src/layouts/Base.astro`.
4. Sumar categorías secundarias que existan en Google: por ejemplo contratista de vidrios, ventanas de aluminio, cielos rasos. Hoy solo dice "tienda", y VIPAR instala.
5. En el sitio web de la ficha, usar `https://vipar.com.py/?utm_source=google&utm_medium=organic&utm_campaign=ficha-maps`. Así GA4 separa las visitas que llegan desde Maps.
6. Subir fotos nuevas de obras, sobre todo box de baño.
7. Responder las reseñas, también las de 1 y 2 estrellas.
8. Pedir reseña a cada cliente al terminar la obra, con este enlace directo: https://search.google.com/local/writereview?placeid=ChIJmWtkhIerXZQRr5XjEkCqCKE

La web no muestra la nota ni las reseñas a propósito. Con 4,1 y reseñas de hace años no suma, y Google no muestra estrellas en resultados para reseñas que una empresa publica de sí misma. Cuando haya reseñas recientes, se pueden citar con nombre y enlace a la ficha.

## Fotos

Esta pasada usa las fotos que ya estaban en vipar.com.py. Tres venían giradas 90° desde el sitio anterior (dos del IPS Central y una del CARDE de la APF) y se enderezaron.

Dos fichas quedaron sin foto porque el sitio anterior mostraba la de otra obra:

- Residencia San Lorenzo usaba una foto de Recoleta.
- Oficinas Itaú usaban una foto de la Cooperativa Medalla Milagrosa.

Hiper Luisitos, el peaje y el álbum nuevo no entraron. Hace falta el permiso de la pregunta 8.

## Dominio

No está confirmado quién administra vipar.com.py ni el hosting. No se tocó el DNS.

## Fotos de baja resolución

La foto de portada de `/servicios/box-de-bano/` viene del sitio anterior y se ve pixelada en pantalla ancha. Hace falta el original.

## Marca

El logo completo del sitio actual es blanco, para fondo oscuro. Por eso la cabecera y el pie son azul marino (`#002046`). No tenemos una versión del logo completo en azul para fondo blanco; si existe, se puede cambiar.

## Diseño

- Esta pasada rehízo la home, las fichas de servicio, las listas de obras y las cabeceras. Los límites siguen siendo las fotos: varias son de baja resolución y se ven así en pantallas grandes (por ejemplo Sucursal Tigo en el cuadro grande de la home).
- No hay logos de clientes ni reseñas. Los logos piden permiso de cada empresa. Las reseñas de Google se pueden citar cuando la ficha tenga reseñas recientes.
- La cifra "33 obras" cuenta las fichas de esta web, no el total histórico de VIPAR. El sitio viejo decía "+1000 obras" y no hay forma de verificarlo.
