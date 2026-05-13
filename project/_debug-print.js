const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    headless: 'new',
    args: ['--no-sandbox','--disable-setuid-sandbox','--ignore-certificate-errors'],
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1056, height: 816 });
  await page.goto('http://localhost:8765/WOUND%20V12.html?print', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 3000));
  const info = await page.evaluate(() => {
    const doc = document.querySelector('.print-doc');
    const spreads = document.querySelectorAll('.print-spread');
    const first = spreads[0];
    return {
      docExists: !!doc,
      spreadCount: spreads.length,
      docHeight: doc?.offsetHeight,
      docWidth: doc?.offsetWidth,
      firstSpread: first ? {
        h: first.offsetHeight,
        w: first.offsetWidth,
        cs: window.getComputedStyle(first).pageBreakAfter,
        ba: window.getComputedStyle(first).breakAfter,
      } : null,
      bodyHeight: document.body.offsetHeight,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
