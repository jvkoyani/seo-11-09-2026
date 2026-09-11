import { generateCanonical } from './utils';

/**
 * Generate Service schema for money pages
 */
export function generateServiceSchema(service, industry, location) {
  if (!service || !location) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name}${industry ? ` for ${industry.name}` : ''} in ${location.name}`,
    description: `Professional ${service.name.toLowerCase()} services for ${industry ? industry.name.toLowerCase() : 'businesses'} in ${location.name}, ${location.state}.`,
    url: generateCanonical(`/${service.slug}/${industry ? industry.slug : ''}/${location.slug}`.replace(/\/$/, '')),
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'State',
        name: location.state,
      },
    },
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: 'SEO Services Australia',
      url: generateCanonical('/'),
    },
  };
}

/**
 * Generate LocalBusiness schema
 */
export function generateLocalBusinessSchema(locationName, state) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SEO Services in ' + locationName,
    url: generateCanonical(`/${locationName.toLowerCase().replace(/\s+/g, '-')}`),
    telephone: '+61-2-XXXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      addressLocality: locationName,
      addressRegion: state,
      addressCountry: 'AU',
    },
    areaServed: {
      '@type': 'City',
      name: locationName,
    },
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: generateCanonical(item.url),
    })),
  };
}

/**
 * Generate Organization schema (homepage)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SEO Services Australia',
    url: generateCanonical('/'),
    logo: generateCanonical('/logo.png'),
    sameAs: [
      'https://facebook.com/seoservices',
      'https://twitter.com/seoservices',
      'https://linkedin.com/company/seoservices',
    ],
  };
}

/**
 * Generate WebSite schema (homepage)
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SEO Services Australia',
    url: generateCanonical('/'),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: generateCanonical('/search?q={search_term_string}'),
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Serialize schemas to JSON-LD
 */
export function serializeSchemas(schemas) {
  if (!schemas || schemas.length === 0) return null;
  const filtered = schemas.filter(Boolean);
  if (filtered.length === 0) return null;

  if (filtered.length === 1) {
    return JSON.stringify(filtered[0]);
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': filtered,
  });
}

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema(ratingValue = 4.9, reviewCount = 250) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: ratingValue.toString(),
    ratingCount: reviewCount.toString(),
  };
}
