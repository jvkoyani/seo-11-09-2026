import { GlossaryTerm } from '../glossaryData';

export const onPageTerms: GlossaryTerm[] = [
    {
        slug: "semantic-seo",
        term: "Semantic SEO",
        definition: "Semantic SEO is the practice of writing content optimized around topics and entities, rather than just individual keywords, to help search engines understand the context and meaning of the content.",
        category: "On-Page & Content SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Jessica Lee", role: "Content Strategist" },
        relatedTerms: ["Entity-Based SEO", "NLP", "Topical Authority"],
        content: `
            <h2>Beyond Keywords</h2>
            <p>Traditional SEO focused on repeating keywords. Semantic SEO focuses on meaning. It involves covering a topic in depth, answering related questions, and using semantically related terms (LSI keywords) to show Google you are an expert.</p>
            <h2>Strategies</h2>
            <ul>
                <li><strong>Topic Clusters:</strong> Group related content together.</li>
                <li><strong>Structured Data:</strong> Use Schema.org to define entities.</li>
                <li><strong>Answer Questions:</strong> Optimize for "People Also Ask".</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Write for Meaning</h3>
                <p class="text-slate-600 mb-6">Create content that Google understands and users love.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Get a Semantic SEO Strategy</a>
            </div>
        `
    },
    {
        slug: "topical-authority",
        term: "Topical Authority",
        definition: "Topical Authority is a measure of a website's expertise and depth of content on a specific subject area.",
        category: "On-Page & Content SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Jessica Lee", role: "Content Strategist" },
        relatedTerms: ["E-E-A-T", "Content Clusters", "Pillar Pages"],
        content: `
            <h2>Owning the Niche</h2>
            <p>Google wants to rank sites that are experts. If you write one article about "fishing" and 100 about "marketing," Google sees you as a marketing expert. To build topical authority, you must cover a subject comprehensively.</p>
            <h2>How to Build It</h2>
            <p>Create a "map" of your niche. Identify every question a user might ask and write content for it. Interlink these pages to show the relationship between them.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Become the Authority</h3>
                <p class="text-slate-600 mb-6">Dominate your niche with a topical authority map.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Build Topical Authority</a>
            </div>
        `
    },
    {
        slug: "content-clusters",
        term: "Content Clusters",
        definition: "Content Clusters (or Topic Clusters) are a strategy of organizing content where a main 'pillar' page covers a broad topic, and 'cluster' pages cover specific subtopics, all linked together.",
        category: "On-Page & Content SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Jessica Lee", role: "Content Strategist" },
        relatedTerms: ["Pillar Pages", "Internal Linking", "Site Architecture"],
        content: `
            <h2>The Hub and Spoke Model</h2>
            <p>Content clusters organize your site architecture. The "Pillar Page" is the hub—a broad guide. The "Cluster Pages" are the spokes—detailed articles on specific aspects. They all link back to the hub, and the hub links to them.</p>
            <h2>Benefits</h2>
            <ul>
                <li><strong>Better Organization:</strong> Easier for users and bots to navigate.</li>
                <li><strong>Link Juice:</strong> Authority flows between related pages.</li>
                <li><strong>Semantic Context:</strong> Helps Google understand the breadth of your coverage.</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Organize Your Content</h3>
                <p class="text-slate-600 mb-6">Structure your blog for maximum SEO impact.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Design Content Clusters</a>
            </div>
        `
    },
    {
        slug: "pillar-pages",
        term: "Pillar Pages",
        definition: "A Pillar Page is a comprehensive, long-form piece of content that covers a core topic in depth and links out to cluster content.",
        category: "On-Page & Content SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Jessica Lee", role: "Content Strategist" },
        relatedTerms: ["Content Clusters", "Skyscraper Technique", "Long-Form Content"],
        content: `
            <h2>The Foundation of Content SEO</h2>
            <p>A pillar page is the ultimate guide. It's often 3,000+ words and serves as the entry point for a broad topic (e.g., "The Ultimate Guide to SEO"). It touches on every aspect of the topic but leaves the granular details to the linked cluster pages.</p>
            <h2>Types of Pillar Pages</h2>
            <ul>
                <li><strong>Guide Pillar:</strong> "The Ultimate Guide to X"</li>
                <li><strong>What-Is Pillar:</strong> "What is X and Why it Matters"</li>
                <li><strong>How-To Pillar:</strong> "How to Master X"</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Create Epic Content</h3>
                <p class="text-slate-600 mb-6">Attract backlinks and traffic with authoritative pillar pages.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Write a Pillar Page</a>
            </div>
        `
    },
    {
        slug: "entity-based-seo",
        term: "Entity-Based SEO",
        definition: "Entity-Based SEO focuses on optimizing for 'entities' (people, places, things, concepts) that search engines recognize, rather than just strings of text.",
        category: "On-Page & Content SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Alex Rivera", role: "Senior SEO Strategist" },
        relatedTerms: ["Knowledge Graph", "Semantic SEO", "Schema Markup"],
        content: `
            <h2>Things, Not Strings</h2>
            <p>Google has moved from matching keywords ("strings") to understanding real-world concepts ("entities"). It knows that "Barack Obama" is a person, a former president, and related to "Michelle Obama."</p>
            <h2>Optimizing for Entities</h2>
            <p>To rank in an entity-based world, you must clearly define the entities in your content using Schema markup and by establishing relationships between them in your text.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Future-Proof Your SEO</h3>
                <p class="text-slate-600 mb-6">Align your strategy with Google's Knowledge Graph.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Entity SEO Services</a>
            </div>
        `
    },
    {
        slug: "nlp-optimization",
        term: "NLP Optimization",
        definition: "NLP (Natural Language Processing) Optimization involves writing content in a way that helps AI algorithms (like Google's BERT) easily understand the context, sentiment, and entities.",
        category: "On-Page & Content SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Alex Rivera", role: "Senior SEO Strategist" },
        relatedTerms: ["BERT", "AI SEO", "Content Optimization"],
        content: `
            <h2>Writing for Machines and Humans</h2>
            <p>Google uses NLP to read like a human. Optimization involves using clear sentence structures, answering questions directly, and using related vocabulary that defines the context.</p>
            <h2>Tools</h2>
            <p>Tools like Google's NLP API demo or Surfer SEO can analyze your content's "salience" and "sentiment" to see how a machine interprets it.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Optimize for AI</h3>
                <p class="text-slate-600 mb-6">Ensure your content is understood by modern algorithms.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Get NLP Optimization</a>
            </div>
        `
    },
    {
        slug: "content-decay",
        term: "Content Decay",
        definition: "Content Decay is the gradual decline in organic traffic and rankings for a piece of content over time as it becomes outdated or competitors publish newer content.",
        category: "On-Page & Content SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Jessica Lee", role: "Content Strategist" },
        relatedTerms: ["Content Refresh", "Historical Optimization", "QDF"],
        content: `
            <h2>The Silent Traffic Killer</h2>
            <p>Even the best content eventually decays. Facts change, links break, and competitors write better guides. Identifying decay early allows you to refresh the content and regain rankings.</p>
            <h2>How to Fix It</h2>
            <ul>
                <li><strong>Update Stats/Facts:</strong> Make it current.</li>
                <li><strong>Add New Sections:</strong> Cover new developments.</li>
                <li><strong>Re-promote:</strong> Share it again as "Updated for 2025".</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Revive Your Traffic</h3>
                <p class="text-slate-600 mb-6">We identify and fix decaying content to boost traffic.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Content Refresh Service</a>
            </div>
        `
    },
    {
        slug: "helpful-content",
        term: "Helpful Content",
        definition: "Helpful Content refers to Google's ranking system that rewards content written by people, for people, rather than content created primarily to attract search engine traffic.",
        category: "On-Page & Content SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Jessica Lee", role: "Content Strategist" },
        relatedTerms: ["E-E-A-T", "User Experience", "Quality Content"],
        content: `
            <h2>People-First Content</h2>
            <p>Google's Helpful Content Update (HCU) was a paradigm shift. It penalizes sites with large amounts of "unsatisfying" or unhelpful content. The goal is to ensure users feel they learned enough to achieve their goal.</p>
            <h2>Checklist</h2>
            <ul>
                <li>Does this content provide original insight?</li>
                <li>Does it draw on first-hand experience?</li>
                <li>Does it leave the reader feeling satisfied?</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Pass the HCU Check</h3>
                <p class="text-slate-600 mb-6">Ensure your content meets Google's quality standards.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Content Quality Audit</a>
            </div>
        `
    },
    {
        slug: "content-pruning",
        term: "Content Pruning",
        definition: "Content Pruning is the process of removing or consolidating low-quality, outdated, or underperforming content from a website to improve overall site health.",
        category: "On-Page & Content SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Jessica Lee", role: "Content Strategist" },
        relatedTerms: ["Crawl Budget", "Index Bloat", "Quality Score"],
        content: `
            <h2>Less is More</h2>
            <p>Having thousands of low-quality pages can drag down your entire site's authority. Pruning involves identifying these "dead weight" pages and either improving them, merging them, or deleting them (with a redirect).</p>
            <h2>When to Prune</h2>
            <p>If a page has no traffic, no backlinks, and no conversions for the last 12 months, it&apos;s a candidate for pruning.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Clean Up Your Site</h3>
                <p class="text-slate-600 mb-6">Remove dead weight and boost your overall rankings.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Start Content Pruning</a>
            </div>
        `
    },
    {
        slug: "search-experience-optimization-sxo",
        term: "Search Experience Optimization (SXO)",
        definition: "Search Experience Optimization (SXO) combines SEO with User Experience (UX) optimization. It focuses not just on getting traffic, but on converting that traffic by providing a seamless journey.",
        category: "On-Page & Content SEO",
        lastUpdated: "December 18, 2025",
        author: { name: "Alex Rivera", role: "Senior SEO Strategist" },
        relatedTerms: ["CRO", "UX", "Core Web Vitals"],
        content: `
            <h2>The Merger of SEO and UX</h2>
            <p>Ranking #1 is useless if users bounce immediately. SXO looks at the entire journey: from the search snippet (CTR) to the landing page load time, to the content layout, and finally the conversion.</p>
            <h2>Key Metrics</h2>
            <ul>
                <li><strong>Dwell Time:</strong> How long users stay.</li>
                <li><strong>Bounce Rate:</strong> Do they leave immediately?</li>
                <li><strong>Conversion Rate:</strong> Do they take action?</li>
            </ul>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Optimize the Journey</h3>
                <p class="text-slate-600 mb-6">Turn traffic into revenue with SXO strategies.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Improve User Experience</a>
            </div>
        `
    }
];
