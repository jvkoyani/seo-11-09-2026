
import Link from 'next/link';
import React from 'react';
import { ArrowRight, CheckCircle, Building2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { industries } from '@/lib/data';
import { getIcon } from '@/lib/icons';

interface IndustrySeoServicesProps {
  title?: string;
  description?: string;
  showAll?: boolean;
}

const IndustrySeoServices = ({
  title = "Industry-Specific SEO Solutions",
  description = "Tailored SEO strategies for your specific industry needs",
  showAll = true
}: IndustrySeoServicesProps) => {
  const displayIndustries = showAll ? industries : industries.slice(0, 3);

  return (
    <section className="py-24 bg-seo-gray-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-seo-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-seo-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection
          className="text-center mb-4 md:mb-10 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-seo-blue/10 to-blue-500/10 text-seo-blue border border-seo-blue/20 mb-6">
            <Building2 className="w-4 h-4" />
            Industry Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
            Industry-Specific{' '}
            <span className="bg-gradient-to-r from-seo-blue to-blue-600 bg-clip-text text-transparent">
              SEO Solutions
            </span>
          </h2>
          <p className="text-base text-seo-gray-dark font-medium leading-relaxed">
            {description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {displayIndustries.map((industry, index) => (
            <AnimatedSection
              key={industry.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              animation="fade-in"
              delay={100 * index}
            >
              <div className="p-3 sm:p-8 relative">
                {/* Enhanced decorator element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-seo-blue/5 to-seo-blue/20 rounded-bl-full -z-0"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-seo-blue/5 to-transparent rounded-tr-full -z-0"></div>

                <div className="bg-seo-blue/10 rounded-full w-8 h-8 sm:w-16 sm:h-16 flex items-center justify-center mb-2 sm:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                  {(() => {
                    const Icon = getIcon(industry.icon);
                    return <Icon className="h-4 w-4 sm:h-8 sm:w-8 text-seo-blue" />;
                  })()}
                </div>

                <h3 className="text-sm sm:text-xl font-display font-bold text-seo-dark mb-2 sm:mb-3 relative z-10">
                  {industry.title}
                </h3>

                <p className="text-xs sm:text-sm text-seo-gray-dark mb-3 sm:mb-6 relative z-10 line-clamp-2 sm:line-clamp-none">
                  {industry.description}
                </p>

                <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-seo-blue/5 to-transparent border-l-2 border-seo-blue relative z-10">
                  <h4 className="font-medium text-seo-dark mb-2">Key benefits:</h4>
                  <ul className="space-y-2">
                    {industry.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="text-sm text-seo-gray-dark flex items-start group/item">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0 group-hover/item:text-green-600 transition-colors" />
                        <span className="group-hover/item:text-seo-dark transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/industries/${industry.slug}`}
                  className="inline-flex items-center text-seo-blue font-medium group/link mt-2 relative z-10"
                >
                  <span className="border-b border-seo-blue/30 group-hover/link:border-seo-blue transition-colors">
                    Learn more <span className="sr-only">about {industry.title}</span>
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {!showAll && (
          <AnimatedSection
            className="text-center mt-12"
            animation="slide-up"
            delay={300}
          >
            <Link href="/industries" className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-8 rounded-md transition-colors relative overflow-hidden group">
              <span className="relative z-10">View All Industry Solutions</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-seo-blue-light to-seo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default IndustrySeoServices;

