/**
 * FAQSection — Server Component
 * 
 * Uses semantic HTML <details> and <summary> for FAQ interactivity.
 * This ensures 100% of the content is present in the initial SSR HTML
 * and is fully indexable by Google/LLMs without requiring JS execution.
 */

import React from 'react';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { ChevronDown, MessageCircleQuestion, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    locationName?: string;
    serviceName?: string;
    industryName?: string;
    customFaqs?: FAQItem[];
    title?: React.ReactNode;
    description?: string;
}

const FAQSection = ({ 
    locationName = "Your Area", 
    serviceName = "SEO", 
    industryName = "Business", 
    customFaqs, 
    title, 
    description 
}: FAQSectionProps) => {
    const defaultFaqs: FAQItem[] = [
        {
            question: `Why is ${serviceName} important for ${industryName} businesses in ${locationName}?`,
            answer: `Local SEO helps your ${industryName} business appear in search results when people in ${locationName} look for your services. It targets customers who are ready to buy and are located nearby, resulting in higher conversion rates.`
        },
        {
            question: "How long does it take to see results?",
            answer: "SEO is a long-term strategy. While some technical fixes can show immediate improvements, significant ranking changes typically take 3-6 months. We provide monthly reports so you can track the progress and see the value we&apos;re delivering."
        },
        {
            question: "Do you offer a guarantee for #1 ranking?",
            answer: "No reputable agency can guarantee a #1 ranking because Google's algorithms are constantly changing. However, we have a proven track record of significantly improving rankings and traffic for our clients through ethical strategies."
        },
        {
            question: `What is included in your ${serviceName} services?`,
            answer: `Our comprehensive packages include keyword research, on-page optimization, technical audits, content creation, and local business listing management. We tailor our strategy to the specific needs of the ${industryName} industry.`
        },
        {
            question: `How much does ${serviceName} cost in ${locationName}?`,
            answer: "The cost varies depending on your competition and goals. We offer flexible packages designed to provide maximum ROI. Contact us for a free consultation and a custom quote."
        }
    ];

    const faqs = customFaqs || defaultFaqs;

    return (
        <section className="py-20 bg-seo-clean">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    <AnimatedSection className="lg:w-1/3" animation="fade-in-right">
                        <div className="sticky top-32">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 mb-4">
                                <MessageCircleQuestion className="w-3 h-3 mr-2" />
                                FAQ
                            </span>
                            {title ? (
                                typeof title === 'string' ? (
                                    <h2 className="text-xl md:text-5xl font-display font-black text-seo-navy mb-4 md:mb-6 uppercase tracking-tight">{title}</h2>
                                ) : (
                                    title
                                )
                            ) : (
                                <h2 className="text-xl md:text-5xl font-display font-black text-seo-navy mb-4 md:mb-6 uppercase tracking-tight">
                                    Frequently Asked <span className="text-seo-blue">Questions</span>
                                </h2>
                            )}
                        <p className="text-base md:text-lg text-seo-gray-dark mb-6 md:mb-8 font-medium">
                            {description || `Got questions about SEO in ${locationName}? We've got answers.`}
                        </p>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="bg-seo-blue/10 p-3 rounded-full">
                                        <HelpCircle className="w-6 h-6 text-seo-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-seo-dark mb-1">Still have questions?</h4>
                                        <p className="text-sm text-seo-gray-dark mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                                        <Link href="/contact" className="text-seo-blue font-medium hover:underline">Get in touch &rarr;</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AnimatedSection
                                    key={index}
                                    animation="slide-up"
                                    delay={index * 100}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                                >
                                    <details className="group">
                                        <summary className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none list-none cursor-pointer hover:bg-seo-clean/50 transition-colors">
                                            <span className="font-bold text-sm md:text-lg text-seo-navy uppercase tracking-wider group-open:text-seo-blue transition-colors">
                                                {faq.question}
                                            </span>
                                            <ChevronDown className="w-5 h-5 text-seo-navy group-open:rotate-180 transition-transform duration-300 flex-shrink-0" />
                                        </summary>
                                        <div className="px-4 md:px-6 pb-4 md:pb-6 text-xs md:text-sm text-seo-gray-dark border-t border-gray-50 pt-4 font-medium leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Simple CSS to hide the default details marker */}
            <style dangerouslySetInnerHTML={{ __html: `
                summary::-webkit-details-marker { display: none; }
                details[open] summary ~ * {
                    animation: sweep .3s ease-in-out;
                }
                @keyframes sweep {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}} />
        </section>
    );
};

export default FAQSection;
