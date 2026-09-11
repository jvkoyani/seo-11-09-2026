import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Users, Award, BarChart, ShieldCheck, Heart, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us | SEO Experts Since 2010',
    description: 'Meet the SEO specialists behind 250+ successful rankings. We don\'t just promise results—we deliver them. Discover our data-driven approach.',
};

const About = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />

            {/* Hero Section - Dark Premium Theme */}
            <section className="pt-32 pb-24 bg-slate-900 relative overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seo-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="text-center max-w-4xl mx-auto" animation="fade-in">
                        <div className="inline-flex items-center justify-center space-x-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700 mb-8">
                            <Link href="/">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-seo-blue font-medium">About Us</span>
                        </div>

                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                            <Users className="h-3.5 w-3.5 mr-2" />
                            Meet the Team
                        </span>

                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SEO Partner</span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            We're a team of SEO specialists passionate about helping businesses succeed online. We don't just promise results—we deliver them.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <AnimatedSection className="lg:w-1/2" animation="fade-in-left">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30"></div>
                                <div className="rounded-2xl overflow-hidden relative h-[500px] shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                                        alt="SEO team meeting"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                                        <div className="text-white">
                                            <p className="font-bold text-lg">Established 2010</p>
                                            <p className="text-slate-300 text-sm">Over a decade of excellence</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="lg:w-1/2" animation="fade-in-right">
                            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4">
                                Our Story
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                                From Small Beginnings to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Industry Leaders</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    Founded in 2010, SEOfocus started as a small team of digital marketing enthusiasts with a vision: to make effective SEO accessible to businesses of all sizes. We believed that search engine optimization shouldn&apos;t be shrouded in mystery or filled with empty promises.
                                </p>
                                <p>
                                    Over the years, we've grown into a full-service SEO agency with offices across Australia, helping hundreds of businesses improve their online visibility and achieve sustainable growth through search. Our approach combines technical expertise, creative content strategies, and data-driven insights to deliver measurable results.
                                </p>
                                <p>
                                    Today, we&apos;re proud to be recognized as industry leaders, but we've never lost sight of our original mission: providing transparent, effective SEO services that truly help our clients succeed.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-4">
                            Our Values
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Drives Us</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            These core principles guide everything we do, ensuring we deliver the best possible results for our clients.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Transparency",
                                desc: "We believe in complete honesty about our methods, expectations, and results. No black boxes or hidden tactics.",
                                icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
                                color: "bg-blue-50",
                                border: "border-blue-100"
                            },
                            {
                                title: "Excellence",
                                desc: "We strive for the highest standards in everything we do, from research and strategy to implementation and reporting.",
                                icon: <Award className="h-6 w-6 text-purple-600" />,
                                color: "bg-purple-50",
                                border: "border-purple-100"
                            },
                            {
                                title: "Innovation",
                                desc: "We continuously learn, adapt, and evolve our approaches to stay ahead of search engine algorithm changes and industry trends.",
                                icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
                                color: "bg-amber-50",
                                border: "border-amber-100"
                            },
                            {
                                title: "Collaboration",
                                desc: "We work closely with our clients, treating their business goals as our own and becoming true extensions of their teams.",
                                icon: <Users className="h-6 w-6 text-green-600" />,
                                color: "bg-green-50",
                                border: "border-green-100"
                            },
                            {
                                title: "Data-Driven",
                                desc: "We base our decisions on solid data and evidence, not assumptions or outdated SEO practices.",
                                icon: <BarChart className="h-6 w-6 text-indigo-600" />,
                                color: "bg-indigo-50",
                                border: "border-indigo-100"
                            },
                            {
                                title: "Client Success",
                                desc: "We measure our success by our clients' outcomes. If they&apos;re not succeeding, neither are we.",
                                icon: <Heart className="h-6 w-6 text-red-600" />,
                                color: "bg-red-50",
                                border: "border-red-100"
                            }
                        ].map((value, index) => (
                            <AnimatedSection
                                key={index}
                                className={`bg-white rounded-2xl shadow-sm p-8 border ${value.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
                                animation="fade-in"
                                delay={index * 100}
                            >
                                <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {value.desc}
                                </p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
                            Our Team
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                            Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Experts</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Our diverse team brings together decades of combined experience in SEO and digital marketing.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Emma Thompson",
                                role: "Founder & CEO",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                            },
                            {
                                name: "Michael Zhang",
                                role: "Technical SEO Director",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                            },
                            {
                                name: "Sarah Williams",
                                role: "Content Strategy Lead",
                                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
                            },
                            {
                                name: "David Chen",
                                role: "Analytics Manager",
                                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop"
                            }
                        ].map((member, index) => (
                            <AnimatedSection
                                key={index}
                                className="group"
                                animation="fade-in"
                                delay={index * 100}
                            >
                                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                                    <div className="aspect-[4/5] relative">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <p className="text-white font-medium">Connect on LinkedIn</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-1 group-hover:text-seo-blue transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-seo-blue font-medium">
                                    {member.role}
                                </p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <ContactForm />
            <Footer />
        </div>
    );
};

export default About;
