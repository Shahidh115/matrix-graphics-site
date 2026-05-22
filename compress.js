import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function compressHero() {
  console.log("Compressing hero images...");
  const dir = 'src/assets/gallery';
  const files = ['1.jpeg', '2.jpeg', '3.jpeg'];
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const tempPath = path.join(dir, 'temp_' + file);
    
    try {
      await sharp(fullPath)
        .resize(800)
        .jpeg({ quality: 75, progressive: true })
        .toFile(tempPath);
        
      await fs.rename(tempPath, fullPath);
      console.log(`Successfully compressed ${file}`);
    } catch (e) {
      console.error(`Failed to compress ${file}:`, e);
    }
  }
}

compressHero();
