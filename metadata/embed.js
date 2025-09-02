const domain = process.argv[2];
if(!domain) {
  console.error('No domain provided. Usage: node embed.js <domain>');
  process.exit(1);
}

const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');

const IMAGE_PATH = path.join(__dirname, `../output/screenshot_${domain}.png`);
const HASH_PATH = path.join(__dirname, `../output/hash_${domain}.txt`);

const hash = fs.readFileSync(HASH_PATH, 'utf8').trim();
const timestamp = new Date().toISOString();
const metadata = `Hash: ${hash}\nTimestamp: ${timestamp}`;

try {
  execSync(`exiftool -overwrite_original -Comment="${metadata}" "${IMAGE_PATH}"`);
} catch(error) {
  console.error('Failed to Embed metadata:', error);
}
