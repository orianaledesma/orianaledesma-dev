const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgBuffer = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#0b1628"/>
  <text x="16" y="22" text-anchor="middle"
    font-family="Arial, sans-serif"
    font-weight="700" font-size="14"
    fill="#5eead4">OL</text>
</svg>`);

async function generate() {
  // Generate PNG sizes needed for ICO
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map(size =>
      sharp(svgBuffer).resize(size, size).png().toBuffer()
    )
  );

  // Save 32x32 PNG for reference
  fs.writeFileSync(path.join('src', 'favicon.png'), pngBuffers[1]);
  console.log('✓ favicon.png (32x32) saved to src/');

  // Build ICO binary manually (PNG-based ICO)
  const ico = buildIco(pngBuffers, sizes);
  fs.writeFileSync(path.join('src', 'favicon.ico'), ico);
  console.log('✓ favicon.ico saved to src/ with sizes:', sizes.join(', '));
}

function buildIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = headerSize + dirEntrySize * count;

  // Calculate offsets
  const offsets = [];
  let offset = dirSize;
  for (const buf of pngBuffers) {
    offsets.push(offset);
    offset += buf.length;
  }

  const totalSize = offset;
  const ico = Buffer.alloc(totalSize);
  let pos = 0;

  // ICONDIR header
  ico.writeUInt16LE(0, pos);      // reserved
  pos += 2;
  ico.writeUInt16LE(1, pos);      // type: 1 = ICO
  pos += 2;
  ico.writeUInt16LE(count, pos);  // image count
  pos += 2;

  // ICONDIRENTRY for each image
  for (let i = 0; i < count; i++) {
    const size = sizes[i];
    ico.writeUInt8(size === 256 ? 0 : size, pos);  // width
    pos += 1;
    ico.writeUInt8(size === 256 ? 0 : size, pos);  // height
    pos += 1;
    ico.writeUInt8(0, pos);   // color count
    pos += 1;
    ico.writeUInt8(0, pos);   // reserved
    pos += 1;
    ico.writeUInt16LE(1, pos); // planes
    pos += 2;
    ico.writeUInt16LE(32, pos); // bit count
    pos += 2;
    ico.writeUInt32LE(pngBuffers[i].length, pos); // size in bytes
    pos += 4;
    ico.writeUInt32LE(offsets[i], pos); // file offset
    pos += 4;
  }

  // Write PNG data
  for (const buf of pngBuffers) {
    buf.copy(ico, pos);
    pos += buf.length;
  }

  return ico;
}

generate().catch(console.error);
