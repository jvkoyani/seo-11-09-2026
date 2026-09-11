import { GlossaryTerm } from '../glossaryData';

export const ecommerceTerms: GlossaryTerm[] = [
    {
        slug: "product-schema",
        term: "Product Schema",
        definition: "Product Schema is structured data markup added to product pages to help search engines understand details like price, availability, and reviews.",
        category: "E-commerce SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Rich Snippets", "Merchant Center", "Structured Data"],
        content: `
            <h2>Rich Results for Products</h2>
            <p>Product Schema allows your products to appear in search results with "rich snippets"—showing stars, price, and "In Stock" status. This significantly increases Click-Through Rate (CTR).</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Stand Out in Search</h3>
                <p class="text-slate-600 mb-6">Implement schema to show prices and reviews in SERPs.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Schema Implementation</a>
            </div>
        `
    },
    {
        slug: "merchant-listings",
        term: "Merchant Listings",
        definition: "Merchant Listings are enhanced search result experiences for products, powered by structured data and Google Merchant Center feeds.",
        category: "E-commerce SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Google Shopping", "Product Schema", "E-commerce"],
        content: `
            <h2>Free Shopping Listings</h2>
            <p>Google now displays products in a "Shopping" tab and in rich organic listings for free. Optimizing your Merchant Center feed is crucial to appearing in these high-visibility spots.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Optimize Your Feed</h3>
                <p class="text-slate-600 mb-6">Get your products into Google's free shopping listings.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Merchant Center Audit</a>
            </div>
        `
    },
    {
        slug: "google-shopping-ai",
        term: "Google Shopping AI",
        definition: "Google Shopping AI refers to the use of generative AI in Google Shopping to help users research products, compare options, and find the best fit.",
        category: "E-commerce SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Alex Rivera", role: "Senior SEO Strategist" },
        relatedTerms: ["SGE", "Virtual Try-On", "Personalization"],
        content: `
            <h2>The Future of Shopping</h2>
            <p>AI can now summarize reviews, compare products side-by-side, and even generate virtual try-ons. Optimizing for this means having high-quality images and detailed, structured product attributes.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Prepare for AI Shopping</h3>
                <p class="text-slate-600 mb-6">Ensure your product data is AI-ready.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">E-commerce AI Strategy</a>
            </div>
        `
    },
    {
        slug: "faceted-navigation",
        term: "Faceted Navigation",
        definition: "Faceted Navigation allows users to filter product listings by attributes like size, color, and price. It creates a challenge for SEO due to the potential for infinite duplicate URLs.",
        category: "E-commerce SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Canonical Tag", "Crawl Budget", "Robots.txt"],
        content: `
            <h2>The Double-Edged Sword</h2>
            <p>Great for users, terrible for bots. Without proper handling (canonical tags, noindex), faceted navigation can generate millions of low-quality pages that waste crawl budget and dilute authority.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Fix Faceted Nav</h3>
                <p class="text-slate-600 mb-6">Solve index bloat and duplicate content issues.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Technical SEO Audit</a>
            </div>
        `
    },
    {
        slug: "duplicate-content-ecommerce",
        term: "Duplicate Content",
        definition: "In E-commerce, duplicate content often arises from product descriptions used across multiple sites or similar product variants (e.g., same shirt in 5 colors).",
        category: "E-commerce SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Jessica Lee", role: "Content Strategist" },
        relatedTerms: ["Canonical Tag", "Product Variants", "Boilerplate Content"],
        content: `
            <h2>Unique Descriptions Matter</h2>
            <p>Using the manufacturer's default description means you are competing with 100 other stores using the same text. Writing unique descriptions for your top products is a quick win.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Write Unique Content</h3>
                <p class="text-slate-600 mb-6">Differentiate your products with custom descriptions.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Product Description Services</a>
            </div>
        `
    },
    {
        slug: "inventory-based-seo",
        term: "Inventory-Based SEO",
        definition: "Inventory-Based SEO involves automating SEO actions based on stock levels, such as redirecting out-of-stock product pages or updating schema availability.",
        category: "E-commerce SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Automation", "Redirects", "User Experience"],
        content: `
            <h2>Handling Out-of-Stock</h2>
            <p>Don&apos;t show users a 404 page for a sold-out item. Instead, show related products, or redirect to the parent category. Automating this ensures a smooth UX and preserves link equity.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Automate Your SEO</h3>
                <p class="text-slate-600 mb-6">Handle inventory changes without losing rankings.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">E-commerce Automation</a>
            </div>
        `
    }
];
