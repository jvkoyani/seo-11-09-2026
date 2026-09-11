import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Clock, User, Share2, Bookmark, ChevronRight, ArrowRight } from 'lucide-react';
import { glossaryTerms } from '@/lib/glossaryData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const term = glossaryTerms.find(t => t.slug === slug);
    if (!term) return { title: 'Term Not Found' };

    return {
        title: `What is ${term.term}? | SEO Glossary`,
        description: term.definition,
    };
}

export function generateStaticParams() {
    return glossaryTerms.map(term => ({
        slug: term.slug,
    }));
}

export default async function GlossaryTermPage({ params }: Props) {
    const { slug } = await params;
    const term = glossaryTerms.find(t => t.slug === slug);

    if (!term) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Header */}
            <div className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-blue-400 mb-6 text-sm font-medium">
                            <Link href="/glossary" className="hover:text-white transition-colors">SEO Glossary</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-slate-400">{term.category}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{term.term}</span>?
                        </h1>

                        <div className="flex items-center gap-6 text-slate-400 text-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>By {term.author.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Updated {term.lastUpdated}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar (Left on large screens, or Right depending on preference - User screenshot implies Left TOC or similar structure, but standard blog is often Right. Screenshot shows TOC on Left. Let's do Left Sidebar) */}
                    <aside className="lg:w-1/4 order-2 lg:order-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Table of Contents */}
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Table of Contents</h3>
                                <nav className="space-y-2 text-sm">
                                    <a href="#" className="block text-blue-600 font-medium pl-2 border-l-2 border-blue-600">Definition</a>
                                    <a href="#content" className="block text-slate-600 hover:text-blue-600 pl-2 border-l-2 border-transparent transition-colors">Detailed Explanation</a>
                                    <a href="#related" className="block text-slate-600 hover:text-blue-600 pl-2 border-l-2 border-transparent transition-colors">Related Terms</a>
                                </nav>
                            </div>

                            {/* Share / Actions */}
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Share This Term</h3>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all">
                                        <Bookmark className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:w-3/4 order-1 lg:order-2">
                        {/* Definition Box */}
                        <AnimatedSection animation="fade-in">
                            <div className="bg-gradient-to-br from-slate-50 to-white border-l-4 border-blue-500 rounded-r-xl p-8 shadow-sm mb-12">
                                <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <span className="text-blue-500 text-2xl">Definition</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                                    {term.definition}
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Rich Content */}
                        <div id="content" className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl">
                            <div dangerouslySetInnerHTML={{ __html: term.content }} />
                        </div>

                        {/* Related Terms */}
                        <div id="related" className="mt-16 pt-8 border-t border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Terms</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {term.relatedTerms.map((related, index) => (
                                    <Link key={index} href={`/glossary`} className="block group">
                                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium text-slate-700 group-hover:text-blue-700">{related}</span>
                                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
