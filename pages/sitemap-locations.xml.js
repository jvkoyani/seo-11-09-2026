import { loadLocations } from '../lib/data-loader';

function generateLocationSitemap() {
  const locations = loadLocations();
  const baseUrl = 'https://seo-11-09-2026.vercel.app';

  const locationMaps = locations
    .map((location) => {
      return `
  <url>
    <loc>${baseUrl}/${location.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locationMaps}
</urlset>`;

  return xml;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateLocationSitemap();

  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=604800, stale-while-revalidate=1209600');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
