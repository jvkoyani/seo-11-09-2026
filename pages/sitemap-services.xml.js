import { loadServices } from '../lib/data-loader';

function generateServiceSitemap() {
  const services = loadServices();
  const baseUrl = 'https://seo-11-09-2026.vercel.app';

  const serviceMaps = services
    .map((service) => {
      return `
  <url>
    <loc>${baseUrl}/${service.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${serviceMaps}
</urlset>`;

  return xml;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateServiceSitemap();

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
