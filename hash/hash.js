const domain = process.argv[2];
if(!domain) {
  console.error('No domain provided. Usage: node hash.js <domain>');
  process.exit(1);
}

const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const HTML_PATH = path.join(__dirname, `../output/html_${domain}.html`);
const HASH_PATH = path.join(__dirname, `../output/hash_${domain}.txt`);

const html = fs.readFileSync(HTML_PATH, 'utf8');
const hash = crypto.createHash('sha256').update(html).digest('hex');

fs.writeFileSync(HASH_PATH, hash);
console.log('Hash generated:', hash);
