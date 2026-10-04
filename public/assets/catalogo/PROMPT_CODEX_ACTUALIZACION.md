# Codex: integrar fotos especificas en el catalogo de HIDRATODO

El diseño y funcionalidad actuales de la web React + Vite + TypeScript ya estan aprobados.
Este cambio SOLO debe sustituir imagenes repetidas en las tarjetas y sus modales.

1. Copia/inspecciona `public/assets/catalogo/` y lee `MAPEO_IMAGENES.json`.
2. Inspecciona `src/data.ts` y localiza cada una de las 14 familias reales actualmente
   publicadas. NO presupongas IDs; empareja por titulo y por pagina fuente del PDF.
3. Asigna una foto distinta y apropiada a cada familia, eligiendo entre estos PNG.
   Ejemplos de rutas: `/assets/catalogo/pvc-sanitario.png`,
   `/assets/catalogo/cpvc-cts.png`, `/assets/catalogo/pead-liso-hidraulico.png`.
4. Mantener las tarjetas existentes y sus modales; `object-fit: cover` para imagenes
   que llenan el marco, `contain` si el producto se corta. No deformar fotografias.
5. NO cambiar filtros, buscador, descripciones, contacto, rutas, WhatsApp, Hero, marcas
   ni footer. No inventar productos ni caracteristicas.
6. `sistemas-contra-incendio-referencia.png`: NO incorporar a categorias comerciales
   hasta aprobacion explicita de HIDRATODO.
7. En el reporte final, listar familia -> archivo asignado y cuales siguen sin foto propia.
8. Ejecutar `npm run build` y pruebas de home, catalogo y modal en escritorio y movil.

Las imagenes proceden del PDF del cliente y siguen siendo ilustrativas, no fichas
tecnicas certificadas. Evita mostrar en tarjetas leyendas tecnicas recortadas de las fotos.
