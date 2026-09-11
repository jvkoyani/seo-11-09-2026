import { loadBlogPosts } from '../lib/data-loader';
import { generateCanonical } from '../lib/utils';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${generateCanonical('/blog')}</loc>
       <changefreq>hourly</changefreq>
       <priority>0.9</priority>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
         <loc>${generateCanonical(`/blog/${slug}`)}</loc>
         <changefreq>daily</changefreq>
         <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // This component is not rendered, only the XML is returned
}

export async function getServerSideProps({ res }) {
  const posts = loadBlogPosts();

  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // Cache for 1 hour
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
