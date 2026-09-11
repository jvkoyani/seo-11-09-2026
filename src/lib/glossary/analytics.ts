import { GlossaryTerm } from '../glossaryData';

export const analyticsTerms: GlossaryTerm[] = [
    {
        slug: "search-console",
        term: "Search Console",
        definition: "Google Search Console (GSC) is a free tool provided by Google that helps website owners monitor, maintain, and troubleshoot their site's presence in Google Search results.",
        category: "Analytics & Measurement",
        lastUpdated: "December 18, 2025",
        author: { name: "David Kim", role: "SEO Analyst" },
        relatedTerms: ["Google Analytics", "Indexing", "Performance Report"],
        content: `
            <h2>The SEO's Command Center</h2>
            <p>GSC is the only source of truth for how Google sees your site. It provides data on keywords, clicks, impressions, and technical errors.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Master GSC</h3>
                <p class="text-slate-600 mb-6">Unlock actionable insights from your search data.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">GSC Training</a>
            </div>
        `
    },
    {
        slug: "index-coverage",
        term: "Index Coverage",
        definition: "Index Coverage is a report in Google Search Console that shows which pages on your site have been indexed, which have been excluded, and any errors preventing indexing.",
        category: "Analytics & Measurement",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Indexing", "Sitemap", "Crawl Errors"],
        content: `
            <h2>Diagnose Visibility Issues</h2>
            <p>If your pages aren't in the index, they can&apos;t rank. The Coverage report tells you exactly why—whether it&apos;s a "noindex" tag, a 404 error, or a "crawled - currently not indexed" status.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Fix Indexing Errors</h3>
                <p class="text-slate-600 mb-6">Ensure every page gets the visibility it deserves.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Technical SEO Fixes</a>
            </div>
        `
    },
    {
        slug: "crawl-stats",
        term: "Crawl Stats",
        definition: "Crawl Stats is a report in GSC that provides data on Googlebot's activity on your site, including requests per day, server response times, and file types downloaded.",
        category: "Analytics & Measurement",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Crawl Budget", "Server Logs", "Host Status"],
        content: `
            <h2>Monitor Server Health</h2>
            <p>A sudden drop in crawl rate can indicate server issues. A spike in response time means your site is too slow. Monitoring this report is crucial for technical health.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Optimize Crawl Efficiency</h3>
                <p class="text-slate-600 mb-6">Make it easy for Google to crawl your site.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Server Optimization</a>
            </div>
        `
    },
    {
        slug: "organic-visibility",
        term: "Organic Visibility",
        definition: "Organic Visibility is a metric that estimates the percentage of clicks a website receives from its organic search rankings relative to the total search volume for its keywords.",
        category: "Analytics & Measurement",
        lastUpdated: "December 18, 2025",
        author: { name: "David Kim", role: "SEO Analyst" },
        relatedTerms: ["Share of Voice", "Rank Tracking", "CTR"],
        content: `
            <h2>Your Market Share</h2>
            <p>Ranking #1 for a keyword with 10 searches is good. Ranking #1 for a keyword with 10,000 searches is better. Visibility measures your overall "share of voice" in the search results.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Increase Your Visibility</h3>
                <p class="text-slate-600 mb-6">Capture more market share from your competitors.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Growth Strategy</a>
            </div>
        `
    },
    {
        slug: "click-through-rate-ctr",
        term: "Click-Through Rate (CTR)",
        definition: "Click-Through Rate (CTR) is the percentage of users who click on a search result after seeing it (Impressions).",
        category: "Analytics & Measurement",
        lastUpdated: "December 18, 2025",
        author: { name: "David Kim", role: "SEO Analyst" },
        relatedTerms: ["Meta Description", "Title Tag", "Rich Snippets"],
        content: `
            <h2>The First Conversion</h2>
            <p>Ranking is only half the battle. You need the click. Improving CTR involves writing compelling titles, meta descriptions, and using schema markup to stand out.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Boost Your CTR</h3>
                <p class="text-slate-600 mb-6">Get more traffic without ranking higher.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">CTR Optimization</a>
            </div>
        `
    },
    {
        slug: "engagement-signals",
        term: "Engagement Signals",
        definition: "Engagement Signals (user signals) are metrics like dwell time, scroll depth, and return rate that indicate to search engines whether users find a page valuable.",
        category: "Analytics & Measurement",
        lastUpdated: "December 18, 2025",
        author: { name: "David Kim", role: "SEO Analyst" },
        relatedTerms: ["Bounce Rate", "Dwell Time", "RankBrain"],
        content: `
            <h2>Quality Control</h2>
            <p>If users click your result and immediately leave (pogo-sticking), it tells Google your content is irrelevant. High engagement signals lead to better rankings.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Improve Engagement</h3>
                <p class="text-slate-600 mb-6">Keep users glued to your content.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">UX & Content Audit</a>
            </div>
        `
    },
    {
        slug: "conversion-tracking",
        term: "Conversion Tracking",
        definition: "Conversion Tracking involves monitoring specific actions users take on a website (sales, sign-ups, calls) to measure the ROI of SEO efforts.",
        category: "Analytics & Measurement",
        lastUpdated: "December 18, 2025",
        author: { name: "David Kim", role: "SEO Analyst" },
        relatedTerms: ["GA4", "Goals", "ROI"],
        content: `
            <h2>Measure What Matters</h2>
            <p>Traffic is vanity; revenue is sanity. Tracking conversions allows you to attribute revenue directly to your SEO campaigns.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Track Your ROI</h3>
                <p class="text-slate-600 mb-6">Set up advanced conversion tracking for your business.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Analytics Setup</a>
            </div>
        `
    },
    {
        slug: "seo-forecasting",
        term: "SEO Forecasting",
        definition: "SEO Forecasting is the process of using historical data and trends to predict future traffic, rankings, and revenue potential.",
        category: "Analytics & Measurement",
        lastUpdated: "December 18, 2025",
        author: { name: "David Kim", role: "SEO Analyst" },
        relatedTerms: ["Predictive SEO", "Trend Analysis", "Business Intelligence"],
        content: `
            <h2>Predict the Future</h2>
            <p>Forecasting helps set realistic goals and justify SEO budgets. It involves analyzing seasonality, search volume trends, and competitive difficulty.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Plan for Growth</h3>
                <p class="text-slate-600 mb-6">Get a data-driven forecast for your SEO potential.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Get an SEO Forecast</a>
            </div>
        `
    },
    {
        slug: "predictive-seo",
        term: "Predictive SEO",
        definition: "Predictive SEO uses AI and machine learning to identify future trends and keywords before they become popular, allowing businesses to create content ahead of the curve.",
        category: "Analytics & Measurement",
        lastUpdated: "December 18, 2025",
        author: { name: "David Kim", role: "SEO Analyst" },
        relatedTerms: ["SEO Forecasting", "Trend Spotting", "AI Tools"],
        content: `
            <h2>Be First</h2>
            <p>Instead of reacting to search volume, Predictive SEO anticipates it. By analyzing social media trends and early search signals, you can rank for keywords before your competitors even know they exist.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Stay Ahead of the Curve</h3>
                <p class="text-slate-600 mb-6">Leverage AI to predict the next big trend.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Predictive SEO Strategy</a>
            </div>
        `
    }
];
