import React from 'react';
import Link from 'next/link';
import { TrendingDown, UserX, Trophy, DollarSign, ArrowRight, Search, Clock, AlertTriangle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const painPoints = [
  {
    id: 1,
    problem: "Stuck on Page 2+",
    description: "Your website is invisible to 95% of potential customers",
    solution: "First Page Rankings",
    solutionDesc: "We'll get you ranking where customers actually look",
    icon: TrendingDown,
    solutionIcon: Trophy,
    color: "from-red-50 to-orange-50",
    iconColor: "text-red-500",
    solutionColor: "from-green-50 to-emerald-50",
    solutionIconColor: "text-emerald-500"
  },
  {
    id: 2,
    problem: "No Leads From Website",
    description: "Traffic means nothing without conversions",
    solution: "Qualified Lead Generation",
    solutionDesc: "Turn visitors into paying customers",
    icon: UserX,
    solutionIcon: Search,
    color: "from-orange-50 to-amber-50",
    iconColor: "text-orange-500",
    solutionColor: "from-blue-50 to-cyan-50",
    solutionIconColor: "text-blue-500"
  },
  {
    id: 3,
    problem: "Competitors Winning",
    description: "They're stealing your customers online",
    solution: "Market Domination",
    solutionDesc: "Outrank and outperform your competition",
    icon: AlertTriangle,
    solutionIcon: Trophy,
    color: "from-amber-50 to-yellow-50",
    iconColor: "text-amber-500",
    solutionColor: "from-purple-50 to-pink-50",
    solutionIconColor: "text-purple-500"
  },
  {
    id: 4,
    problem: "Wasted Ad Spend",
    description: "Paying for clicks that don't convert",
    solution: "Organic Growth",
    solutionDesc: "Free, sustainable traffic that converts",
    icon: DollarSign,
    solutionIcon: Clock,
    color: "from-pink-50 to-rose-50",
    iconColor: "text-pink-500",
    solutionColor: "from-teal-50 to-green-50",
    solutionIconColor: "text-teal-500"
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-seo-gray-light relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-seo-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
        <AnimatedSection
          className="text-center mb-4 md:mb-16 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-red-50 text-red-700 border border-red-100 mb-6">
            Sound Familiar?
          </span>
          <h2 className="text-2xl md:text-5xl font-display font-black text-seo-navy mb-4 md:mb-6 leading-tight uppercase tracking-tight">
            Tired of Being <span className="text-red-500">Invisible</span> Online?
          </h2>
          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            These problems cost Australian businesses millions in lost revenue every year.
            <br />
            <span className="text-seo-navy font-bold">Hover a card to see your solution.</span>
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-16">
          {painPoints.map((point, index) => (
            <AnimatedSection
              key={point.id}
              animation="slide-up"
              delay={index * 100}
            >
              <div className="relative h-48 sm:h-60 md:h-72 cursor-default group perspective-1000">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front - Problem */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className={`h-full rounded-2xl bg-white border border-slate-200 shadow-sm p-[2px] group-hover:shadow-xl transition-all duration-300`}>
                      <div className="h-full bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <point.icon className={`w-8 h-8 ${point.iconColor}`} />
                        </div>
                        <h3 className="text-xl font-bold text-seo-navy mb-2">{point.problem}</h3>
                        <p className="text-slate-500 font-medium text-sm">{point.description}</p>
                        <div className="mt-4 text-xs font-bold text-seo-blue flex items-center gap-1">
                          <span>Hover to see solution</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back - Solution */}
                  <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
                    <div className={`h-full rounded-2xl bg-white border border-slate-200 p-[2px] shadow-xl`}>
                      <div className="h-full bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.solutionColor} flex items-center justify-center mb-4`}>
                          <point.solutionIcon className={`w-8 h-8 ${point.solutionIconColor}`} />
                        </div>
                        <h3 className="text-xl font-bold text-seo-navy mb-2">{point.solution}</h3>
                        <p className="text-slate-500 font-medium text-sm">{point.solutionDesc}</p>
                        <div className="mt-4 text-xs font-semibold text-green-700 flex items-center gap-1">
                          <span>✓ We can help</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" animation="fade-in" delay={500}>
          <Link href="/seo-audit" className="inline-flex items-center gap-3 bg-seo-peach hover:bg-seo-navy text-seo-navy hover:text-white uppercase tracking-wider font-bold py-4 px-8 rounded-md transition-colors duration-300 shadow-lg group">
            <span>Get Your Free SEO Roadmap</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-slate-500 font-bold text-sm">No credit card required • Results in 48 hours</p>
        </AnimatedSection>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </section>
  );
};

export default PainPoints;
