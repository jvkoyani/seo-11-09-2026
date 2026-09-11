import { Metadata } from 'next';
import React from 'react';

import Link from 'next/link';
import {
    ArrowRight, BarChart, Users, Target, Lightbulb, TrendingUp, Building,
    Zap, Shield, Globe, Settings
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import IndustrySeoServices from '@/components/IndustrySeoServices';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ResourcesSection from '@/components/ResourcesSection';
import FAQSection from '@/components/FAQSection';
import InfoCard from '@/components/InfoCard';
import { Button } from '@/components/ui/button';
import ServicePricing from '@/components/service/ServicePricing';

export const metadata: Metadata = {
    title: 'Industry SEO Services | Tailored for Your Sector',
    description: 'Stop using generic SEO strategies. We provide specialized SEO solutions tailored to the unique challenges and opportunities of your industry.',
};

const IndustriesPage = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-slate-900 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seo-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <AnimatedSection animation="fade-in">
                        <div className="inline-flex items-center space-x-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 mb-8">
                            <span className="text-seo-blue font-medium">Specialized Solutions</span>
                            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                            <span>For Every Sector</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight max-w-4xl mx-auto">
                            SEO Strategies Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-400">Your Industry</span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                            Generic strategies don't cut it. We understand the unique nuances, compliance requirements, and customer behaviors of your specific market.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white h-14 px-8 text-lg rounded-full shadow-lg shadow-seo-blue/25 transition-all hover:scale-105">
                                <Link href="/free-consultation">
                                    Get Your Strategy
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-white/10 h-14 px-8 text-lg rounded-full backdrop-blur-sm">
                                <Link href="/case-studies">
                                    See Results
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Industry Services Grid */}
            <IndustrySeoServices
                title="Select Your Industry"
                description="Explore our specialized SEO solutions designed to meet the unique demands of your sector."
            />

            {/* Why Industry Specific Matters */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 mb-6">
                            <Target className="w-4 h-4" />
                            Why It Matters
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
                            One Size Does <span className="text-red-500">Not</span> Fit All
                        </h2>
                        <p className="text-xl text-seo-gray-dark">
                            A local plumber needs a completely different strategy than a national fintech company. Here's why industry context is critical.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <InfoCard
                            title="Audience Intent"
                            description="B2B buyers research differently than B2C consumers. We tailor content to match your specific buyer's journey."
                            icon={<Users className="w-full h-full" />}
                            iconBackground="bg-blue-100"
                            iconColor="text-blue-600"
                            delay={100}
                        />
                        <InfoCard
                            title="Competitive Landscape"
                            description="Some industries are saturated, others are wide open. We adjust aggression and tactics based on your specific competition."
                            icon={<BarChart className="w-full h-full" />}
                            iconBackground="bg-purple-100"
                            iconColor="text-purple-600"
                            delay={200}
                        />
                        <InfoCard
                            title="Compliance & Regulations"
                            description="From YMYL (Your Money Your Life) to legal restrictions, we ensure your SEO strategy is safe and compliant."
                            icon={<Shield className="w-full h-full" />}
                            iconBackground="bg-green-100"
                            iconColor="text-green-600"
                            delay={300}
                        />
                    </div>
                </div>
            </section>

            {/* Our Approach / Features Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-seo-blue/10 to-cyan-500/10 text-seo-blue border border-seo-blue/20 mb-6">
                            <Zap className="w-4 h-4" />
                            Our Advantage
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
                            The Industry-First Approach
                        </h2>
                        <p className="text-xl text-seo-gray-dark">
                            How we deliver superior results by putting industry context first.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Niche Keyword Research",
                                description: "Uncovering high-value, low-competition terms specific to your vertical.",
                                icon: Target,
                                bg: "bg-blue-50",
                                text: "text-blue-600"
                            },
                            {
                                title: "Expert Content Creation",
                                description: "Writers who understand your industry jargon and customer pain points.",
                                icon: Lightbulb,
                                bg: "bg-yellow-50",
                                text: "text-yellow-600"
                            },
                            {
                                title: "Relevant Link Building",
                                description: "Securing placements on industry-relevant publications and directories.",
                                icon: Globe,
                                bg: "bg-green-50",
                                text: "text-green-600"
                            },
                            {
                                title: "Technical Optimization",
                                description: "Schema markup and site structure tailored to your business type.",
                                icon: Settings,
                                bg: "bg-purple-50",
                                text: "text-purple-600"
                            },
                            {
                                title: "Local Dominance",
                                description: "Strategies to capture market share in your specific service areas.",
                                icon: Building,
                                bg: "bg-orange-50",
                                text: "text-orange-600"
                            },
                            {
                                title: "Conversion Focus",
                                description: "Optimizing for the specific actions that drive revenue in your sector.",
                                icon: TrendingUp,
                                bg: "bg-red-50",
                                text: "text-red-600"
                            }
                        ].map((item, index) => (
                            <AnimatedSection
                                key={index}
                                delay={index * 100}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                            >
                                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-7 h-7 ${item.text}`} />
                                </div>
                                <h3 className="text-xl font-bold text-seo-dark mb-3">{item.title}</h3>
                                <p className="text-seo-gray-dark leading-relaxed">
                                    {item.description}
                                </p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-seo-dark text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-l from-seo-blue to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection
                        className="max-w-4xl mx-auto text-center"
                        animation="fade-in"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                            Don&apos;t Settle for Generic SEO. <br />
                            <span className="text-seo-blue">Get Specialized.</span>
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Join hundreds of businesses in your industry who are scaling their revenue with our tailored strategies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white h-14 px-10 text-lg rounded-full shadow-lg shadow-seo-blue/25 transition-all hover:scale-105">
                                <Link href="/free-consultation">
                                    Get Your Free Audit
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 h-14 px-10 text-lg rounded-full">
                                <Link href="/contact">
                                    Talk to an Expert
                                </Link>
                            </Button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Pricing Section */}
            <ServicePricing tiers={[
                {
                    name: "Industry Starter",
                    price: "$1,497/mo",
                    description: "Essential visibility for your niche.",
                    features: [
                        "Industry-Specific Keyword Research",
                        "Competitor Analysis",
                        "Google Business Profile Optimization",
                        "Monthly Performance Report",
                        "Basic Content Strategy"
                    ]
                },
                {
                    name: "Market Growth",
                    price: "$2,997/mo",
                    description: "Accelerate your market share.",
                    features: [
                        "Everything in Starter",
                        "Advanced Content Creation (2 Blogs/mo)",
                        "Niche Link Building",
                        "Conversion Rate Optimization",
                        "Quarterly Strategy Review",
                        "Priority Support"
                    ],
                    recommended: true
                },
                {
                    name: "Sector Dominance",
                    price: "$5,997/mo",
                    description: "Own your vertical completely.",
                    features: [
                        "Everything in Growth",
                        "Digital PR Campaigns",
                        "Technical SEO Audits",
                        "Video Content Strategy",
                        "Dedicated Account Manager",
                        "Weekly Strategy Calls"
                    ]
                }
            ]} />

            <ContactForm />
            <Footer />
        </div>
    );
};

export default IndustriesPage;
