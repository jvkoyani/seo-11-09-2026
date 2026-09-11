import Head from 'next/head';
import Link from 'next/link';
import {
  loadIndustries,
  loadServices,
  getIndustryBySlug,
} from '../../lib/data-loader';
import {
  generateIndustryTitle,
  generateIndustryDescription,
} from '../../lib/metaTags';
import {
  generateBreadcrumbSchema,
  serializeSchemas,
} from '../../lib/schema';
import { generateCanonical } from '../../lib/utils';

export default function IndustryHub({ industry, services, canonical, schemas }) {
  return (
    <>
      <Head>
        <title>{generateIndustryTitle(industry)}</title>
        <meta name="description" content={generateIndustryDescription(industry)} />
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
              <li className="text-gray-900 font-semibold">{industry.name}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Digital Marketing Services for {industry.name} Businesses
              </h1>
              <p className="text-xl text-purple-100 mb-6">
                {industry.description} We provide specialized digital marketing solutions tailored to the unique needs of
                {industry.name.toLowerCase()} industry.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
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
              Why {industry.name} Businesses Need Digital Marketing
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              In today's digital world, {industry.name.toLowerCase()} businesses face unique challenges in reaching and
              engaging their target customers. A strong digital presence is essential for staying competitive and driving
              growth.
            </p>

            {/* Services Grid */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Our Services for {industry.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.slice(0, 8).map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}/${industry.slug}`}
                  className="border border-gray-200 rounded-lg p-6 hover:border-purple-600 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>

            {/* Industry Focus */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
              Industry Expertise
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our team specializes in serving {industry.name.toLowerCase()} businesses. We understand your unique
              challenges, competitive landscape, and customer behavior. This deep expertise allows us to develop and
              execute strategies that actually work for your industry.
            </p>

            {/* Success Factors */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Success Factors for {industry.name}
            </h2>
            <ul className="space-y-3">
              {[
                'Deep understanding of industry-specific customer behavior',
                'Knowledge of key challenges and pain points',
                'Proven strategies that work in your market',
                'Access to industry-specific data and insights',
                'Connections with key influencers and thought leaders',
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
        <section className="bg-purple-600 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Your {industry.name} Business
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get a free consultation with our industry experts and discover how digital marketing can drive growth for
              your business.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              Schedule Your Free Consultation
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const industries = loadIndustries();

  return {
    paths: industries.map((industry) => ({
      params: { industry: industry.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const industry = getIndustryBySlug(params.industry);
  const services = loadServices();

  if (!industry) {
    return {
      notFound: true,
    };
  }

  const canonical = generateCanonical(`/${industry.slug}`);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: industry.name, url: `/${industry.slug}` },
  ]);

  const schemas = serializeSchemas([breadcrumbSchema]);

  return {
    props: {
      industry,
      services,
      canonical,
      schemas,
    },
    revalidate: 259200, // ISR: Revalidate every 3 days
  };
}
