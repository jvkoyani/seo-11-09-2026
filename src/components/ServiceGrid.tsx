/**
 * ServiceGrid — Server Component
 * 
 * Uses CSS animations for the marquee effect.
 * 100% server-rendered, zero JavaScript required for the layout.
 */

import React from 'react';
import {
    Search, Globe, Share2, FileText,
    PenTool, Send, Users, MapPin,
    BarChart, Layout, Video, Image as ImageIcon,
    ShoppingBag, Newspaper, Megaphone,
    Target, Layers
} from 'lucide-react';

const services = [
    { title: "Infographic Design", icon: ImageIcon, desc: "Visual storytelling" },
    { title: "Media Placements", icon: BarChart, desc: "DR 50+ sites" },
    { title: "Social Video Ads", icon: Video, desc: "Engaging content" },
    { title: "Explainer Videos", icon: Video, desc: "Simplify complex ideas" },
    { title: "Blog 2 Video", icon: Layers, desc: "Repurpose content" },
    { title: "Blog Writing", icon: PenTool, desc: "SEO optimized" },
    { title: "Article Writing", icon: FileText, desc: "High quality content" },
    { title: "Product Descriptions", icon: ShoppingBag, desc: "Convert visitors" },
    { title: "Keyword Research", icon: Search, desc: "Find opportunities" },
    { title: "Multilingual Outreach", icon: Globe, desc: "Global reach" },
    { title: "Infographic Outreach", icon: Share2, desc: "Earn backlinks" },
    { title: "Content Syndication", icon: Share2, desc: "Amplify reach" },
    { title: "Website Copywriting", icon: Layout, desc: "Compelling copy" },
    { title: "Blogger Outreach", icon: Users, desc: "Build relationships" },
    { title: "Press Release Writing", icon: Newspaper, desc: "Newsworthy stories" },
    { title: "Local Citations", icon: MapPin, desc: "Local SEO boost" },
    { title: "Niche Edits", icon: Target, desc: "Curated links" },
    { title: "PR Distribution", icon: Send, desc: "Wide coverage" },
    { title: "Digital PR Campaigns", icon: Megaphone, desc: "Brand authority" },
];

const ServiceCard = ({ item }: { item: typeof services[0] }) => (
    <div
        className="relative group w-64 h-24 mx-3 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-200 hover:border-seo-blue transition-colors duration-300 cursor-pointer"
    >
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-seo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative h-full p-4 flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-seo-clean flex items-center justify-center group-hover:scale-110 group-hover:bg-seo-blue transition-all duration-300">
                <item.icon className="w-6 h-6 text-seo-blue group-hover:text-white transition-colors" />
            </div>

            <div className="flex flex-col">
                <h3 className="text-seo-navy font-bold text-sm leading-tight mb-1">
                    {item.title}
                </h3>
                <p className="text-slate-500 font-medium text-xs">
                    {item.desc}
                </p>
            </div>
        </div>
    </div>
);

const MarqueeRow = ({ items, direction = "left" = 40 }: { items: typeof services, direction?: "left" | "right"?: number }) => {
    // We use the same CSS animation strategy as FeaturedIn.tsx
    const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee2";
    
    return (
        <div className="relative flex overflow-x-hidden group">
            <div className={`${animationClass} whitespace-nowrap flex items-center py-2 h-28`}>
                {items.map((item, idx) => (
                    <ServiceCard key={`row-1-${idx}`} item={item} />
                ))}
                {/* Clone for seamless loop */}
                {items.map((item, idx) => (
                    <ServiceCard key={`row-1-clone-${idx}`} item={item} />
                ))}
            </div>
            <div className={`absolute top-0 ${animationClass} whitespace-nowrap flex items-center py-2 h-28`}>
                {items.map((item, idx) => (
                    <ServiceCard key={`row-2-${idx}`} item={item} />
                ))}
                {/* Clone for seamless loop */}
                {items.map((item, idx) => (
                    <ServiceCard key={`row-2-clone-${idx}`} item={item} />
                ))}
            </div>
        </div>
    );
};

const ServiceGrid = () => {
    const row1 = services.slice(0, 10);
    const row2 = services.slice(10, 19);

    return (
        <div className="h-full w-full flex flex-col justify-center gap-2 py-8 overflow-hidden relative bg-seo-clean/50 rounded-3xl border border-seo-blue/10">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-200/20 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 space-y-2">
                <MarqueeRow items={row1} direction="left" speed={40} />
                <MarqueeRow items={row2} direction="right" speed={45} />
            </div>
        </div>
    );
};

export default ServiceGrid;
