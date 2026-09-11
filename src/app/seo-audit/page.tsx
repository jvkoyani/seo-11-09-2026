'use client';

import Link from 'next/link';
import { useState } from "react";
import { Send, Globe, Star, ChevronRight, CheckCircle, Lock, ShieldCheck, ArrowRight, BarChart, Zap, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import { useMounted } from "@/lib/ssrSafe";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FAQSection from "@/components/FAQSection";
import TrustIndicators from "@/components/TrustIndicators";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

// Initial URL form schema
const urlFormSchema = z.object({
    websiteUrl: z
        .string()
        .url({ message: "Please enter a valid URL" })
        .startsWith("http", {
            message: "URL must start with http:// or https://"
        })
});

// Lead capture form schema
const leadFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z.string().min(8, { message: "Please enter a valid phone number" }),
    company: z.string().optional(),
    message: z.string().optional(),
});

type UrlFormValues = z.infer<typeof urlFormSchema>;
type LeadFormValues = z.infer<typeof leadFormSchema>;

export default function SeoAuditPage() {
    const [showContactDialog, setShowContactDialog] = useState(false);
    const [capturedUrl, setCapturedUrl] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isMounted = useMounted();

    const urlForm = useForm<UrlFormValues>({
        resolver: zodResolver(urlFormSchema),
        defaultValues: {
            websiteUrl: "",
        },
    });

    const leadForm = useForm<LeadFormValues>({
        resolver: zodResolver(leadFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        },
    });

    const onUrlSubmit = (data: UrlFormValues) => {
        setCapturedUrl(data.websiteUrl);
        setShowContactDialog(true);
    };

    const onLeadSubmit = async (data: LeadFormValues) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    name: data.name,
                    phone: data.phone,
                    company: data.company,
                    message: data.message,
                    website: capturedUrl,
                    source: 'seo-audit',
                }),
            });

            const result = await response.json();

            if (response.ok) {
                toast({
                    title: "Audit Request Received!",
                    description: "Your comprehensive SEO report will be sent via email in a short time. Thanks for your inquiry!",
                    duration: 6000,
                });
                // Reset forms
                urlForm.reset();
                leadForm.reset();
                setCapturedUrl("");
                setShowContactDialog(false);
            } else {
                toast({
                    title: "Submission Failed",
                    description: result.error || "Something went wrong. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "An unexpected error occurred. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section - Dark Premium Theme */}
            <section className="pt-32 pb-24 bg-slate-900 relative overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-seo-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedSection className="mb-8" animation="fade-in">
                        <div className="inline-flex items-center space-x-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-700">
                            <Link href="/">Home</Link>
                            <ChevronRight className="h-3 w-3" />
                            <span className="text-seo-blue font-medium">SEO Audit Tool</span>
                        </div>
                    </AnimatedSection>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <AnimatedSection className="lg:w-1/2" animation="fade-in-right">
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                                <Globe className="h-3.5 w-3.5 mr-2" />
                                Free Professional Analysis
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                                Unlock Your Website's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Full Potential</span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                                Get a comprehensive, expert-reviewed SEO audit delivered straight to your inbox. We analyze over 50 ranking factors to help you dominate search results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-slate-400">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Technical SEO Check</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Content Analysis</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Competitor Insights</span>
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection className="lg:w-1/2 w-full" animation="fade-in-left" delay={200}>
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-seo-blue to-purple-600 rounded-2xl blur opacity-75 animate-pulse"></div>
                                <Card className="bg-slate-900 border-slate-800 relative rounded-2xl overflow-hidden shadow-2xl">
                                    <CardContent className="p-8">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Audit</h3>
                                            <p className="text-slate-400">Enter your website URL to start the analysis.</p>
                                        </div>

                                        <Form {...urlForm}>
                                            <form onSubmit={urlForm.handleSubmit(onUrlSubmit)} className="space-y-4">
                                                <FormField
                                                    control={urlForm.control}
                                                    name="websiteUrl"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel className="text-slate-300">Website URL</FormLabel>
                                                            <FormControl>
                                                                <div className="relative">
                                                                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                                                                    <Input
                                                                        placeholder="https://yourwebsite.com"
                                                                        className="pl-10 h-12 text-base bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-seo-blue focus:ring-seo-blue/20"
                                                                        {...field}
                                                                    />
                                                                </div>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <Button
                                                    type="submit"
                                                    className="w-full h-12 text-base font-semibold bg-seo-blue hover:bg-seo-blue-light text-white shadow-lg shadow-seo-blue/20 transition-all hover:scale-[1.02]"
                                                >
                                                    Analyze My Website
                                                    <Send className="ml-2 h-4 w-4" />
                                                </Button>
                                            </form>
                                        </Form>

                                        <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-center text-xs text-slate-500">
                                            <Lock className="h-3 w-3 mr-1.5" />
                                            <span>Your data is secure. We never share your information.</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Features Grid - Premium Light Theme with Multicolor Title */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4">
                            Comprehensive Analysis
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                            What's Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Your Report?</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Our comprehensive audit covers everything from technical infrastructure to on-page content optimization.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Technical Health",
                                description: "Identify crawl errors, broken links, and speed issues slowing you down.",
                                icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
                                color: "bg-blue-50",
                                border: "border-blue-100"
                            },
                            {
                                title: "On-Page SEO",
                                description: "Analysis of meta tags, headers, content quality, and keyword usage.",
                                icon: <Star className="h-8 w-8 text-purple-600" />,
                                color: "bg-purple-50",
                                border: "border-purple-100"
                            },
                            {
                                title: "Competitor Analysis",
                                description: "See how you stack up against top competitors in your industry.",
                                icon: <Globe className="h-8 w-8 text-green-600" />,
                                color: "bg-green-50",
                                border: "border-green-100"
                            }
                        ].map((feature, i) => (
                            <AnimatedSection key={i} delay={i * 100} className={`p-8 rounded-3xl border ${feature.border} bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
                                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <TrustIndicators />

            {/* How It Works Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Simple Process</span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2 mb-4">How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">It Works</span></h2>
                        <p className="text-slate-600">Get your professional SEO audit in three simple steps.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-200 -z-10"></div>

                        {[
                            {
                                step: "01",
                                title: "Enter Your URL",
                                description: "Input your website address in the form above to start the analysis process.",
                                icon: <Search className="h-6 w-6 text-blue-600" />
                            },
                            {
                                step: "02",
                                title: "We Analyze",
                                description: "Our system scans your site against 50+ ranking factors and best practices.",
                                icon: <BarChart className="h-6 w-6 text-blue-600" />
                            },
                            {
                                step: "03",
                                title: "Get Results",
                                description: "Receive a detailed PDF report with actionable recommendations in your inbox.",
                                icon: <Zap className="h-6 w-6 text-blue-600" />
                            }
                        ].map((item, i) => (
                            <AnimatedSection key={i} delay={i * 150} className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
                                    {item.icon}
                                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                                        {item.step}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection
                title={<h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Questions</span></h2>}
                description="Common questions about our free SEO audit tool."
                customFaqs={[
                    {
                        question: "Is this SEO audit really free?",
                        answer: "Yes, our initial SEO audit is completely free. It provides a comprehensive overview of your website's technical health and on-page SEO performance."
                    },
                    {
                        question: "How long does the analysis take?",
                        answer: "The analysis typically takes 1-2 minutes to complete. Once finished, we compile the data into a report and email it to you immediately."
                    },
                    {
                        question: "What does the report include?",
                        answer: "The report covers technical SEO issues, page speed analysis, mobile friendliness, content optimization, and a basic competitor comparison."
                    },
                    {
                        question: "Do I need to install anything?",
                        answer: "No, our tool is web-based. You don't need to install any software or add any code to your website."
                    }
                ]}
            />

            {/* CTA Section */}
            <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">Improve Your Rankings?</span></h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Don&apos;t let technical issues hold your website back. Get your free audit today and start climbing the search results.
                    </p>
                    <Button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-white text-blue-900 hover:bg-blue-50 h-14 px-8 text-lg font-semibold rounded-full shadow-lg shadow-blue-900/50 transition-all hover:scale-105"
                    >
                        Get My Free Audit
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>

            <Footer />
            {isMounted && (
                <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
                    <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-0 shadow-2xl">
                        <div className="bg-blue-600 p-6 text-white text-center">
                            <DialogHeader>
                                <DialogTitle className="text-2xl font-bold text-white text-center">Where should we send your report?</DialogTitle>
                                <DialogDescription className="text-blue-100 text-center mt-2">
                                    Enter your details below to receive your detailed SEO audit for <span className="font-semibold text-white">{capturedUrl}</span>.
                                </DialogDescription>
                            </DialogHeader>
                        </div>

                        <div className="p-6 bg-white">
                            <Form {...leadForm}>
                                <form onSubmit={leadForm.handleSubmit(onLeadSubmit)} className="space-y-4">
                                    <FormField
                                        control={leadForm.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <FormField
                                            control={leadForm.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Business Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="john@company.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={leadForm.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="+61 400 000 000" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={leadForm.control}
                                        name="company"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Company Name (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your Company Pty Ltd" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base mt-2"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Processing..." : "Get My Free Audit Report"}
                                    </Button>

                                    <p className="text-xs text-center text-slate-400 mt-4">
                                        By submitting this form, you agree to receive the audit report and occasional SEO tips via email.
                                    </p>
                                </form>
                            </Form>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}
