"use client";
import Link from 'next/link';

import React, { useEffect } from 'react';

import {
    ArrowRight, MapPin, TrendingUp, BarChart,
    CheckCircle, Award, Target, Star,
    Zap, Globe, Building, ShoppingBag,
    Phone, Lightbulb, FileText, Share2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';
import ResourcesSection from '@/components/ResourcesSection';
import { allAustralianCities } from '@/lib/locationData';
import { services as allServices } from '@/lib/data';
import InfoCard from '@/components/InfoCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import LocationGrid from '@/components/LocationGrid';
import LocationBreadcrumbs from '@/components/LocationBreadcrumbs';
import ServicePricing from '@/components/service/ServicePricing';

const services = [
    { title: "Local SEO", slug: "local-seo" },
    { title: "Technical SEO", slug: "technical-seo" },
    { title: "E-commerce SEO", slug: "ecommerce-seo" },
    { title: "Content Marketing", slug: "content-marketing" },
    { title: "Link Building", slug: "link-building" },
    { title: "SEO Audits", slug: "seo-audits" },
    { title: "Digital PR", slug: "digital-pr" },
    { title: "Analytics & Reporting", slug: "analytics-reporting" }
];

interface LocationServiceProps {
    locationSlug: string;
    serviceSlug: string;
    cityName?: string;
}

const LocationService = ({ locationSlug, serviceSlug, cityName }: LocationServiceProps) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [locationSlug, serviceSlug]);

    const predefinedLocation = allAustralianCities.find(loc => loc.slug === locationSlug);
    const locationName = cityName || predefinedLocation?.name;
    const serviceData = services.find(svc => svc.slug === serviceSlug);
    const fullServiceData = allServices.find(s => s.slug === serviceSlug);

    if (!locationName || !serviceData) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
                        <p className="mb-6">Sorry, the location or service you&apos;re looking for doesn&apos;t exist.</p>
                        <Link href="/" className="inline-flex items-center text-seo-blue font-medium">
                            <span>Return to home</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    // ... (rest of the component) ...

    interface ServiceFeature {
        title: string;
        description: string;
        icon: React.ReactNode;
    }

    interface ServiceInfo {
        title: string;
        description: string;
        benefits: string[];
        features: ServiceFeature[];
    }

    const serviceInfo: Record<string, ServiceInfo> = {
        "local-seo": {
            title: `Local SEO Services in ${locationName}`,
            description: `Boost your business visibility in ${locationName} with our specialized local SEO services designed to attract customers in your area.`,
            benefits: [
                "Higher rankings in local search results",
                "Increased visibility in Google Maps",
                "More phone calls and direction requests",
                "Better targeting of local customers",
                "Improved Google Business Profile performance"
            ],
            features: [
                {
                    title: "Local Keyword Research",
                    description: `We identify the most valuable keywords that ${locationName} residents are using to find businesses like yours.`,
                    icon: <Target className="w-full h-full" />
                },
                {
                    title: "Google Business Profile Optimization",
                    description: "We optimize your GBP to improve your visibility in local searches and Google Maps.",
                    icon: <MapPin className="w-full h-full" />
                },
                {
                    title: "Local Citation Building",
                    description: `We ensure your business information is consistent across all local directories relevant to ${locationName}.`,
                    icon: <Building className="w-full h-full" />
                },
                {
                    title: "Local Content Creation",
                    description: `We develop content specifically targeted to the ${locationName} market and community.`,
                    icon: <FileText className="w-full h-full" />
                }
            ]
        },
        "technical-seo": {
            title: `Technical SEO Services in ${locationName}`,
            description: `Enhance your website's technical foundation with our specialized technical SEO services for ${locationName} businesses.`,
            benefits: [
                "Improved website crawlability and indexing",
                "Faster page load speeds",
                "Enhanced mobile user experience",
                "Fixed technical errors and issues",
                "Better overall search performance"
            ],
            features: [
                {
                    title: "Technical SEO Audit",
                    description: "We perform a comprehensive audit to identify all technical issues affecting your site's performance.",
                    icon: <Zap className="w-full h-full" />
                },
                {
                    title: "Site Speed Optimization",
                    description: "We improve your website's loading speed to enhance user experience and meet Google's Core Web Vitals.",
                    icon: <Globe className="w-full h-full" />
                },
                {
                    title: "Mobile Optimization",
                    description: "We ensure your website provides an excellent experience on all devices, especially mobile.",
                    icon: <Phone className="w-full h-full" />
                },
                {
                    title: "Schema Markup Implementation",
                    description: "We implement structured data to help search engines better understand your content.",
                    icon: <FileText className="w-full h-full" />
                }
            ]
        },
        "ecommerce-seo": {
            title: `E-commerce SEO Services in ${locationName}`,
            description: `Drive more sales and revenue with our specialized e-commerce SEO strategies for ${locationName} online retailers.`,
            benefits: [
                "Higher product and category page rankings",
                "Increased organic traffic to your online store",
                "Better conversion rates from search visitors",
                "Improved product visibility in search results",
                "Enhanced online shopping experience"
            ],
            features: [
                {
                    title: "Product Page Optimization",
                    description: "We optimize your product pages to rank higher in search results and convert more visitors.",
                    icon: <ShoppingBag className="w-full h-full" />
                },
                {
                    title: "Category Page SEO",
                    description: "We structure and optimize your category pages to improve crawlability and user experience.",
                    icon: <Globe className="w-full h-full" />
                },
                {
                    title: "E-commerce Technical SEO",
                    description: "We address technical issues specific to e-commerce sites, such as duplicate content and URL structure.",
                    icon: <Zap className="w-full h-full" />
                },
                {
                    title: "Conversion Rate Optimization",
                    description: "We improve your site's conversion path to turn more visitors into customers.",
                    icon: <TrendingUp className="w-full h-full" />
                }
            ]
        },
        "content-marketing": {
            title: `Content Marketing Services in ${locationName}`,
            description: `Attract and engage your target audience with our strategic content marketing services tailored for ${locationName} businesses.`,
            benefits: [
                "More engaging content that resonates with your audience",
                "Higher rankings for informational keywords",
                "Increased brand authority and trust",
                "More social shares and backlinks",
                "Better audience engagement and retention"
            ],
            features: [
                {
                    title: "Content Strategy Development",
                    description: `We create a comprehensive content strategy aligned with your ${locationName} business goals.`,
                    icon: <Lightbulb className="w-full h-full" />
                },
                {
                    title: "Blog Content Creation",
                    description: "We produce high-quality blog posts that engage your audience and drive organic traffic.",
                    icon: <FileText className="w-full h-full" />
                },
                {
                    title: "Content Optimization",
                    description: "We optimize existing content to improve search visibility and user engagement.",
                    icon: <Target className="w-full h-full" />
                },
                {
                    title: "Content Distribution",
                    description: `We help distribute your content across channels relevant to your ${locationName} audience.`,
                    icon: <Share2 className="w-full h-full" />
                }
            ]
        },
        "default": {
            title: `${serviceData.title} Services in ${locationName}`,
            description: `Boost your online presence with our specialized ${serviceData.title} services designed for businesses in ${locationName}.`,
            benefits: [
                "Higher search engine rankings",
                "Increased organic website traffic",
                "Better ROI compared to paid advertising",
                "Enhanced brand visibility and awareness",
                "Long-term sustainable results"
            ],
            features: [
                {
                    title: "Customized Strategy",
                    description: `We develop a tailored ${serviceData.title} strategy specific to your ${locationName} business needs.`,
                    icon: <Target className="w-full h-full" />
                },
                {
                    title: "Comprehensive Analysis",
                    description: "We perform in-depth analysis to identify opportunities and areas for improvement.",
                    icon: <BarChart className="w-full h-full" />
                },
                {
                    title: "Implementation",
                    description: `We execute all necessary ${serviceData.title} tactics to improve your online presence.`,
                    icon: <Zap className="w-full h-full" />
                },
                {
                    title: "Monitoring and Reporting",
                    description: "We provide regular updates and reports on your campaign's performance.",
                    icon: <FileText className="w-full h-full" />
                }
            ]
        }
    };

    const currentServiceInfo = serviceInfo[serviceSlug] || serviceInfo.default;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <section className="pt-32 pb-20 bg-gradient-to-b from-seo-blue-light/10 to-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -right-24 -top-24 w-96 h-96 bg-seo-blue rounded-full"></div>
                    <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-green-400 rounded-full"></div>
                    <div className="absolute left-1/4 bottom-1/2 w-48 h-48 bg-purple-400 rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="mb-4" animation="fade-in">
                        <LocationBreadcrumbs
                            locationSlug={locationSlug}
                            serviceSlug={serviceData.slug}
                        />
                    </AnimatedSection>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <AnimatedSection className="max-w-2xl" animation="fade-in">
                            <div className="flex items-center mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mr-2">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {locationName}
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                                    <Star className="h-4 w-4 mr-1" />
                                    {serviceData.title} Specialists
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                                {currentServiceInfo.title}
                            </h1>

                            <p className="text-base text-seo-gray-dark mb-8">
                                {currentServiceInfo.description}
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

                        <AnimatedSection animation="fade-in-left" delay={300} className="md:w-1/3">
                            <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-seo-blue to-purple-600 opacity-90"></div>
                                        <div className="p-6 relative z-10">
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                Free {serviceData.title} Audit
                                            </h3>
                                            <p className="text-white/90 mb-4">
                                                See how your business can improve with our {serviceData.title.toLowerCase()} services
                                            </p>
                                            <div className="flex items-center">
                                                <Award className="h-8 w-8 text-yellow-300 mr-2" />
                                                <span className="text-white font-medium">Free for {locationName} businesses</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-3">
                                        <div className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Complete {serviceData.title} analysis</span>
                                        </div>
                                        <div className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Competitor benchmarking</span>
                                        </div>
                                        <div className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Actionable recommendations</span>
                                        </div>
                                        <div className="mt-6">
                                            <Link href="/seo-audit">
                                                <Button className="w-full bg-seo-blue hover:bg-seo-blue-light">
                                                    Request Free Audit
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                            Key Benefits
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            Why {serviceData.title} Matters for {locationName} Businesses
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            Our specialized {serviceData.title.toLowerCase()} services provide significant advantages for businesses in the {locationName} area
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {currentServiceInfo.benefits.map((benefit: string, index: number) => (
                            <AnimatedSection
                                key={index}
                                className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow"
                                animation="fade-in"
                                delay={index * 100}
                            >
                                <div className="flex items-start">
                                    <div className="rounded-full p-2 bg-green-100 text-green-600 mr-3 mt-1">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <span className="text-seo-gray-dark font-medium">{benefit}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-seo-gray-light">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                            Our Approach
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            {serviceData.title} Services We Provide in {locationName}
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            Our comprehensive {serviceData.title.toLowerCase()} services are designed to deliver exceptional results for your business
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {currentServiceInfo.features.map((feature: ServiceFeature, index: number) => (
                            <InfoCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                                animation="fade-in"
                                delay={index * 100}
                                iconBackground={index % 2 === 0 ? "bg-blue-100" : "bg-purple-100"}
                                iconColor={index % 2 === 0 ? "text-blue-600" : "text-purple-600"}
                            />
                        ))}
                    </div>
                </div>
            </section>

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
                                            Ready to dominate {serviceData.title} in {locationName}?
                                        </h2>
                                        <p className="text-white/90 text-lg mb-0">
                                            Get a free consultation and discover how our {serviceData.title.toLowerCase()} services can help your business grow.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link href="/contact">
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

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-600 border border-amber-500/20 mb-6">
                            <MapPin className="w-4 h-4" />
                            Local Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
                            {serviceData.title} Services Across{' '}
                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                Australia
                            </span>
                        </h2>
                        <p className="text-xl text-seo-gray-dark">
                            Specialized {serviceData.title.toLowerCase()} solutions for businesses in major Australian cities
                        </p>
                    </AnimatedSection>

                    <LocationGrid locations={allAustralianCities.slice(0, 12)} serviceSlug={serviceData.slug} />
                </div>
            </section>

            {/* Pricing Section */}
            {fullServiceData?.pricing && <ServicePricing tiers={fullServiceData.pricing} />}

            <ResourcesSection
                filterTag={serviceData.title}
                className="bg-white"
            />

            <CTABanner />
            <Footer />
        </div>
    );
};

export default LocationService;
