
import Link from 'next/link';
import React from 'react';

import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

interface ServiceBlogTemplateProps {
  title: string;
  locationName?: string;
  content: string[];
  publishDate: string;
  author: string;
  tags: string[];
  serviceSlug: string;
  locationSlug?: string;
  className?: string;
}

const ServiceBlogTemplate = ({
  title,
  locationName,
  content,
  publishDate,
  author,
  tags,
  serviceSlug,
  locationSlug,
  className = ''
}: ServiceBlogTemplateProps) => {
  const formattedTitle = locationName
    ? title.replace('{city name}', locationName)
    : title;

  const pageUrl = locationSlug
    ? `/areas-we-serve/${locationSlug}/${serviceSlug}`
    : `/service/${serviceSlug}`;

  return (
    <article className={`max-w-4xl mx-auto ${className}`}>
      <AnimatedSection animation="fade-in">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
          {formattedTitle}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-seo-gray-dark mb-8">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <span>{author}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4" />
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex px-2 py-1 bg-seo-gray-light rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={100}>
        <div className="prose max-w-none">
          {content.map((paragraph, index) => {
            const formattedParagraph = locationName
              ? paragraph.replace(/\{city name\}/g, locationName)
              : paragraph;

            return (
              <p key={index} className="mb-6 text-seo-gray-dark">
                {formattedParagraph}
              </p>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection
        animation="fade-in"
        delay={200}
        className="mt-12 p-8 bg-seo-blue/5 rounded-xl"
      >
        <h3 className="text-xl font-bold text-seo-dark mb-4">
          {locationName
            ? `Ready to improve your ${locationName} business visibility?`
            : 'Ready to improve your business visibility?'
          }
        </h3>
        <p className="text-seo-gray-dark mb-6">
          {locationName
            ? `Our team of SEO experts can help your ${locationName} business achieve higher rankings and attract more customers through effective search optimization.`
            : 'Our team of SEO experts can help your business achieve higher rankings and attract more customers through effective search optimization.'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-seo-blue hover:bg-seo-blue-light text-white">
            <Link href="/free-consultation" className="flex items-center">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
            <a href={pageUrl} className="flex items-center">
              {locationName
                ? `View ${locationName} SEO Services`
                : 'View SEO Services'
              }
            </a>
          </Button>
        </div>
      </AnimatedSection>
    </article>
  );
};

export default ServiceBlogTemplate;

