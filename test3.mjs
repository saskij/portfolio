import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000');
  await new Promise(r => setTimeout(r, 6000));
  
  const elementData = await page.evaluate(() => {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2 + 100;
    const el = document.elementFromPoint(x, y);
    
    return el ? {
        tag: el.tagName,
        className: el.className,
        id: el.id
    } : null;
  });
  
  console.log("Element at center:", elementData);
  await browser.close();
})();
