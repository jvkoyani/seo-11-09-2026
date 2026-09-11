import Head from 'next/head';
import Link from 'next/link';
import {
  loadServices,
  loadLocations,
  loadIndustries,
  getServiceBySlug,
  getLocationBySlug,
} from '../../lib/data-loader';
import {
  generateMetaTitle,
  generateMetaDescription,
} from '../../lib/metaTags';
import {
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  serializeSchemas,
} from '../../lib/schema';
import { generateCanonical, generateServiceLocationUrl } from '../../lib/utils';

export default function ServiceLocationPage({
  service,
  location,
  industries,
  canonical,
  schemas,
}) {
  const title = `${service.name} in ${location.name}`;

  return (
    <>
      <Head>
        <title>{generateMetaTitle(service, null, location)}</title>
        <meta
          name="description"
          content={generateMetaDescription(service, null, location)}
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
              <li>
                <Link href={`/${service.slug}`} className="text-blue-600 hover:text-blue-800">
                  {service.name}
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900 font-semibold">{location.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-indigo-100 mb-6">
                Professional {service.name.toLowerCase()} services in {location.name}, {location.state}.
                Improve your online visibility and get more customers.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {service.name} in {location.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Looking for professional {service.name.toLowerCase()} services in {location.name}? Our team specializes
              in helping {location.name} businesses improve their online presence and achieve their digital marketing
              goals.
            </p>

            {/* Industry Specific Solutions */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              {service.name} Solutions by Industry
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Different industries have different needs. We provide tailored {service.name.toLowerCase()} solutions for:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.slice(0, 8).map((industry) => (
                <Link
                  key={industry.id}
                  href={`/${service.slug}/${industry.slug}/${location.slug}`}
                  className="border border-gray-200 rounded-lg p-4 hover:border-indigo-600 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{industry.description}</p>
                </Link>
              ))}
            </div>

            {industries.length > 8 && (
              <p className="text-center text-gray-600 mt-8">
                And {industries.length - 8} more industries...
              </p>
            )}

            {/* Why Choose Us */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Why Our {service.name} Services?
            </h2>
            <ul className="space-y-3">
              {[
                'Proven expertise in the {location.name} market',
                'Industry-specific knowledge and best practices',
                'Transparent reporting and communication',
                'Measurable results that impact your business',
                'Local support and consultation',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your {location.name} Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Get a free {service.name.toLowerCase()} consultation with our {location.name} experts.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              Schedule Your Free Consultation
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const services = loadServices();
  const locations = loadLocations();

  // Seed set: Top service-location combinations
  const seedPaths = [];

  for (let i = 0; i < Math.min(services.length, 10); i++) {
    for (let j = 0; j < Math.min(locations.length, 10); j++) {
      seedPaths.push({
        params: {
          service: services[i].slug,
          location: locations[j].slug,
        },
      });
    }
  }

  return {
    paths: seedPaths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.service);
  const location = getLocationBySlug(params.location);
  const industries = loadIndustries();

  if (!service || !location) {
    return {
      notFound: true,
    };
  }

  const canonical = generateCanonical(
    generateServiceLocationUrl(service, location)
  );

  const serviceSchema = generateServiceSchema(service, null, location);
  const localBusinessSchema = generateLocalBusinessSchema(
    location.name,
    location.state
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: service.name, url: `/${service.slug}` },
    { name: location.name, url: `/${location.slug}` },
  ]);

  const schemas = serializeSchemas([
    serviceSchema,
    localBusinessSchema,
    breadcrumbSchema,
  ]);

  return {
    props: {
      service,
      location,
      industries,
      canonical,
      schemas,
    },
    revalidate: 86400, // ISR: Revalidate daily
  };
}
