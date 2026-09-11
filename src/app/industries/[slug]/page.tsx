import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { industries } from '@/lib/data';
import IndustryLocationPageTemplate from '@/components/IndustryLocationPageTemplate';
import JsonLd from '@/components/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const industry = industries.find(i => i.slug === slug);

    if (!industry) {
        return { title: 'Page Not Found' };
    }

    return {
        title: `${industry.title} SEO Services | Expert Agency for ${industry.title}`,
        description: `Specialized SEO services for ${industry.title} businesses. We understand the unique challenges of the ${industry.title.toLowerCase()} industry and deliver measurable growth.`,
    };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const industry = industries.find(i => i.slug === slug);

    if (!industry) {
        return notFound();
    }

    // Remove icon component to avoid serialization error
    const { ...serializedIndustry } = industry;

    // Create a generic "National" location data object
    const locationData = {
        id: 'australia',
        name: 'Australia',
        slug: 'australia',
        state: 'Australia',
        country: 'Australia',
        image: '/placeholder.svg',
        description: `Specialized SEO services for ${industry.title} across Australia`,
        metaTitle: `${industry.title} SEO Australia`,
        metaDescription: `Specialized ${industry.title} SEO services across Australia.`
    };

    // Generate Schema
    // For a national industry page, we might want a slightly different schema, but LocalBusiness is okay for now
    // or we could use Service schema primarily.
    // Let's use a Service schema for the main offering.
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${industry.title} SEO Services`,
        description: industry.description,
        provider: {
            '@type': 'Organization',
            name: 'SEO Agency', // Should be dynamic from config
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com'
        },
        areaServed: {
            '@type': 'Country',
            name: 'Australia'
        }
    };

    const breadcrumbSchema = generateBreadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        { label: industry.title, href: `/industries/${industry.slug}` }
    ]);
    const schemaString = JSON.stringify([serviceSchema, breadcrumbSchema]);

    return (
        <>
            <JsonLd schemaString={schemaString} />
            <IndustryLocationPageTemplate
                industryData={serializedIndustry}
                locationData={locationData}
            />
        </>
    );
}
