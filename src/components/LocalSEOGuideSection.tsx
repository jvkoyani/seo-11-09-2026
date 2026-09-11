import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle, AlertTriangle, Search, Map } from 'lucide-react';

interface LocalSEOGuideSectionProps {
    locationName: string;
}

const LocalSEOGuideSection = ({ locationName }: LocalSEOGuideSectionProps) => {
    const guideSections = [
        {
            title: "What is Local SEO?",
            content: (
                <>
                    <p className="mb-6 text-slate-600 font-medium text-sm leading-relaxed">
                        Local SEO (Search Engine Optimization) is the process of optimizing your online presence to attract more business from relevant local searches. For businesses in <span className="text-seo-blue font-bold">{locationName}</span>, this means ensuring that when potential customers search for services you offer, your business appears prominently in the "Local Pack" (the map section) and the organic search results.
                    </p>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                        Unlike general SEO, which targets a global or national audience, Local SEO is laser-focused on capturing the attention of people in your specific geographic area—{locationName} and its surrounding suburbs. It's about connecting with customers who are physically close to you and ready to buy.
                    </p>
                </>
            ),
            icon: Search,
            color: "from-seo-blue to-cyan-500"
        },
        {
            title: `Why ${locationName} Businesses Can't Ignore Local SEO`,
            content: (
                <>
                    <p className="mb-6 text-slate-600 font-medium text-sm leading-relaxed">
                        The digital landscape in {locationName} is competitive. With more consumers turning to Google to find local services than ever before, being invisible online is akin to having a shop with no sign in a hidden alley. Here's why investing in Local SEO is crucial:
                    </p>
                    <ul className="space-y-4">
                        {[
                            "High Purchase Intent: People searching for 'plumber in " + locationName + "' have an immediate need.",
                            "Mobile Dominance: Most local searches happen on mobile devices while people are on the go.",
                            "Builds Trust: Appearing in the top 3 results signals credibility to customers.",
                            "Cost-Effective: Higher ROI compared to traditional print or radio advertising."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </>
            ),
            icon: Map,
            color: "from-purple-500 to-pink-500"
        },
        {
            title: `Key Ranking Factors for ${locationName}`,
            content: (
                <>
                    <p className="mb-6 text-slate-600 font-medium text-sm leading-relaxed">
                        Google uses a complex algorithm to determine which businesses rank highest in {locationName}. While there are hundreds of factors, these are the most critical for local success:
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            { title: "Google Business Profile", desc: "Claimed, verified, and optimized with photos and hours." },
                            { title: "Local Citations", desc: "Consistent Name, Address, and Phone (NAP) across all directories." },
                            { title: "Online Reviews", desc: "Quantity and quality of reviews from happy customers." },
                            { title: "On-Page Signals", desc: "Website optimized with local keywords and location pages." }
                        ].map((factor, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-seo-navy mb-1">{factor.title}</h4>
                                <p className="text-sm text-slate-500">{factor.desc}</p>
                            </div>
                        ))}
                    </div>
                </>
            ),
            icon: CheckCircle,
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Common Local SEO Mistakes",
            content: (
                <>
                    <p className="mb-6 text-slate-600 font-medium text-sm leading-relaxed">
                        Many {locationName} businesses try to handle SEO themselves and fall into common traps that can actually hurt their rankings. Avoid these pitfalls:
                    </p>
                    <ul className="space-y-4">
                        {[
                            { title: "Inconsistent NAP Data", desc: "Confusing Google with different addresses." },
                            { title: "Ignoring Reviews", desc: "Failing to respond to customer feedback." },
                            { title: "Keyword Stuffing", desc: "Overusing location keywords looks spammy." },
                            { title: "Neglecting Mobile", desc: "Slow or unusable mobile sites drive users away." }
                        ].map((mistake, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                                <div>
                                    <strong className="text-seo-navy">{mistake.title}:</strong> {mistake.desc}
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            ),
            icon: AlertTriangle,
            color: "from-orange-500 to-red-500"
        }
    ];
    return (
        <section className="py-24 bg-seo-clean relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-seo-blue/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-10" animation="fade-in">
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-blue-50 text-seo-blue border border-blue-100 mb-4 uppercase tracking-wider">
                        Local SEO Guide
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-seo-navy mb-6 uppercase tracking-tight">
                        The Ultimate Guide to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-seo-blue to-cyan-500">Local SEO in {locationName}</span>
                    </h2>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                        Everything you need to know about dominating the local search results and growing your business.
                    </p>
                </AnimatedSection>

                <div className="space-y-24">
                    {guideSections.map((section, index) => (
                        <AnimatedSection
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            animation="fade-in"
                            delay={index * 100}
                        >
                            {/* Content Side */}
                            <div className="flex-1">
                                <h3 className="text-3xl font-black text-seo-navy mb-6 flex items-center gap-3 uppercase tracking-tight">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${section.color} bg-opacity-10 text-seo-blue`}>
                                        <section.icon className="w-6 h-6" />
                                    </div>
                                    {section.title.replace("{locationName}", locationName)}
                                </h3>
                                <div className="prose prose-slate max-w-none">
                                    {section.content}
                                </div>
                            </div>

                            {/* Image/Visual Side */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video w-full rounded-3xl overflow-hidden group border border-slate-100 shadow-lg">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                    <div className="absolute inset-0 backdrop-blur-3xl bg-white/50"></div>

                                    {/* Placeholder Visual - In a real app, this would be an Image component */}
                                    <div className="relative h-full bg-white border border-slate-100 flex items-center justify-center p-12">
                                        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${section.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                            <section.icon className="w-16 h-16 text-white" />
                                        </div>

                                        {/* Decorative elements */}
                                        <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-seo-blue/20"></div>
                                        <div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-seo-blue/20"></div>
                                        <div className="absolute top-4 left-12 w-2 h-2 rounded-full bg-seo-blue/20"></div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* CTA Box */}
                <AnimatedSection className="mt-24" animation="fade-in">
                    <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-seo-blue/5 to-cyan-500/5 -z-10"></div>
                        <h3 className="text-3xl font-black text-seo-navy mb-6 uppercase tracking-tight">
                            Ready to Grow Your {locationName} Business?
                        </h3>
                        <p className="text-sm text-slate-600 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                            Local SEO is not a one-time task; it&apos;s an ongoing strategy. To stay ahead of your competitors in {locationName}, you need a dedicated partner.
                        </p>
                        <a href="/contact" className="bg-seo-peach text-seo-navy hover:text-white hover:bg-seo-navy font-bold py-4 px-8 rounded-full transition-colors shadow-lg uppercase tracking-wider inline-block">
                            Get Your Free Audit
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default LocalSEOGuideSection;
