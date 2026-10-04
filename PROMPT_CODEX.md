# Prompt para Codex — Implementación de web HIDRATODO

Actúa como desarrollador frontend senior. En este repositorio crea la página web
comercial de HIDRATODO usando React + Vite + TypeScript y CSS responsive, siguiendo
los mockups en `referencias/` y aprovechando TODOS los assets en `public/assets/`.

OBJETIVO: catálogo digital para atraer compradores de tuberías, válvulas,
conexiones y productos hidráulicos, con un flujo de consulta/cotización vía WhatsApp.
NO construir una tienda con pagos ni un inventario ficticio.

DISEÑO:
- Referencia visual principal: `referencias/mockup-home-aprobado.png`.
- Referencia de estructura de home y catálogo: `referencias/mockup-home-y-catalogo.png`.
- Paleta: azul marino, azul hidráulico, blanco y verde en CTAs; diseño industrial
  profesional, ligero y legible; tipografía sans-serif moderna.
- Encabezado: barra de contacto + logo + Inicio, Productos, Marcas, Soluciones,
  Nosotros, Contacto + Cotizar.
- Hero con `/assets/banners/hero-principal.png`, foto visible a la derecha,
  degradado azul en el área de texto a la izquierda. Crear título real en HTML:
  'Tuberías, válvulas y conexiones para proyectos que avanzan'.
  Botones 'Ver catálogo' y 'Cotizar por WhatsApp'.
- Beneﬁcios en una franja: amplio catálogo, marcas reconocidas, asesoría técnica,
  soluciones a la medida. Evitar cifras no verificadas.
- Categorías: 6 tarjetas usando las seis imágenes de `/assets/productos/`.
- Aplicaciones: agua potable, alcantarillado sanitario, redes pluviales, riego,
  tratamiento de aguas residuales y conducción industrial. Si faltan fotos de
  aplicaciones, implementar tarjetas elegantes con iconografía (sin inventar logos).
- Marcas: usar las 9 imágenes de `/assets/marcas/` en una retícula responsive.
  Los archivos son artes conceptuales y requieren validación del cliente.
- CTA final y footer con `/assets/banners/footer-banner.png`, overlay y alto contraste.
- Vista de catálogo con cabecera `/assets/banners/catalogo-banner.png`,
  búsqueda textual, filtros por familia y tarjetas funcionales.
- Ficha modal o página por categoría/producto: título, descripción fundamentada en
  el catálogo original, aplicación, imagen y botón 'Solicitar cotización'.
  No presentar renders conceptuales como fotografías técnicas exactas.
- Diseño móvil con navegación hamburguesa; botón flotante WhatsApp.

CONTENIDO Y FUENTE:
- Leer `referencias/catalogo-hidratodo-original.pdf` como fuente primaria.
- Familias del documento: PVC alcantarillado serie 20/25, PVC sanitario,
  PVC hidráulico sistema métrico y cédula 40/80, PVC y CPVC industrial,
  CPVC CTS, PEAD liso/corrugado, válvulas, fierro fundido, conexiones y sistemas.
- Contactos según catálogo: 294-127-8206, 294-942-8246,
  hidratodo@gmail.com; sucursal San Andrés Tuxtla, Veracruz.
- Formar enlaces de WhatsApp con código México +52, validando el número final
  con el propietario antes de publicar.
- No inventar precios, stock, marcas de productos individuales, experiencia,
  certificaciones, domicilios adicionales ni fichas técnicas ausentes.
- Si un dato es ambiguo o inconsistente en el catálogo, marcarlo para revisión.

IMPLEMENTACIÓN:
1. Inspeccionar primero el repositorio y adaptarse a la plantilla existente;
   no borrar archivos ni interferir con otros proyectos.
2. Componentes sugeridos: Header, Hero, Benefits, CategoryGrid, Applications,
   Brands, Catalog, ProductCard, QuoteCTA, Footer, WhatsAppButton.
3. Crear un archivo de datos estructurado para categorías, productos y marcas,
   con rutas centralizadas en `/assets/`.
4. Usar `loading='lazy'` en imágenes fuera del primer viewport, alt descriptivos,
   dimensiones/aspect-ratio estables, accesibilidad de teclado y contraste correcto.
5. Optimizar con CSS (object-fit: cover para fotos; contain para logos).
   No utilizar como una sola imagen los mockups. Toda la UI debe ser HTML/CSS real.
6. Botón cotizar: abrir WhatsApp con mensaje precargado con la categoría/producto
   que se consultó. Búsqueda/filtros deben funcionar realmente.
7. Probar desktop/tablet/móvil y ejecutar el build de Vite. Corregir errores.
8. Al concluir, resumir rutas creadas, componentes, advertencias de contenido y
   comandos para desarrollo/build/publicación en hosting estático.
