#!/usr/bin/env node
/**
 * Render the print-mode HTML to a single multi-page PDF.
 * Each PDF page is one spread (11in × 8.5in landscape).
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
  // Use the printed-page size so layout is final.
  await page.setViewport({ width: 1056, height: 816, deviceScaleFactor: 1 });

  console.log('navigating…');
  await page.goto(URL, { waitUntil: 'networkidle0', timeout: 90000 });

  // Wait until React has rendered every spread.
  console.log('waiting for spreads to render…');
  await page.waitForFunction(() => {
    const spreads = document.querySelectorAll('.print-spread');
    return spreads.length > 100;
  }, { timeout: 60000 });
  // Extra time for fonts / images to settle.
  await new Promise(r => setTimeout(r, 2500));

  const spreadCount = await page.evaluate(() => document.querySelectorAll('.print-spread').length);
  console.log(`rendering ${spreadCount} spreads → PDF`);

  await page.emulateMediaType('print');
  await page.pdf({
    path: OUT,
    width: '11in',
    height: '8.5in',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    displayHeaderFooter: false,
    timeout: 120000,
  });
  console.log(`wrote ${OUT}`);

  const stat = fs.statSync(OUT);
  console.log(`${(stat.size / 1024 / 1024).toFixed(2)} MB`);
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
