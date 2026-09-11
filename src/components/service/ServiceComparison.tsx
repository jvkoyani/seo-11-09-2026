'use client';

import React from 'react';
import Link from 'next/link';
import { ComparisonPoint } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import { Check, X, Minus, Star, ArrowRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

interface ServiceComparisonProps {
    points: ComparisonPoint[];
}

const ServiceComparison = ({ points }: ServiceComparisonProps) => {
    if (!points || points.length === 0) return null;

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-600/10 to-teal-500/10 text-emerald-600 border border-emerald-600/20 mb-6">
                        <Star className="w-4 h-4" />
                        Our Advantage
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
                        Why We&apos;re <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Different</span>
                    </h2>
                    <p className="text-lg text-seo-gray-dark">
                        Most agencies sell &quot;packages&quot;. We sell outcomes. See how we stack up against the alternatives.
                    </p>
                </AnimatedSection>

                <AnimatedSection animation="slide-up">
                    <div className="relative">
                        {/* Desktop Grid Header */}
                        <div className="hidden md:grid grid-cols-12 gap-4 mb-6 px-6">
                            <div className="col-span-4 text-sm font-bold text-slate-400 uppercase tracking-wider">Feature</div>
                            <div className="col-span-3 text-center text-sm font-bold text-slate-400 uppercase tracking-wider">Cheap Agencies</div>
                            <div className="col-span-3 text-center text-sm font-bold text-slate-400 uppercase tracking-wider">DIY / In-House</div>
                            <div className="col-span-2 text-center text-sm font-bold text-emerald-600 uppercase tracking-wider">Us (SEO Focus)</div>
                        </div>

                        {/* Comparison Rows */}
                        <div className="space-y-4">
                            {points.map((point, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center">
                                        {/* Feature Name */}
                                        <div className="col-span-4 flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                                                <Info className="w-4 h-4" />
                                            </div>
                                            <span className="font-bold text-seo-dark text-lg md:text-base">{point.feature}</span>
                                        </div>

                                        {/* Mobile Labels & Values */}
                                        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-8 gap-4 mt-4 md:mt-0">
                                            {/* Cheap Agencies */}
                                            <div className="md:col-span-3 flex md:flex-col items-center justify-between md:justify-center p-3 md:p-0 bg-slate-50 md:bg-transparent rounded-lg md:rounded-none">
                                                <span className="md:hidden text-sm font-medium text-slate-500">Cheap Agencies</span>
                                                <div className="flex items-center gap-2 text-slate-500">
                                                    <Minus className="w-4 h-4" />
                                                    <span className="text-sm">{point.others}</span>
                                                </div>
                                            </div>

                                            {/* DIY */}
                                            <div className="md:col-span-3 flex md:flex-col items-center justify-between md:justify-center p-3 md:p-0 bg-slate-50 md:bg-transparent rounded-lg md:rounded-none">
                                                <span className="md:hidden text-sm font-medium text-slate-500">DIY / In-House</span>
                                                <div className="flex items-center gap-2 text-slate-500">
                                                    <X className="w-4 h-4 text-red-400" />
                                                    <span className="text-sm">{point.diy}</span>
                                                </div>
                                            </div>

                                            {/* Us - Highlighted */}
                                            <div className="md:col-span-2 flex md:flex-col items-center justify-between md:justify-center p-3 md:p-0 bg-emerald-50/50 md:bg-transparent rounded-lg md:rounded-none border border-emerald-100 md:border-none relative">
                                                <span className="md:hidden text-sm font-bold text-emerald-700">Us (SEO Focus)</span>
                                                <div className="flex items-center gap-2 font-bold text-emerald-700">
                                                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                                        <Check className="w-3 h-3 text-emerald-600" />
                                                    </div>
                                                    <span className="text-sm">{point.us}</span>
                                                </div>

                                                {/* Desktop Highlight Background */}
                                                <div className="hidden md:block absolute -inset-y-6 -inset-x-4 bg-gradient-to-b from-emerald-50/50 to-teal-50/50 border-x border-emerald-100/50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Row */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 px-6">
                            <div className="col-span-4 hidden md:block"></div>
                            <div className="col-span-3 hidden md:block"></div>
                            <div className="col-span-3 hidden md:block"></div>
                            <div className="col-span-12 md:col-span-2 flex justify-center">
                                <Link href="/contact" className="w-full">
                                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 group">
                                        Get Started
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ServiceComparison;
