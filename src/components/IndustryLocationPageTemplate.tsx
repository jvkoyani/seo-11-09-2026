import React from 'react';
import Link from 'next/link';

import {
    ArrowRight, MapPin, TrendingUp, BarChart,
    CheckCircle, Users, Target, Star,
    ChevronRight, Zap, Trophy,
    Briefcase, Shield, Map as MapIcon, Search,
    Settings, FileText, Link as LinkIcon, ShoppingCart
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import CTABanner from '@/components/CTABanner';
import ServicePricing from '@/components/service/ServicePricing';
import FAQSection from '@/components/FAQSection';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import TrustIndicators from '@/components/TrustIndicators';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LocationData, IndustryData, caseStudies, services } from '@/lib/data';

interface IndustryLocationPageTemplateProps {
    industryData: Omit<IndustryData, 'icon'>;
    locationData: LocationData;
    schemaString?: string;
}

const iconMap: Record<string, React.ReactNode> = {
    'map-pin': <MapPin className="w-7 h-7 text-seo-blue" />,
    'settings': <Settings className="w-7 h-7 text-seo-blue" />,
    'file-text': <FileText className="w-7 h-7 text-seo-blue" />,
    'link': <LinkIcon className="w-7 h-7 text-seo-blue" />,
    'shopping-cart': <ShoppingCart className="w-7 h-7 text-seo-blue" />,
    'bar-chart': <BarChart className="w-7 h-7 text-seo-blue" />
};

