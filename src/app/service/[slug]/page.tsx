import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
    ArrowRight, PhoneCall, MapPin, CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import LocationGrid from '@/components/LocationGrid';
import { australianCities } from '@/lib/locationData';
import { Button } from '@/components/ui/button';
import { services, caseStudies } from '@/lib/data';

// New Components
import ServiceHero from '@/components/service/ServiceHero';
import ServiceProcess from '@/components/service/ServiceProcess';
import ServicePricing from '@/components/service/ServicePricing';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import ServiceComparison from '@/components/service/ServiceComparison';
import ServiceDeepDive from '@/components/service/ServiceDeepDive';
import { TypewriterHeading } from '@/components/ui/TypewriterHeading';
import TrustedTools from '@/components/TrustedTools';
import ProblemSolution from '@/components/ProblemSolution';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
            description: 'The requested service page could not be found.',
        };
    }

    return {
        title: `${service.title} Services | Expert Agency`,
        description: `Get results with our proven ${service.title} strategies. We drive traffic, leads, and revenue for Australian businesses. Book your free strategy call.`,
    };
}

import JsonLd from '@/components/JsonLd';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema';

import { getServicePaths } from '@/lib/route-utils';

export const dynamicParams = false;

export async function generateStaticParams() {
    return getServicePaths();
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;
    const service = services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    // Find related case studies
    const relatedCaseStudies = caseStudies.filter(study =>
        study.serviceType === service.slug ||
        study.solution.toLowerCase().includes(service.title.toLowerCase())
    ).slice(0, 3);

    // Generate Schemas
    const serviceSchema = generateServiceSchema(service, null, 'Australia', 'australia');
    const faqSchema = service.faqs ? generateFAQSchema(service.faqs) : null;
    const breadcrumbSchema = generateBreadcrumbSchema([
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: service.title, href: `/service/${service.slug}` }
    ]);

    const schemas = [serviceSchema, breadcrumbSchema, faqSchema].filter(Boolean);
    const schemaString = JSON.stringify(schemas);

    return (
        <div className="min-h-screen flex flex-col">
            <JsonLd schemaString={schemaString} />
            <Navbar />

            {/* 1. Enhanced Hero Section */}
            <ServiceHero
                title={service.title}
                description={service.description}
                icon={service.icon}
            />

            {/* 2. Social Proof Bar */}
            {/* 2. Social Proof Bar */}
            <TrustedTools />

            {/* 3. The Problem Section (Agitation) */}
            <ProblemSolution serviceTitle={service.title} />

            {/* 4. The Solution Section (Process) */}
            {service.process && service.process.length > 0 && (
                <ServiceProcess steps={service.process} />
            )}

            {/* 5. Deep Dive Section (SEO Content / Ultimate Guide) */}
            {service.longFormContent && (
                <ServiceDeepDive
                    title={service.longFormContent.title}
                    sections={service.longFormContent.sections}
                />
            )}

            {/* 6. Comparison Section */}
            {service.comparison && service.comparison.length > 0 && (
                <ServiceComparison points={service.comparison} />
            )}

            {/* 7. Case Studies Section */}
            {relatedCaseStudies.length > 0 && (
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute top-20 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 mb-6">
                                <CheckCircle2 className="w-4 h-4" />
                                Success Stories
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
                                Real Results for{' '}
                                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    Real Businesses
                                </span>
                            </h2>
                            <p className="text-xl text-seo-gray-dark">
                                See how we&apos;ve helped businesses achieve measurable {service.title} success
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedCaseStudies.map((study, index) => (
                                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center text-seo-blue font-semibold hover:underline"
                            >
                                <span>View All Case Studies</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* 8. Pricing Section */}
            {service.pricing && service.pricing.length > 0 && (
                <ServicePricing tiers={service.pricing} />
            )}

            {/* 9. FAQ Section */}
            {service.faqs && service.faqs.length > 0 && (
                <ServiceFAQ faqs={service.faqs} />
            )}

            {/* 10. Locations Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-600 border border-amber-500/20 mb-6">
                            <MapPin className="w-4 h-4" />
                            Local Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
                            {service.title} Services Across{' '}
                            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                Australia
                            </span>
                        </h2>
                        <p className="text-xl text-seo-gray-dark">
                            Specialized {service.title.toLowerCase()} solutions for businesses in major Australian cities
                        </p>
                    </AnimatedSection>

                    <LocationGrid locations={australianCities.slice(0, 12)} serviceSlug={service.slug} />
                </div>
            </section>

            {/* 11. Final CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-30">
                    <div className="aspect-square h-96 rounded-full bg-seo-blue"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <AnimatedSection animation="fade-in">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                Ready to <span className="bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text text-transparent">Dominate</span> Your Market?
                            </h2>
                            <p className="text-xl text-slate-400 mb-10">
                                Stop leaving money on the table. Let&apos;s build a {service.title.toLowerCase()} strategy that drives real revenue.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white h-14 px-8 text-lg rounded-full shadow-lg shadow-blue-500/25">
                                        Get My Free Strategy Call
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="tel:+611300000000">
                                    <Button size="lg" variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-white/10 hover:text-white h-14 px-8 text-lg rounded-full">
                                        <PhoneCall className="mr-2 w-5 h-5" />
                                        Call Us Now
                                    </Button>
                                </Link>
                            </div>

                            <p className="text-slate-500 mt-8 text-sm">
                                No contracts • No risk • 90-day guarantee
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <ContactForm />
            <Footer />
        </div>
    );
}
