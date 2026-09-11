'use client';
import Link from 'next/link';

import React, { useState } from 'react';
import { FAQItem } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface ServiceFAQProps {
    faqs: FAQItem[];
}

const ServiceFAQ = ({ faqs }: ServiceFAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    <AnimatedSection className="lg:w-1/3" animation="fade-in-right">
                        <div className="sticky top-32">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-600/10 to-violet-500/10 text-indigo-600 border border-indigo-600/20 mb-6">
                                <HelpCircle className="w-4 h-4" />
                                Support
                            </div>
                            <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
                                Frequently Asked <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">Questions</span>
                            </h2>
                            <p className="text-seo-gray-dark mb-6">
                                Everything you need to know about our service. Can&apos;t find the answer you&apos;re looking for?
                            </p>
                            <Link href="/contact" className="text-seo-blue font-semibold hover:underline">
                                Contact our team directly →
                            </Link>
                        </div>
                    </AnimatedSection>

                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AnimatedSection
                                    key={index}
                                    animation="slide-up"
                                    delay={index * 50}
                                >
                                    <div
                                        className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-seo-blue shadow-md' : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className={`font-bold text-lg ${openIndex === index ? 'text-seo-blue' : 'text-seo-dark'}`}>
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-seo-blue' : ''
                                                    }`}
                                            />
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="p-6 pt-0 text-seo-gray-dark leading-relaxed border-t border-gray-100 mt-2">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQ;
