import { test, expect, type Page } from '@playwright/test';
async function navigate(page:Page,label:string){
 const toggle=page.getByRole('button',{name:'Abrir navegación'});
 if(await toggle.isVisible())await toggle.click();
 await page.getByRole('navigation').getByRole('link',{name:label,exact:true}).click();
}
test('sticky navigation, anchors and independent contact links',async({page},info)=>{
 await page.goto('/');
 await page.locator('footer').scrollIntoViewIfNeeded();
 await expect.poll(()=>page.locator('header').evaluate(el=>el.getBoundingClientRect().top)).toBe(0);
 expect(await page.locator('.contact-bar').evaluate(el=>el.getBoundingClientRect().bottom)).toBeLessThan(0);
 await expect(page.locator('header .logo')).toBeInViewport();
 for(const [label,id] of [['Marcas','marcas'],['Soluciones','soluciones'],['Nosotros','nosotros'],['Contacto','contacto']]){
  await navigate(page,label);
  await expect(page.locator(`#${id}`)).toBeInViewport();
  expect(await page.locator(`#${id} h2`).evaluate(el=>el.getBoundingClientRect().top)).toBeGreaterThan(await page.locator('header').evaluate(el=>el.getBoundingClientRect().bottom));
 }
 await expect(page.locator('#contacto')).toHaveCount(1);
 await expect(page.locator('footer #contacto')).toHaveCount(0);
 const contact=page.locator('#contacto');
 await expect(contact.getByRole('link',{name:'294 127 8206'})).toHaveAttribute('href','tel:+522941278206');
 await expect(contact.getByRole('link',{name:'294 942 8246'})).toHaveAttribute('href','tel:+522949428246');
 await expect(contact.getByRole('link',{name:'hidratodo@gmail.com'})).toHaveAttribute('href','mailto:hidratodo@gmail.com');
 await expect(contact.locator('address')).toHaveText('Carretera Costera del Golfo S/N, Col. 3 de Mayo, San Andrés Tuxtla, Veracruz');
 const url=new URL((await contact.getByRole('link',{name:'Cotizar por WhatsApp'}).getAttribute('href'))!);
 expect(url.pathname).toBe('/522941278206');expect(url.searchParams.get('text')).toBe('Hola, encontré su página web y me gustaría solicitar información sobre materiales para mi proyecto.');
 await page.screenshot({path:`test-results/contact-${info.project.name}.png`});
 await navigate(page,'Nosotros');await page.getByRole('link',{name:'Hablemos de tu proyecto'}).click();await expect(contact).toBeInViewport();
 await navigate(page,'Productos');await expect(page.locator('.product-card')).toHaveCount(14);
 await page.locator('.product-card').first().getByRole('button',{name:'Ver detalle'}).click();
 expect(await page.locator('.modal-close').evaluate(el=>{const r=el.getBoundingClientRect();return document.elementFromPoint(r.x+r.width/2,r.y+r.height/2)===el||el.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2))})).toBe(true);
 await page.keyboard.press('Escape');await navigate(page,'Contacto');await expect(contact).toBeInViewport();
 await navigate(page,'Inicio');await expect(page.getByRole('heading',{level:1})).toBeInViewport();
});
test('solution cards show action, keyboard feedback and matching catalog search',async({page},info)=>{
 await page.goto('/#soluciones');
 const cards=page.locator('.application-card');await expect(cards).toHaveCount(6);
 for(let i=0;i<6;i++){
  const card=cards.nth(i);await expect(card.locator('.application-action')).toBeVisible();
  await card.focus();await page.keyboard.press('Tab');await page.keyboard.press('Shift+Tab');await expect(card).toBeFocused();
  expect(await card.evaluate(el=>getComputedStyle(el).outlineStyle)).not.toBe('none');
  const query=new URLSearchParams((await card.getAttribute('href'))!.split('?')[1]).get('buscar');
  await page.keyboard.press('Enter');await expect(page.getByRole('searchbox')).toHaveValue(query!);
  expect(await page.locator('.product-card').count()).toBeGreaterThan(0);
  await navigate(page,'Soluciones');
 }
 if(info.project.name==='desktop'){
  await cards.first().hover();await expect.poll(()=>cards.first().evaluate(el=>getComputedStyle(el).borderTopColor)).toBe('rgb(0, 120, 191)');
  await expect.poll(()=>cards.first().locator('.application-action svg').evaluate(el=>getComputedStyle(el).transform)).toBe('matrix(1, 0, 0, 1, 4, 0)');
 }
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
