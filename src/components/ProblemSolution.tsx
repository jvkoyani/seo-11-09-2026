/**
 * ProblemSolution — Server Component
 * 
 * Uses CSS :hover for interactivity.
 * 100% server-rendered, zero JavaScript required.
 * Ensures both problem and solution text are present in the DOM for SEO/LLMs.
 */

import React from 'react';
import { AlertTriangle, CheckCircle, ArrowRight, TrendingDown, DollarSign, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ProblemSolutionProps {
    serviceTitle: string;
}

const ProblemSolution = ({ serviceTitle }: ProblemSolutionProps) => {
    const cards = [
        {
            id: 1,
            problem: {
                title: "Generic Strategies",
                description: "Cookie-cutter approaches that ignore your unique market position and goals.",
                icon: <TrendingDown className="w-6 h-6 text-red-500" />,
            },
            solution: {
                title: "Tailored Roadmaps",
                description: "We build a custom strategy based on your specific competitors, location, and business objectives.",
                icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            }
        },
        {
            id: 2,
            problem: {
                title: "Vanity Metrics Focus",
                description: "Agencies reporting on 'traffic' and 'rankings' that don't translate to actual revenue.",
                icon: <DollarSign className="w-6 h-6 text-orange-500" />,
            },
            solution: {
                title: "Revenue Obsession",
                description: "We track leads, calls, and sales. If it doesn&apos;t make you money, we don't report it as a win.",
                icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            }
        },
        {
            id: 3,
            problem: {
                title: "Set & Forget Mentality",
                description: "Doing the initial setup and then letting the campaign drift while competitors catch up.",
                icon: <Clock className="w-6 h-6 text-yellow-600" />,
            },
            solution: {
                title: "Relentless Optimization",
                description: "Continuous A/B testing, content updates, and link building to keep you ahead of the pack.",
                icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            }
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Sticky Header */}
                    <div className="lg:sticky lg:top-32">
                        <AnimatedSection animation="fade-in-right">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-red-100 text-red-700 mb-6">
                                <AlertTriangle className="w-4 h-4" />
                                The Silent Killers
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                                Why 90% of {serviceTitle} Campaigns <span className="text-red-500">Fail</span>
                            </h2>
                            <p className="text-base text-seo-gray-dark mb-8 leading-relaxed">
                                Most businesses waste thousands on SEO because they fall into these common traps.
                                <br /><br />
                                We don't just fix these problems; we flip them into your competitive advantage.
                            </p>

                            <div className="hidden lg:block">
                                <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        Problem
                                    </div>
                                    <ArrowRight className="w-4 h-4" />
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        Our Solution
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right Side: CSS-Interactive Cards */}
                    <div className="space-y-6">
                        {cards.map((card, index) => (
                            <AnimatedSection
                                key={card.id}
                                animation="slide-up"
                                delay={index * 100}
                                className="group/card"
                            >
                                <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-transparent hover:border-seo-blue/20">
                                    <div className="p-8">
                                        <div className="flex items-start gap-6 relative min-h-[100px]">
                                            {/* Problem Content (Visible by default) */}
                                            <div className="flex items-start gap-6 group-hover/card:opacity-0 group-hover/card:invisible transition-all duration-300 w-full">
                                                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-red-50">
                                                    {card.problem.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold mb-2 text-seo-dark">
                                                        {card.problem.title}
                                                    </h3>
                                                    <p className="text-seo-gray-dark leading-relaxed">
                                                        {card.problem.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Solution Content (Visible on Hover) */}
                                            <div className="absolute inset-0 flex items-start gap-6 opacity-0 invisible group-hover/card:opacity-100 group-hover/card:visible transition-all duration-300 w-full p-0">
                                                <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-green-100">
                                                    {card.solution.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold mb-2 text-green-700">
                                                        {card.solution.title}
                                                    </h3>
                                                    <p className="text-seo-gray-dark leading-relaxed">
                                                        {card.solution.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar Animation (CSS Only) */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-50 overflow-hidden">
                                        <div className="h-full bg-green-500 w-0 group-hover/card:w-full transition-all duration-500 ease-in-out" />
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
