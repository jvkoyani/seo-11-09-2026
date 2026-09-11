import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SitemapClient from "@/components/SitemapClient";
import AnimatedSection from "@/components/AnimatedSection";

import Link from 'next/link';
import { ChevronRight } from "lucide-react";

export const metadata = {
    title: 'HTML Sitemap | SEOfocus',
    description: 'Navigate through all pages on SEOfocus including services, industries, and locations.',
};

export default function SitemapPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section - Dark Premium Theme */}
            <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seo-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="mb-8" animation="fade-in">
                        <div className="inline-flex items-center space-x-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700">
                            <Link href="/">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-seo-blue font-medium">Sitemap</span>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Overview</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                            Navigate through our comprehensive list of services, industries, and locations across Australia.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <SitemapClient />

            <Footer />
        </div>
    );
}
