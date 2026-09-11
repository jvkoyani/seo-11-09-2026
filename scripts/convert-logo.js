/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'public', 'logo.png');
const outputPath = path.join(__dirname, '..', 'public', 'logo.webp');

sharp(inputPath)
  .resize(492, 140, {
    fit: 'inside',
    withoutEnlargement: true
  })
  .webp({ quality: 85 })
  .toFile(outputPath)
  .then(info => {
    console.log('Logo converted successfully:', info);
  })
  .catch(err => {
    console.error('Error converting logo:', err);
    process.exit(1);
  });
