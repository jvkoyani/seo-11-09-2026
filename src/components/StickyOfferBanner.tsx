'use client';
import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

const StickyOfferBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Show banner after 2 seconds to not block extreme initial viewport
        const timer = setTimeout(() => {
            if (!isDismissed) setIsVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, [isDismissed]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
            <div className="bg-seo-navy text-white px-4 py-4 md:py-5 shadow-2xl border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left flex-grow">
                    <p className="font-display font-bold text-sm md:text-lg uppercase tracking-wider mb-1 md:mb-0">
                        Limited Time Offer: Get Your First Month Free
                    </p>
                    <p className="text-xs md:text-sm text-slate-300 font-medium">
                        Boost your ROI without risk. Exclusive to new partners.
                    </p>
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <Link href="/free-consultation" className="bg-seo-peach hover:bg-white text-seo-navy px-6 py-3 rounded-md font-bold uppercase tracking-wider text-sm transition-colors duration-300 flex items-center justify-center w-full md:w-auto shadow-lg">
                        Claim Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <button 
                        onClick={() => {
                            setIsVisible(false);
                            setIsDismissed(true);
                        }}
                        className="p-2 text-slate-400 hover:text-white transition-colors"
                        aria-label="Dismiss offer"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StickyOfferBanner;
