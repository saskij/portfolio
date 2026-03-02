import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  
  await page.goto('http://localhost:3000');
  
  // Wait for 5 seconds
  await new Promise(r => setTimeout(r, 5000));
  
  const elementData = await page.evaluate(() => {
    return document.querySelector('.bg-\\[\\#050505\\]')?.outerHTML;
  });
  
  if(elementData) console.log("Splash is STILL in DOM!");
  
  await browser.close();
})();
