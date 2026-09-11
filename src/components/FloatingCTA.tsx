"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Send, Phone, Mail, Zap } from 'lucide-react';
import { useMounted } from '@/lib/ssrSafe';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { AnimatePresence, motion } from 'framer-motion';

const FloatingCTA = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isMounted = useMounted();
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    // Context State
    const [contextData, setContextData] = useState({
        text: "GET A FREE AUDIT",
        title: "Get Your Free SEO Audit",
        subtitle: "Enter your details below and we'll send you a comprehensive analysis of your website's SEO performance."
    });

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 20% of the viewport height (or a fixed amount like 300px)
            // Using 20% of document height might be too much for long pages, 
            // so let's use 20% of viewport height or just a fixed scroll amount.
            // User requested "scroll 20%", assuming page scroll.

            const scrollThreshold = document.documentElement.scrollHeight * 0.2;
            // Fallback to a reasonable pixel value if page is short
            const triggerPoint = Math.min(scrollThreshold, 800);

            if (window.scrollY > triggerPoint) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Context Logic
    useEffect(() => {
        if (!pathname) return;

        // Default
        let newContext = {
            text: "GET A FREE AUDIT",
            title: "Get Your Free SEO Audit",
            subtitle: "Enter your details below and we'll send you a comprehensive analysis of your website's SEO performance."
        };

        // Location Pages: /location/[city]/[service] or /[service]-[city]
        // Simple heuristic: check for known city names or URL patterns
        // Since we don't have the full list of cities here easily without importing large data,
        // we can try to parse the URL segments.

        const segments = pathname.split('/').filter(Boolean);

        if (segments[0] === 'location' && segments[1]) {
            // /location/melbourne/local-seo
            const city = segments[1].charAt(0).toUpperCase() + segments[1].slice(1).replace(/-/g, ' ');
            newContext = {
                text: `DOMINATE ${city.toUpperCase()} SEO`,
                title: `Dominate the ${city} Market`,
                subtitle: `Get a custom SEO strategy tailored for ${city} businesses.`
            };
        } else if ((segments[0] === 'industry' || segments[0] === 'industries') && segments[1]) {
            // /industry/dental
            const industry = segments[1].charAt(0).toUpperCase() + segments[1].slice(1).replace(/-/g, ' ');
            newContext = {
                text: `GROW YOUR ${industry.toUpperCase()} BIZ`,
                title: `Get More ${industry} Leads`,
                subtitle: `Specialized SEO strategies to help ${industry} businesses grow.`
            };
        } else if (pathname.includes('-seo-')) {
            // Dynamic case study or service-location page e.g. /dental-seo-melbourne
            // Try to extract city from the end
            const parts = pathname.split('-');
            const potentialCity = parts[parts.length - 1];
            if (potentialCity) {
                const city = potentialCity.charAt(0).toUpperCase() + potentialCity.slice(1);
                newContext = {
                    text: `SEO FOR ${city.toUpperCase()}`,
                    title: `Win in ${city}`,
                    subtitle: `See how we help businesses in ${city} succeed.`
                };
            }
        }

        setContextData(newContext);
    }, [pathname]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: (e.target as any).name.value,
                    email: (e.target as any).email.value,
                    website: (e.target as any).website.value,
                    message: (e.target as any).message.value,
                    source: 'floating-cta',
                    location: contextData.title // Pass context as location or extra info
                }),
            });

            if (response.ok) {
                toast({
                    title: "Message Sent!",
                    description: "We'll get back to you shortly.",
                });
                setIsDialogOpen(false);
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive",
            });
        }

        setIsSubmitting(false);
        setIsDialogOpen(false);
    };

    if (!isMounted) return null;

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AnimatePresence>
                {isVisible && (
                    <DialogTrigger asChild>
                        <motion.button
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-b from-seo-blue to-purple-600 text-white py-4 md:py-6 px-1 md:px-1.5 rounded-l-xl shadow-2xl hover:shadow-seo-blue/50 hover:scale-105 transition-all duration-300 flex flex-col items-center gap-2 md:gap-3 group border-l border-t border-b border-white/20"
                            aria-label={contextData.text}
                        >
                            <div className="bg-white/20 p-2 md:p-1.5 rounded-full animate-pulse">
                                <Zap className="w-6 h-6 md:w-5 md:h-5 text-white" />
                            </div>
                            <span className="hidden md:inline-block writing-mode-vertical text-xs font-bold tracking-widest uppercase text-shadow-sm whitespace-nowrap">
                                {contextData.text}
                            </span>
                        </motion.button>
                    </DialogTrigger>
                )}
            </AnimatePresence>

            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-display font-bold text-center">
                        {contextData.title}
                    </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <p className="text-center text-slate-500 mb-6">
                        {contextData.subtitle}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Input name="name" placeholder="Your Name" required />
                        </div>
                        <div className="space-y-2">
                            <Input name="email" type="email" placeholder="Email Address" required />
                        </div>
                        <div className="space-y-2">
                            <Input name="website" placeholder="Website URL" required />
                        </div>
                        <div className="space-y-2">
                            <Textarea name="message" placeholder="Any specific challenges?" />
                        </div>

                        <Button type="submit" className="w-full bg-seo-blue hover:bg-seo-blue-light text-white" disabled={isSubmitting}>
                            {isSubmitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    Get My Free Audit
                                    <Send className="w-4 h-4 ml-2" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center gap-6 text-sm text-slate-500">
                        <a href="tel:1300123456" className="flex items-center hover:text-seo-blue">
                            <Phone className="w-4 h-4 mr-2" />
                            1300 123 456
                        </a>
                        <a href="mailto:hello@seomastery.com.au" className="flex items-center hover:text-seo-blue">
                            <Mail className="w-4 h-4 mr-2" />
                            Email Us
                        </a>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default FloatingCTA;
