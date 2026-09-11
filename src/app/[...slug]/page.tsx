import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import CountryCities from '@/components/CountryCities';
import LocationService from '@/components/LocationService';
import State from '@/components/State';
import County from '@/components/County';
import LocationPageTemplate from '@/components/LocationPageTemplate';
import { isValidCity, getCity } from '@/lib/masterCities';
import { injectCity, deepInjectCity, formatCityName } from '@/lib/inject';
import { services, industries } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';
import Link from 'next/link';

type Props = {
    params: Promise<{ slug: string[] }>;
};

// Parse service-for-industry-in-city pattern
function parseServiceIndustryCity(slug: string): { service: typeof services[0], industry: typeof industries[0], citySlug: string } | null {
    // Pattern: {service-slug}-for-{industry-slug}-in-{city-slug}
    const forIndex = slug.indexOf('-for-');
    const inIndex = slug.lastIndexOf('-in-');

    if (forIndex === -1 || inIndex === -1 || inIndex <= forIndex) return null;

    const serviceSlug = slug.substring(0, forIndex);
    const industrySlug = slug.substring(forIndex + 5, inIndex);
    const citySlug = slug.substring(inIndex + 4);

    const service = services.find(s => s.slug === serviceSlug);
    const industry = industries.find(i => i.slug === industrySlug);

    if (!service || !industry || !isValidCity(citySlug)) return null;

    return { service, industry, citySlug };
}

// Parse service-for-industry pattern (Global/National)
function parseServiceIndustry(slug: string): { service: typeof services[0], industry: typeof industries[0] } | null {
    // Pattern: {service-slug}-for-{industry-slug}
    const forIndex = slug.indexOf('-for-');

    if (forIndex === -1) return null;

    const serviceSlug = slug.substring(0, forIndex);
    const industrySlug = slug.substring(forIndex + 5);

    const service = services.find(s => s.slug === serviceSlug);
    const industry = industries.find(i => i.slug === industrySlug);

    if (!service || !industry) return null;

    return { service, industry };
}

// Parse industry-in-city pattern (defaults to local-seo service)
function parseIndustryInCity(slug: string): { service: typeof services[0], industry: typeof industries[0], citySlug: string } | null {
    // Pattern: {industry-slug}-in-{city-slug}
    const inIndex = slug.lastIndexOf('-in-');

    if (inIndex === -1) return null;

    const industrySlug = slug.substring(0, inIndex);
    const citySlug = slug.substring(inIndex + 4);

    const industry = industries.find(i => i.slug === industrySlug);
    // Default to local-seo service for this pattern
    const service = services.find(s => s.slug === 'local-seo');

    if (!service || !industry || !isValidCity(citySlug)) return null;

    return { service, industry, citySlug };
}

// Allow dynamic rendering of any valid path not pre-generated at build time
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    if (slug.length !== 1) return { title: 'Page Not Found' };

    // Check for service-for-industry-in-city pattern
    const parsed = parseServiceIndustryCity(slug[0]);
    if (parsed) {
        const city = getCity(parsed.citySlug);
        const cityName = city?.name || formatCityName(parsed.citySlug);
        return {
            title: injectCity(`${parsed.service.title} for ${parsed.industry.title} in {{city}} | Expert SEO`, parsed.citySlug, cityName),
            description: injectCity(`Specialized ${parsed.service.title} for ${parsed.industry.title} businesses in {{city}}. Tailored strategies to help you outrank competitors and get more clients. Free audit.`, parsed.citySlug, cityName),
        };
    }

    // Check for service-for-industry pattern (Global/National)
    const parsedServiceIndustry = parseServiceIndustry(slug[0]);
    if (parsedServiceIndustry) {
        return {
            title: `${parsedServiceIndustry.service.title} for ${parsedServiceIndustry.industry.title} | Expert Agency`,
            description: `Specialized ${parsedServiceIndustry.service.title} strategies for ${parsedServiceIndustry.industry.title}. We understand your niche and deliver measurable growth. Get a free proposal.`,
        };
    }

    // Check for industry-in-city pattern
    const parsedIndustry = parseIndustryInCity(slug[0]);
    if (parsedIndustry) {
        const city = getCity(parsedIndustry.citySlug);
        const cityName = city?.name || formatCityName(parsedIndustry.citySlug);
        return {
            title: injectCity(`${parsedIndustry.industry.title} SEO {{city}} | Specialized Agency`, parsedIndustry.citySlug, cityName),
            description: injectCity(`Dominate the {{city}} market with our specialized SEO for ${parsedIndustry.industry.title}. We understand your niche and deliver measurable growth. Get a free proposal.`, parsedIndustry.citySlug, cityName),
        };
    }

    // City page metadata
    const city = getCity(slug[0]);
    if (city) {
        return {
            title: injectCity(`SEO Services {{city}} | #1 Rated Agency`, city.slug, city.name),
            description: injectCity(`Top-rated SEO services in {{city}}. We help local businesses rank #1 on Google and drive more revenue. Get your free SEO audit today.`, city.slug, city.name),
        };
    }

    return { title: 'Page Not Found' };
}

