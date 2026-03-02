import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000');
  await new Promise(r => setTimeout(r, 6000));
  
  const hasOverlay = await page.evaluate(() => {
    return !!document.querySelector('.z-\\[100\\]');
  });
  
  console.log("Has overlay?", hasOverlay);
  await browser.close();
})();
