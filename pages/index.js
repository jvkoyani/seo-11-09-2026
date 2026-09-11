import Head from 'next/head';
import Link from 'next/link';
import { loadServices, loadLocations, loadIndustries } from '../lib/data-loader';
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  serializeSchemas,
} from '../lib/schema';
import { generateCanonical } from '../lib/utils';

export default function Home({ services, locations, industries, schemas }) {
  return (
    <>
      <Head>
        <title>Professional Digital Marketing & SEO Services Australia | Expert Solutions</title>
        <meta
          name="description"
          content="Professional digital marketing & SEO services across Australia. Rank higher, get more customers, grow your business. Free consultation available."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={generateCanonical('/')} />
        {schemas && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemas }} />}
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Digital Marketing & SEO Services Across Australia
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Rank higher on Google, get more customers, and grow your business with proven digital marketing and SEO
                strategies from industry experts.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
                  Get Free Audit
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.slice(0, 8).map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800">
                View All {services.length} Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.slice(0, 8).map((industry) => (
                <Link
                  key={industry.id}
                  href={`/${industry.slug}`}
                  className="border border-gray-200 rounded-lg p-6 bg-white hover:border-blue-600 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/industries" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800">
                View All {industries.length} Industries →
              </Link>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Serving These Australian Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {locations.slice(0, 12).map((location) => (
                <Link
                  key={location.id}
                  href={`/${location.slug}`}
                  className="border border-gray-200 rounded-lg p-4 bg-white hover:border-blue-600 hover:shadow transition text-center"
                >
                  <h3 className="font-semibold text-gray-900">{location.name}</h3>
                  <p className="text-gray-500 text-sm">{location.state}</p>
                </Link>
              ))}
            </div>
            {locations.length > 12 && (
              <div className="text-center mt-12">
                <Link href="/locations" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800">
                  View All {locations.length} Locations →
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 md:py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-center">Read Our Latest Articles</h2>
            <p className="text-xl text-slate-300 mb-12 text-center max-w-2xl mx-auto">
              Learn proven SEO strategies, digital marketing tips, and industry insights from our expert team.
            </p>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
              >
                Explore Our Blog →
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Proven Results',
                  desc: 'Real, measurable results for your business. We focus on ROI, not vanity metrics.',
                },
                {
                  title: 'Industry Expertise',
                  desc: 'Deep knowledge of different industries and market dynamics across Australia.',
                },
                {
                  title: 'Local Market Knowledge',
                  desc: 'Understanding of local competition and consumer behavior in each location.',
                },
                {
                  title: 'Transparent Communication',
                  desc: 'Clear reporting and regular updates on your campaigns and progress.',
                },
                {
                  title: 'Scalable Solutions',
                  desc: 'Services designed to grow with your business from startup to enterprise.',
                },
                {
                  title: '24/7 Support',
                  desc: 'Dedicated support team ready to help you succeed.',
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Grow Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a free consultation with our experts and discover how digital marketing can transform your business.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition text-lg">
              Schedule Your Free Consultation
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-white mb-4">Services</h3>
                <ul className="space-y-2">
                  {services.slice(0, 5).map((service) => (
                    <li key={service.id}>
                      <Link href={`/${service.slug}`} className="hover:text-white transition">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Industries</h3>
                <ul className="space-y-2">
                  {industries.slice(0, 5).map((industry) => (
                    <li key={industry.id}>
                      <Link href={`/${industry.slug}`} className="hover:text-white transition">
                        {industry.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Locations</h3>
                <ul className="space-y-2">
                  {locations.slice(0, 5).map((location) => (
                    <li key={location.id}>
                      <Link href={`/${location.slug}`} className="hover:text-white transition">
                        {location.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:text-white transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white transition">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Professional Digital Marketing & SEO Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const services = loadServices();
  const industries = loadIndustries();
  const locations = loadLocations();

  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  const schemas = serializeSchemas([organizationSchema, websiteSchema]);

  return {
    props: {
      services,
      industries,
      locations,
      schemas,
    },
    revalidate: 3600, // ISR: Revalidate hourly
  };
}
