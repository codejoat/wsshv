const {execSync} = require('child_process');
const path = require('path');
const url = process.argv[2];

if(!url) {
  console.error('No URL provided. Usage: node run.js <URL>');
  process.exit(1);
}

const parsedUrl = new URL(url);
const domain = parsedUrl.hostname.replace(/\./g, '_');

try{
  console.log('Capturing site...');
  execSync(`node capture/puppeteer.js ${url}`, {stdio: 'inherit'});
  
  console.log('Hashing HTML...');
  execSync(`node hash/hash.js ${domain}`, {stdio: 'inherit'});

  console.log('Embedding metadata...');
  execSync(`node metadata/embed.js ${domain}`, {stdio: 'inherit'});

  console.log('Snapshot complete, check output folder.');
} catch(error) {
  console.error('Something went wrong:', error.message);
}