// Service-Industry-City Page Component
import ServiceIndustryLocation from '@/components/ServiceIndustryLocation';
import IndustryLocationPageTemplate from '@/components/IndustryLocationPageTemplate';
import { caseStudyTemplates } from '@/lib/data';

function ServiceIndustryCityPage({ service, industry, citySlug }: { service: typeof services[0], industry: typeof industries[0], citySlug: string }) {
    const city = getCity(citySlug);
    if (!city) return notFound();

    // Remove icon component to avoid serialization error
    const { ...serializedIndustry } = industry;
    const injectedCaseStudies = deepInjectCity(caseStudyTemplates, citySlug, city.name);

    return (
        <ServiceIndustryLocation
            service={service}
            industry={serializedIndustry}
            cityName={city.name}
            locationSlug={citySlug}
            injectedCaseStudies={injectedCaseStudies as any[]}
        />
    );
}

import { getCatchAllPaths } from '@/lib/route-utils';

export async function generateStaticParams() {
    // Only pre-build the australia country page. All other paths render dynamically on-demand.
    return [{ slug: ['australia'] }];
}

export default async function CatchAllPage({ params }: Props) {

    const { slug } = await params;

    // Case 1: Country/State/County routes (australia/...)
    if (slug[0].toLowerCase() === 'australia') {
        if (slug.length === 1) return <CountryCities />;
        if (slug.length === 2) return <State countrySlug={slug[0]} stateSlug={slug[1]} />;
        if (slug.length === 3) return <County countrySlug={slug[0]} stateSlug={slug[1]} countySlug={slug[2]} />;
    }

    // Case 2: Single segment routes
    if (slug.length === 1) {
        const singleSlug = slug[0];

        // 2a. Check for service-for-industry-in-city pattern
        const parsed = parseServiceIndustryCity(singleSlug);
        if (parsed) {
            // Redirect to new structure: /areas-we-serve/[city]/[industry]/[service]
            // Strip -seo from industry slug
            const shortIndustrySlug = parsed.industry.slug.replace('-seo', '');
            redirect(`/areas-we-serve/${parsed.citySlug}/${shortIndustrySlug}/${parsed.service.slug}`);
        }

        // 2b. Check for service-for-industry pattern (Global/National)
        const parsedServiceIndustry = parseServiceIndustry(singleSlug);
        if (parsedServiceIndustry) {
            // Remove icon component to avoid serialization error
            const { ...serializedIndustry } = parsedServiceIndustry.industry;

            // Reuse ServiceIndustryLocation but without city context
            // Or use a new template. For now, we can adapt ServiceIndustryLocation or use IndustryLocationPageTemplate
            // Let's use ServiceIndustryLocation and pass "Australia" as location
            return (
                <ServiceIndustryLocation
                    service={parsedServiceIndustry.service}
                    industry={serializedIndustry}
                    cityName="Australia"
                    locationSlug="australia"
                />
            );
        }

        // 2b. Check for industry-in-city pattern
        const parsedIndustry = parseIndustryInCity(singleSlug);
        if (parsedIndustry) {
            // Remove icon component to avoid serialization error
            const { ...serializedIndustry } = parsedIndustry.industry;

            return <IndustryLocationPageTemplate industryData={serializedIndustry} locationData={{
                id: parsedIndustry.citySlug,
                name: getCity(parsedIndustry.citySlug)?.name || parsedIndustry.citySlug,
                slug: parsedIndustry.citySlug,
                state: 'Australia',
                country: 'Australia',
                image: '/placeholder.svg',
                description: `Specialized ${parsedIndustry.industry.title} services in ${getCity(parsedIndustry.citySlug)?.name}`,
                metaTitle: `${parsedIndustry.industry.title} in ${getCity(parsedIndustry.citySlug)?.name}`,
                metaDescription: `Specialized ${parsedIndustry.industry.title} services in ${getCity(parsedIndustry.citySlug)?.name}`
            }} />;
        }

        // 2c. Check if slug is a city (e.g., /sydney)
        if (isValidCity(singleSlug)) {
            redirect(`/areas-we-serve/${singleSlug}`);
        }

        // 2d. Check for service-city pattern (e.g., /local-seo-sydney) and redirect to new structure
        for (const service of services) {
            if (singleSlug.startsWith(service.slug + '-')) {
                const citySlug = singleSlug.substring(service.slug.length + 1);
                if (isValidCity(citySlug)) {
                    redirect(`/areas-we-serve/${citySlug}/${service.slug}`);
                }
            }
            if (singleSlug.endsWith('-' + service.slug)) {
                const citySlug = singleSlug.substring(0, singleSlug.length - service.slug.length - 1);
                if (isValidCity(citySlug)) {
                    redirect(`/areas-we-serve/${citySlug}/${service.slug}`);
                }
            }
        }
    }

    return notFound();
}
