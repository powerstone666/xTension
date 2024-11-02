// src/contentScript.ts
export default defineContentScript({
  matches: ['https://x.com/*','*://*/*'],
  main() {
    console.log('Content script started.');
  },
});
