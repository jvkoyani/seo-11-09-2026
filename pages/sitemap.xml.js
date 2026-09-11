import { loadServices, loadLocations, loadIndustries } from '../lib/data-loader';

function generateSiteMap() {
  const services = loadServices();
  const industries = loadIndustries();
  const locations = loadLocations();

  // Calculate approximate page counts for memory estimation
  const serviceHubsCount = services.length;
  const industryHubsCount = industries.length;
  const locationHubsCount = locations.length;
  const serviceLocationCount = services.length * locations.length;
  const serviceIndustryCount = services.length * industries.length;
  const industryLocationCount = industries.length * locations.length;
  const moneyPagesCount = services.length * industries.length * locations.length;

  const baseUrl = 'https://seo-11-09-2026.vercel.app';

  // Sitemap index template
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Tier 1: Hub Pages -->
  <sitemap>
    <loc>${baseUrl}/sitemap-homepage.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>

  <sitemap>
    <loc>${baseUrl}/sitemap-services.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>

  <sitemap>
    <loc>${baseUrl}/sitemap-industries.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>

  <sitemap>
    <loc>${baseUrl}/sitemap-locations.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>

  <!-- Tier 2: Combination Pages -->
  <sitemap>
    <loc>${baseUrl}/sitemap-service-location.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>

  <sitemap>
    <loc>${baseUrl}/sitemap-service-industry.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>

  <sitemap>
    <loc>${baseUrl}/sitemap-industry-location.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>

  <!-- Tier 3: Money Pages (Split into multiple files for Google's 50K limit) -->
  <!-- Each file covers roughly 10K URLs -->
  <sitemap>
    <loc>${baseUrl}/sitemap-money-pages-1.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>

  <sitemap>
    <loc>${baseUrl}/sitemap-money-pages-2.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>

  <sitemap>
    <loc>${baseUrl}/sitemap-money-pages-3.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>

  <sitemap>
    <loc>${baseUrl}/sitemap-money-pages-4.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

  return xml;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
