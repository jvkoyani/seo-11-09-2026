
import Link from 'next/link';
import { Metadata } from 'next';
import React from 'react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { caseStudies } from '@/lib/data';
import CaseStudyPreview from '@/components/CaseStudyPreview';

export const metadata: Metadata = {
    title: 'SEO Case Studies | Real Client Results',
    description: 'See how we helped businesses like yours achieve 175% more traffic. Real numbers, real results—no fluff.',
};

const CaseStudiesPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
                    <div className="aspect-square h-96 rounded-full bg-seo-blue"></div>
                </div>
                <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20">
                    <div className="aspect-square h-96 rounded-full bg-purple-500"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="text-center max-w-4xl mx-auto" animation="fade-in">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 text-seo-blue text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-seo-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-seo-blue"></span>
                            </span>
                            Real Results for Real Businesses
                        </div>

                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            We Don&apos;t Just Promise Growth, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-400">We Prove It.</span>
                        </h1>

                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Explore our collection of success stories and see how we've helped Australian businesses dominate their market and multiply their revenue.
                        </p>

                        {/* Aggregate Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-10 mt-10">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">250+</div>
                                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Clients Helped</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">$50M+</div>
                                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Revenue Generated</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">15k+</div>
                                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Keywords Ranked</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
                                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Retention Rate</div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {caseStudies.map((caseStudy, index) => (
                            <CaseStudyPreview key={caseStudy.id} caseStudy={caseStudy} delay={index * 100} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-seo-dark text-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-4">
                            Your Success Story
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                            Ready to Become Our Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-purple-400">Success Story?</span>
                        </h2>
                        <p className="text-xl text-white/80 mb-8">
                            Contact us today for a free consultation and discover how our SEO services can help your business grow.
                        </p>
                        <Link href="/contact">
                            Get Started
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            <ContactForm />
            <Footer />
        </div>
    );
};

export default CaseStudiesPage;
