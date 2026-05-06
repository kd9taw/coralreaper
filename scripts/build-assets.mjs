import sharp from 'sharp';
import { mkdir, copyFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const SRC = 'thumbnail.png';
const OUT = 'public';

await mkdir(OUT, { recursive: true });

const meta = await sharp(SRC).metadata();
console.log(`source: ${meta.width}x${meta.height} ${meta.format}`);

await sharp(SRC).resize(512, 512, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } }).png().toFile(`${OUT}/logo.png`);
await sharp(SRC).resize(180, 180, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } }).png().toFile(`${OUT}/apple-touch-icon.png`);
await sharp(SRC).resize(32, 32, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } }).png().toFile(`${OUT}/favicon-32.png`);
await sharp(SRC).resize(16, 16, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } }).png().toFile(`${OUT}/favicon-16.png`);

const ogBg = Buffer.from(
  `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#0A0A0A"/>
    <text x="600" y="555" font-family="Impact, Arial Black, sans-serif" font-size="68" font-weight="900" fill="#F5F5F0" text-anchor="middle" letter-spacing="6">CORAL REAPER</text>
    <text x="600" y="595" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#FF3B6C" text-anchor="middle" letter-spacing="4">PREMIUM AQUACULTURED CORALS</text>
  </svg>`
);
const ogLogo = await sharp(SRC).resize(380, 380, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 0 } }).png().toBuffer();
await sharp(ogBg)
  .composite([{ input: ogLogo, top: 60, left: 410 }])
  .png()
  .toFile(`${OUT}/og-image.png`);

console.log('assets written to public/');
