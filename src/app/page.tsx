import Link from 'next/link';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight, Rocket, CheckCircle2, Gauge } from 'lucide-react';
import { australianCities } from '@/lib/data';
import JsonLd from '@/components/JsonLd';
import { generateWebSiteSchema, serializeSchemas } from '@/lib/schema';

const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const TrustIndicators = dynamic(() => import('@/components/TrustIndicators'), { ssr: true });
const UrgencyBanner = dynamic(() => import('@/components/UrgencyBanner'), { ssr: true });
const ContactForm = dynamic(() => import('@/components/ContactForm'), { ssr: true });
const LocationGrid = dynamic(() => import('@/components/LocationGrid'), { ssr: true });

export const metadata: Metadata = {
  title: 'SEO Agency Australia | Rank #1, Get More Customers, Grow Revenue',
  description: 'Stop losing $50K+ yearly to competitors. Our SEO experts deliver 3-5x traffic growth in 90 days. Trusted by 250+ Australian businesses. Get your free SEO audit now →',
};

export default function Home() {
  const websiteSchema = generateWebSiteSchema();
  const schemaString = serializeSchemas([websiteSchema]);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <JsonLd schemaString={schemaString} />
      <Navbar />

      {/* Hero Section - Ultra Compelling */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-seo-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="flex justify-center mb-8" animation="fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-seo-blue/10 to-green-500/10 text-seo-blue border border-seo-blue/30">
                <Rocket className="w-4 h-4" />
                AI-Powered SEO • Enterprise Growth • Local Domination
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={100}>
              <h1 className="text-5xl md:text-7xl font-display font-black text-center mb-6 text-seo-dark leading-tight">
                Attract <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue via-green-500 to-emerald-500">Qualified Customers</span>
                <br />
                <span className="text-4xl md:text-6xl">Ranked #1 on Google</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <p className="text-xl md:text-2xl text-seo-gray-dark text-center mb-8 max-w-2xl mx-auto">
                Get qualified customers from Google <span className="font-bold">without paying per click.</span> Our proven SEO system generates consistent revenue growth for Australian businesses—even in competitive markets.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={300} className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-seo-blue mb-2">250+</div>
                <div className="text-sm md:text-base text-seo-gray-dark">Businesses Growing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-green-500 mb-2">15+ yrs</div>
                <div className="text-sm md:text-base text-seo-gray-dark">Track Record</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-purple-500 mb-2">4.9/5 ⭐</div>
                <div className="text-sm md:text-base text-seo-gray-dark">Client Reviews</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={400} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/seo-audit" className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-seo-blue to-blue-600 hover:shadow-xl text-white font-bold rounded-lg transition-all duration-300 hover:scale-105">
                Get Free SEO Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/free-consultation" className="group inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-50 text-seo-dark font-bold rounded-lg border-2 border-seo-dark transition-all duration-300 hover:shadow-lg">
                Book Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={500} className="text-center text-sm text-seo-gray-dark">
              ✓ No credit card required • ✓ Results in 90 days • ✓ Money-back guarantee
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why You're Losing Customers Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto" animation="fade-in">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Your Competitors Are Outranking You Right Now
            </h2>
            <p className="text-lg text-seo-gray-dark">
              While you're stuck on page 2-3, your competitors capture 80% of clicks. Here's what's holding you back:
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '💰', title: 'Losing Revenue to Organic Search', desc: 'Your competitors rank for high-intent keywords. Every #1 position they own costs you customers.' },
              { icon: '🚫', title: 'Trapped in PPC Spending', desc: 'Paying $5-15 per click while organic traffic costs nothing. CPA keeps climbing, profits shrink.' },
              { icon: '📉', title: 'Website Traffic Not Converting', desc: 'Traffic without proper optimization = wasted visitors. No leads, no sales, no ROI.' },
              { icon: '🏙️', title: 'Local Competitors Dominating Maps', desc: 'They show up first in local searches. You\'re invisible when customers search near them.' },
              { icon: '⏱️', title: 'Slow Site Speed & Technical Issues', desc: 'Google penalizes slow sites. Users bounce. Rankings drop. Revenue dries up.' },
              { icon: '❌', title: 'No Clear SEO Roadmap', desc: 'Trying random tactics. No strategy. No accountability. Money spent, zero results.' },
            ].map((item, i) => (
              <AnimatedSection key={i} animation="slide-up" delay={i * 100}>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-seo-blue hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg text-seo-dark mb-2">{item.title}</h3>
                  <p className="text-seo-gray-dark">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Proven System */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-seo-blue/5 via-white to-green-500/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-seo-blue/10 text-seo-blue border border-seo-blue/20 mb-6">
              <Gauge className="w-4 h-4" />
              Proven Process
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Our System Gets You Rankings, Leads & <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-green-500">Revenue Growth</span>
            </h2>
            <p className="text-lg text-seo-gray-dark">Follow our proven 4-step framework. See results in 90 days. Scale indefinitely.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                num: '1',
                title: 'Discover Your Goldmine',
                items: ['Find 100+ keywords your competitors miss', 'Identify low-competition, high-value opportunities', 'Uncover what\'s actually converting in your market', 'Get a clear revenue potential assessment'],
                color: 'from-seo-blue to-blue-600'
              },
              {
                num: '2',
                title: 'Build Your Winning Strategy',
                items: ['Custom 90-day execution plan', 'Priority keyword targets for fast wins', 'Content blueprint that converts', 'Technical fixes ranked by impact'],
                color: 'from-purple-500 to-pink-600'
              },
              {
                num: '3',
                title: 'Dominate Your Market',
                items: ['Rank for high-intent keywords', 'Launch content that converts', 'Build authority through smart linking', 'Optimize every conversion point'],
                color: 'from-orange-500 to-red-600'
              },
              {
                num: '4',
                title: 'Scale Your Revenue',
                items: ['Get monthly performance reports', 'Track ranking & revenue growth', 'Continuously optimize for more leads', 'Expand to new profitable keywords'],
                color: 'from-green-500 to-emerald-600'
              },
            ].map((phase, i) => (
              <AnimatedSection key={i} animation="slide-up" delay={i * 100}>
                <div className="relative bg-white rounded-xl p-6 border border-gray-200 hover:shadow-xl transition-all">
                  <div className={`absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-r ${phase.color} text-white font-bold flex items-center justify-center text-lg shadow-lg`}>
                    {phase.num}
                  </div>
                  <h3 className="font-bold text-lg text-seo-dark mb-4 mt-2">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-seo-gray-dark">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results Proof */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto" animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Real Results From Real Clients
            </h2>
            <p className="text-lg text-seo-gray-dark">
              See what our SEO strategy delivers for Australian businesses
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                company: 'Dental Practice (Sydney)',
                result: '+$180K Revenue/Year',
                desc: '45 new patients from organic search. Went from 3rd page to #1 in 6 months.',
                icon: '🦷'
              },
              {
                company: 'Plumbing Service (Melbourne)',
                result: '+32 Jobs/Month',
                desc: 'Dominates "emergency plumber" + 18 local variations. PPC spend eliminated.',
                icon: '🔧'
              },
              {
                company: 'eCommerce Store',
                result: '+$620K Annual Sales',
                desc: '156 product keywords ranking. Consistent 2,500+ qualified visitors/month.',
                icon: '🛒'
              },
            ].map((item, i) => (
              <AnimatedSection key={i} animation="slide-up" delay={i * 100}>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-gray-200">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="text-3xl font-black text-seo-blue mb-2">{item.result}</div>
                  <div className="font-bold text-seo-dark mb-3">{item.company}</div>
                  <p className="text-seo-gray-dark text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto" animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              SEO Solutions For Every Business Type
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: '🏥',
                title: 'Local Service Businesses',
                desc: 'Dentists, plumbers, lawyers, cleaning services. Rank for local keywords. Get 20-50 qualified leads/month. Eliminate PPC forever.',
                cta: 'Get Local Leads'
              },
              {
                icon: '📦',
                title: 'eCommerce & Retail',
                desc: 'Rank products on page 1. Dominate category pages. Get buyers ready to purchase. Generate $50K-$500K+ in additional annual revenue.',
                cta: 'Increase Sales'
              },
              {
                icon: '🎯',
                title: 'B2B & Professional Services',
                desc: 'Generate qualified sales leads. Rank for high-value service keywords. Build a consistent pipeline. Close bigger deals through organic visibility.',
                cta: 'Build Sales Pipeline'
              },
            ].map((service, i) => (
              <AnimatedSection key={i} animation="slide-up" delay={i * 100}>
                <div className="bg-gradient-to-b from-slate-50 to-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="font-bold text-xl text-seo-dark mb-3">{service.title}</h3>
                  <p className="text-seo-gray-dark mb-6">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 text-seo-blue font-bold hover:text-seo-dark transition-colors">
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Testimonials */}
      <Testimonials />

      {/* Urgency Banner */}
      <UrgencyBanner />

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto" animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Common Questions Answered
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How fast will I see new leads and revenue?',
                a: 'First rankings appear in 4-8 weeks. Meaningful lead generation typically starts in 60-90 days. Real revenue impact depends on your conversion rate, but most clients see ROI positive by month 4-5.'
              },
              {
                q: 'What if my competitor has been ranking longer?',
                a: 'Rank time doesn\'t matter—strategy does. We\'ve beaten 10+ year old competitors by targeting underserved keywords and building better authority. Your website age is irrelevant if you\'re smarter about SEO.'
              },
              {
                q: 'What happens if I cancel or you don\'t deliver?',
                a: 'If we don\'t hit agreed milestones by month 6, you get a full refund. We\'re confident enough to put our money where our mouth is. No long-term contracts that trap you.'
              },
              {
                q: 'Will this replace my PPC budget?',
                a: 'Organic search is 5-7x cheaper per lead than PPC. Many clients cut PPC spend 50-80% after 6 months. You\'ll shift budget from clicks to conversations.'
              },
              {
                q: 'What if I don\'t have much content yet?',
                a: 'We build content as part of the strategy. We won\'t ask you to write 50 blog posts. We focus on 15-20 high-value pages that actually convert and rank.'
              },
            ].map((faq, i) => (
              <AnimatedSection key={i} animation="fade-in" delay={i * 50}>
                <details className="group border border-gray-200 rounded-lg p-6 hover:border-seo-blue transition-colors cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-lg text-seo-dark group-open:text-seo-blue">
                    {faq.q}
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-seo-gray-dark mt-4 leading-relaxed">{faq.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-seo-blue via-blue-600 to-green-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <AnimatedSection animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-6">
              Stop Losing Money to Competitors
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Your free SEO audit reveals exactly which keywords will generate the most customers and revenue. See your true potential in writing—no fluff, just numbers.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={100} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/seo-audit" className="group inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-seo-blue font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start Free Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/free-consultation" className="group inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg border-2 border-white transition-all duration-300 backdrop-blur">
              Schedule Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fade-in" delay={200} className="mt-8 text-white/80 text-sm">
            ✓ 100% Free • ✓ No obligation • ✓ Actionable insights
          </AnimatedSection>
        </div>
      </section>

      {/* Location Services */}
      <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto" animation="fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              SEO Services Across Australia
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Specialized local SEO solutions for businesses in major Australian cities
            </p>
          </AnimatedSection>

          <LocationGrid locations={australianCities.slice(0, 12)} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-12" animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Get Started Today
            </h2>
            <p className="text-lg text-seo-gray-dark mb-8">
              Join 250+ businesses that have transformed their SEO and revenue
            </p>
          </AnimatedSection>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
