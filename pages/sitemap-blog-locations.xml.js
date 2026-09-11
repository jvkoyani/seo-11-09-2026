import { loadBlogPosts, loadLocations } from '../lib/data-loader';
import { generateCanonical } from '../lib/utils';

function generateSiteMap(posts, locations) {
  const urls = [];

  // Blog post + location variants
  posts.forEach(post => {
    locations.forEach(location => {
      urls.push(`
       <url>
         <loc>${generateCanonical(`/blog/${post.slug}/${location.slug}`)}</loc>
         <changefreq>daily</changefreq>
         <priority>0.7</priority>
       </url>
     `);
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${urls.join('')}
   </urlset>
 `;
}

function SiteMap() {
  // This component is not rendered, only the XML is returned
}

export async function getServerSideProps({ res }) {
  const posts = loadBlogPosts();
  const locations = loadLocations();

  const sitemap = generateSiteMap(posts, locations);

  res.setHeader('Content-Type', 'text/xml');
  // Cache for 1 day (updates less frequently than homepage)
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
