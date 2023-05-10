// background script for blocking ads when using manifest_version 2

// chrome.webRequest.onBeforeRequest.addListener((details) => {
//   const { url } = details;
//   // '*://*.googlesyndication.com/*',
//   // '*://googleads.g.doubleclick.net/*',
//   // '*://adclick.g.doubleclick.net/*',
//   const filters = [
//     'googleadservice',
//     'googlesyndication',
//     'g.doubleclick'
//   ];
//   let cancel = false;
//   for (const filter of filters) {
//     if (url.includes(filter)) {
//       console.log('cancelling : ', url);
//       cancel = true;
//       break;
//     }
//   }
//   return { cancel }
// }, {
//   urls: ['<all_urls>'],
// }, ['blocking']);