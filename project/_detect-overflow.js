const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    headless: 'new',
    args: ['--no-sandbox','--disable-setuid-sandbox','--ignore-certificate-errors'],
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 528, height: 816, deviceScaleFactor: 1 });
  await page.goto('http://localhost:8765/WOUND%20V12.html?print', { waitUntil: 'networkidle0', timeout: 90000 });
  await new Promise(r => setTimeout(r, 2500));

  const overflows = await page.evaluate(() => {
    const pages = document.querySelectorAll('.print-page');
    const issues = [];
    pages.forEach((page, i) => {
      const body = page.querySelector('.page__body');
      const content = page.querySelector('.page__content');
      if (!body || !content) return;
      // The TRUE overflow check: does .page__content (the bounded flex
      // container) clip its children? body.scrollHeight ≠ clientHeight is
      // a false positive when the flex column shrinks body to fit and
      // leaves room beneath it. What matters is whether the rendered
      // content extends past the page__content frame.
      const contentOver = content.scrollHeight - content.clientHeight;
      // Also catch the case where body itself is bigger than content's
      // available space (margin/footnote-host pushes body to clip).
      const bodyOver = body.scrollHeight - body.clientHeight;
      const realOver = Math.max(contentOver, 0);
      if (realOver > 2) {
        issues.push({
          page: i + 1,
          available: content.clientHeight,
          needed: content.scrollHeight,
          over: realOver,
          bodyOver,
          firstChildText: (body.firstElementChild?.textContent || '').slice(0, 60),
          lastChildText: (body.lastElementChild?.textContent || '').slice(0, 60),
        });
      }
    });
    return issues;
  });

  console.log(`Pages with body overflow: ${overflows.length}`);
  for (const o of overflows.slice(0, 30)) {
    console.log(`  p${o.page} needs ${o.needed}px in ${o.available}px (over by ${o.over}px)`);
    console.log(`    last: ${o.lastChildText}`);
  }
  await browser.close();
})();
