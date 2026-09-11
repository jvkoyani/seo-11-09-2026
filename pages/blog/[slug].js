import Head from 'next/head';
import Link from 'next/link';
import { loadBlogPosts, getBlogPostBySlug, loadServices, loadIndustries } from '../../lib/data-loader';
import { generateCanonical } from '../../lib/utils';
import { generateBreadcrumbSchema, serializeSchemas } from '../../lib/schema';

export default function BlogPost({
  post,
  relatedServices,
  relatedIndustries,
  canonical,
  schemas,
}) {
  return (
    <>
      <Head>
        <title>{post.title} | SEO Blog</title>
        <meta name="description" content={post.description} />
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
              <li className="text-gray-900 font-semibold">{post.title}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-500">
                {post.category}
              </span>
              <span className="text-blue-100">{post.readTime} min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-blue-100">{post.excerpt}</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Main Content */}
            <article className="prose prose-lg max-w-none mb-12">
              <div className="bg-gray-50 rounded-lg p-8 mb-8 border-l-4 border-blue-600">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{post.description}</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                Key Takeaways
              </h2>
              <ul className="space-y-4 mb-12">
                {[
                  'Implement a data-driven approach to SEO strategy',
                  'Focus on user intent and content relevance',
                  'Optimize for Core Web Vitals and page performance',
                  'Build a strong internal linking strategy',
                  'Track metrics and continuously optimize',
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How to Get Started
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The strategies outlined in this guide are actionable and can be implemented immediately. Start with a
                free SEO audit to understand your current position, then develop a strategy based on your goals and
                competitive landscape.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                <p className="text-gray-800">
                  <strong>Need help implementing these strategies?</strong> Our team of SEO experts can develop a
                  custom strategy for your business. Get a free consultation today.
                </p>
              </div>
            </article>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="mt-12 pt-12 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/${service.slug}`}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-lg transition-all"
                    >
                      <h4 className="font-bold text-gray-900">{service.name}</h4>
                      <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Industries */}
            {relatedIndustries.length > 0 && (
              <div className="mt-12 pt-12 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries That Benefit</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedIndustries.map((industry) => (
                    <Link
                      key={industry.id}
                      href={`/${industry.slug}`}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-lg transition-all"
                    >
                      <h4 className="font-bold text-gray-900">{industry.name}</h4>
                      <p className="text-gray-600 text-sm mt-2">{industry.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your SEO?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Apply these strategies to your website or let our experts handle it for you.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
              Get Free SEO Audit
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = loadBlogPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPostBySlug(params.slug);
  const services = loadServices();
  const industries = loadIndustries();

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related services and industries
  const relatedServices = services.filter((s) =>
    post.relatedServices.includes(s.slug)
  );
  const relatedIndustries = industries.filter((i) =>
    post.relatedIndustries.includes(i.slug)
  );

  const canonical = generateCanonical(`/blog/${post.slug}`);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const schemas = serializeSchemas([breadcrumbSchema]);

  return {
    props: {
      post,
      relatedServices,
      relatedIndustries,
      canonical,
      schemas,
    },
    revalidate: 86400, // ISR: Revalidate daily
  };
}
