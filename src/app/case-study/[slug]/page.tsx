import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Building, ChevronLeft, Zap, Target, Star, Quote, Calendar, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import HighlightedHeading from '@/components/HighlightedHeading';
import { caseStudies, caseStudyTemplates, CaseStudyData } from '@/lib/data';
import { allAustralianCities, australianCities } from '@/lib/locationData';
import Image from 'next/image';

async function getCaseStudy(slug: string): Promise<CaseStudyData | null> {
    // 1. Try exact match
    const exactMatch = caseStudies.find(c => c.slug === slug);
    if (exactMatch) return exactMatch;

    // 2. Try dynamic match
    for (const template of caseStudyTemplates) {
        if (slug.startsWith(`${template.slug}-`)) {
            const locationSlug = slug.replace(`${template.slug}-`, '');
            const location = allAustralianCities.find(l => l.slug === locationSlug);

            if (location) {
                return {
                    ...template,
                    id: `${template.id}-${location.slug}`,
                    slug: slug,
                    title: template.title.replace(/{City}/g, location.name),
                    client: template.client.replace(/{City}/g, location.name),
                    challenge: template.challenge.replace(/{City}/g, location.name),
                    solution: template.solution.replace(/{City}/g, location.name),
                    results: template.results.map(r => r.replace(/{City}/g, location.name)),
                    testimonial: template.testimonial?.replace(/{City}/g, location.name),
                    location: location.slug
                };
            }
        }
    }

    return null;
}

