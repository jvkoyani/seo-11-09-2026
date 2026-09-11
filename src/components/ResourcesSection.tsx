
import Link from 'next/link';
import React from 'react';

import { FileText, Briefcase, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import BlogPreview from './BlogPreview';
import CaseStudyPreview from './CaseStudyPreview';
import { blogPosts, caseStudies } from '@/lib/data';

interface ResourcesSectionProps {
  filterTag?: string;
  className?: string;
}

const ResourcesSection = ({ filterTag, className = '' }: ResourcesSectionProps) => {
  // Filter blog posts if a tag is provided
  const filteredBlogs = filterTag
    ? blogPosts.filter(post =>
      post.tags.some(tag => tag.toLowerCase().includes(filterTag.toLowerCase())) ||
      post.category.toLowerCase().includes(filterTag.toLowerCase())
    ).slice(0, 3)
    : blogPosts.slice(0, 3);

  // Filter case studies if a tag is provided
  const filteredCaseStudies = filterTag
    ? caseStudies.filter(study =>
      study.industry.toLowerCase().includes(filterTag.toLowerCase()) ||
      study.solution.toLowerCase().includes(filterTag.toLowerCase())
    ).slice(0, 2)
    : caseStudies.slice(0, 2);

  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <AnimatedSection
          className="text-center max-w-3xl mx-auto mb-10"
          animation="fade-in"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-500 border border-purple-500/20 mb-4">
            <BookOpen className="w-3 h-3 mr-2" />
            Knowledge Hub
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
            Resources & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Insights</span>
          </h2>
          <p className="text-base text-seo-gray-dark mb-8">
            Stay ahead of the curve with our latest SEO guides, success stories, and industry insights designed to help you grow.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blogs" className="inline-flex items-center px-6 py-2.5 rounded-full bg-white border border-gray-200 text-seo-dark font-medium hover:border-purple-500 hover:text-purple-600 transition-all shadow-sm hover:shadow-md">
              <FileText className="w-4 h-4 mr-2" />
              Browse Articles
            </Link>
            <Link href="/case-studies" className="inline-flex items-center px-6 py-2.5 rounded-full bg-white border border-gray-200 text-seo-dark font-medium hover:border-purple-500 hover:text-purple-600 transition-all shadow-sm hover:shadow-md">
              <Briefcase className="w-4 h-4 mr-2" />
              View Case Studies
            </Link>
          </div>
        </AnimatedSection>

        {/* Case Studies Section */}
        {filteredCaseStudies.length > 0 && (
          <div className="mb-12">
            <AnimatedSection
              className="mb-8 flex items-center"
              animation="fade-in"
            >
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <Briefcase className="h-5 w-5 text-seo-blue" />
              </div>
              <h3 className="text-2xl font-display font-bold text-seo-dark">
                Featured Success Stories
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts Section */}
        {filteredBlogs.length > 0 && (
          <div>
            <AnimatedSection
              className="mb-8 flex items-center"
              animation="fade-in"
            >
              <div className="p-2 bg-purple-50 rounded-lg mr-3">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-2xl font-display font-bold text-seo-dark">
                Latest Insights & Guides
              </h3>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredBlogs.map((post, index) => (
                <BlogPreview key={post.id} post={post} delay={index * 100} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesSection;