const IndustryLocationPageTemplate = ({ industryData, locationData, schemaString }: IndustryLocationPageTemplateProps) => {
    // Filter case studies for this industry if available, otherwise generic
    const relevantCaseStudies = caseStudies
        .filter(cs => cs.industry === industryData.title || cs.location === locationData.name)
        .slice(0, 3);

    return (
        <div className="min-h-screen flex flex-col font-sans bg-slate-50">
            {schemaString && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaString }} />
            )}
            <Navbar />

            {/* Hero Section - Industry Focused */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-white">
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
                            <a href={`/areas-we-serve/${locationData.slug}`} className="hover:text-seo-blue transition-colors">{locationData.name}</a>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-seo-blue font-bold tracking-wide">{industryData.title}</span>
                        </div>
                    </AnimatedSection>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <AnimatedSection className="lg:w-3/5" animation="fade-in-right">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-seo-blue/10 text-blue-700 border border-seo-blue/20">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {locationData.name} {industryData.title} Experts
                                </span>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-700 border border-green-500/20">
                                    <Star className="h-3 w-3 mr-1" />
                                    Specialized Strategy
                                </span>
                            </div>

                             <h1 className="text-4xl lg:text-7xl font-display font-black text-seo-navy mb-6 md:mb-8 leading-[1.1] tracking-tight uppercase text-center lg:text-left">
                                Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-600">{industryData.title}</span> in {locationData.name}
                            </h1>

                            <p className="text-base text-slate-600 font-medium mb-10 leading-relaxed max-w-2xl">
                                {industryData.description} tailored specifically for the {locationData.name} market. We help {industryData.entityName?.toLowerCase() || industryData.title.toLowerCase()} dominate local search results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-seo-peach hover:bg-seo-navy text-seo-navy hover:text-white font-bold h-14 px-8 text-base rounded-full shadow-lg transition-all hover:scale-105 uppercase tracking-wider">
                                    <Link href="/free-consultation" className="flex items-center">
                                        Get Free Consultation
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-white border-seo-navy text-seo-navy hover:bg-seo-gray-light font-bold h-14 px-8 text-lg rounded-full shadow-sm uppercase tracking-wider transition-colors">
                                    <a href="#services">
                                        View Our Services
                                    </a>
                                </Button>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-in-left" delay={200} className="lg:w-2/5 w-full">
                            <Card className="bg-white border-slate-200 relative rounded-2xl overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-seo-blue/10 to-purple-500/10"></div>
                                <CardContent className="p-8 relative">
                                    <div className="flex items-center justify-between mb-8">
                                        <div>
                                            <h3 className="text-2xl font-black text-seo-navy uppercase tracking-tight">Grow Your Practice</h3>
                                            <p className="text-slate-500 font-bold text-sm mt-1">In {locationData.name}</p>
                                        </div>
                                        <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                                            <TrendingUp className="h-6 w-6 text-seo-blue" />
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-50 p-1 rounded-full border border-green-100">
                                                <CheckCircle className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-seo-navy font-bold">Targeted Local Traffic</h4>
                                                <p className="text-slate-500 font-medium text-sm mt-0.5">Reach customers in {locationData.name} actively looking for you.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-50 p-1 rounded-full border border-green-100">
                                                <CheckCircle className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-seo-navy font-bold">Industry Expertise</h4>
                                                <p className="text-slate-500 font-medium text-sm mt-0.5">We understand the nuances of {industryData.title}.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-50 p-1 rounded-full border border-green-100">
                                                <CheckCircle className="h-4 w-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-seo-navy font-bold">Proven ROI</h4>
                                                <p className="text-slate-500 font-medium text-sm mt-0.5">Strategies focused on generating leads and revenue.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-white text-slate-900 hover:bg-gray-100 font-bold h-12 text-lg">
                                        <Link href="/seo-audit">
                                            Start Your Growth
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <TrustIndicators />

            {/* Services Grid - The Funnel */}
            <section id="services" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-4">
                            <Briefcase className="w-3 h-3 mr-2" />
                            Comprehensive Solutions
                        </span>
                        <h2 className="text-2xl md:text-5xl font-display font-black text-seo-dark mb-4 md:mb-6 uppercase tracking-tight">
                            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{industryData.title} Services</span> in {locationData.name}
                        </h2>
                        <p className="text-sm text-seo-gray-dark font-medium leading-relaxed">
                            Everything you need to dominate the {locationData.name} market. Choose a service to learn more.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.id} delay={index * 100} className="h-full">
                                <a href={`/areas-we-serve/${locationData.slug}/${industryData.slug.replace('-seo', '')}/${service.slug}`} className="group block h-full">
                                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-slate-200 group-hover:border-seo-blue/50 bg-slate-50 group-hover:bg-white overflow-hidden">
                                        <CardContent className="p-8 flex flex-col h-full">
                                            <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-seo-blue/10">
                                                {iconMap[service.icon] || <Zap className="w-7 h-7 text-seo-blue" />}
                                            </div>
                                            <h3 className="text-xl font-bold text-seo-dark mb-3 group-hover:text-seo-blue transition-colors">
                                                {service.title} for {industryData.entityName || industryData.title}
                                            </h3>
                                            <p className="text-seo-gray-dark mb-6 flex-grow">
                                                {service.description} tailored for {industryData.entityName || industryData.title} in {locationData.name}.
                                            </p>
                                            <div className="mt-auto flex items-center text-sm font-bold text-seo-blue group-hover:translate-x-2 transition-transform">
                                                Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </a>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Industry Needs SEO in Location */}
            < section className="py-20 bg-slate-50" >
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                            Why {industryData.entityName || industryData.title} in {locationData.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Need SEO</span>
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            The {industryData.entityName || industryData.title} market in {locationData.name} is competitive. To stand out, you need a strategy that understands your specific challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {industryData.whyNeedSeo ? (
                            industryData.whyNeedSeo.map((item, index) => {
                                const Icon = item.icon === 'Target' ? Target :
                                    item.icon === 'Shield' ? Shield :
                                        item.icon === 'TrendingUp' ? TrendingUp :
                                            item.icon === 'Users' ? Users :
                                                item.icon === 'Search' ? Search :
                                                    item.icon === 'Map' ? MapIcon : Target;

                                const colorClass = index === 0 ? 'text-blue-600 bg-blue-100' :
                                    index === 1 ? 'text-purple-600 bg-purple-100' :
                                        'text-green-600 bg-green-100';

                                return (
                                    <AnimatedSection key={index} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden" delay={index * 100}>
                                        <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 blur-2xl group-hover:opacity-30 transition-opacity bg-gradient-to-br ${colorClass} rounded-full`}></div>
                                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-50 group-hover:scale-110 transition-transform ${colorClass}`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-black text-seo-navy mb-3 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-slate-600 font-medium leading-relaxed">
                                            {item.description}
                                        </p>
                                    </AnimatedSection>
                                );
                            })
                        ) : (
                            <>
                                <AnimatedSection className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden" delay={0}>
                                    <div className={`w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 border border-blue-100 group-hover:scale-110 transition-transform`}>
                                        <Target className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-black text-seo-navy mb-3 uppercase tracking-tight">High Intent Leads</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        Capture customers in {locationData.name} who are actively searching for {industryData.entityName || industryData.title} right now.
                                    </p>
                                </AnimatedSection>
                                <AnimatedSection className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden" delay={100}>
                                    <div className={`w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600 border border-purple-100 group-hover:scale-110 transition-transform`}>
                                        <Shield className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-black text-seo-navy mb-3 uppercase tracking-tight">Build Trust</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        Establish your brand as the go-to expert for {industryData.entityName || industryData.title} in the {locationData.name} area.
                                    </p>
                                </AnimatedSection>
                                <AnimatedSection className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden" delay={200}>
                                    <div className={`w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600 border border-green-100 group-hover:scale-110 transition-transform`}>
                                        <TrendingUp className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-black text-seo-navy mb-3 uppercase tracking-tight">Long-Term Growth</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        Build a sustainable flow of new clients for your {industryData.entityName || industryData.title} in {locationData.name}.
                                    </p>
                                </AnimatedSection>
                            </>
                        )}
                    </div>
                </div>
            </section >

            {/* Case Studies */}
            < section id="case-studies" className="py-20 bg-white" >
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
                            Real results for {industryData.entityName || industryData.title}.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relevantCaseStudies.length > 0 ? (
                            relevantCaseStudies.map((study, index) => (
                                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
                            ))
                        ) : (
                            // Fallback to featured case studies if no specific ones found
                            caseStudies.slice(0, 3).map((study, index) => (
                                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
                            ))
                        )}
                    </div>
                </div>
            </section >

            {/* Pricing */}
            {
                industryData.pricing && (
                    <ServicePricing
                        tiers={industryData.pricing}
                        serviceName={`${industryData.entityName || industryData.title} SEO`}
                    />
                )
            }

            {/* FAQs */}
            <FAQSection
                locationName={locationData.name}
                serviceName={`${industryData.title} SEO`}
                industryName={industryData.entityName || industryData.title}
                customFaqs={industryData.faqs}
            />

            <CTABanner />
            <Footer />
        </div >
    );
};

export default IndustryLocationPageTemplate;
