import Head from 'next/head';
import Link from 'next/link';
import {
  loadLocations,
  loadServices,
  getLocationBySlug,
} from '../../lib/data-loader';
import {
  generateLocationTitle,
  generateLocationDescription,
} from '../../lib/metaTags';
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  serializeSchemas,
} from '../../lib/schema';
import { generateCanonical } from '../../lib/utils';

export default function LocationHub({ location, services, canonical, schemas }) {
  return (
    <>
      <Head>
        <title>{generateLocationTitle(location)}</title>
        <meta name="description" content={generateLocationDescription(location)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        {schemas && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemas }} />}
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
              <li className="text-gray-900 font-semibold">
                {location.name}, {location.state}
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Digital Marketing Services in {location.name}, {location.state}
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Local digital marketing solutions for businesses in {location.name}. Improve your online visibility,
                rank higher locally, and attract more customers.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Free Audit
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
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
              Local Digital Marketing in {location.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Businesses in {location.name}, {location.state} need a strong local digital presence to compete and grow.
              Whether you're a small local business or an established enterprise, our digital marketing services are
              designed to help you succeed locally.
            </p>

            {/* Local Focus */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Why Local Marketing Matters in {location.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                'Reach customers actively searching in your area',
                'Build trust with your local community',
                'Compete with other local businesses',
                'Drive foot traffic to physical locations',
                'Generate qualified local leads',
                'Improve visibility in local search results',
              ].map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span className="text-gray-600">{reason}</span>
                </div>
              ))}
            </div>

            {/* Services */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Services Available in {location.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.slice(0, 10).map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}/${location.slug}`}
                  className="border border-gray-200 rounded-lg p-4 hover:border-green-600 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{service.description}</p>
                </Link>
              ))}
            </div>

            {services.length > 10 && (
              <p className="text-center text-gray-600 mt-8">
                And {services.length - 10} more services...
              </p>
            )}

            {/* Location Info */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              About {location.name}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {location.name} is a thriving city in {location.state} with a diverse business community. Our team has
              deep expertise in the {location.name} market and understands the unique needs and opportunities for
              businesses in this area.
            </p>

            {/* Market Insights */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {location.name} Market Insights
            </h2>
            <ul className="space-y-3">
              {[
                'Local market competition and dynamics',
                'Trending keywords and search behaviors',
                'Local consumer preferences and pain points',
                'Seasonal trends affecting {location.name} businesses',
                'Local partnerships and networking opportunities',
              ].map((insight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span className="text-gray-600">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your {location.name} Business?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free consultation with our local digital marketing experts and discover how we can help your business
              succeed in {location.name}.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              Schedule Your Free Consultation
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const locations = loadLocations();

  return {
    paths: locations.map((location) => ({
      params: { location: location.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const location = getLocationBySlug(params.location);
  const services = loadServices();

  if (!location) {
    return {
      notFound: true,
    };
  }

  const canonical = generateCanonical(`/${location.slug}`);

  const localBusinessSchema = generateLocalBusinessSchema(location.name, location.state);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: `${location.name}, ${location.state}`, url: `/${location.slug}` },
  ]);

  const schemas = serializeSchemas([localBusinessSchema, breadcrumbSchema]);

  return {
    props: {
      location,
      services,
      canonical,
      schemas,
    },
    revalidate: 604800, // ISR: Revalidate weekly
  };
}
