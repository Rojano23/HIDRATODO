# HIDRATODO — recursos visuales para Codex

Copia las carpetas `public/assets/` en la raíz de tu proyecto React/Vite.
En Vite, los archivos se usan como `/assets/banners/hero-principal.png`,
`/assets/productos/tuberia-pvc.png`, etc. NO debes importarlos desde `src`.

## Contenido
- `public/assets/logos`: 1 logo conceptual HIDRATODO en PNG RGBA.
- `public/assets/marcas`: 9 representaciones PNG de marcas mostradas en el catálogo.
- `public/assets/productos`: 6 fotografías ilustrativas para las 6 categorías.
- `public/assets/banners`: hero principal, cabecera del catálogo y fondo del footer.
- `referencias/`: PDF original del cliente y mockups visuales para Codex.
- `MANIFIESTO_ASSETS.json`: listado de rutas de los 19 archivos web.
- `PROMPT_CODEX.md`: instrucciones detalladas de implementación.

## Uso visual
- HERO: `/assets/banners/hero-principal.png`; alinear la foto a la derecha y superponer
  un gradiente azul oscuro hacia la izquierda para legibilidad del texto.
- CATÁLOGO: `/assets/banners/catalogo-banner.png`, con texto mediante HTML/CSS.
- FOOTER/CTA: `/assets/banners/footer-banner.png`, mantener contraste alto.
- Categorías: PVC, PEAD, Válvulas, Conexiones, Fierro fundido, Sistemas hidráulicos.
- Logos: usar `object-fit: contain` y una caja blanca, sin estirarlos.

## Notas importantes
Las imágenes de producto son imágenes conceptuales ilustrativas: no acreditan
disponibilidad, especificación, fotografía real de almacén ni modelo concreto.
Los logos de marcas generados a partir de las referencias pueden NO reproducir
perfectamente la identidad comercial oficial. Reemplazarlos por artes autorizados
por sus titulares antes de publicar.

La fuente para descripciones, familias y contacto es el archivo original
`referencias/catalogo-hidratodo-original.pdf`. No copiar textos técnicos ni
certificaciones desde los mockups: contienen texto meramente ilustrativo.
No publicar cifras no verificadas como 'más de 5,000 productos' o años de experiencia.

Revisa que el titular de la marca esté escrito HIDRATODO (como el catálogo).

## Web implementada

React + Vite + TypeScript. La interfaz utiliza las 19 imágenes web del manifiesto mediante rutas de `src/data.ts`. Los archivos originales y referencias se conservan.

### Comandos

```sh
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` valida TypeScript y crea `dist/`. Para hosting estático, publicar el contenido de `dist/` en la raíz del dominio con HTTPS. Las rutas de recursos `/assets/` requieren publicación en raíz; para un subdirectorio adaptar las rutas y `base` de Vite. La navegación con hash no requiere reglas de redirección SPA. Validar los puntos de `REVISION_CONTENIDO.md` antes de publicar. No se realizó un despliegue.

### Rutas y componentes

- `/#inicio`: Hero, Benefits, CategoryGrid, Applications, Brands y About.
- `/#catalogo`: Catalog, filtros, búsqueda, ProductCard y ProductModal.
- `/#catalogo?familia=pvc` (también pead, valvulas, conexiones, fierro, sistemas).
- `/#catalogo?buscar=riego`: búsqueda inicial por enlace.
- `/#marcas`, `/#soluciones`, `/#nosotros`, `/#contacto`: secciones enlazables desde cualquier vista. Contacto es una sección independiente después de Nosotros.
- Header, QuoteCTA, Footer y WhatsAppButton (enlace flotante) compartidos.

El diálogo usa la modalidad nativa para retener el foco, cerrar con Escape y restaurar el foco al activador. El menú móvil expone su estado; hay enlace para saltar al contenido, etiquetas de campos, resultados anunciados y soporte para movimiento reducido.

Las fichas son familias de consulta, no un inventario de productos. No incluyen tablas técnicas ni disponibilidad ficticia. El sitio usa Manrope de Google Fonts con alternativa sans-serif local.

### Prueba de interfaz

Con el servidor activo en el puerto 5173:

```sh
npx playwright install chromium
npx playwright test
```

Las pruebas verifican home y catálogo en escritorio, tablet y móvil, filtros, búsqueda sin acentos, estado vacío, navegación, fichas, foco y enlaces de cotización.

### Ajustes UX v1.1

El menú principal permanece sticky, mientras la barra de teléfonos se desplaza. Las anclas reservan la altura del menú y la navegación hamburguesa se abre debajo de él. Soluciones muestra “Explorar productos” con estados hover/foco. Contacto usa la dirección y el mensaje general de WhatsApp centralizados; las cotizaciones individuales conservan su lógica. `tests/ux.spec.ts` verifica estos comportamientos, enlaces y la prioridad de los modales sobre el header.
