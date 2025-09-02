const {execSync} = require('child_process');
const path = require('path');

const domain = process.argv[2];
if(!domain) {
  console.error('No domain provided. Usage: node verify.js <example_com>');
  process.exit(1);
}

const IMAGE_PATH = path.join(__dirname, `../output/screenshot_${domain}.png`);

try {
  const output = execSync(`exiftool -Comment "${IMAGE_PATH}"`, {encoding: 'utf8'});
  console.log(`Metadata for ${domain}:\n${output}`);
} catch(error) {
  console.error('Failed to read metadata:', error.message);
}
