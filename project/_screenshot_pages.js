const puppeteer = require('puppeteer-core');
const fs = require('node:fs');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    headless: 'new',
    args: ['--no-sandbox','--disable-setuid-sandbox','--ignore-certificate-errors'],
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 528, height: 816, deviceScaleFactor: 2 });
  await page.goto('http://localhost:8765/WOUND%20V12.html?print', { waitUntil: 'networkidle0', timeout: 90000 });
  await new Promise(r => setTimeout(r, 2500));

  const targets = process.argv.slice(2).map(Number);
  if (!targets.length) { console.error('usage: ... <page> [<page>...]'); process.exit(1); }
  fs.mkdirSync('/tmp/shots', { recursive: true });
  for (const n of targets) {
    const el = await page.$(`.print-page:nth-of-type(${n})`);
    if (!el) { console.error(`p${n} not found`); continue; }
    const out = `/tmp/shots/p${String(n).padStart(3, '0')}.png`;
    await el.screenshot({ path: out });
    console.log(`wrote ${out}`);
  }
  await browser.close();
})();
