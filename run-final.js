/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync, spawn } = require('child_process');

try {
  console.log("Killing port 3000...");
  execSync('npx kill-port 3000', { stdio: 'inherit' });
} catch (e) {
  console.log("Port 3000 already free.");
}

console.log("Starting Next.js production server...");

console.log("Waiting 10 seconds for server to boot...");
setTimeout(() => {
  try {
    console.log("Running lighthouse audit...");
    execSync('npx.cmd lighthouse http://localhost:3000 --output html --output json --output-path ./final_audit_v4.html --quiet --chrome-flags="--headless"', { stdio: 'inherit' });
    console.log("Audit complete. You can view final_audit_v4.html");
  } catch (e) {
    console.error("Lighthouse failed:", e.message);
  }
  
  try {
    console.log("Killing server...");
    execSync('npx kill-port 3000', { stdio: 'ignore' });
  } catch(e) {}
  
  process.exit(0);
}, 10000);
