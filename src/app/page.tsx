
import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const PainPoints = dynamic(() => import('@/components/PainPoints'), { ssr: true });
const TrustIndicators = dynamic(() => import('@/components/TrustIndicators'), { ssr: true });
const Services = dynamic(() => import('@/components/Services'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const IndustrySeoServices = dynamic(() => import('@/components/IndustrySeoServices'), { ssr: true });
const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: true });
const LocationGrid = dynamic(() => import('@/components/LocationGrid'), { ssr: true });
const UrgencyBanner = dynamic(() => import('@/components/UrgencyBanner'), { ssr: true });

import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, MapPin, CheckCircle2, Zap, Target, TrendingUp } from 'lucide-react';
import { australianCities, caseStudies } from '@/lib/data';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import JsonLd from '@/components/JsonLd';
import { generateWebSiteSchema, serializeSchemas } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'SEO Agency Australia | #1 Rated SEO Services',
  description: 'Stop losing customers to competitors. Our proven SEO strategies help Australian businesses rank higher, get more traffic & grow revenue. Free audit →',
};

export default function Home() {
  const websiteSchema = generateWebSiteSchema();
  // Services schema doesn&apos;t take just service — needs city context. Use high-level service listing.
  const schemaString = serializeSchemas([websiteSchema]);

  // Get featured case studies
  const featuredCaseStudies = caseStudies.slice(0, 2);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd schemaString={schemaString} />
      <Navbar />
      <Hero />

      {/* Pain Points Section */}
      <PainPoints />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Services Section */}
      <Services />

      {/* How We Help - 3 Step Process */}
      <section className="py-10 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="text-center mb-8 md:mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 border border-green-500/20 mb-6">
              <Target className="w-4 h-4" />
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-seo-dark mb-3 md:mb-6">
              Your Path to{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                SEO Success
              </span>
            </h2>
            <p className="text-base md:text-xl text-seo-gray-dark">
              We&apos;ve simplified the complex world of SEO into a proven 3-step process
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-seo-blue via-purple-500 to-green-500 -translate-y-1/2 rounded-full"></div>

            {/* Step 1 */}
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="relative bg-white rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-seo-blue to-blue-600 text-white font-bold flex items-center justify-center shadow-lg">
                  1
                </div>
                <div className="w-14 h-14 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-2xl bg-gradient-to-r from-seo-blue/10 to-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-seo-blue" />
                </div>
                <h3 className="text-xl font-bold text-seo-dark mb-3">Free SEO Audit</h3>
                <p className="text-seo-gray-dark">
                  We analyze your website, competitors, and market to identify growth opportunities
                </p>
              </div>
            </AnimatedSection>

            {/* Step 2 */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center shadow-lg">
                  2
                </div>
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-seo-dark mb-3">Custom Strategy</h3>
                <p className="text-seo-gray-dark">
                  We create a tailored SEO roadmap designed specifically for your business goals
                </p>
              </div>
            </AnimatedSection>

            {/* Step 3 */}
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold flex items-center justify-center shadow-lg">
                  3
                </div>
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-seo-dark mb-3">Growth & Results</h3>
                <p className="text-seo-gray-dark">
                  Watch your rankings climb as we execute and continuously optimize your strategy
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12" animation="fade-in" delay={400}>
            <Link href="/seo-audit">
              <span>Start With Free Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Urgency Banner */}
      <UrgencyBanner />

      {/* Featured Case Studies */}
      <section id="features" className="py-6 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection
            className="text-center mb-8 md:mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 border border-purple-500/20 mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Success Stories
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-seo-dark mb-3 md:mb-6">
              Real Results for{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h2>
            <p className="text-base md:text-xl text-seo-gray-dark">
              See how we&apos;ve helped Australian businesses achieve measurable SEO success
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
            {featuredCaseStudies.map((study, index) => (
              <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
            ))}
          </div>

          <AnimatedSection
            className="text-center"
            animation="fade-in"
            delay={300}
          >
            <Link href="/case-studies">
              <span>View All Case Studies</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <IndustrySeoServices />
      <Testimonials />

      {/* Locations We Serve */}
      <section className="py-6 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-4 md:mb-16">
          <AnimatedSection
            className="text-center mb-8 md:mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-600 border border-amber-500/20 mb-6">
              <MapPin className="w-4 h-4" />
              Local Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-seo-dark mb-3 md:mb-6">
              SEO Services Across{' '}
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Australia
              </span>
            </h2>
            <p className="text-base md:text-xl text-seo-gray-dark">
              Specialized local SEO solutions for businesses in major Australian cities
            </p>
          </AnimatedSection>

          <LocationGrid locations={australianCities.slice(0, 12)} />
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
