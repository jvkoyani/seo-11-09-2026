import { loadServices, loadIndustries, loadLocations } from '../lib/data-loader';

function generateMoneyPagesSitemap1() {
  const services = loadServices();
  const industries = loadIndustries();
  const locations = loadLocations();
  const baseUrl = 'https://seo-11-09-2026.vercel.app';

  const urls = [];

  // Services 0-4 (5 services)
  for (let s = 0; s < Math.min(5, services.length); s++) {
    for (const industry of industries) {
      for (const location of locations) {
        urls.push(`
  <url>
    <loc>${baseUrl}/${services[s].slug}/${industry.slug}/${location.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`);
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

  return xml;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateMoneyPagesSitemap1();

  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=172800');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
