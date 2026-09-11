import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle2, Star } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import HeroDashboardPreview from './HeroDashboardPreview';

interface HeroProps {
  title?: string;
  subtitle?: string;
  location?: string;
  backgroundImage?: string;
  rightContent?: React.ReactNode;
}

const Hero = ({
  title,
  subtitle,
  location,
  rightContent,
}: HeroProps) => {
  const defaultTitle = location
    ? `Grow Your ${location} Business`
    : "Data-Driven SEO That Drives Revenue";

  const defaultSubtitle = location
    ? `Specialized digital marketing strategies designed for ${location}. Turn searches into loyal customers.`
    : "We partner with ambitious Australian businesses to predictably scale organic traffic, leads, and sales.";

  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;

  return (
    <div className="relative min-h-[75vh] md:min-h-screen flex items-center pt-12 md:pt-20 pb-4 md:pb-0 overflow-hidden bg-seo-clean">
      {/* Supple Minimalist Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-seo-clean to-[#E0F2FE]">
        {/* Soft Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)]" />

        <div aria-hidden="true" className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-seo-blue/10 rounded-full blur-[100px] animate-pulse" />
        <div aria-hidden="true" className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-seo-peach/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <AnimatedSection animation="fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 md:mb-8 hover:bg-slate-50 transition-colors mx-auto lg:mx-0">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] text-seo-navy font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-seo-navy pl-1">
                  <span className="text-amber-400 flex items-center">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="font-bold tracking-tight">4.9/5 Average Rating</span>
                </div>
              </div>
            </AnimatedSection>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black leading-[1.1] tracking-tight mb-4 md:mb-6 text-seo-navy text-center lg:text-left">
              {displayTitle.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="text-seo-blue">
                {displayTitle.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed mb-6 md:mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
              {displaySubtitle}
            </p>

            <AnimatedSection animation="fade-in" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center lg:justify-start">
                <Link href="/seo-audit" className="group relative px-6 sm:px-8 py-4 bg-seo-navy text-white rounded-md font-bold text-sm sm:text-base tracking-wider uppercase transition-all hover:bg-seo-blue hover:shadow-lg flex items-center justify-center w-full sm:w-auto">
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/case-studies" className="px-6 sm:px-8 py-4 rounded-md font-bold text-sm sm:text-base tracking-wider uppercase text-seo-navy border-2 border-seo-navy hover:bg-seo-navy hover:text-white transition-all flex items-center justify-center group w-full sm:w-auto">
                  <Play className="w-4 h-4 mr-2 fill-current group-hover:scale-110 transition-transform" />
                  View Case Studies
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400}>
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-slate-500 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-seo-blue" />
                  <span className="uppercase tracking-wide">Data-Driven Approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-seo-blue" />
                  <span className="uppercase tracking-wide">No Lock-in Contracts</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: 3D Dashboard Preview (Slightly altered to fit bright theme) */}
          <div className="hidden lg:block perspective-1000">
            {rightContent || <HeroDashboardPreview />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
