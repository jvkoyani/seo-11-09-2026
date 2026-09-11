import {
  Link as Wrench
} from 'lucide-react';

// Re-export locations from locationData
export { allAustralianCities as locations, australianCities, additionalCities } from './locationData';

export interface LocationData {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  state: string;
  county?: string;
  country: string;
  relatedLocations?: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ComparisonPoint {
  feature: string;
  us: string;
  others: string;
  diy: string;
}

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  content?: string;
  longFormContent?: {
    title: string;
    sections: { title: string; content: string }[];
  };
  process?: ProcessStep[];
  pricing?: PricingTier[];
  faqs?: FAQItem[];
  comparison?: ComparisonPoint[];
}

export interface TestimonialData {
  id: string;
  name: string;
  company: string;
  location: string;
  quote: string;
  image: string;
}

export interface IndustryData {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  pricing?: PricingTier[];
  entityName?: string; // e.g., "Dental Practices", "Law Firms"
  faqs?: FAQItem[];
  whyNeedSeo?: {
    title: string;
    description: string;
    icon: 'Target' | 'Shield' | 'TrendingUp' | 'Users' | 'Search' | 'Map';
  }[];
}

export interface BlogPostData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export interface CaseStudyData {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: string;
  image: string;
  serviceType?: string;
  location?: string;
  stats?: { label: string; value: string; prefix?: string; suffix?: string }[];
  strategy?: { title: string; description: string }[];
  implementation?: { title: string; description: string; duration: string }[];
}

export const services: ServiceData[] = [
  {
    id: '1',
    title: 'Local SEO',
    slug: 'local-seo',
    description: 'Dominate local search results and attract nearby customers with targeted local SEO strategies.',
    icon: 'map-pin',
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'Location-specific keyword targeting',
      'Local link building strategies',
      'Review management system'
    ],
    content: `<p>Your Google Business Profile is one of the most powerful tools for local SEO. It helps you establish your brand, drive traffic, and improve your search engine rankings.</p>`,
    longFormContent: {
      title: "The Ultimate Guide to Local SEO Dominance",
      sections: [
        {
          title: "Google Business Profile: Your Foundation",
          content: `
            <p>Your <strong>Google Business Profile (GBP)</strong> is the single most critical factor for ranking in the "Map Pack" (the top 3 map results). It's not enough to just claim it; you must optimize it aggressively.</p>
          `
        },
        {
          title: "Local Citations & NAP Consistency",
          content: `
            <p>Citations are mentions of your business name, address, and phone number (NAP) on other websites.</p>
          `
        }
      ]
    },
    process: [
      {
        title: "Audit & Strategy",
        description: "We perform a deep-dive audit of your current local presence.",
        icon: "search"
      }
    ],
    pricing: [
      {
        name: "Local Starter",
        price: "$997/mo",
        description: "Perfect for small businesses targeting a single location.",
        features: ["GBP Optimization", "Monthly Reporting"]
      }
    ],
    faqs: [
      {
        question: "How long does it take to see results?",
        answer: "Typically 30-60 days for initial movements."
      }
    ],
    comparison: [
      {
        feature: "Strategy",
        us: "Custom-tailored",
        others: "Generic",
        diy: "Trial/Error"
      }
    ]
  },
  {
    id: '2',
    title: 'Technical SEO',
    slug: 'technical-seo',
    description: 'Improve your website\'s foundation with comprehensive technical SEO audits and optimizations.',
    icon: 'settings',
    features: [
      'Site speed optimization',
      'Mobile-friendly improvements',
      'Schema markup implementation'
    ],
    content: `<p>Technical SEO forms the foundation of your search visibility.</p>`,
    process: [
      {
        title: "Technical Audit",
        description: "Deep dive into site health.",
        icon: "settings"
      }
    ],
    pricing: [
      {
        name: "Fix & Optimize",
        price: "$2,997/mo",
        description: "We identify and fix issues.",
        features: ["Implementation of Fixes", "Speed Optimization"]
      }
    ]
  }
];

export const testimonials: TestimonialData[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Metro Retail Solutions',
    location: 'Sydney',
    quote: 'Our organic traffic increased by 156% in just 6 months.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop'
  }
];

export const industries: IndustryData[] = [
  {
    id: '1',
    title: 'Accountant SEO',
    slug: 'accountant-seo',
    entityName: 'Accounting Firms',
    description: 'SEO for accountants to attract more leads.',
    icon: 'calculator',
    features: ['Local SEO', 'Content Strategy'],
    benefits: ['More leads', 'Establish authority'],
    pricing: [
      {
        name: "Firm Growth",
        price: "$2,997/mo",
        description: "Aggressive growth for established firms.",
        features: ["Everything in Starter", "Link Building"]
      }
    ]
  },
  {
    id: '2',
    title: 'Chiropractor SEO',
    slug: 'chiropractor-seo',
    entityName: 'Chiropractic Clinics',
    description: 'Custom SEO for chiropractors.',
    icon: 'activity',
    features: ['Local SEO', 'Patient Testimonials'],
    benefits: ['Attract patients', 'Build trust']
  },
  {
    id: '3',
    title: 'Dental SEO',
    slug: 'dental-seo',
    entityName: 'Dental Practices',
    description: 'SEO for dental practices.',
    icon: 'stethoscope',
    features: ['Local SEO', 'Service Optimization'],
    benefits: ['New patients', 'High ROI']
  },
  {
    id: '4',
    title: 'Healthcare SEO',
    slug: 'healthcare-seo',
    entityName: 'Healthcare Providers',
    description: 'SEO for healthcare providers.',
    icon: 'stethoscope',
    features: ['HIPAA-compliant content', 'Provider Profiles'],
    benefits: ['Specialty authority', 'Patient education']
  },
  {
    id: '5',
    title: 'Lawyer SEO',
    slug: 'lawyer-seo',
    entityName: 'Law Firms',
    description: 'SEO for law firms.',
    icon: 'scale',
    features: ['Practice Area Optimization', 'Local SEO'],
    benefits: ['Qualified case inquiries', 'Outrank competitors']
  }
];

export const blogPosts: BlogPostData[] = [
  {
    id: '1',
    title: 'How to Optimize Your Google Business Profile',
    slug: 'optimize-google-business-profile',
    excerpt: 'Essential strategies for local search visibility.',
    content: `<p>Your GBP is critical for Local SEO.</p>`,
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1000&auto=format&fit=crop',
    date: '2023-09-15',
    author: 'Sarah Johnson',
    category: 'Local SEO',
    tags: ['Local SEO', 'GMB']
  }
];

export const caseStudies: CaseStudyData[] = [
  {
    id: '1',
    title: 'Local SEO Strategy for Sydney Dentist',
    slug: 'local-seo-sydney-dentist',
    client: 'Smile Bright Dental',
    industry: 'Dental',
    challenge: 'Struggling to attract new patients.',
    solution: 'Implemented comprehensive local SEO.',
    results: ['312% increase in organic traffic', 'First page rankings'],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'local-seo',
    location: 'sydney'
  }
];

export const caseStudyTemplates: CaseStudyData[] = [
  {
    id: 'template-1',
    title: 'Tripling New Patients for {{city}} Dental Clinic',
    slug: 'dental-seo',
    client: '{{city}} Family Dental',
    industry: 'Dental',
    challenge: 'Facing stiff competition in {{city}}.',
    solution: 'Hyper-local SEO strategy.',
    results: ['300% increase in inquiries'],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop',
    serviceType: 'local-seo'
  }
];
