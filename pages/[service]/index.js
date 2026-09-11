import Head from 'next/head';
import Link from 'next/link';
import {
  loadServices,
  loadLocations,
  getServiceBySlug,
} from '../../lib/data-loader';
import {
  generateServiceTitle,
  generateServiceDescription,
  generateH1,
} from '../../lib/metaTags';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  serializeSchemas,
} from '../../lib/schema';
import { generateCanonical, generateServiceUrl } from '../../lib/utils';

export default function ServiceHub({ service, locations, canonical, schemas }) {
  const title = generateH1(service, null, null);

  return (
    <>
      <Head>
        <title>{generateServiceTitle(service)}</title>
        <meta name="description" content={generateServiceDescription(service)} />
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
              <li className="text-gray-900 font-semibold">{service.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name} Services</h1>
              <p className="text-xl text-blue-100 mb-6">
                {service.description} Serving businesses across Australia with proven, results-driven strategies.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Free Audit
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What is Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is {service.name}?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {service.description} In today's digital landscape, effective {service.name.toLowerCase()} is crucial for
              business success. Our expert team specializes in delivering measurable results that impact your bottom line.
            </p>

            {/* Benefits Grid */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Benefits of Professional {service.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                'Increased Online Visibility',
                'Higher Search Rankings',
                'More Qualified Leads',
                'Better ROI on Marketing',
                'Long-term Sustainable Growth',
                'Expert Guidance & Support',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Service Locations */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {service.name} Services by Location
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We provide {service.name.toLowerCase()} services across Australia:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.slice(0, 12).map((location) => (
                <Link
                  key={location.id}
                  href={`/${service.slug}/${location.slug}`}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-600 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {service.name} in {location.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{location.state}</p>
                </Link>
              ))}
            </div>

            {locations.length > 12 && (
              <p className="text-center text-gray-600 mt-8">
                And {locations.length - 12} more locations across Australia...
              </p>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Professional {service.name}?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and discover how our {service.name.toLowerCase()} services can transform your
              business.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
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

  return {
    paths: services.map((service) => ({
      params: { service: service.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.service);
  const locations = loadLocations();

  if (!service) {
    return {
      notFound: true,
    };
  }

  const canonical = generateCanonical(generateServiceUrl(service));

  // Generate schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'SEO Services Australia',
      url: generateCanonical('/'),
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: service.name, url: `/${service.slug}` },
  ]);

  const schemas = serializeSchemas([serviceSchema, breadcrumbSchema]);

  return {
    props: {
      service,
      locations,
      canonical,
      schemas,
    },
    revalidate: 259200, // ISR: Revalidate every 3 days
  };
}
