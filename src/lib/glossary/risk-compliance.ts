import { GlossaryTerm } from '../glossaryData';

export const riskComplianceTerms: GlossaryTerm[] = [
    {
        slug: "spam-policies",
        term: "Spam Policies",
        definition: "Google's Spam Policies are a set of rules that define behaviors and tactics (like cloaking, keyword stuffing, and link schemes) that can lead to a penalty or removal from search results.",
        category: "Risk, Compliance & Ethics",
        lastUpdated: "December 18, 2025",
        author: { name: "Alex Rivera", role: "Senior SEO Strategist" },
        relatedTerms: ["Manual Action", "Black Hat SEO", "Penalty"],
        content: `
            <h2>Play by the Rules</h2>
            <p>Violating spam policies can destroy a business overnight. Understanding what constitutes "spam" (including scaled content abuse and site reputation abuse) is essential for long-term survival.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Recover from Penalties</h3>
                <p class="text-slate-600 mb-6">Hit by a manual action? We can help you recover.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Penalty Recovery Service</a>
            </div>
        `
    },
    {
        slug: "ai-content-detection",
        term: "AI Content Detection",
        definition: "AI Content Detection refers to tools and algorithms designed to identify whether text was written by a human or an AI model.",
        category: "Risk, Compliance & Ethics",
        lastUpdated: "December 18, 2025",
        author: { name: "Jessica Lee", role: "Content Strategist" },
        relatedTerms: ["GPTZero", "Originality.ai", "Helpful Content"],
        content: `
            <h2>The Cat and Mouse Game</h2>
            <p>While Google says it rewards high-quality content regardless of how it&apos;s produced, mass-produced, unedited AI content is often flagged as spam. Detection tools help ensure your content maintains a "human" quality.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Humanize Your AI Content</h3>
                <p class="text-slate-600 mb-6">Ensure your content passes the human test.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Content Humanization</a>
            </div>
        `
    },
    {
        slug: "content-authenticity",
        term: "Content Authenticity",
        definition: "Content Authenticity involves verifying the origin and truthfulness of digital content, often using cryptographic methods or watermarking to prove it hasn't been manipulated.",
        category: "Risk, Compliance & Ethics",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["C2PA", "Deepfakes", "Trust Signals"],
        content: `
            <h2>Proving It's Real</h2>
            <p>In an era of deepfakes and AI hallucinations, proving that your content is authentic and verified is a massive trust signal. Technologies like C2PA are becoming standard for media verification.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Verify Your Content</h3>
                <p class="text-slate-600 mb-6">Build trust with authenticated media.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Authenticity Strategy</a>
            </div>
        `
    },
    {
        slug: "copyright-in-ai",
        term: "Copyright in AI",
        definition: "Copyright in AI refers to the legal and ethical issues surrounding the ownership of AI-generated content and the use of copyrighted data to train AI models.",
        category: "Risk, Compliance & Ethics",
        lastUpdated: "December 18, 2025",
        author: { name: "Alex Rivera", role: "Senior SEO Strategist" },
        relatedTerms: ["Intellectual Property", "Fair Use", "Legal SEO"],
        content: `
            <h2>Who Owns the Content?</h2>
            <p>Currently, AI-generated content cannot be copyrighted in many jurisdictions. This has massive implications for businesses building assets with AI. Understanding the legal landscape is crucial.</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Protect Your Assets</h3>
                <p class="text-slate-600 mb-6">Navigate the legal complexities of AI content.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Legal SEO Consultation</a>
            </div>
        `
    },
    {
        slug: "data-privacy-gdpr",
        term: "Data Privacy (GDPR, consent)",
        definition: "Data Privacy involves complying with laws like GDPR and CCPA regarding how user data is collected, stored, and used, which impacts analytics and tracking.",
        category: "Risk, Compliance & Ethics",
        lastUpdated: "December 18, 2025",
        author: { name: "Mike Chen", role: "Technical SEO Lead" },
        relatedTerms: ["Cookie Consent", "Server-Side Tracking", "Compliance"],
        content: `
            <h2>Privacy First</h2>
            <p>Respecting user privacy is not just a legal requirement; it&apos;s a brand requirement. Non-compliance can lead to massive fines and loss of trust. It also affects how we collect SEO data (e.g., cookie-less tracking).</p>
             <div class="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-12 text-center">
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Stay Compliant</h3>
                <p class="text-slate-600 mb-6">Ensure your tracking setup meets GDPR standards.</p>
                <a href="/contact" class="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">Privacy Audit</a>
            </div>
        `
    }
];
