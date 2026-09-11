import React from 'react';
import Link from 'next/link';

import {
    ArrowRight, MapPin, TrendingUp, CheckCircle, Target, Star,
    Building, ChevronRight, Trophy,
    Shield
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';

import ServicePricing from '@/components/service/ServicePricing';
import FAQSection from '@/components/FAQSection';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import IndustryCarousel from '@/components/IndustryCarousel';
import { ServiceData, caseStudies, industries } from '@/lib/data';
import { SimpleLocation } from '@/lib/masterCities';

interface ServiceLocationPageTemplateProps {
    locationData: SimpleLocation;
    serviceData: ServiceData;
    schemaString?: string;
}

const ServiceLocationPageTemplate = ({ locationData, serviceData, schemaString }: ServiceLocationPageTemplateProps) => {
    // Filter case studies for this service
    const relevantCaseStudies = caseStudies
        .filter(cs => cs.serviceType === serviceData.slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50">
            {schemaString && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaString }} />
            )}
            <Navbar />

            {/* Hero Section - Clean & Trustworthy */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-seo-clean">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
                    <div className="aspect-square h-96 rounded-full bg-seo-blue"></div>
                </div>
                <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20">
                    <div className="aspect-square h-96 rounded-full bg-purple-500"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="mb-8" animation="fade-in">
                         <div className="inline-flex items-center space-x-2 text-xs md:text-sm text-slate-500 bg-white/50 px-4 py-2 rounded-full border border-slate-200 shadow-sm font-medium">
                            <Link href="/" className="hover:text-seo-blue transition-colors">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <Link href={`/areas-we-serve/${locationData.slug}`} className="hover:text-seo-blue transition-colors">{locationData.name}</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-seo-blue font-bold tracking-wide">{serviceData.title}</span>
                        </div>
                    </AnimatedSection>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <AnimatedSection className="lg:w-3/5" animation="fade-in-right">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-seo-blue/10 text-blue-700 border border-seo-blue/20">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {locationData.name} {serviceData.title} Experts
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-700 border border-green-500/20">
                                    <Star className="h-3 w-3 mr-1" />
                                    Results Driven
                                </span>
                            </div>

                             <h1 className="text-4xl lg:text-7xl font-display font-black text-seo-navy mb-6 md:mb-8 leading-[1.1] tracking-tight text-center lg:text-left">
                                {serviceData.title} in <span className="text-blue-700">{locationData.name}</span>
                            </h1>

                            <p className="text-base text-slate-600 font-medium mb-10 leading-relaxed max-w-2xl">
                                {serviceData.description} tailored specifically for the {locationData.name} market. We help local businesses dominate search results and drive revenue.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/free-consultation" className="bg-seo-navy hover:bg-seo-blue text-white h-14 px-8 text-base rounded-md uppercase font-bold tracking-wider shadow-lg transition-all hover:scale-[1.02] inline-flex items-center justify-center">
                                    Get Free Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link href="#case-studies" className="bg-transparent border-2 border-seo-navy text-seo-navy hover:bg-seo-navy hover:text-white h-14 px-8 text-lg rounded-md uppercase font-bold tracking-wider transition-all inline-flex items-center justify-center">
                                    View Case Studies
                                </Link>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-in-left" delay={200} className="lg:w-2/5 w-full">
                            <Card className="bg-white border-slate-100 relative rounded-2xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-seo-blue/5 to-transparent pointer-events-none"></div>
                                <CardContent className="p-8 relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h2 className="text-2xl font-black text-seo-navy">Dominate {locationData.name}</h2>
                                            <p className="text-slate-500 font-medium text-sm">Specialized {serviceData.title} Strategy</p>
                                        </div>
                                        <div className="h-12 w-12 bg-seo-blue/20 rounded-full flex items-center justify-center">
                                            <Trophy className="h-6 w-6 text-seo-blue" />
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-seo-navy font-bold">Local Market Analysis</h3>
                                                <p className="text-slate-500 font-medium text-sm">Deep dive into {locationData.name} competitors</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-seo-navy font-bold">Custom Implementation</h3>
                                                <p className="text-slate-500 font-medium text-sm">Tailored {serviceData.title} tactics</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-500/20 p-1 rounded-full">
                                                <CheckCircle className="h-4 w-4 text-green-500" />
                                            </div>
                                            <div>
                                                <h3 className="text-seo-navy font-bold">Revenue Focus</h3>
                                                <p className="text-slate-500 font-medium text-sm">Tracking real ROI, not just rankings</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-seo-navy text-white hover:bg-seo-blue font-bold uppercase tracking-wider h-12 text-lg rounded-md transition-colors">
                                        <a href="/seo-audit">
                                            Start Your Growth
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why This Service in This City */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                            Local Context
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            Why {locationData.name} Businesses Need <span className="text-blue-700">{serviceData.title}</span>
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            The digital landscape in {locationData.name} is competitive. To stand out, you need a strategy that understands the local market nuances.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatedSection className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all" delay={0}>
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-seo-dark mb-3">Targeted Reach</h3>
                            <p className="text-seo-gray-dark">
                                Connect with customers in {locationData.name} who are actively searching for your services right now.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all" delay={100}>
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-seo-dark mb-3">Build Authority</h3>
                            <p className="text-seo-gray-dark">
                                Establish your brand as the go-to expert in the {locationData.name} area through strategic {serviceData.title}.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all" delay={200}>
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-seo-dark mb-3">Sustainable Growth</h3>
                            <p className="text-seo-gray-dark">
                                Unlike ads, {serviceData.title} builds a long-term asset that continues to drive traffic to your {locationData.name} business.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Long Form Content (SEO Meat) */}
            {serviceData.longFormContent && (
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="lg:w-2/3">
                                <AnimatedSection animation="fade-in">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-8">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-500">{serviceData.longFormContent.title}</span> for {locationData.name}
                                    </h2>
                                    <div className="prose prose-lg max-w-none text-seo-gray-dark">
                                        <p className="lead">
                                            Implementing effective {serviceData.title} is crucial for any business in {locationData.name} looking to scale.
                                            Here is our comprehensive guide to how we approach it.
                                        </p>
                                        {serviceData.longFormContent.sections.map((section, index) => (
                                            <div key={index} className="mb-10">
                                                <h3 className="text-2xl font-bold text-seo-dark mb-4">{section.title}</h3>
                                                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                                                <div className="mt-4 p-4 bg-white border-l-4 border-seo-blue rounded-r-lg shadow-sm">
                                                    <p className="text-sm font-medium text-seo-dark m-0">
                                                        <strong>Local Insight:</strong> For {locationData.name} businesses, applying this specific {serviceData.title} tactic can significantly improve your visibility among local competitors.
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </AnimatedSection>
                            </div>
                            <div className="lg:w-1/3">
                                <div className="sticky top-32 space-y-8">
                                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                                        <h3 className="text-xl font-bold text-seo-dark mb-4">Table of Contents</h3>
                                        <ul className="space-y-3">
                                            {serviceData.longFormContent.sections.map((section, index) => (
                                                <li key={index} className="flex items-start gap-2 text-seo-gray-dark hover:text-seo-blue transition-colors cursor-pointer">
                                                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                                                    <span className="text-sm font-medium">{section.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-seo-blue/10 rounded-full blur-2xl"></div>
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>

                                        <h3 className="text-2xl font-black text-seo-navy uppercase tracking-tight mb-4 relative z-10">Need Help with {serviceData.title}?</h3>
                                        <p className="text-slate-600 font-medium mb-6 relative z-10">
                                            Our team in {locationData.name} is ready to help you grow.
                                        </p>
                                        <Button className="w-full bg-seo-peach hover:bg-seo-navy text-seo-navy hover:text-white font-bold uppercase tracking-wider transition-colors relative z-10">
                                            <a href="/contact">Speak to an Expert</a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Case Studies */}
            <section id="case-studies" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-700 border border-amber-500/20 mb-4">
                            <Trophy className="w-3 h-3 mr-2" />
                            Proven Results
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">See What We've Achieved</span>
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            Real results for businesses using our {serviceData.title} strategies.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relevantCaseStudies.length > 0 ? (
                            relevantCaseStudies.map((study, index) => (
                                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-12 bg-slate-50 rounded-2xl">
                                <p className="text-seo-gray-dark">More case studies coming soon for {serviceData.title}.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Industry Carousel */}
            <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-seo-blue/20 to-transparent"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-600 border border-purple-500/20 mb-4">
                            <Building className="w-3 h-3 mr-2" />
                            Specialized Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-500">{serviceData.title}</span> for Your Industry in {locationData.name}
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            We understand the unique challenges of your industry. Choose your sector to see how we can help.
                        </p>
                    </AnimatedSection>

                    <div className="relative px-4 md:px-12">
                        <IndustryCarousel 
                            industries={industries}
                            locationSlug={locationData.slug}
                            serviceSlug={serviceData.slug}
                        />
                    </div>
                </div>
            </section>

            {/* Pricing */}
            {serviceData.pricing && <ServicePricing tiers={serviceData.pricing} />}

            {/* FAQs */}
            {serviceData.faqs && <FAQSection locationName={locationData.name} />}

            {/* CTA Section */}
            <section className="py-24 bg-seo-clean relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-seo-navy mb-8">
                            Ready to Transform Your <span className="text-blue-700">{locationData.name} Business?</span>
                        </h2>
                        <p className="text-xl text-slate-600 font-medium mx-auto mb-10 max-w-2xl">
                            Don&apos;t let your competitors win. Get a custom {serviceData.title} strategy designed for the {locationData.name} market today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-seo-peach hover:bg-white text-seo-navy h-16 px-10 text-xl rounded-md uppercase font-black tracking-wider shadow-xl transition-colors">
                                <a href="/free-consultation">Get Your Free Proposal</a>
                            </Button>
                            <Button size="lg" variant="outline" className="bg-transparent border-2 border-seo-navy text-seo-navy hover:bg-seo-navy hover:text-white h-16 px-10 text-xl rounded-md uppercase font-bold tracking-wider transition-colors">
                                <a href="/contact">Contact Us</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner city={locationData.name} service={serviceData.title} />
            <Footer />
        </div>
    );
};

export default ServiceLocationPageTemplate;
