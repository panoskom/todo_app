// Packages the built dist/ folder into a zip ready for "Load unpacked".
// Run with `npm run package` (which builds first). The zip has manifest.json
// at its root so the unzipped folder can be loaded directly into Chrome.
import AdmZip from 'adm-zip';
import { existsSync } from 'node:fs';

const DIST = 'dist';
const OUT = 'eisenhower-matrix-extension.zip';

if (!existsSync(DIST)) {
  console.error(`Missing "${DIST}/" — run "npm run build" first.`);
  process.exit(1);
}

const zip = new AdmZip();
// Add the contents of dist/ at the archive root, skipping the .vite build artifact.
zip.addLocalFolder(DIST, '', (entry) => !entry.split(/[\\/]/).includes('.vite'));
zip.writeZip(OUT);

console.log(`Created ${OUT}`);
for (const e of new AdmZip(OUT).getEntries()) console.log('  ' + e.entryName);
