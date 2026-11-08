# Pendientes

No frenan la web.

## Lo que dicen los datos (agosto a noviembre de 2026)

Los archivos están en `docs/seo/datos-2026-11-07/`.

- Buena parte de las consultas piden precio: "cielo raso pvc precio m2 paraguay", "precio box de baño", "costo mamparas". Cielo raso y mamparas ya tienen precios por m² (ver abajo). Box de baño sigue sin número, y es la segunda página con más clics.
- "vidrieria asuncion" y "vidrieria cerca de mi" llegan a la home. "Cerca de mí" se gana sobre todo con la ficha de Google Maps (Perfil de Empresa), no con la web. No sabemos si VIPAR tiene una.
- Entre febrero y mayo de 2026 Search Console casi no registra clics. Fue un problema del hosting, según VIPAR. El sitio recuperó y duplicó el tráfico después, pero muestra cuánto depende del hosting: el nuevo tiene que ser estable y conviene una alerta de caída (por ejemplo UptimeRobot, gratis) desde el primer día.
- El 79 % de las sesiones son en celular, y el CTR en celular (2,5 %) es la mitad que en computadora (5 %).

## Para VIPAR, cuando haya un minuto

```
Hola. Para la web nueva, tres líneas:

1. Box de cristal 8 mm, 0,90 × 1,90## Precios

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
7. ¿Tienen ficha de VIPAR en Google Maps? ¿Quién la maneja?
8. ¿Publico fotos de Hiper Luisitos y del peaje? Sí / No
```

Cada precio publicado va con el aviso de `avisoPrecios` (en `pedido.ts`): son de referencia, pueden cambiar y los trabajos grandes se calculan con más datos por WhatsApp. Si se publica un precio nuevo en otra página, tiene que llevar ese aviso.

Los precios en guaraníes se desactualizan. Conviene revisarlos cada tres meses y cambiar `preciosVigencia` aunque no cambien, para que la web no muestre un mes viejo.

Los rangos de box y ventana se cargan en `precios`, en el mismo archivo. Hoy están en `null` y la pantalla no muestra un monto. Si alguien carga números de prueba, tiene que marcar `ejemplo: true`. Con esa marca, la interfaz y el WhatsApp dicen `PRECIO DE EJEMPLO`. No se publica así.

terior mostraba la de otra obra:

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
- No hay logos de clientes ni reseñas. Los logos piden permiso de cada empresa. Las reseñas de Google se pueden mostrar cuando VIPAR tenga ficha en Maps con reseñas.
- La cifra "33 obras" cuenta las fichas de esta web, no el total histórico de VIPAR. El sitio viejo decía "+1000 obras" y no hay forma de verificarlo.
