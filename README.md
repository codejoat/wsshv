# Web Search and SnapShot with HTML Verification (WSSHV)

# Features
    - Captures a screenshot and HTML of webpage
    - Generates a SHA-256 hash of the HTML content
    - Embeds hash and timestamp into png metadata
    - verifies embedded metadata

# Usage
    - node run.js https://example.com
    - node verify.js example_com   

# Requirements
    - Node.js (sudo apt install nodejs npm)
    - Clone repo, then (cd wsshv)
    - Puppeteer (npm install puppeteer) from inside wsshv
    - ExifTool (sudo apt install libimage-exiftool-perl) this must be installed and available in your system's PATH
    - Run the tool
