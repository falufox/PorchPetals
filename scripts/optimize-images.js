#!/usr/bin/env node

/**
 * Image Optimization Script for Porch Petals
 * 
 * This script helps you process your bouquet photos into the right formats and sizes.
 * 
 * Usage:
 * 1. Place your original photos in a 'source-images' folder
 * 2. Run: node scripts/optimize-images.js
 * 3. Optimized images will be created in the proper folder structure
 * 
 * Requirements:
 * - Install sharp: npm install sharp
 * - Original images should be high quality (1200px+ recommended)
 */

const fs = require('fs');
const path = require('path');

// Check if running in development environment
const isDevEnvironment = () => {
  try {
    require('sharp');
    return true;
  } catch (e) {
    console.log('\n🚀 Image Optimization Script for Porch Petals');
    console.log('================================================\n');
    console.log('To use this script, install sharp:');
    console.log('npm install sharp\n');
    console.log('Then place your bouquet photos in a "source-images" folder and run:');
    console.log('node scripts/optimize-images.js\n');
    console.log('📸 Image Requirements:');
    console.log('- High quality photos (1200px+ recommended)');
    console.log('- Clean, well-lit product shots');
    console.log('- Consistent background (white or kraft paper)');
    console.log('- Name files: "minnie-zinnie.jpg", "biggie-zinnie.jpg", etc.\n');
    return false;
  }
};

if (!isDevEnvironment()) {
  process.exit(0);
}

const sharp = require('sharp');

const SIZES = {
  thumbnail: { width: 300, height: 300 },
  main: { width: 600, height: 600 },
  large: { width: 1200, height: 1200 }
};

const BOUQUETS = [
  { filename: 'minnie-zinnie', folder: 'minnie-zinnie' },
  { filename: 'biggie-zinnie', folder: 'biggie-zinnie' }
];

async function optimizeImages() {
  console.log('🌼 Optimizing Porch Petals Bouquet Images...\n');

  const sourceDir = path.join(process.cwd(), 'source-images');
  const targetDir = path.join(process.cwd(), 'public', 'images', 'bouquets');

  // Check if source directory exists
  if (!fs.existsSync(sourceDir)) {
    console.log('❌ Source images folder not found!');
    console.log(`Please create a "source-images" folder and add your bouquet photos.\n`);
    console.log('Expected files:');
    BOUQUETS.forEach(bouquet => {
      console.log(`- ${bouquet.filename}.jpg (or .jpeg, .png)`);
    });
    return;
  }

  // Process each bouquet
  for (const bouquet of BOUQUETS) {
    console.log(`📸 Processing ${bouquet.filename}...`);

    // Find source image (try different extensions)
    let sourceFile = null;
    const extensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];
    
    for (const ext of extensions) {
      const testPath = path.join(sourceDir, bouquet.filename + ext);
      if (fs.existsSync(testPath)) {
        sourceFile = testPath;
        break;
      }
    }

    if (!sourceFile) {
      console.log(`⚠️  No source image found for ${bouquet.filename}`);
      continue;
    }

    // Create target directory
    const bouquetDir = path.join(targetDir, bouquet.folder);
    fs.mkdirSync(bouquetDir, { recursive: true });

    // Process each size
    for (const [sizeName, dimensions] of Object.entries(SIZES)) {
      try {
        // Generate WebP version
        const webpPath = path.join(bouquetDir, `${bouquet.filename}-${sizeName}.webp`);
        await sharp(sourceFile)
          .resize(dimensions.width, dimensions.height, {
            fit: 'cover',
            position: 'center'
          })
          .webp({ quality: 85 })
          .toFile(webpPath);

        // Generate JPEG fallback
        const jpegPath = path.join(bouquetDir, `${bouquet.filename}-${sizeName}.jpg`);
        await sharp(sourceFile)
          .resize(dimensions.width, dimensions.height, {
            fit: 'cover',
            position: 'center'
          })
          .jpeg({ quality: 85 })
          .toFile(jpegPath);

        console.log(`  ✅ ${sizeName}: ${dimensions.width}x${dimensions.height} (WebP + JPEG)`);
      } catch (error) {
        console.log(`  ❌ Failed to process ${sizeName}: ${error.message}`);
      }
    }
  }

  console.log('\n🎉 Image optimization complete!');
  console.log('\nGenerated files:');
  
  // List generated files
  BOUQUETS.forEach(bouquet => {
    const bouquetDir = path.join(targetDir, bouquet.folder);
    if (fs.existsSync(bouquetDir)) {
      console.log(`\n📁 ${bouquet.folder}/`);
      const files = fs.readdirSync(bouquetDir);
      files.forEach(file => {
        if (file !== 'README.md') {
          const stats = fs.statSync(path.join(bouquetDir, file));
          const sizeKB = Math.round(stats.size / 1024);
          console.log(`   ${file} (${sizeKB}KB)`);
        }
      });
    }
  });

  console.log('\n✨ Your bouquet images are ready to display!');
}

// Run the optimization
optimizeImages().catch(console.error);