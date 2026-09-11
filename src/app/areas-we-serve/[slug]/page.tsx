import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';
import { isValidCity, getCity } from '@/lib/masterCities';
import { injectCity, deepInjectCity } from '@/lib/inject';
import { caseStudyTemplates } from '@/lib/data';
import { generateLocalBusinessSchema, generateBreadcrumbSchema, serializeSchemas } from '@/lib/schema';

type Props = {
    params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCity(slug);

    if (city) {
        return {
            title: injectCity(`SEO Services {{city}} | #1 Rated Agency`, city.slug, city.name),
            description: injectCity(`Top-rated SEO services in {{city}}. We help local businesses rank #1 on Google and drive more revenue. Get your free SEO audit today.`, city.slug, city.name),
        };
    }

    return { title: 'Page Not Found' };
}

export async function generateStaticParams() {
    const { getBuildCities } = await import('@/lib/route-utils');
    const cities = getBuildCities();
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

export default async function AreaWeServePage({ params }: Props) {
    const { slug } = await params;

    if (!isValidCity(slug)) {
        return notFound();
    }

    const city = getCity(slug);
    if (!city) return notFound();

    const injectedCaseStudies = deepInjectCity(caseStudyTemplates, city.slug, city.name);

    const localBusinessSchema = generateLocalBusinessSchema(city.name);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Areas We Serve', href: '/areas-we-serve' },
        { label: city.name, href: `/areas-we-serve/${city.slug}` }
    ]);
    const schemaString = serializeSchemas([localBusinessSchema, breadcrumbSchema]);

    return (
        <LocationPageTemplate
            locationData={{
                id: city.slug,
                name: city.name,
                slug: city.slug,
                state: 'Australia',
                country: 'Australia',
                image: '/placeholder.svg',
                metaTitle: injectCity(`SEO Services in {{city}}`, city.slug, city.name),
                metaDescription: injectCity(`Professional SEO services in {{city}}`, city.slug, city.name)
            }}
            injectedCaseStudies={injectedCaseStudies as unknown[]}
            schemaString={schemaString}
        />
    );
}
