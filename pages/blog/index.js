import Head from 'next/head';
import Link from 'next/link';
import { loadBlogPosts } from '../../lib/data-loader';
import { generateCanonical } from '../../lib/utils';
import { generateBreadcrumbSchema, serializeSchemas } from '../../lib/schema';

export default function BlogPage({ posts, canonical, schemas }) {
  return (
    <>
      <Head>
        <title>SEO Blog | Expert Tips & Strategies | Free SEO Resources</title>
        <meta
          name="description"
          content="Read proven SEO strategies, tips, and guides. Learn how to rank higher on Google, increase traffic, and grow your business."
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
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-blue-600 hover:text-blue-800">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900 font-semibold">Blog</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                SEO Blog: Expert Tips, Strategies & Resources
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Learn proven SEO strategies from industry experts. Get actionable tips to rank higher, drive more
                traffic, and grow your business.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-40 flex items-center justify-center">
                    <span className="text-6xl">📝</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime} min read</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA for More Content */}
            <div className="text-center mt-16">
              <p className="text-gray-600 text-lg mb-4">
                Want to get the latest SEO tips delivered?
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Explore Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Free SEO Audit',
                  desc: 'Get a detailed report of your website\'s SEO health.',
                  link: '/seo-audit',
                },
                {
                  title: 'SEO Services',
                  desc: 'Professional SEO strategies to rank higher and grow.',
                  link: '/services',
                },
                {
                  title: 'Contact Us',
                  desc: 'Have questions? Let\'s chat about your SEO goals.',
                  link: '/contact',
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all text-center"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = loadBlogPosts();
  const canonical = generateCanonical('/blog');

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  const schemas = serializeSchemas([breadcrumbSchema]);

  return {
    props: {
      posts,
      canonical,
      schemas,
    },
    revalidate: 3600, // ISR: Revalidate hourly
  };
}
