
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import { ArrowRight, Search, ChevronRight, BookOpen, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { blogPosts } from '@/lib/data';
import BlogPreview from '@/components/BlogPreview';

const BlogsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories
    const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

    // Filter posts based on search and category
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />

            {/* Hero Section - Dark Premium Theme */}
            <section className="pt-32 pb-32 bg-slate-900 relative overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seo-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="text-center max-w-4xl mx-auto" animation="fade-in">
                        <div className="inline-flex items-center justify-center space-x-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 mb-8">
                            <Link href="/">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-seo-blue font-medium">Blog</span>
                        </div>

                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                            <BookOpen className="h-3.5 w-3.5 mr-2" />
                            Latest Insights
                        </span>

                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            SEO Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Strategies</span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Stay up-to-date with the latest SEO trends, algorithm updates, and actionable strategies to dominate your market.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Search and Filter Section - Floating Card */}
            <section className="relative z-20 -mt-16 pb-12">
                <div className="container mx-auto px-4">
                    <AnimatedSection animation="slide-up" delay={100}>
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 p-6 max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                <div className="relative flex-1 w-full">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search articles, topics, or keywords..."
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-seo-blue/20 focus:border-seo-blue transition-all text-slate-700 placeholder:text-slate-400"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                <div className="flex items-center space-x-3 w-full md:w-auto">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 text-slate-500">
                                        <Filter className="h-5 w-5" />
                                    </div>
                                    <select
                                        className="flex-1 md:w-48 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-seo-blue/20 focus:border-seo-blue transition-all text-slate-700 bg-white cursor-pointer appearance-none"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        style={{ backgroundImage: 'none' }}
                                    >
                                        {categories.map((category, index) => (
                                            <option key={index} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="pb-24 bg-slate-50 min-h-[600px]">
                <div className="container mx-auto px-4">
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <BlogPreview key={post.id} post={post} delay={index * 100} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search className="h-8 w-8 text-slate-400" />
                            </div>
                            <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">No articles found</h3>
                            <p className="text-slate-500 mb-8 max-w-md mx-auto">
                                We couldn't find any articles matching "{searchTerm}". Try adjusting your search or filter criteria.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('All');
                                }}
                                className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 rounded-full text-seo-blue font-medium hover:bg-slate-50 transition-colors shadow-sm"
                            >
                                <span>Clear all filters</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <ContactForm />
            <Footer />
        </div>
    );
};

export default BlogsPage;
