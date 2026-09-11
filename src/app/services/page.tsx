import { Metadata } from 'next';

import { ArrowRight, Search, BarChart, Settings, TrendingUp, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ServicesComponent from '@/components/Services';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';

import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import LocationGrid from '@/components/LocationGrid';
import ServicePricing from '@/components/service/ServicePricing';
import { australianCities, services } from '@/lib/data';

export const metadata: Metadata = {
    title: 'SEO Services | Complete Digital Solutions',
    description: 'From technical SEO to content strategy—everything you need to dominate search. Custom strategies, transparent reporting, no lock-in contracts.',
};

const Services = () => {
    const localSeoPricing = services.find(s => s.slug === 'local-seo')?.pricing || [];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <Hero
                title="Comprehensive SEO Solutions for Your Business"
                subtitle="Data-driven strategies designed to increase visibility, drive qualified traffic, and boost conversions"
                backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
                rightContent={<ServiceGrid />}
            />

            {/* Main Services Grid */}
            <ServicesComponent />

            {/* Our Methodology Section */}
            <section className="py-24 bg-seo-gray-light relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
                <div className="absolute -top-10 -right-10 w-72 h-72 bg-seo-blue/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-seo-blue/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-seo-blue/10 to-blue-500/10 text-seo-blue border border-seo-blue/20 mb-6">
                            <Layers className="w-4 h-4" />
                            Our Methodology
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
                            A Proven Process That{' '}
                            <span className="bg-gradient-to-r from-seo-blue to-blue-600 bg-clip-text text-transparent">
                                Delivers Results
                            </span>
                        </h2>
                        <p className="text-xl text-seo-gray-dark">
                            Our systematic approach ensures consistent, measurable SEO results for your business
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Research & Analysis",
                                desc: "We analyze your website, competitors, and target market to identify opportunities.",
                                icon: Search,
                                link: "/methodology/research-analysis"
                            },
                            {
                                title: "Strategic Planning",
                                desc: "We create a customized SEO strategy tailored to your business goals.",
                                icon: BarChart,
                                link: "/methodology/strategic-planning"
                            },
                            {
                                title: "Implementation",
                                desc: "We execute the strategy with technical expertise and proven tactics.",
                                icon: Settings,
                                link: "/methodology/implementation"
                            },
                            {
                                title: "Monitoring & Optimization",
                                desc: "We continuously track, report, and refine for maximum impact.",
                                icon: TrendingUp,
                                link: "/methodology/monitoring-optimization"
                            }
                        ].map((step, index) => (
                            <AnimatedSection
                                key={index}
                                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full"
                                animation="fade-in"
                                delay={index * 100}
                            >
                                <div className="p-8 relative flex-grow flex flex-col">
                                    {/* Enhanced decorator element */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-seo-blue/5 to-seo-blue/20 rounded-bl-full -z-0"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-seo-blue/5 to-transparent rounded-tr-full -z-0"></div>

                                    <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                        <step.icon className="h-8 w-8 text-seo-blue" />
                                    </div>

                                    <h3 className="text-xl font-display font-bold text-seo-dark mb-3 relative z-10">
                                        {step.title}
                                    </h3>

                                    <p className="text-seo-gray-dark mb-6 relative z-10 flex-grow">
                                        {step.desc}
                                    </p>

                                    <a href={step.link} className="inline-flex items-center text-seo-blue font-medium group/link mt-auto relative z-10">
                                        <span className="border-b border-seo-blue/30 group-hover/link:border-seo-blue transition-colors">
                                            Learn more
                                        </span>
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                    </a>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local SEO Services in Australia Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                            Local Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
                            Local SEO Services in Australia
                        </h2>
                        <p className="text-lg text-seo-gray-dark">
                            Customized SEO solutions for businesses across major Australian cities
                        </p>
                    </AnimatedSection>

                    <LocationGrid locations={australianCities.slice(0, 12)} />
                </div>
            </section>

            {/* Pricing Section */}
            <ServicePricing tiers={localSeoPricing} />

            {/* Testimonials Section */}
            <Testimonials />

            {/* CTA Section */}
            <section className="py-24 bg-seo-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FFFFFF" d="M39.9,-65.7C50.3,-59.6,56.4,-45.7,64.1,-31.9C71.8,-18,81,-4.1,79.9,8.7C78.8,21.5,67.4,33.1,56.4,43.9C45.4,54.6,35,64.5,22.1,70.2C9.2,75.9,-6.1,77.5,-18.6,72.2C-31.1,66.9,-40.8,54.6,-49.9,42.5C-59,30.4,-67.6,18.5,-70.9,4.8C-74.2,-8.9,-72.3,-24.3,-64.5,-36.3C-56.7,-48.3,-43.1,-56.7,-29.9,-61.6C-16.8,-66.5,-4.2,-67.8,8.4,-66.7C21,-65.5,29.4,-71.8,39.9,-65.7Z" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection
                        className="max-w-3xl mx-auto text-center"
                        animation="fade-in"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-6">
                            Get Started Today
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            Ready to Dominate Search Results?
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Partner with us for a customized SEO strategy that drives real business growth. Let's take your online presence to the next level.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/free-consultation"
                                className="bg-seo-blue hover:bg-seo-blue-light text-white px-8 py-4 rounded-md font-medium transition-colors"
                            >
                                Get a Free Consultation
                            </a>
                            <a
                                href="/seo-audit"
                                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-medium transition-colors border border-white/20"
                            >
                                Request Free Audit
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <ContactForm />
            <Footer />
        </div>
    );
};

export default Services;
