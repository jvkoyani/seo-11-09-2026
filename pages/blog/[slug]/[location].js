import Head from 'next/head';
import Link from 'next/link';
import {
  loadBlogPosts,
  getBlogPostBySlug,
  loadLocations,
  getLocationBySlug,
  loadServices,
} from '../../../lib/data-loader';
import { generateCanonical } from '../../../lib/utils';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, serializeSchemas } from '../../../lib/schema';

export default function BlogPostLocation({
  post,
  location,
  relatedServices,
  canonical,
  schemas,
}) {
  const title = `${post.title} in ${location.name}`;

  return (
    <>
      <Head>
        <title>{title} | SEO Blog</title>
        <meta
          name="description"
          content={`${post.description} Tailored insights for businesses in ${location.name}, ${location.state}.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        {schemas && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: schemas }}
          />
        )}
      </Head>

      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center space-x-2 text-sm flex-wrap">
              <li>
                <Link href="/" className="text-blue-600 hover:text-blue-800">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                  Blog
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900 font-semibold">{title}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="mb-4 flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-500">
                {post.category}
              </span>
              <span className="text-green-100">{post.readTime} min read</span>
              <span className="text-green-100">
                📍 {location.name}, {location.state}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-xl text-green-100">
              {post.excerpt} Specifically tailored for businesses in {location.name}.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Location-Specific Introduction */}
            <article className="prose prose-lg max-w-none mb-12">
              <div className="bg-green-50 rounded-lg p-8 mb-8 border-l-4 border-green-600">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {post.title} in {location.name}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {post.description} This guide is specifically tailored for businesses operating in {location.name},{' '}
                  {location.state}. We've localized the insights to reflect the unique opportunities and competitive
                  landscape of your market.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why This Matters for {location.name} Businesses
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The {location.name} market presents unique opportunities and challenges. Local businesses that master
                these strategies gain a significant competitive advantage over businesses that use a one-size-fits-all
                approach.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Key Takeaways
              </h2>
              <ul className="space-y-4 mb-12">
                {[
                  `Understand the {location.name} competitive landscape`,
                  `Implement local SEO best practices for your area`,
                  `Build local authority and credibility signals`,
                  `Target local keywords with high buyer intent`,
                  `Connect with local customers through your content`,
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Getting Started in {location.name}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The strategies in this guide are immediately actionable. Start by conducting a local SEO audit
                specific to {location.name}, then develop a strategy that targets your local market's unique
                opportunities and competitive dynamics.
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                <p className="text-gray-800">
                  <strong>Local expertise matters.</strong> Our team has deep experience helping businesses in{' '}
                  {location.name} rank higher and attract more local customers. Get a free consultation tailored to
                  your {location.name} market.
                </p>
              </div>
            </article>

            {/* Local Services */}
            {relatedServices.length > 0 && (
              <div className="mt-12 pt-12 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Services Available in {location.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.slug}/${location.slug}`}
                      className="border border-gray-200 rounded-lg p-4 hover:border-green-600 hover:shadow-lg transition-all"
                    >
                      <h4 className="font-bold text-gray-900">{service.name}</h4>
                      <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <Link href="/blog" className="inline-flex items-center text-green-600 font-bold hover:text-green-800">
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Dominate Search in {location.name}?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Apply these {location.name}-specific strategies to your website, or let our local experts handle it for
              you.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              Get Free {location.name} SEO Audit
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = loadBlogPosts();
  const locations = loadLocations();

  // Seed set: Create paths for top blog-location combinations
  const paths = [];

  for (let i = 0; i < Math.min(posts.length, 5); i++) {
    for (let j = 0; j < Math.min(locations.length, 10); j++) {
      paths.push({
        params: {
          slug: posts[i].slug,
          location: locations[j].slug,
        },
      });
    }
  }

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPostBySlug(params.slug);
  const location = getLocationBySlug(params.location);
  const services = loadServices();

  if (!post || !location) {
    return {
      notFound: true,
    };
  }

  // Get related services
  const relatedServices = services.filter((s) =>
    post.relatedServices.includes(s.slug)
  );

  const canonical = generateCanonical(
    `/blog/${post.slug}/${location.slug}`
  );

  const localBusinessSchema = generateLocalBusinessSchema(
    location.name,
    location.state
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    {
      name: `${post.title} in ${location.name}`,
      url: `/blog/${post.slug}/${location.slug}`,
    },
  ]);

  const schemas = serializeSchemas([
    localBusinessSchema,
    breadcrumbSchema,
  ]);

  return {
    props: {
      post,
      location,
      relatedServices,
      canonical,
      schemas,
    },
    revalidate: 86400, // ISR: Revalidate daily
  };
}
