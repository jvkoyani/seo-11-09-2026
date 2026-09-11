"use client";
import Link from 'next/link';

import React, { useEffect } from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';
import { Button } from '@/components/ui/button';
import { services, locations } from '@/lib/data';

interface CountyProps {
    countrySlug: string;
    stateSlug: string;
    countySlug: string;
}

const County = ({ countrySlug, stateSlug, countySlug }: CountyProps) => {
    const router = useRouter();

    const countryName = countrySlug === 'australia' ? 'Australia' : countrySlug;
    const stateFormatted = stateSlug ? stateSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
    const countyFormatted = countySlug ? countySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';

    // Get locations for this county
    const countyLocations = locations.filter(
        location =>
            location.country.toLowerCase() === countrySlug &&
            location.state.toLowerCase().replace(/\s+/g, '-') === stateSlug &&
            location.county?.toLowerCase().replace(/\s+/g, '-') === countySlug
    );

    // If no locations found, redirect to 404
    useEffect(() => {
        if (countyLocations.length === 0) {
            router.push('/not-found');
        }
    }, [countyLocations.length, router]);

    if (countyLocations.length === 0) {
        return null; // Will redirect to 404
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-seo-blue-light/10 to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -right-24 -top-24 w-96 h-96 bg-seo-blue rounded-full"></div>
                    <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-green-400 rounded-full"></div>
                    <div className="absolute left-1/4 bottom-1/2 w-48 h-48 bg-purple-400 rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="mb-4" animation="fade-in">
                        <div className="inline-flex items-center space-x-2">
                            <Link href="/" className="text-seo-gray-dark hover:text-seo-blue transition-colors">
                                Home
                            </Link>
                            <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
                            <a
                                href={`/${countrySlug}`}
                                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
                            >
                                {countryName}
                            </a>
                            <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
                            <a
                                href={`/${countrySlug}/${stateSlug}`}
                                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
                            >
                                {stateFormatted}
                            </a>
                            <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
                            <span className="text-seo-blue font-medium">{countyFormatted}</span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="max-w-3xl" animation="fade-in">
                        <div className="flex items-center mb-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                                <MapPin className="h-4 w-4 mr-1" />
                                {countyFormatted}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                            SEO Services in {countyFormatted}, {stateFormatted}
                        </h1>

                        <p className="text-base text-seo-gray-dark mb-8">
                            Specialized SEO solutions designed specifically for businesses in the {countyFormatted} area. Boost your local visibility and attract more customers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white button-hover-effect">
                                <Link href="/free-consultation" className="flex items-center">
                                    Get a Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                                <Link href="/case-studies">
                                    View Case Studies
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                            Our Coverage
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            Areas We Serve in {countyFormatted}
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            Discover our specialized SEO services in these {countyFormatted} locations
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {countyLocations.map((location, index) => (
                            <AnimatedSection
                                key={location.id}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all"
                                animation="fade-in"
                                delay={index * 100}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={location.image || '/placeholder.svg'}
                                        alt={`SEO services in ${location.name}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4">
                                        <h3 className="text-xl font-bold text-white">
                                            {location.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <p className="text-seo-gray-dark mb-5">
                                        Specialized SEO solutions for businesses in {location.name}, helping you improve online visibility and attract more local customers.
                                    </p>

                                    <a
                                        href={`/areas-we-serve/${location.slug}`}
                                        className="inline-flex items-center justify-center bg-seo-blue text-white px-5 py-3 rounded-md hover:bg-seo-blue-light transition-colors w-full group"
                                    >
                                        <span>SEO Services in {location.name}</span>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-seo-gray-light">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                            Our Services
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            SEO Services Available in {countyFormatted}
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            Comprehensive SEO solutions tailored for businesses in {countyFormatted}
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <AnimatedSection
                                key={service.id}
                                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                                animation="fade-in"
                                delay={index * 100}
                            >
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-seo-gray-dark mb-4">{service.description}</p>

                                {countyLocations[0] && (
                                    <a
                                        href={`/${service.slug}-${countyLocations[0].slug}`}
                                        className="inline-flex items-center text-seo-blue font-medium group"
                                    >
                                        <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                                            {service.title} in {countyFormatted}
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                )}
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <AnimatedSection
                            className="bg-gradient-to-r from-seo-blue to-purple-600 rounded-xl shadow-xl overflow-hidden"
                            animation="fade-in"
                        >
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row md:items-center justify-between">
                                    <div className="mb-8 md:mb-0 md:mr-8">
                                        <h2 className="text-3xl font-bold text-white mb-4">
                                            Ready to dominate {countyFormatted} search results?
                                        </h2>
                                        <p className="text-white/90 text-lg mb-0">
                                            Get a free consultation and discover how our SEO services can help your {countyFormatted} business grow.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link href="/free-consultation">
                                            <Button size="lg" className="bg-white text-seo-blue hover:bg-gray-100 w-full md:w-auto">
                                                Get Started Today
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <CTABanner />
            <Footer />
        </div>
    );
};

export default County;
