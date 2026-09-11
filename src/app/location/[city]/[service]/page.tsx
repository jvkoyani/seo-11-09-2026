import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { getCity } from '@/lib/masterCities';
import { services } from '@/lib/data';
import LocationService from '@/components/LocationService';

type Props = {
    params: Promise<{ city: string; service: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city, service } = await params;
    const cityData = getCity(city);
    const serviceData = services.find(s => s.slug === service);

    if (!cityData || !serviceData) {
        return { title: 'Page Not Found' };
    }

    return {
        title: `${serviceData.title} ${cityData.name} | #1 Rated Agency`,
        description: `Expert ${serviceData.title} services in ${cityData.name}. Boost your rankings, drive more local traffic, and grow your business. Book your free consultation now.`,
    };
}

import JsonLd from '@/components/JsonLd';
import ServiceLocationPageTemplate from '@/components/ServiceLocationPageTemplate';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { masterCities } from '@/lib/masterCities';

import { getLocationServicePaths } from '@/lib/route-utils';

export const dynamicParams = false;

export async function generateStaticParams() {
    return getLocationServicePaths();
}

export default async function CityServicePage({ params }: Props) {
    const { city, service } = await params;
    redirect(`/areas-we-serve/${city}/${service}`);
}
