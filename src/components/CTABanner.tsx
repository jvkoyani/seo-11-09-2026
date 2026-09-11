/**
import Link from 'next/link';
 * CTABanner — Lightweight CTA for non-conversion pages
 *
 * Replaces the heavy 6-field ContactForm on service/location/industry pages
 * to reduce form fatigue. Directs users to the dedicated /seo-audit page.
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  city?: string;
  industry?: string;
  service?: string;
}

const CTABanner = ({ city, industry, service }: CTABannerProps) => {
  const contextLabel = city || industry || service;

  const headline = contextLabel
    ? `Ready to Dominate ${contextLabel} Search Results?`
    : 'Ready to Grow Your Online Presence?';

  const subtext = contextLabel
    ? `Get a custom SEO growth roadmap built for ${contextLabel} — completely free, no obligation.`
    : 'Get a free SEO audit and custom growth roadmap tailored to your business — no obligation.';

  return (
    <section className="py-16 md:py-20 bg-seo-navy relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-seo-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
          {headline}
        </h2>
        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
          {subtext}
        </p>
        <Link href="/seo-audit" className="inline-flex items-center gap-3 bg-white text-seo-navy font-bold py-4 px-8 rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group">
          <span>Get My Free Audit</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <p className="mt-4 text-slate-400 text-sm">
          No credit card required · Results within 48 hours · No lock-in contracts
        </p>
      </div>
    </section>
  );
};

export default CTABanner;
