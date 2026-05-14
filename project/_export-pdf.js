#!/usr/bin/env node
/**
 * Render the print-mode HTML to a single multi-page PDF.
 * Each PDF page is one book page (5.5in × 8.5in portrait).
 * DriveThruRPG-compatible digital format.
 */
const puppeteer = require('puppeteer-core');
const path = require('node:path');
const fs = require('node:fs');

const URL = 'http://localhost:8765/WOUND%20V12.html?print';
const OUT = path.join(__dirname, 'WOUND_V12.pdf');

(async () => {
  console.log('launching chrome…');
  const browser = await puppeteer.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors'],
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  // Match the printed-page size so layout is final.
  await page.setViewport({ width: 528, height: 816, deviceScaleFactor: 1 });

  console.log('navigating…');
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 90000 });

  // Wait until React has rendered every page.
  console.log('waiting for pages to render…');
  await page.waitForFunction(() => {
    const pages = document.querySelectorAll('.print-page');
    return pages.length > 100;
  }, { timeout: 60000 });
  await new Promise(r => setTimeout(r, 2500));

  const pageCount = await page.evaluate(() => document.querySelectorAll('.print-page').length);
  console.log(`rendering ${pageCount} pages → PDF`);

  await page.emulateMediaType('print');
  await page.pdf({
    path: OUT,
    width: '5.5in',
    height: '8.5in',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    displayHeaderFooter: false,
    timeout: 180000,
  });
  console.log(`wrote ${OUT}`);

  const stat = fs.statSync(OUT);
  console.log(`${(stat.size / 1024 / 1024).toFixed(2)} MB`);
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
