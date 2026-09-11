import Head from 'next/head';
import Link from 'next/link';
import {
  loadServices,
  loadIndustries,
  loadLocations,
  getServiceBySlug,
  getIndustryBySlug,
} from '../../lib/data-loader';
import {
  generateMetaTitle,
  generateMetaDescription,
} from '../../lib/metaTags';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  serializeSchemas,
} from '../../lib/schema';
import { generateCanonical } from '../../lib/utils';

export default function ServiceIndustryPage({
  service,
  industry,
  locations,
  canonical,
  schemas,
}) {
  const title = `${service.name} for ${industry.name} Businesses`;

  return (
    <>
      <Head>
        <title>{title} | Expert Services</title>
        <meta
          name="description"
          content={`Professional ${service.name.toLowerCase()} services tailored for ${industry.name.toLowerCase()} businesses. Proven strategies to rank higher and get more customers.`}
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
                <Link href={`/${service.slug}`} className="text-blue-600 hover:text-blue-800">
                  {service.name}
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900 font-semibold">{industry.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-rose-600 to-rose-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-rose-100 mb-6">
                Specialized {service.name.toLowerCase()} services designed specifically for {industry.name.toLowerCase()}{' '}
                businesses. Rank higher, get more customers, and grow your revenue.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-white text-rose-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Free Audit
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition">
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
              {service.name} for {industry.name} Businesses
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {industry.name} businesses have unique needs and challenges. Our specialized {service.name.toLowerCase()}{' '}
              services are designed to address the specific pain points of {industry.name.toLowerCase()} companies and
              drive measurable business results.
            </p>

            {/* Industry-Specific Challenges */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Challenges {industry.name} Businesses Face
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                'High competition in the industry',
                'Need to stand out from competitors',
                'Reaching the right audience online',
                'Building trust and credibility',
                'Converting leads to customers',
                'Tracking ROI on marketing spend',
              ].map((challenge, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span className="text-gray-600">{challenge}</span>
                </div>
              ))}
            </div>

            {/* How We Help */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Our {service.name} Helps {industry.name} Businesses
            </h2>
            <div className="space-y-6 mb-12">
              {[
                {
                  title: 'Competitive Advantage',
                  desc: `We help ${industry.name.toLowerCase()} businesses outrank competitors and dominate their market segment.`,
                },
                {
                  title: 'Industry Expertise',
                  desc: `Our team understands the ${industry.name.toLowerCase()} industry deeply and knows what works.`,
                },
                {
                  title: 'Targeted Approach',
                  desc: `We target the exact customers your ${industry.name.toLowerCase()} business needs to reach.`,
                },
                {
                  title: 'Measurable Results',
                  desc: `Clear metrics and reporting so you know exactly what ${service.name.toLowerCase()} is delivering.`,
                },
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-rose-600 pl-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* By Location */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {service.name} for {industry.name} by Location
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We provide ${service.name.toLowerCase()} services for {industry.name.toLowerCase()} businesses across
              Australia:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.slice(0, 12).map((location) => (
                <Link
                  key={location.id}
                  href={`/${service.slug}/${industry.slug}/${location.slug}`}
                  className="border border-gray-200 rounded-lg p-4 hover:border-rose-600 hover:shadow-lg transition text-center"
                >
                  <h3 className="font-semibold text-gray-900">{location.name}</h3>
                  <p className="text-gray-500 text-sm">{location.state}</p>
                </Link>
              ))}
            </div>

            {locations.length > 12 && (
              <p className="text-center text-gray-600 mt-8">
                And {locations.length - 12} more locations across Australia...
              </p>
            )}

            {/* Success Factors */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Why {industry.name} Businesses Choose Us
            </h2>
            <ul className="space-y-3">
              {[
                `Proven expertise in ${service.name.toLowerCase()} for ${industry.name.toLowerCase()} industry`,
                `Track record of success with ${industry.name.toLowerCase()} clients`,
                `Understanding of industry-specific challenges and opportunities`,
                `Transparent communication and regular reporting`,
                `Dedicated account management`,
                `Commitment to your long-term success`,
              ].map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-gray-600">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-rose-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Dominate with {service.name}?
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Get a free {service.name.toLowerCase()} consultation with our {industry.name.toLowerCase()} experts.
            </p>
            <button className="bg-white text-rose-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
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

  // Seed set: Top service-industry combinations
  const seedPaths = [];

  for (let i = 0; i < Math.min(services.length, 10); i++) {
    for (let j = 0; j < Math.min(industries.length, 10); j++) {
      seedPaths.push({
        params: {
          service: services[i].slug,
          industry: industries[j].slug,
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
  const industry = getIndustryBySlug(params.industry);
  const locations = loadLocations();

  if (!service || !industry) {
    return {
      notFound: true,
    };
  }

  const canonical = generateCanonical(`/${service.slug}/${industry.slug}`);

  const serviceSchema = generateServiceSchema(service, industry, null);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: service.name, url: `/${service.slug}` },
    { name: industry.name, url: `/${industry.slug}` },
  ]);

  const schemas = serializeSchemas([serviceSchema, breadcrumbSchema]);

  return {
    props: {
      service,
      industry,
      locations,
      canonical,
      schemas,
    },
    revalidate: 259200, // ISR: Revalidate every 3 days
  };
}
