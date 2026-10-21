const fs = require('node:fs');
const path = require('node:path');

// Preserve deployment-specific presets and the existing CSS.
const bundles = [
  "bibi/extensions/unaccessibilizer.js",
  "bibi/extensions/epubcfi.js",
  "bibi/extensions/sanitizer.js",
  "bibi/extensions/analytics.js",
  "bibi/extensions/zine.js",
  "bibi/and/jo.js",
  "bibi/extensions/extractor/at-once.js",
  "bibi/extensions/extractor/on-the-fly.bibi-zip-loader.worker.js",
  "bibi/extensions/extractor/on-the-fly.bibi-zip-loader.worker.alt.js",
  "bibi/extensions/extractor/on-the-fly.js",
  "bibi/resources/scripts/bibi.js",
  "bibi/resources/scripts/polyfills/intersection-observer.js",
  "bibi/resources/scripts/polyfills/bundle.js",
  "bibi/resources/scripts/polyfills/encoding.js"
];
for (const bundle of bundles) {
  fs.copyFileSync(path.join(__dirname, '__dist', bundle), path.join(__dirname, '__src', bundle));
}
console.log(`Updated ${bundles.length} served JavaScript bundles.`);
