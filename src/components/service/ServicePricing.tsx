'use client';
import Link from 'next/link';

import React from 'react';
import { PricingTier } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import { Check, ArrowRight, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServicePricingProps {
    tiers: PricingTier[];
    serviceName?: string;
}

const ServicePricing = ({ tiers, serviceName }: ServicePricingProps) => {
    if (!tiers || tiers.length === 0) return null;

    return (
        <section className="py-20 bg-white" id="pricing">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 border border-orange-500/20 mb-6">
                        <TrendingUp className="w-4 h-4" />
                        Transparent Pricing
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                        Invest in {serviceName || 'Growth'}, <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Not Guesses</span>
                    </h2>
                    <p className="text-lg text-seo-gray-dark">
                        Choose the plan that fits your goals. No hidden fees, no long-term lock-ins.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {tiers.map((tier, index) => (
                        <AnimatedSection
                            key={index}
                            className={`relative rounded-3xl p-8 border ${tier.recommended
                                ? 'bg-seo-navy text-white border-none shadow-2xl scale-105 z-10'
                                : 'bg-white text-seo-navy border-slate-200 shadow-xl hover:shadow-2xl'
                                } transition-all duration-300`}
                            animation="slide-up"
                            delay={index * 100}
                        >
                            {tier.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-seo-blue to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                                    <Zap className="w-3 h-3 fill-current" />
                                    Most Popular
                                </div>
                            )}

                            <h3 className={`text-xl font-bold mb-2 ${tier.recommended ? 'text-white' : 'text-slate-900'}`}>
                                {tier.name}
                            </h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className={`text-4xl font-bold ${tier.recommended ? 'text-white' : 'text-slate-900'}`}>
                                    {tier.price}
                                </span>
                            </div>
                            <p className={`text-sm mb-8 ${tier.recommended ? 'text-slate-400' : 'text-slate-500'}`}>
                                {tier.description}
                            </p>

                            <div className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className={`mt-1 p-0.5 rounded-full ${tier.recommended ? 'bg-green-500/20' : 'bg-green-100'}`}>
                                            <Check className={`w-3 h-3 ${tier.recommended ? 'text-green-400' : 'text-green-600'}`} />
                                        </div>
                                        <span className={`text-sm ${tier.recommended ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact">
                                <Button
                                    className={`w-full h-12 text-base font-semibold rounded-xl ${tier.recommended
                                        ? 'bg-seo-blue hover:bg-seo-blue-light text-white shadow-lg shadow-blue-500/25'
                                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                                        }`}
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicePricing;
