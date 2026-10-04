export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
export const assets = { logo: assetUrl('/assets/logos/hidratodo-logo.png'), hero: assetUrl('/assets/banners/hero-principal.png'), catalog: assetUrl('/assets/banners/catalogo-banner.png'), footer: assetUrl('/assets/banners/footer-banner.png') };
export const contact = { phones: ['294-127-8206', '294-942-8246'], email: 'hidratodo@gmail.com', location: 'San Andrés Tuxtla, Veracruz', address: 'Carretera Costera del Golfo S/N, Col. 3 de Mayo, San Andrés Tuxtla, Veracruz', projectMessage: 'Hola, encontré su página web y me gustaría solicitar información sobre materiales para mi proyecto.', whatsapp: '522941278206', whatsappVerified: false };
export const quoteUrl = (subject = 'mi proyecto hidráulico') => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`Hola, HIDRATODO. Me gustaría solicitar una cotización para ${subject}. ¿Me pueden orientar sobre medidas y opciones?`)}`;
export const projectQuoteUrl = () => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.projectMessage)}`;
export const categories = [
 { id: 'pvc', title: 'Tubería PVC y CPVC', image: assetUrl('/assets/productos/tuberia-pvc.png'), summary: 'Soluciones sanitarias, hidráulicas e industriales.' },
 { id: 'pead', title: 'Tubería PEAD', image: assetUrl('/assets/productos/tuberia-pead.png'), summary: 'Liso y corrugado para distintas conducciones.' },
 { id: 'valvulas', title: 'Válvulas', image: assetUrl('/assets/productos/valvulas.png'), summary: 'Control y regulación del flujo.' },
 { id: 'conexiones', title: 'Conexiones y accesorios', image: assetUrl('/assets/productos/conexiones-accesorios.png'), summary: 'Piezas para conectar tu proyecto.' },
 { id: 'fierro', title: 'Fierro fundido', image: assetUrl('/assets/productos/fierro-fundido.png'), summary: 'Juntas, coples y elementos para redes.' },
 { id: 'sistemas', title: 'Sistemas hidráulicos', image: assetUrl('/assets/productos/sistemas-hidraulicos.png'), summary: 'Soluciones según tu aplicación.' },
];
export type Product = { id: string; family: string; title: string; description: string; application: string; source: string; image: string; imageFit: 'cover' | 'contain' };
const entries = [
 ['pvc','PVC alcantarillado serie 20 y 25','Tubería para alcantarillado hermético con unión mediante anillo Rieber. El catálogo incluye conexiones tee y yee.','Atarjeas, subcolectores y colectores.','3'],
 ['pvc','PVC sanitario','PVC para conducción de aguas residuales sin presión. El documento lo describe como un material rígido, ligero y resistente a la corrosión.','Drenaje sanitario, bajantes pluviales y ventilación de tuberías.','4'],
 ['pvc','PVC hidráulico sistema métrico','Familia para conducción de agua a presión, presentada en el catálogo en clases 5, 7 y 10. La selección requiere revisar las condiciones del proyecto.','Agua potable, riego y plantas de tratamiento.','5'],
 ['pvc','PVC cédula 40 y 80','El catálogo distingue cédula 40 para instalaciones industriales ligeras y cédula 80 para aplicaciones industriales más exigentes. Consultar compatibilidad y condiciones de servicio.','Albercas, campos de golf e instalaciones industriales.','5'],
 ['pvc','PVC industrial cédula 80','Tubería de PVC industrial con unión por cemento solvente. El catálogo destaca sus paredes interiores lisas y resistencia a la corrosión.','Conducción industrial; validar el fluido y las condiciones de operación.','6'],
 ['pvc','CPVC industrial cédula 80','Familia de CPVC industrial descrita con resistencia química y superficie interior lisa. Temperaturas y compatibilidad deben confirmarse con una ficha técnica autorizada.','Procesos industriales sujetos a validación técnica.','6–7'],
 ['pvc','CPVC CTS','Tubería de CPVC con unión cementada. El catálogo señala su uso en sistemas de agua caliente y resistencia a la corrosión.','Sistemas de agua caliente; confirmar la especificación requerida.','8'],
 ['pead','PEAD corrugado doble pared','Tubería de polietileno de alta densidad corrugada con interior liso. El sistema se complementa con codos, tees y botas de inserción.','Drenaje sanitario y pluvial; otras conducciones según proyecto.','8'],
 ['pead','PEAD liso hidráulico','El catálogo presenta tubería de polietileno de alta densidad liso hidráulico en distintas relaciones dimensionales (RD). Consultar la selección adecuada.','Conducción hidráulica según las necesidades de la red.','9'],
 ['pead','PEAD conduit liso y corrugado','Familias conduit de polietileno de alta densidad incluidas en el catálogo. La variante lisa se describe como ligera y flexible.','Canalización eléctrica residencial, comercial e industrial.','9–10'],
 ['valvulas','Válvulas de control','El documento lista válvulas de compuerta, mariposa, retención, eliminadoras de aire, reguladoras de presión y tipo flotador.','Control del flujo en redes; confirmar tipo y compatibilidad.','11'],
 ['fierro','Fierro fundido y juntas','Familia que incluye marcos con tapa y contramarcos, juntas Gibault, cople Dresser y juntas universales bridadas.','Unión y componentes de redes según especificación del proyecto.','11'],
 ['conexiones','Conexiones y piezas especiales','El catálogo incluye conexiones para sus familias de tubería y menciona un taller especializado en conexiones de PVC para soluciones a la medida.','Uniones y adaptaciones conforme a tu proyecto.','2–3, 8'],
 ['sistemas','Soluciones para infraestructura hidráulica','HIDRATODO describe soluciones para infraestructura hidráulica y urbana, diseño de proyectos y un taller de conexiones de PVC. Consultar el alcance específico del servicio.','Agua potable, alcantarillado, redes pluviales, riego y tratamiento de aguas residuales.','2'],
];
// Imágenes emparejadas por título y página del texto; la página de la imagen puede diferir.
const catalogImages: Record<string, { image: string; imageFit: Product['imageFit'] }> = {
  'PVC alcantarillado serie 20 y 25|3': { image: assetUrl('/assets/catalogo/pvc-alcantarillado-serie-20-25.png'), imageFit: 'cover' },
  'PVC sanitario|4': { image: assetUrl('/assets/catalogo/pvc-sanitario.png'), imageFit: 'cover' },
  'PVC hidráulico sistema métrico|5': { image: assetUrl('/assets/catalogo/pvc-hidraulico-sistema-metrico.png'), imageFit: 'contain' },
  'PVC cédula 40 y 80|5': { image: assetUrl('/assets/catalogo/pvc-cedula-40-80.png'), imageFit: 'contain' },
  'PVC industrial cédula 80|6': { image: assetUrl('/assets/catalogo/pvc-industrial-cedula-80.png'), imageFit: 'contain' },
  'CPVC industrial cédula 80|6–7': { image: assetUrl('/assets/catalogo/cpvc-industrial-cedula-80.png'), imageFit: 'contain' },
  'CPVC CTS|8': { image: assetUrl('/assets/catalogo/cpvc-cts.png'), imageFit: 'contain' },
  'PEAD corrugado doble pared|8': { image: assetUrl('/assets/catalogo/pead-corrugado-doble-pared.png'), imageFit: 'contain' },
  'PEAD liso hidráulico|9': { image: assetUrl('/assets/catalogo/pead-liso-hidraulico.png'), imageFit: 'contain' },
  'PEAD conduit liso y corrugado|9–10': { image: assetUrl('/assets/catalogo/pead-corrugado-conduit.png'), imageFit: 'contain' },
  'Válvulas de control|11': { image: assetUrl('/assets/catalogo/valvulas-fierro-fundido.png'), imageFit: 'contain' },
  'Fierro fundido y juntas|11': { image: assetUrl('/assets/catalogo/fierro-fundido-conexiones.png'), imageFit: 'contain' },
  'Conexiones y piezas especiales|2–3, 8': { image: assetUrl('/assets/catalogo/conexiones-pead-corrugado.png'), imageFit: 'contain' },
  'Soluciones para infraestructura hidráulica|2': { image: assetUrl('/assets/catalogo/sistemas-captacion-pluvial.png'), imageFit: 'cover' },
};
export const products: Product[] = entries.map(([family,title,description,application,source], i) => ({id: `familia-${i+1}`, family,title,description,application,source,...catalogImages[`${title}|${source}`]}));
export const brands = ['Alfa','Advance','Cresco','PTM','RUD','Sigma Flow','Spears','Truper','KYO'].map(name=>({name,image:assetUrl(`/assets/marcas/${name.toLowerCase().replace(' ','-')}.png`)}));
export const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export const filterProducts = (query: string, family: string) => products.filter(p => (family === 'all' || p.family === family) && normalize(`${p.title} ${p.description} ${p.application}`).includes(normalize(query.trim())));
