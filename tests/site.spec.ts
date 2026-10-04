import { test, expect } from '@playwright/test';
test('home, assets, navigation and responsive layout', async ({ page }, info) => {
 const errors: string[]=[];page.on('pageerror', e=>errors.push(e.message));
 await page.goto('/');
 await expect(page.getByRole('heading',{level:1})).toHaveText('Tuberías, válvulas y conexiones para proyectos que avanzan');
 await expect(page.locator('.category-card')).toHaveCount(6);
 await expect(page.locator('.brand-grid img')).toHaveCount(9);
 await page.locator('footer').scrollIntoViewIfNeeded();
 await expect.poll(()=>page.locator('img').evaluateAll(imgs=>imgs.every(i=>(i as HTMLImageElement).complete&&(i as HTMLImageElement).naturalWidth>0))).toBe(true);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 await page.screenshot({path:`test-results/home-${info.project.name}.png`,fullPage:true});
 if(info.project.name!=='desktop') { await page.getByRole('button',{name:'Abrir navegación'}).click();await expect(page.getByRole('navigation')).toBeVisible(); }
 await page.getByRole('navigation').getByRole('link',{name:'Productos',exact:true}).click();
 await expect(page.getByRole('heading',{level:1})).toHaveText('Catálogo de productos');
 expect(errors).toEqual([]);
});
test('search, family filter, modal, quote and section links',async({page},info)=>{
 await page.goto('/#catalogo');
 await expect(page.locator('.product-card')).toHaveCount(14);
 if(info.project.name==='desktop')await page.getByRole('button',{name:'Tubería PEAD',exact:true}).click();
 else await page.locator('select').selectOption('pead');
 await expect(page.locator('.product-card')).toHaveCount(3);
 await page.getByRole('button',{name:'Limpiar filtros'}).click();
 await page.getByRole('searchbox').fill('valvulas');
 await expect(page.locator('.product-card')).toHaveCount(1);
 const trigger=page.getByRole('button',{name:'Ver detalle'});await trigger.click();
 await expect(page.getByRole('dialog')).toBeVisible();
 const quote=page.getByRole('dialog').getByRole('link',{name:'Solicitar cotización'});
 const url=new URL((await quote.getAttribute('href'))!);expect(url.hostname).toBe('wa.me');expect(url.pathname).toBe('/522941278206');expect(url.searchParams.get('text')).toContain('Válvulas de control');
 await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);await expect(trigger).toBeFocused();
 await page.getByRole('searchbox').fill('noexiste123');await expect(page.getByRole('heading',{name:'No encontramos esa consulta'})).toBeVisible();
 await page.getByRole('button',{name:'Ver todas las familias'}).click();await expect(page.locator('.product-card')).toHaveCount(14);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 await page.screenshot({path:`test-results/catalog-${info.project.name}.png`,fullPage:true});
 await page.locator('footer').getByRole('link',{name:'Marcas',exact:true}).click();await expect(page.locator('#marcas')).toBeInViewport();
});
test('all family images load and match their modal without stretching', async ({ page }, info) => {
 await page.goto('/#catalogo');
 const cards=page.locator('.product-card');await expect(cards).toHaveCount(14);
 const sources=await cards.locator(':scope > img').evaluateAll(imgs=>imgs.map(img=>img.getAttribute('src')));
 expect(new Set(sources).size).toBe(14);
 expect(sources.every(src=>src?.startsWith('/assets/catalogo/')&&!src.includes('contra-incendio'))).toBe(true);
 for(let i=0;i<14;i++){
  const card=cards.nth(i);await card.scrollIntoViewIfNeeded();
  await expect.poll(()=>card.locator(':scope > img').evaluate(img=>(img as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await card.getByRole('button',{name:'Ver detalle'}).click();
  const modal=page.getByRole('dialog');await expect(modal).toBeVisible();
  await expect(modal.locator(':scope > img')).toHaveAttribute('src',sources[i]!);
  await expect.poll(()=>modal.locator(':scope > img').evaluate(img=>(img as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  expect(await modal.locator(':scope > img').evaluate(img=>getComputedStyle(img).objectFit)).toMatch(/^(cover|contain)$/);
  if(i===10)await page.screenshot({path:`test-results/modal-images-${info.project.name}.png`});
  await page.keyboard.press('Escape');await expect(modal).toHaveCount(0);
 }
});
