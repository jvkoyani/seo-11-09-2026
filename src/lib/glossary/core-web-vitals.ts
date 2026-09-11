import { GlossaryTerm } from '../glossaryData';

export const coreWebVitalsTerms: GlossaryTerm[] = [
    {
        slug: "inp-interaction-to-next-paint",
        term: "INP (Interaction to Next Paint)",
        definition: "Interaction to Next Paint (INP) is a Core Web Vital metric that measures the responsiveness of a webpage by tracking the latency of all user interactions (clicks, taps, key presses) throughout the page's lifespan.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Core Web Vitals", "FID", "Page Speed", "UX"],
        content: `
            <h2>What is INP?</h2>
            <p>Interaction to Next Paint (INP) assesses a page's overall responsiveness to user interactions. Unlike First Input Delay (FID), which only measured the first interaction, INP observes the latency of all interactions—including clicks, taps, and keyboard inputs—during a user's entire visit. The final INP score is typically the longest interaction observed (ignoring outliers).</p>
            <p>A low INP means the page responds quickly to user input, providing a smooth experience. A high INP indicates lag, which can frustrate users.</p>
            <h2>Why INP Matters</h2>
            <p>INP replaced FID as a Core Web Vital in March 2024. This means it is now a direct ranking factor. Google prioritizes pages that feel "snappy" and responsive.</p>
            <h2>How to Optimize INP</h2>
            <ul>
                <li><strong>Minimize CPU Processing:</strong> Break up long tasks in JavaScript to allow the main thread to handle user input.</li>
                <li><strong>Optimize Event Handlers:</strong> Ensure your click listeners execute quickly.</li>
                <li><strong>Reduce DOM Size:</strong> A complex DOM takes longer to update.</li>
            </ul>
            <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Fix Your INP Score</h3>
                <p class="text-slate-600 mb-6">Is your site lagging? We can diagnose and fix interaction delays.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Audit My Core Web Vitals</a>
            </div>
        `
    },
    {
        slug: "lcp-largest-contentful-paint",
        term: "Largest Contentful Paint (LCP)",
        definition: "Largest Contentful Paint (LCP) is a Core Web Vital metric that measures loading performance. It marks the point in the page load timeline when the page's main content has likely loaded.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Core Web Vitals", "Page Speed", "FCP", "TTFB"],
        content: `
            <h2>What is LCP?</h2>
            <p>LCP measures how long it takes for the largest element within the viewport (usually an image, video, or block of text) to become visible. It is a user-centric metric for perceived load speed.</p>
            <h2>Good LCP Scores</h2>
            <ul>
                <li><strong>Good:</strong> 2.5 seconds or less</li>
                <li><strong>Needs Improvement:</strong> Between 2.5 and 4.0 seconds</li>
                <li><strong>Poor:</strong> More than 4.0 seconds</li>
            </ul>
            <h2>How to Improve LCP</h2>
            <ul>
                <li><strong>Optimize Images:</strong> Compress images and use modern formats like WebP.</li>
                <li><strong>Improve Server Response Time:</strong> Optimize your backend and use a CDN.</li>
                <li><strong>Defer Non-Critical JS/CSS:</strong> Ensure render-blocking resources don't delay the main content.</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Speed Up Your LCP</h3>
                <p class="text-slate-600 mb-6">Slow loading kills conversions. Let's make your site instant.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Get a Speed Audit</a>
            </div>
        `
    },
    {
        slug: "cls-cumulative-layout-shift",
        term: "Cumulative Layout Shift (CLS)",
        definition: "Cumulative Layout Shift (CLS) is a Core Web Vital metric that measures visual stability. It quantifies how much visible content shifts unexpectedly during the page's lifespan.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Core Web Vitals", "UX", "Visual Stability"],
        content: `
            <h2>What is CLS?</h2>
            <p>Have you ever tried to click a button, but the page jumped and you clicked an ad instead? That's a layout shift. CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.</p>
            <h2>Why CLS Matters</h2>
            <p>High CLS is annoying and can lead to accidental clicks, damaging user trust. Google penalizes sites with poor visual stability.</p>
            <h2>How to Fix CLS</h2>
            <ul>
                <li><strong>Set Dimensions for Images/Video:</strong> Always include <code>width</code> and <code>height</code> attributes so the browser can reserve space.</li>
                <li><strong>Reserve Space for Ads:</strong> Don&apos;t let ads push content down when they load.</li>
                <li><strong>Avoid Inserting Content Above Existing Content:</strong> Unless it&apos;s in response to a user interaction.</li>
            </ul>
            <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Stabilize Your Layout</h3>
                <p class="text-slate-600 mb-6">Stop your content from jumping around. We fix CLS issues.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Fix My CLS</a>
            </div>
        `
    },
    {
        slug: "mobile-first-indexing",
        term: "Mobile-First Indexing",
        definition: "Mobile-First Indexing means Google predominantly uses the mobile version of the content for indexing and ranking.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Alex Rivera", role: "Senior SEO Strategist" },
        relatedTerms: ["Responsive Design", "Mobile SEO", "Ranking Factors"],
        content: `
            <h2>Understanding Mobile-First Indexing</h2>
            <p>Historically, Google used the desktop version of a page to evaluate its relevance. However, since most users now search on mobile devices, Google switched to mobile-first indexing. This means if your mobile site has less content than your desktop site, you will lose rankings.</p>
            <h2>Best Practices</h2>
            <ul>
                <li><strong>Responsive Design:</strong> Use the same URL and HTML for both desktop and mobile.</li>
                <li><strong>Content Parity:</strong> Ensure all important content (text, images, videos) is visible on mobile.</li>
                <li><strong>Mobile Usability:</strong> Avoid intrusive interstitials and ensure tap targets are large enough.</li>
            </ul>
            <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Is Your Site Mobile-Ready?</h3>
                <p class="text-slate-600 mb-6">Don&apos;t lose traffic because of a poor mobile experience.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Check Mobile Compatibility</a>
            </div>
        `
    },
    {
        slug: "javascript-seo",
        term: "JavaScript SEO",
        definition: "JavaScript SEO is the discipline of making JavaScript-heavy websites crawlable and indexable by search engines.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Rendering", "SPA", "React SEO"],
        content: `
            <h2>The Challenge of JavaScript</h2>
            <p>Search engines are getting better at executing JavaScript, but it&apos;s not perfect. If your content relies entirely on client-side JS, Google might not see it immediately, or at all, if the script fails or times out.</p>
            <h2>Key Strategies</h2>
            <ul>
                <li><strong>Server-Side Rendering (SSR):</strong> Render the HTML on the server before sending it to the client.</li>
                <li><strong>Hydration:</strong> Ensure the initial HTML contains the core content.</li>
                <li><strong>Internal Linking:</strong> Use standard <code>&lt;a href&gt;</code> tags instead of JS-based navigation (<code>onclick</code>).</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Audit Your JS App</h3>
                <p class="text-slate-600 mb-6">Ensure your React, Vue, or Angular app is fully visible to Google.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Get a JS SEO Audit</a>
            </div>
        `
    },
    {
        slug: "server-side-rendering-ssr",
        term: "Server-Side Rendering (SSR)",
        definition: "Server-Side Rendering (SSR) is a technique where the HTML of a webpage is generated on the server for each request, rather than in the browser.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["CSR", "Rendering", "Next.js"],
        content: `
            <h2>Why SSR is Better for SEO</h2>
            <p>With SSR, when a bot (or user) requests a page, the server sends back a fully populated HTML document. This ensures that search engines can crawl the content immediately without needing to execute JavaScript. This is the gold standard for SEO in modern web development.</p>
            <h2>SSR vs CSR</h2>
            <p>In Client-Side Rendering (CSR), the server sends an empty shell, and the browser builds the page. This is risky for SEO. SSR eliminates this risk.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Move to SSR</h3>
                <p class="text-slate-600 mb-6">We specialize in migrating React apps to Next.js for better SEO.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Consult on SSR Migration</a>
            </div>
        `
    },
    {
        slug: "static-site-generation-ssg",
        term: "Static Site Generation (SSG)",
        definition: "Static Site Generation (SSG) is a method where HTML pages are generated at build time, rather than on each request.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["SSR", "Jamstack", "Page Speed"],
        content: `
            <h2>The Speed of SSG</h2>
            <p>SSG pre-builds every page of your site as a static HTML file. When a user visits, the server simply serves this file. This results in incredibly fast load times (TTFB) and perfect SEO crawlability.</p>
            <h2>When to Use SSG</h2>
            <p>SSG is ideal for content that doesn&apos;t change often, like blogs, documentation, and marketing pages. It is less suitable for highly dynamic content like social media feeds.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Go Static for Speed</h3>
                <p class="text-slate-600 mb-6">Maximize your Core Web Vitals with a static site architecture.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Discuss SSG Options</a>
            </div>
        `
    },
    {
        slug: "edge-seo",
        term: "Edge SEO",
        definition: "Edge SEO involves using serverless technologies on the 'edge' (CDN level) to implement SEO changes without modifying the underlying codebase.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["CDN", "Serverless", "Technical SEO"],
        content: `
            <h2>What is Edge SEO?</h2>
            <p>Edge SEO allows marketers and SEOs to deploy technical fixes (like redirects, header changes, or meta tag injection) directly via the CDN (e.g., Cloudflare Workers) rather than waiting for developers to update the main server code. This drastically reduces implementation time.</p>
            <h2>Use Cases</h2>
            <ul>
                <li><strong>Hreflang Injection:</strong> Adding language tags dynamically.</li>
                <li><strong>Security Headers:</strong> Adding HSTS or X-Frame-Options.</li>
                <li><strong>A/B Testing:</strong> Serving different content versions from the edge.</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Implement Faster Fixes</h3>
                <p class="text-slate-600 mb-6">Bypass development bottlenecks with Edge SEO solutions.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Learn About Edge SEO</a>
            </div>
        `
    },
    {
        slug: "log-file-analysis",
        term: "Log File Analysis",
        definition: "Log File Analysis is the process of examining the server logs to see exactly how search engine bots are crawling your website.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Crawling", "Crawl Budget", "Technical SEO"],
        content: `
            <h2>Why Analyze Logs?</h2>
            <p>Server logs provide the only 100% accurate data on bot behavior. Unlike Google Search Console, which gives samples, logs show every single hit. This helps identify:</p>
            <ul>
                <li><strong>Crawl Budget Waste:</strong> Bots spending time on useless pages.</li>
                <li><strong>Orphan Pages:</strong> Pages bots aren't finding.</li>
                <li><strong>Status Code Errors:</strong> Hidden 404s or 500s.</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">See What Google Sees</h3>
                <p class="text-slate-600 mb-6">Unlock hidden insights with professional log file analysis.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Analyze My Logs</a>
            </div>
        `
    },
    {
        slug: "crawl-budget",
        term: "Crawl Budget",
        definition: "Crawl Budget is the number of pages a search engine bot crawls and indexes on a website within a given timeframe.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Crawling", "Log File Analysis", "Site Architecture"],
        content: `
            <h2>Optimizing Crawl Budget</h2>
            <p>Google doesn&apos;t have infinite resources. If your site has millions of pages, or is very slow, Google might not crawl everything. Optimizing crawl budget ensures your most important pages are indexed and updated frequently.</p>
            <h2>Factors Affecting Budget</h2>
            <ul>
                <li><strong>Site Speed:</strong> Faster sites get crawled more.</li>
                <li><strong>Internal Linking:</strong> Well-linked pages are prioritized.</li>
                <li><strong>Content Quality:</strong> Google crawls high-quality content more often.</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Maximize Your Visibility</h3>
                <p class="text-slate-600 mb-6">Ensure Google finds all your valuable content.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Optimize Crawl Budget</a>
            </div>
        `
    },
    {
        slug: "xml-sitemap",
        term: "XML Sitemap",
        definition: "An XML Sitemap is a file that lists a website's essential pages, making sure Google can find and crawl them all.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Crawling", "Indexing", "Robots.txt"],
        content: `
            <h2>The Roadmap for Bots</h2>
            <p>An XML sitemap acts as a roadmap for search engines. It tells them which pages are important, when they were last updated, and how often they change. This is crucial for large sites or new sites with few backlinks.</p>
            <h2>Best Practices</h2>
            <ul>
                <li><strong>Only Include Canonical URLs:</strong> Don&apos;t include duplicate or noindexed pages.</li>
                <li><strong>Keep it Updated:</strong> Ensure the sitemap updates automatically when you publish content.</li>
                <li><strong>Split Large Sitemaps:</strong> Limit each file to 50,000 URLs.</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Technical SEO Setup</h3>
                <p class="text-slate-600 mb-6">We configure perfect sitemaps for optimal crawling.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Check My Sitemap</a>
            </div>
        `
    },
    {
        slug: "robots-txt",
        term: "Robots.txt",
        definition: "Robots.txt is a text file used to instruct search engine robots how to crawl pages on their website.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Crawling", "Sitemap", "Technical SEO"],
        content: `
            <h2>The Gatekeeper</h2>
            <p>The <code>robots.txt</code> file is the first thing a bot checks when visiting your site. It tells them where they are allowed to go (<code>Allow</code>) and where they are forbidden (<code>Disallow</code>).</p>
            <h2>Common Uses</h2>
            <ul>
                <li><strong>Blocking Admin Pages:</strong> Prevent bots from crawling backend login pages.</li>
                <li><strong>Blocking Search Results:</strong> Prevent internal search result pages from wasting crawl budget.</li>
                <li><strong>Specifying Sitemap Location:</strong> Linking to your XML sitemap.</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Configure Robots.txt</h3>
                <p class="text-slate-600 mb-6">Avoid critical crawling errors with a properly configured robots file.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Audit My Robots.txt</a>
            </div>
        `
    },
    {
        slug: "canonical-url",
        term: "Canonical URL",
        definition: "A Canonical URL is an HTML link element with the attribute rel='canonical', used to specify the preferred version of a web page to search engines.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Duplicate Content", "Indexing", "Technical SEO"],
        content: `
            <h2>Solving Duplicate Content</h2>
            <p>Duplicate content confuses search engines—they don't know which version to rank. The canonical tag solves this by telling Google: "This is the master copy. Rank this one."</p>
            <h2>When to Use It</h2>
            <ul>
                <li><strong>E-commerce:</strong> When products can be accessed via multiple categories.</li>
                <li><strong>URL Parameters:</strong> When tracking codes create unique URLs for the same content.</li>
                <li><strong>Syndication:</strong> When publishing your content on other platforms.</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Fix Duplicate Content</h3>
                <p class="text-slate-600 mb-6">Consolidate your ranking signals with proper canonicalization.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Fix Canonical Issues</a>
            </div>
        `
    },
    {
        slug: "hreflang",
        term: "Hreflang",
        definition: "Hreflang is an HTML attribute used to specify the language and geographical targeting of a webpage.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["International SEO", "Localization", "Technical SEO"],
        content: `
            <h2>International SEO Essential</h2>
            <p>If you have a website in multiple languages (e.g., English and Spanish) or targeting multiple regions (e.g., US and UK), <code>hreflang</code> tags tell Google which version to show to which user. This prevents duplicate content issues and improves user experience.</p>
            <h2>Implementation</h2>
            <p>Hreflang can be implemented in the HTML head, HTTP headers, or XML sitemap. It requires reciprocal linking—page A must link to page B, and page B must link back to page A.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Go Global</h3>
                <p class="text-slate-600 mb-6">Target international audiences correctly with hreflang.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Setup International SEO</a>
            </div>
        `
    },
    {
        slug: "http-status-codes",
        term: "HTTP Status Codes",
        definition: "HTTP Status Codes are standard response codes given by web server applications. They tell search engines and browsers if a request was successful or not.",
        category: "Core Web Vitals",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["404 Error", "301 Redirect", "Technical SEO"],
        content: `
            <h2>Codes Every SEO Should Know</h2>
            <ul>
                <li><strong>200 OK:</strong> Success. The page loaded correctly.</li>
                <li><strong>301 Moved Permanently:</strong> The page has moved. Link equity is passed to the new URL.</li>
                <li><strong>302 Found (Temporary Redirect):</strong> The page has moved temporarily. Link equity is NOT passed.</li>
                <li><strong>404 Not Found:</strong> The page is gone.</li>
                <li><strong>500 Internal Server Error:</strong> The server crashed.</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Monitor Your Health</h3>
                <p class="text-slate-600 mb-6">Identify and fix broken links and server errors.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Run a Technical Audit</a>
            </div>
        `
    }
];