export async function generateStaticParams() {
    const params = [];

    // 1. Static case studies
    for (const study of caseStudies) {
        params.push({ slug: study.slug });
    }

    // 2. Dynamic template-based case studies (limited to major cities)
    for (const template of caseStudyTemplates) {
        for (const city of australianCities) {
            params.push({ slug: `${template.slug}-${city.slug}` });
        }
    }

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const caseStudy = await getCaseStudy(slug);

    if (!caseStudy) {
        return {
            title: 'Case Study Not Found',
        };
    }

    return {
        title: `${caseStudy.title} | Case Study`,
        description: `Read how we helped ${caseStudy.client} achieve amazing results with our ${caseStudy.industry} SEO strategy.`,
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const caseStudy = await getCaseStudy(slug);

    if (!caseStudy) {
        notFound();
    }

    // Find related case studies
    const relatedCaseStudies = caseStudies
        .filter(c =>
            c.id !== caseStudy.id &&
            (c.industry === caseStudy.industry ||
                c.solution.includes(caseStudy.industry) ||
                caseStudy.solution.includes(c.industry))
        )
        .slice(0, 2);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            {/* Hero Section - Dark Theme matching Homepage */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                    </div>
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="max-w-4xl mx-auto text-center" animation="fade-in">
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
                        >
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            <span>Back to all case studies</span>
                        </Link>

                        <div className="flex justify-center mb-6">
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                <Building className="h-4 w-4 mr-2" />
                                {caseStudy.industry}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            {caseStudy.title}
                        </h1>

                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Client: <span className="text-white font-medium">{caseStudy.client}</span>
                        </p>

                        {/* Stats Grid - Glassmorphism */}
                        {caseStudy.stats && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {caseStudy.stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                                            {stat.prefix}{stat.value}{stat.suffix}
                                        </div>
                                        <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </AnimatedSection>
                </div>
            </section>

            {/* Featured Image - Overlapping */}
            <section className="relative -mt-16 z-20 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <AnimatedSection animation="slide-up" delay={200}>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative h-[400px] md:h-[500px]">
                                <Image
                                    src={caseStudy.image}
                                    alt={caseStudy.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                                            {/* Placeholder logo if no specific logo field */}
                                            <Building className="w-8 h-8 text-seo-blue" />
                                        </div>
                                        <div>
                                            <h3 className="text-white text-xl font-bold">{caseStudy.client}</h3>
                                            <p className="text-white/80">{caseStudy.location ? caseStudy.location.charAt(0).toUpperCase() + caseStudy.location.slice(1) : 'Australia'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                            <AnimatedSection animation="fade-in-right">
                                <div className="bg-red-50 rounded-2xl p-8 border border-red-100 h-full">
                                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <HighlightedHeading text="The Challenge" highlight="Challenge" className="text-2xl mb-4" />
                                    <p className="text-seo-gray-dark leading-relaxed">
                                        {caseStudy.challenge}
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="fade-in-left" delay={200}>
                                <div className="bg-green-50 rounded-2xl p-8 border border-green-100 h-full">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <HighlightedHeading text="Our Solution" highlight="Solution" className="text-2xl mb-4" />
                                    <p className="text-seo-gray-dark leading-relaxed">
                                        {caseStudy.solution}
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Strategy Grid */}
                        {caseStudy.strategy && (
                            <AnimatedSection className="mb-20" animation="fade-in">
                                <HighlightedHeading text="Strategic Approach" highlight="Strategic" align="center" className="mb-10" />
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {caseStudy.strategy.map((item, index) => (
                                        <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                            <div className="w-12 h-12 bg-gradient-to-br from-seo-blue to-blue-600 rounded-xl flex items-center justify-center mb-6 text-white font-bold shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                                {index + 1}
                                            </div>
                                            <h3 className="text-xl font-bold text-seo-dark mb-3">{item.title}</h3>
                                            <p className="text-seo-gray-dark text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        )}

                        {/* Implementation Timeline */}
                        {caseStudy.implementation && (
                            <AnimatedSection className="mb-20" animation="fade-in">
                                <HighlightedHeading text="Implementation Roadmap" highlight="Roadmap" align="center" className="mb-10" />
                                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                    {caseStudy.implementation.map((phase, index) => (
                                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-seo-blue text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-md">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="font-bold text-seo-dark">{phase.title}</h3>
                                                    <span className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-full">{phase.duration}</span>
                                                </div>
                                                <p className="text-seo-gray-dark text-sm">{phase.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </AnimatedSection>
                        )}

                        {/* Results & Testimonial */}
                        <AnimatedSection className="mb-12" animation="fade-in">
                            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                                {/* Background Glows */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The Outcome</h2>
                                        <p className="text-slate-400">Measurable results that drove real business growth</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                        <div className="space-y-6">
                                            {caseStudy.results.map((result, index) => (
                                                <div key={index} className="flex items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                                    <div className="bg-green-500/20 rounded-full p-2 mt-1 mr-4 flex-shrink-0">
                                                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                                                    </div>
                                                    <span className="text-lg text-white/90 font-medium">{result}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {caseStudy.testimonial && (
                                            <div className="bg-gradient-to-br from-blue-600 to-seo-blue p-8 rounded-2xl shadow-xl flex flex-col justify-center relative">
                                                <Quote className="absolute top-6 left-6 w-10 h-10 text-white/20" />
                                                <div className="mb-6 flex justify-center">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="w-5 h-5 text-amber-300 fill-amber-300" />
                                                    ))}
                                                </div>
                                                <blockquote className="text-xl font-medium text-white text-center italic mb-6 relative z-10">
                                                    &quot;{caseStudy.testimonial}&quot;
                                                </blockquote>
                                                <div className="text-center border-t border-white/20 pt-6">
                                                    <div className="font-bold text-white">{caseStudy.client}</div>
                                                    <div className="text-blue-100 text-sm">Verified Client</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Related Case Studies */}
            {relatedCaseStudies.length > 0 && (
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
                            <HighlightedHeading text="More Success Stories" highlight="Success Stories" align="center" />
                            <p className="text-lg text-seo-gray-dark">
                                See how we've helped other businesses achieve their goals
                            </p>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {relatedCaseStudies.map((study, index) => (
                                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center bg-white hover:bg-gray-50 text-seo-dark font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
                            >
                                <span>View All Case Studies</span>
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-4xl mx-auto bg-gradient-to-r from-seo-blue to-blue-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden" animation="fade-in">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Ready to Write Your Success Story?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Join {caseStudy.client} and hundreds of other Australian businesses growing with our data-driven SEO strategies.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center bg-white text-seo-blue hover:bg-blue-50 font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                <span>Get Your Free Strategy</span>
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <ContactForm />
            <Footer />
        </div>
    );
}
