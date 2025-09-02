# Web Search and SnapShot with HTML Verification (WSSHV)

# Features
    - Captures a screenshot and HTML of webpage
    - Generates a SHA-256 hash of the HTML content
    - Embeds hash and timestamp into png metadata
    - verifies embedded metadata

# Usage
    - node run.js https://example.com/exactpage/ (make sure to use the full url path of the exact page)
    - node verify.js example_com (make sure to just use an underscore, and only example_com from screenshot, not full url, it will produce the hash and timestamp from the metadata)

# Requirements
    - This is set up for use in a Linux terminal
    - Node.js (sudo apt install nodejs npm)
    - Clone repo, then (cd wsshv)
    - Puppeteer (npm install puppeteer) from inside wsshv
    - ExifTool (sudo apt install libimage-exiftool-perl) this must be installed and available in your system's PATH
    - Run the tool

# Example Output
    - The 'output/' folder includes sample screenshots and metadata files from a couple of test runs.
    - Feel free to delete or replace them with your own.
