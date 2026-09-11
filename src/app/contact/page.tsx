import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { ChevronRight, Mail, MessageSquare } from 'lucide-react';

import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact Us | Get Your Free SEO Quote',
    description: 'Ready to rank higher? Contact our SEO team for a free strategy session. No obligations, just honest advice on growing your online visibility.',
};

const Contact = () => {
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
                            <span className="text-seo-blue font-medium">Contact</span>
                        </div>

                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                            <MessageSquare className="h-3.5 w-3.5 mr-2" />
                            Get in Touch
                        </span>

                        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Let's Talk About Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SEO Goals</span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Have questions about our services or want to discuss your specific SEO needs? We're here to help you achieve better search rankings.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="relative z-20 -mt-16 pb-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center max-w-5xl mx-auto">
                        {[
                            {
                                title: "Email Us",
                                info: "hello@seofocus.com",
                                subInfo: "We reply within 24 hours",
                                icon: <Mail className="h-6 w-6 text-blue-500" />,
                                color: "bg-blue-500/10",
                                border: "border-blue-500/20"
                            }
                        ].map((item, index) => (
                            <AnimatedSection key={index} animation="slide-up" delay={index * 100} className="w-full max-w-md">
                                <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 p-8 text-center h-full hover:-translate-y-1 transition-transform duration-300">
                                    <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mx-auto mb-6 border ${item.border}`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-lg font-medium text-seo-blue mb-1">{item.info}</p>
                                    <p className="text-slate-500 text-sm">{item.subInfo}</p>
                                </div>
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

export default Contact;
