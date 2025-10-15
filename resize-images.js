const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'img');
const outDir = path.join(__dirname, 'optimized_img');
const sizes = [320, 600, 900];
const bannerSizes = [900, 1400, 2000];

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => {
  const lower = f.toLowerCase();
  return lower.endsWith('.jpg') && !lower.startsWith('img') && !lower.includes('-320') && !lower.includes('-600') && !lower.includes('-900') && f !== 'banner.jpg';
});

(async () => {
  for (const file of files) {
    const name = path.parse(file).name;
    const ext = path.parse(file).ext;
    const srcPath = path.join(srcDir, file);
    for (const w of sizes) {
      const outJpg = path.join(outDir, `${name}-${w}${ext}`);
      const outWebp = path.join(outDir, `${name}-${w}.webp`);
      try {
        await sharp(srcPath)
          .resize({ width: w })
          .jpeg({ quality: 80 })
          .toFile(outJpg);
        await sharp(srcPath)
          .resize({ width: w })
          .webp({ quality: 80 })
          .toFile(outWebp);
        console.log(`Wrote ${outJpg}`);
        console.log(`Wrote ${outWebp}`);
      } catch (err) {
        console.error(`Error processing ${file} -> ${name}-${w}:`, err.message);
      }
    }
  }

  const bannerPath = path.join(srcDir, 'banner.jpg');
  if (fs.existsSync(bannerPath)){
    for (const w of bannerSizes){
      const outJpg = path.join(outDir, `banner-${w}.jpg`);
      const outWebp = path.join(outDir, `banner-${w}.webp`);
      try {
        await sharp(bannerPath).resize({ width: w }).jpeg({ quality: 82 }).toFile(outJpg);
        await sharp(bannerPath).resize({ width: w }).webp({ quality: 80 }).toFile(outWebp);
        console.log(`Wrote ${outJpg}`);
        console.log(`Wrote ${outWebp}`);
      } catch(err) {
        console.error('Error processing banner:', err.message);
      }
    }
  }
  console.log('Done.');
})();
