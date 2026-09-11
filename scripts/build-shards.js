/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const TOTAL_SHARDS = process.env.TOTAL_SHARDS || 20; // Default to 20 shards
const DIST_DIR = path.join(__dirname, '../dist');
const OUT_DIR = path.join(__dirname, '../out');

// Ensure dist directory exists
if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR);

console.log(`Starting sharded build with ${TOTAL_SHARDS} shards...`);

for (let i = 1; i <= TOTAL_SHARDS; i++) {
    console.log(`\n--- Building Shard ${i}/${TOTAL_SHARDS} ---\n`);

    try {
        // Run build for current shard
        execSync('npm run build', {
            stdio: 'inherit',
            env: {
                ...process.env,
                BUILD_SHARD_INDEX: i.toString(),
                BUILD_TOTAL_SHARDS: TOTAL_SHARDS.toString(),
                // Ensure we don't clear the previous build artifacts if Next.js tries to
                // But Next.js 'export' usually clears 'out'. We handle merging manually.
            }
        });

        // Merge 'out' to 'dist'
        console.log(`Merging shard ${i} to dist...`);
        copyRecursiveSync(OUT_DIR, DIST_DIR);

        // Clean 'out' for next run (optional, Next.js does it usually)
        // fs.rmSync(OUT_DIR, { recursive: true, force: true });

    } catch (error) {
        console.error(`Error building shard ${i}:`, error);
        process.exit(1);
    }
}

console.log('\n--- Build Complete! ---\n');
console.log(`Final output is in: ${DIST_DIR}`);

// Helper to copy recursively
function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest);
        }

        fs.readdirSync(src).forEach(childItemName => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}
