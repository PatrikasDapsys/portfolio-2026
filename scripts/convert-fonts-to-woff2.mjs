// One-off helper to compress the DM Sans TTF files to WOFF2.
// Run via `node scripts/convert-fonts-to-woff2.mjs`. The script is intentionally
// not wired into npm scripts; the produced WOFF2 files are committed and this
// file plus the `wawoff2` devDep can be removed after verification.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import wawoff2 from 'wawoff2';

const here = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.resolve(here, '..', 'public', 'fonts', 'dm-sans');

const targets = [
  'DMSans-VariableFont_opsz,wght.ttf',
  'DMSans-Italic-VariableFont_opsz,wght.ttf',
];

for (const ttfName of targets) {
  const ttfPath = path.join(fontsDir, ttfName);
  const ttf = await readFile(ttfPath);
  const woff2 = await wawoff2.compress(ttf);
  const woff2Path = ttfPath.replace(/\.ttf$/, '.woff2');
  await writeFile(woff2Path, woff2);
  console.log(`${ttfName}: ${ttf.byteLength} -> ${woff2.byteLength} bytes`);
}
