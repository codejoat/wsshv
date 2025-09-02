const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../output');

// Get URL from input
const url = process.argv[2];

if(!url) {
  console.error('No URL provided. Usage: node puppeteer.js <URL>');
  process.exit(1);
}

const parsedUrl = new URL(url);
const domain = parsedUrl.hostname.replace(/\./g, '_');

// Define output paths
const screenshotPath = path.join(OUTPUT_DIR, `screenshot_${domain}.png`);
const htmlPath = path.join(OUTPUT_DIR, `html_${domain}.html`);

// Launch Chromium in non-headles mode, so visible
(async () => {
  const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();

  await page.goto(url, {waitUntil: 'networkidle2'});

  // Save screenshot
  await page.screenshot({path: screenshotPath, fullPage: true});

  // Extract HTML
  const html = await page.content();
  console.log('Saving HTML to:', htmlPath);

  try {
    fs.writeFileSync(htmlPath, html);
  } catch (error) {
    console.error('Failed to save HTML:', error.message);
  }

  await browser.close();
})();
