import { loadIndustries } from '../lib/data-loader';

function generateIndustrySitemap() {
  const industries = loadIndustries();
  const baseUrl = 'https://seo-11-09-2026.vercel.app';

  const industryMaps = industries
    .map((industry) => {
      return `
  <url>
    <loc>${baseUrl}/${industry.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${industryMaps}
</urlset>`;

  return xml;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateIndustrySitemap();

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
