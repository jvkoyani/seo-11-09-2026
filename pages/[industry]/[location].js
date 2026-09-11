import Head from 'next/head';
import Link from 'next/link';
import {
  loadIndustries,
  loadLocations,
  loadServices,
  getIndustryBySlug,
  getLocationBySlug,
} from '../../lib/data-loader';
import {
  generateMetaTitle,
  generateMetaDescription,
} from '../../lib/metaTags';
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  serializeSchemas,
} from '../../lib/schema';
import { generateCanonical } from '../../lib/utils';

export default function IndustryLocationPage({
  industry,
  location,
  services,
  canonical,
  schemas,
}) {
  const title = `${industry.name} Marketing Services in ${location.name}`;

  return (
    <>
      <Head>
        <title>{title} | Expert Digital Marketing</title>
        <meta
          name="description"
          content={`Professional digital marketing services for ${industry.name.toLowerCase()} businesses in ${location.name}, ${location.state}. Get more customers today.`}
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
                <Link href={`/${industry.slug}`} className="text-blue-600 hover:text-blue-800">
                  {industry.name}
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900 font-semibold">
                {location.name}
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-emerald-100 mb-6">
                Specialized digital marketing solutions for {industry.name.toLowerCase()} businesses in{' '}
                {location.name}, {location.state}. Increase visibility, attract more customers, and grow revenue.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Free Strategy
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition">
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
              Why {industry.name} Businesses in {location.name} Need Digital Marketing
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The {industry.name.toLowerCase()} industry in {location.name} is competitive. Businesses that invest in
              digital marketing reach more customers, build stronger brands, and grow faster than those who don't.
            </p>

            {/* Market Opportunity */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              The {location.name} {industry.name} Market Opportunity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: 'Growing Demand',
                  desc: 'More customers are searching online for {industry.name.toLowerCase()} services in {location.name}.',
                },
                {
                  title: 'Rising Competition',
                  desc: 'Other businesses are investing in digital marketing. Staying competitive is critical.',
                },
                {
                  title: 'Local Advantage',
                  desc: 'Local businesses that dominate online search win the majority of customers.',
                },
                {
                  title: 'Revenue Growth',
                  desc: 'Digital marketing drives qualified leads and revenue for {industry.name.toLowerCase()} businesses.',
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Services for This Industry-Location */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Services for {industry.name} Businesses in {location.name}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We specialize in these digital marketing services for {industry.name.toLowerCase()} businesses:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {services.slice(0, 10).map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}/${industry.slug}/${location.slug}`}
                  className="border border-gray-200 rounded-lg p-4 hover:border-emerald-600 hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                </Link>
              ))}
            </div>

            {services.length > 10 && (
              <p className="text-center text-gray-600 mb-12">
                Plus {services.length - 10} more specialized services...
              </p>
            )}

            {/* Industry-Specific Strategy */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Strategy for {industry.name} in {location.name}
            </h2>
            <div className="space-y-4 mb-12">
              {[
                {
                  step: '1',
                  title: 'Market Analysis',
                  desc: `Deep dive into the ${industry.name.toLowerCase()} market in ${location.name} to understand competition, customer behavior, and opportunities.`,
                },
                {
                  step: '2',
                  title: 'Industry-Specific Strategy',
                  desc: `Develop a customized digital marketing strategy tailored to ${industry.name.toLowerCase()} industry challenges and opportunities.`,
                },
                {
                  step: '3',
                  title: 'Local Optimization',
                  desc: `Optimize your online presence specifically for ${location.name} customers and local search ranking factors.`,
                },
                {
                  step: '4',
                  title: 'Execution & Growth',
                  desc: `Execute the strategy with continuous optimization to maximize leads, customers, and revenue.`,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 pb-6 border-b border-gray-200 last:border-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Success Factors */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Makes Us Successful with {industry.name} Businesses
            </h2>
            <ul className="space-y-3">
              {[
                `Deep expertise in the ${industry.name.toLowerCase()} industry`,
                `Understanding of ${location.name} market dynamics and competition`,
                `Proven track record with ${industry.name.toLowerCase()} businesses`,
                `Industry-specific keyword research and SEO strategy`,
                `Local market knowledge and connections`,
                `Results-driven approach focused on your revenue`,
              ].map((factor, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-600">{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-emerald-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Dominate {industry.name} in {location.name}?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Get a free digital marketing strategy consultation tailored to your {industry.name.toLowerCase()}{' '}
              business in {location.name}.
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              Schedule Your Free Strategy Session
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const industries = loadIndustries();
  const locations = loadLocations();

  // Seed set: Top industry-location combinations
  const seedPaths = [];

  for (let i = 0; i < Math.min(industries.length, 15); i++) {
    for (let j = 0; j < Math.min(locations.length, 10); j++) {
      seedPaths.push({
        params: {
          industry: industries[i].slug,
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
  const industry = getIndustryBySlug(params.industry);
  const location = getLocationBySlug(params.location);
  const services = loadServices();

  if (!industry || !location) {
    return {
      notFound: true,
    };
  }

  const canonical = generateCanonical(`/${industry.slug}/${location.slug}`);

  const localBusinessSchema = generateLocalBusinessSchema(location.name, location.state);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: industry.name, url: `/${industry.slug}` },
    { name: location.name, url: `/${location.slug}` },
  ]);

  const schemas = serializeSchemas([localBusinessSchema, breadcrumbSchema]);

  return {
    props: {
      industry,
      location,
      services,
      canonical,
      schemas,
    },
    revalidate: 86400, // ISR: Revalidate daily
  };
}
