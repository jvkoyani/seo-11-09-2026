'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';

import { BookOpen, ChevronRight, List, ArrowRight, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DeepDiveSection {
    title: string;
    content: string;
}

interface ServiceDeepDiveProps {
    title: string;
    sections: DeepDiveSection[];
}

const ServiceDeepDive = ({ sections }: ServiceDeepDiveProps) => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map((_, index) =>
                document.getElementById(`guide-section-${index}`)
            );

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const element = sectionElements[i];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(i);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    if (!sections || sections.length === 0) return null;

    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <AnimatedSection animation="fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600/10 to-pink-500/10 text-purple-600 border border-purple-600/20 mb-6">
                            <BookOpen className="w-4 h-4" />
                            The Ultimate Guide
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
                            The Ultimate Guide to <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Local SEO Dominance</span>
                        </h2>
                        <p className="text-base text-seo-gray-dark max-w-2xl mx-auto">
                            Everything you need to know to dominate your local market and outrank the competition.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 max-w-7xl mx-auto">
                    {/* Sticky Sidebar (TOC) */}
                    <aside className="hidden lg:block h-fit sticky top-32">
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-seo-dark mb-6 flex items-center gap-2 text-lg">
                                <List className="w-5 h-5 text-seo-blue" />
                                Table of Contents
                            </h3>
                            <nav className="space-y-1 relative">
                                {/* Active Indicator Line */}
                                <div
                                    className="absolute left-0 w-0.5 bg-seo-blue transition-all duration-300 ease-out"
                                    style={{
                                        height: '32px',
                                        top: `${activeSection * 40}px` // Approx height of each item
                                    }}
                                />

                                {sections.map((section, index) => (
                                    <a
                                        key={index}
                                        href={`#guide-section-${index}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(`guide-section-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                            setActiveSection(index);
                                        }}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                            activeSection === index
                                                ? "text-seo-blue bg-seo-blue/5"
                                                : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                                        )}
                                    >
                                        <span className="truncate mr-2">{section.title}</span>
                                        {activeSection === index && (
                                            <ChevronRight className="w-3 h-3 flex-shrink-0" />
                                        )}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="space-y-16">
                        {sections.map((section, index) => (
                            <div key={index} id={`guide-section-${index}`} className="scroll-mt-32">
                                <AnimatedSection animation="slide-up" delay={index * 50}>
                                    <div className="relative group">
                                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-seo-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

                                        <h3 className="text-3xl font-display font-bold text-seo-dark mb-6 flex items-baseline gap-4">
                                            <span className="text-seo-blue/20 text-5xl font-black">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            {section.title}
                                        </h3>

                                        <div
                                            className="prose prose-lg prose-slate max-w-none 
                                                prose-headings:font-display prose-headings:font-bold prose-headings:text-seo-dark
                                                prose-p:text-slate-600 prose-p:leading-relaxed
                                                prose-li:text-slate-600 prose-li:marker:text-seo-blue
                                                prose-strong:text-seo-blue prose-strong:font-bold
                                                prose-a:text-seo-blue prose-a:no-underline hover:prose-a:underline"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    </div>
                                </AnimatedSection>
                                {index < sections.length - 1 && (
                                    <div className="h-px bg-slate-100 mt-16" />
                                )}
                            </div>
                        ))}

                        {/* Bottom CTA */}
                        <AnimatedSection animation="slide-up" className="mt-12">
                            <div className="bg-seo-dark rounded-2xl p-10 text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-seo-blue rounded-full mix-blend-overlay filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-500 border border-orange-500/20 mb-6">
                                        <AlertCircle className="w-4 h-4" />
                                        Need Help?
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-white mb-4">
                                        Overwhelmed by the <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Details?</span>
                                    </h3>
                                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
                                        You don't have to become an SEO expert to win. Let our team handle the technical heavy lifting while you focus on your business.
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center gap-2 bg-seo-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-seo-blue-light transition-all hover:scale-105 shadow-lg shadow-seo-blue/25">
                                        Get a Custom Strategy
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDeepDive;
