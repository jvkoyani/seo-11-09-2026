'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

import { MapPin, Layers, ExternalLink, Search, ChevronDown, ChevronUp, Briefcase, Building, FileText, Compass } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { allAustralianCities } from '@/lib/locationData';
import { services, industries } from '@/lib/data';
import AnimatedSection from '@/components/AnimatedSection';

export default function SitemapClient() {
    const [searchTerm, setSearchTerm] = useState('');

    // Group cities by state for better organization
    const stateGroups = useMemo(() => {
        const groups: Record<string, typeof allAustralianCities> = {};

        allAustralianCities.forEach(city => {
            const state = city.state === "Various" ? "Other Locations" : city.state;

            if (!groups[state]) {
                groups[state] = [];
            }
            groups[state].push(city);
        });

        return groups;
    }, []);

    const states = useMemo(() => Object.keys(stateGroups).sort(), [stateGroups]);

    // Filter locations based on search term
    const filterLocations = (locations: typeof allAustralianCities) => {
        if (!searchTerm) return locations;
        return locations.filter(location =>
            location.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    // Used to track which state sections are expanded
    const [expandedStates, setExpandedStates] = useState<Record<string, boolean>>({});

    const toggleStateExpansion = (state: string) => {
        setExpandedStates(prev => ({
            ...prev,
            [state]: !prev[state]
        }));
    };

    // Get major cities for popular combinations
    const majorCities = useMemo(() => {
        return allAustralianCities
            .filter(city => city.description && city.state !== "Various")
            .slice(0, 15);
    }, []);

    return (
        <main className="flex-1 py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Main Navigation Section */}
                <AnimatedSection animation="fade-in" className="mb-16">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-4">
                            Quick Navigation
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                            Main <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sections</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[
                            { href: "/", label: "Home", icon: <Layers className="h-5 w-5" /> },
                            { href: "/about", label: "About Us", icon: <FileText className="h-5 w-5" /> },
                            { href: "/services", label: "Services", icon: <Briefcase className="h-5 w-5" /> },
                            { href: "/industries", label: "Industries", icon: <Building className="h-5 w-5" /> },
                            { href: "/blogs", label: "Blogs", icon: <FileText className="h-5 w-5" /> },
                            { href: "/case-studies", label: "Case Studies", icon: <FileText className="h-5 w-5" /> },
                            { href: "/contact", label: "Contact", icon: <Compass className="h-5 w-5" /> },
                            { href: "/free-consultation", label: "Free Consultation", icon: <Compass className="h-5 w-5" /> },
                            { href: "/seo-audit", label: "SEO Audit", icon: <Search className="h-5 w-5" /> },
                            { href: "/glossary", label: "Glossary", icon: <FileText className="h-5 w-5" /> },
                        ].map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3 text-blue-600 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <span className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors">{item.label}</span>
                            </a>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Services Section */}
                <AnimatedSection animation="fade-in" delay={100} className="mb-16">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-4">
                            SEO Solutions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Services</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map(service => (
                            <a
                                key={service.id}
                                href={`/service/${service.slug}`}
                                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300"
                            >
                                <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-600 text-sm line-clamp-2">{service.description}</p>
                            </a>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Industries Section */}
                <AnimatedSection animation="fade-in" delay={150} className="mb-16">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700 mb-4">
                            Industry Expertise
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">We Serve</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {industries.map(industry => (
                            <a
                                key={industry.id}
                                href={`/industries/${industry.slug}`}
                                className="group p-4 bg-white rounded-xl border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 text-center"
                            >
                                <span className="font-medium text-slate-700 group-hover:text-green-600 transition-colors">{industry.title}</span>
                            </a>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Locations Section */}
                <AnimatedSection animation="fade-in" delay={200} className="mb-16">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-orange-100 text-orange-700 mb-4">
                            Australia Wide
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                            Locations <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">We Serve</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
                            Serving {allAustralianCities.length.toLocaleString()} locations across Australia
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center gap-4 max-w-lg mx-auto mb-10">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <Input
                                type="text"
                                placeholder="Search for a location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 h-12 bg-white border-slate-300 focus:border-orange-400 focus:ring-orange-400/20"
                            />
                        </div>
                        {searchTerm && (
                            <Button
                                variant="outline"
                                onClick={() => setSearchTerm('')}
                            >
                                Clear
                            </Button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {states.map(state => {
                            const filteredLocations = filterLocations(stateGroups[state]);
                            if (filteredLocations.length === 0) return null;

                            const isExpanded = expandedStates[state] || false;
                            const displayLocations = isExpanded ? filteredLocations : filteredLocations.slice(0, 30);
                            const hasMore = filteredLocations.length > 30;

                            return (
                                <div key={state} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                    <div className="p-5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100">
                                        <h3 className="text-xl font-bold text-slate-900 flex items-center justify-between">
                                            <a
                                                href={state !== "Other Locations" ? `/australia/${state.toLowerCase().replace(/\s+/g, '-')}` : "#"}
                                                className={state !== "Other Locations" ? "hover:text-orange-600 transition-colors" : ""}
                                            >
                                                {state}
                                            </a>
                                            <span className="text-sm font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                                {filteredLocations.length.toLocaleString()}
                                            </span>
                                        </h3>
                                    </div>

                                    <div className="p-4 max-h-[350px] overflow-y-auto">
                                        <div className="grid grid-cols-2 gap-1">
                                            {displayLocations.map(city => (
                                                <a
                                                    key={city.id}
                                                    href={`/areas-we-serve/${city.slug}`}
                                                    className="flex items-center p-2 text-sm hover:bg-orange-50 rounded-lg transition-colors group"
                                                >
                                                    <MapPin className="h-3 w-3 mr-1.5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                                    <span className="truncate text-slate-600 group-hover:text-orange-600">{city.name}</span>
                                                </a>
                                            ))}
                                        </div>

                                        {hasMore && (
                                            <div className="mt-4 text-center border-t border-slate-100 pt-4">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => toggleStateExpansion(state)}
                                                    className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                                                >
                                                    {isExpanded ? (
                                                        <>
                                                            Show less <ChevronUp className="ml-1 h-4 w-4" />
                                                        </>
                                                    ) : (
                                                        <>
                                                            Show all {filteredLocations.length.toLocaleString()} <ChevronDown className="ml-1 h-4 w-4" />
                                                        </>
                                                    )}
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </AnimatedSection>

                {/* Popular Combinations */}
                <AnimatedSection animation="fade-in" delay={250} className="mb-16">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700 mb-4">
                            Quick Access
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                            Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Service-Location</span> Pages
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {services.slice(0, 4).map(service => (
                            <div key={service.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                                <div className="p-5 bg-gradient-to-r from-indigo-50 to-violet-50 border-b border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                                </div>
                                <div className="p-4">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                        {majorCities.slice(0, 9).map(city => (
                                            <a
                                                key={`${service.slug}-${city.slug}`}
                                                href={`/areas-we-serve/${city.slug}/${service.slug}`}
                                                className="flex items-center p-2 text-sm hover:bg-indigo-50 rounded-lg transition-colors group"
                                            >
                                                <ExternalLink className="h-3 w-3 mr-1.5 text-indigo-500 flex-shrink-0" />
                                                <span className="truncate text-slate-600 group-hover:text-indigo-600">{city.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* CTA Section */}
                <AnimatedSection animation="fade-in" delay={300}>
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
                            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                                Our team is ready to help. Get in touch for a personalized consultation about your SEO needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                                <Button asChild size="lg" className="bg-white/20 border border-white/50 text-white hover:bg-white hover:text-blue-600">
                                    <Link href="/free-consultation">Free Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
