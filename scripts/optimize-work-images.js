/**
 * Optimizes case-study images for the Work section.
 *
 * Scans src/assets/images/work/ for .png/.jpg/.jpeg sources and writes an
 * optimized .webp next to each (max width 1200px, quality 80) — same weight
 * profile as exploriando.webp (~50–80KB vs multi-MB raw).
 *
 * Usage: node scripts/optimize-work-images.js
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const DIR = path.join('src', 'assets', 'images', 'work');
const MAX_WIDTH = 1200;
const QUALITY = 80;

async function optimize() {
  if (!fs.existsSync(DIR)) {
    console.error(`✗ Directory not found: ${DIR}`);
    process.exit(1);
  }

  const sources = fs
    .readdirSync(DIR)
    .filter((f) => /\.(png|jpe?g)$/i.test(f));

  if (sources.length === 0) {
    console.warn('No .png/.jpg sources found in', DIR);
    return;
  }

  for (const file of sources) {
    const input = path.join(DIR, file);
    const output = path.join(DIR, file.replace(/\.(png|jpe?g)$/i, '.webp'));

    const { size: rawSize } = fs.statSync(input);
    await sharp(input)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(output);

    const { size: webpSize } = fs.statSync(output);
    const kb = (n) => `${Math.round(n / 1024)}KB`;
    console.log(`✓ ${file} → ${path.basename(output)}  (${kb(rawSize)} → ${kb(webpSize)})`);
  }
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});
