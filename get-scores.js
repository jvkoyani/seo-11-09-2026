/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
try {
  const j = JSON.parse(fs.readFileSync('final_audit_v4.report.json', 'utf8'));
  console.log('Performance:', Math.round(j.categories.performance.score * 100));
  console.log('A11y:', Math.round(j.categories.accessibility.score * 100));
  console.log('Best Practices:', Math.round(j.categories['best-practices'].score * 100));
  console.log('SEO:', Math.round(j.categories.seo.score * 100));
  console.log('LCP:', j.audits['largest-contentful-paint'].displayValue);
  console.log('DOM:', j.audits['dom-size'].displayValue);
} catch (e) {
  console.error("Error parsing JSON:", e);
}
