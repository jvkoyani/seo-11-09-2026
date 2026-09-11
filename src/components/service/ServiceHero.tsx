'use client';

import React from 'react';

import { ArrowRight, CheckCircle, Star, Shield } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';

interface ServiceHeroProps {
    title: string;
    description: string;
    icon: string;
}

const ServiceHero = ({ title, description }: ServiceHeroProps) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-seo-gray-light">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-10">
                <div className="aspect-square h-96 rounded-full bg-seo-blue"></div>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-10">
                <div className="aspect-square h-96 rounded-full bg-cyan-500"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <AnimatedSection animation="fade-in">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-seo-blue/10 border border-seo-blue/20 text-seo-blue text-sm font-medium mb-6">
                                <Shield className="w-4 h-4" />
                                <span>Trusted by 250+ Aussie Businesses</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-display font-black text-seo-navy mb-6 leading-tight uppercase tracking-tight">
                                {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-cyan-500">That Actually Works</span>
                            </h1>

                            <p className="text-base text-slate-600 font-medium mb-8 leading-relaxed max-w-xl">
                                {description} Stop wasting money on generic strategies. Get a custom {title} plan designed to dominate your specific market.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <Button size="lg" className="bg-seo-peach hover:bg-seo-navy text-seo-navy hover:text-white h-14 px-8 text-lg rounded-full font-bold uppercase tracking-wider transition-all shadow-lg shadow-seo-peach/25">
                                    Get My Free Audit
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="bg-white border-seo-navy text-seo-navy hover:bg-seo-gray-light h-14 px-8 text-lg rounded-full font-bold uppercase">
                                    View Case Studies
                                </Button>
                            </div>

                            <div className="flex items-center gap-6 text-sm text-slate-500 font-bold">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>No Lock-in Contracts</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>90-Day Guarantee</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <AnimatedSection animation="fade-in-left" delay={200}>
                            <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
                                {/* Floating Badge */}
                                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-xl shadow-lg rotate-12">
                                    <div className="flex flex-col items-center text-white font-bold leading-tight">
                                        <span className="text-3xl">#1</span>
                                        <span className="text-xs uppercase tracking-wider">Rated</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                        <div className="bg-green-100 p-3 rounded-lg">
                                            <Star className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-seo-navy font-bold text-lg">5-Star Reputation</h3>
                                            <p className="text-slate-500 text-sm font-medium">We build trust that converts visitors into buyers.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <Shield className="w-6 h-6 text-seo-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-seo-navy font-bold text-lg">Safe & Secure</h3>
                                            <p className="text-slate-500 text-sm font-medium">100% White-hat strategies that protect your brand.</p>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-lg bg-gradient-to-r from-seo-blue/5 to-cyan-500/5 text-center">
                                        <p className="text-seo-navy font-bold italic">
                                            "We doubled our leads in 3 months!"
                                        </p>
                                        <div className="flex justify-center gap-1 text-yellow-400 mt-2">
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
