import Head from 'next/head';
import Link from 'next/link';
import {
  loadServices,
  loadIndustries,
  loadLocations,
  getServiceBySlug,
  getIndustryBySlug,
  getLocationBySlug,
} from '../../../lib/data-loader';
import {
  generateMetaTitle,
  generateMetaDescription,
  generateH1,
  generatePageMeta,
} from '../../../lib/metaTags';
import {
  generateServiceSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  serializeSchemas,
} from '../../../lib/schema';
import { generateCanonical, generateMoneyPageUrl } from '../../../lib/utils';

export default function MoneyPage({ service, industry, location, canonical, schemas }) {
  const title = generateH1(service, industry, location);
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: service.name, url: `/${service.slug}` },
    { name: industry.name, url: `/${industry.slug}` },
    { name: location.name, url: `/${location.slug}` },
  ];

  return (
    <>
      <Head>
        <title>{generateMetaTitle(service, industry, location)}</title>
        <meta name="description" content={generateMetaDescription(service, industry, location)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
        {schemas && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemas }} />}
      </Head>

      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, idx) => (
                <li key={idx}>
                  {idx > 0 && <span className="text-gray-400 mr-2">/</span>}
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="text-gray-900 font-semibold">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.url} className="text-blue-600 hover:text-blue-800">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="bg-blue-500 bg-opacity-50 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.name} in {location.name}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{title}</h1>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Professional {service.name.toLowerCase()} services for {industry.name.toLowerCase()} businesses in{' '}
                {location.name}, {location.state}. Improve your online visibility, rank higher on Google, and get more
                customers.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
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
              Why Choose Our {service.name} Services?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: '✓', title: 'Proven Results', desc: 'Real measurable outcomes for your business' },
                { icon: '✓', title: 'Expert Team', desc: 'Years of experience in {industry.name.toLowerCase()}' },
                { icon: '✓', title: 'Local Focus', desc: `Specialized knowledge of {location.name} market` },
                { icon: '✓', title: 'Transparent Reporting', desc: 'Monthly updates and clear communication' },
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl text-green-600 font-bold">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our {service.name} Process</h2>
            <div className="space-y-6 mb-12">
              {[
                {
                  step: '1',
                  title: 'Discovery & Audit',
                  desc: `We analyze your current online presence and competition in ${location.name}.`,
                },
                {
                  step: '2',
                  title: 'Strategy Development',
                  desc: `We create a custom strategy tailored to ${industry.name.toLowerCase()} businesses.`,
                },
                {
                  step: '3',
                  title: 'Implementation',
                  desc: `We execute the strategy with regular updates and optimization.`,
                },
                {
                  step: '4',
                  title: 'Monitoring & Growth',
                  desc: `Continuous improvement and scaling based on data and results.`,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {service.name} for {industry.name} Businesses
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {industry.name} businesses in {location.name} face unique challenges in the digital marketplace. Our
              specialized {service.name.toLowerCase()} services are designed specifically to address these challenges and
              drive measurable results.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you're looking to increase local visibility, improve your search rankings, or generate more qualified
              leads, our team has the expertise and proven track record to deliver.
            </p>

            {/* FAQ Section */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: `How long does it take to see results from ${service.name.toLowerCase()}?`,
                  a: `Most businesses start seeing results within 60-90 days. However, timelines vary based on competition and current state.`,
                },
                {
                  q: `Why is ${service.name.toLowerCase()} important for ${industry.name.toLowerCase()} businesses?`,
                  a: `In today's digital landscape, customers search online before making purchasing decisions. Strong online visibility directly impacts revenue.`,
                },
                {
                  q: `What makes your approach different?`,
                  a: `We combine deep industry expertise with proven methodologies tailored specifically to ${location.name} market conditions.`,
                },
              ].map((item, idx) => (
                <details key={idx} className="border border-gray-200 rounded-lg p-4">
                  <summary className="font-bold text-gray-900 cursor-pointer hover:text-blue-600">
                    {item.q}
                  </summary>
                  <p className="text-gray-600 mt-4">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation with our {service.name.toLowerCase()} experts and discover how we can help you
              succeed in {location.name}.
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
  const industries = loadIndustries();
  const locations = loadLocations();

  // Seed set: Top 2000 combinations for initial build
  // Rest build on-demand via fallback: 'blocking'
  const seedSize = 2000;
  const paths = [];

  // Build seed combinations
  for (let i = 0; i < Math.min(services.length, 5); i++) {
    for (let j = 0; j < Math.min(industries.length, 10); j++) {
      for (let k = 0; k < Math.min(locations.length, 10); k++) {
        paths.push({
          params: {
            service: services[i].slug,
            industry: industries[j].slug,
            location: locations[k].slug,
          },
        });
      }
    }
  }

  return {
    paths: paths.slice(0, seedSize),
    fallback: 'blocking', // Build remaining pages on-demand
  };
}

export async function getStaticProps({ params }) {
  const service = getServiceBySlug(params.service);
  const industry = getIndustryBySlug(params.industry);
  const location = getLocationBySlug(params.location);

  // Return 404 if any parameter not found
  if (!service || !industry || !location) {
    return {
      notFound: true,
    };
  }

  const canonical = generateCanonical(
    generateMoneyPageUrl(service, industry, location)
  );

  // Generate schema markup
  const serviceSchema = generateServiceSchema(service, industry, location);
  const localBusinessSchema = generateLocalBusinessSchema(location.name, location.state);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: service.name, url: `/${service.slug}` },
    { name: industry.name, url: `/${industry.slug}` },
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
      industry,
      location,
      canonical,
      schemas,
    },
    revalidate: 86400, // ISR: Revalidate daily
  };
}
