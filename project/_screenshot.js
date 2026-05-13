const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors'],
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 920, deviceScaleFactor: 2 });

  const url = 'http://localhost:8765/WOUND%20V12.html';
  const spreads = process.argv[2] ? process.argv[2].split(',').map(s => parseInt(s.trim())) : [0, 2, 4, 6, 25, 35, 50, 87];

  for (const i of spreads) {
    await page.goto(`${url}#${i}`, { waitUntil: 'networkidle0', timeout: 30000 });
    // Always force a reload so React re-mounts and reads location.hash
    await page.reload({ waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));
    const stage = await page.$('.spread-stage');
    const file = `/tmp/wound-spread-${String(i).padStart(2, '0')}.png`;
    if (stage) await stage.screenshot({ path: file });
    else       await page.screenshot({ path: file });
    console.log('captured', file);
  }

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
