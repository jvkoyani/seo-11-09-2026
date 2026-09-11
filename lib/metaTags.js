/**
 * Generate meta title for money page
 * Format: [Service] for [Industry] in [Location] | Expert SEO Services
 */
export function generateMetaTitle(service, industry, location) {
  if (!service || !industry || !location) return 'SEO Services Australia';

  const title = `${service.name} for ${industry.name} in ${location.name}`;
  // Keep under 60 characters for optimal display
  if (title.length <= 60) {
    return title;
  }
  // Fallback to shorter version
  return `${service.name} in ${location.name}`;
}

/**
 * Generate meta description for money page
 * Keep 155-160 characters
 */
export function generateMetaDescription(service, industry, location) {
  if (!service || !industry || !location) {
    return 'Professional SEO services for Australian businesses. Rank higher, get more traffic, increase revenue.';
  }

  const description = `Expert ${service.name.toLowerCase()} services for ${industry.name.toLowerCase()} businesses in ${location.name}. Improve rankings, get more customers, boost revenue.`;

  // Ensure 155-160 characters
  if (description.length > 160) {
    return description.substring(0, 157) + '...';
  }
  return description;
}

/**
 * Generate H1 tag content
 * Should match meta title concept but can be longer
 */
export function generateH1(service, industry, location) {
  if (!service || !industry || !location) {
    return 'Professional SEO Services in Australia';
  }
  return `${service.name} for ${industry.name} in ${location.name}`;
}

/**
 * Generate service hub title
 */
export function generateServiceTitle(service) {
  if (!service) return 'SEO Services';
  return `${service.name} Services Australia - Professional SEO Solutions`;
}

/**
 * Generate industry hub title
 */
export function generateIndustryTitle(industry) {
  if (!industry) return 'Industry SEO Services';
  return `${industry.name} SEO Services Australia - Rank Higher, Get More Customers`;
}

/**
 * Generate location hub title
 */
export function generateLocationTitle(location) {
  if (!location) return 'SEO Services';
  return `SEO Services in ${location.name} - Local SEO Experts in ${location.state}`;
}

/**
 * Generate service hub description
 */
export function generateServiceDescription(service) {
  if (!service) return 'Professional SEO services to improve your online visibility.';
  return `Professional ${service.name.toLowerCase()} services across Australia. Improve rankings, increase traffic, and grow your business. Get your free SEO audit today.`;
}

/**
 * Generate industry hub description
 */
export function generateIndustryDescription(industry) {
  if (!industry) return 'Industry-specific SEO services.';
  return `Specialized SEO services for ${industry.name.toLowerCase()} businesses across Australia. Get more customers, increase visibility, and boost revenue.`;
}

/**
 * Generate location hub description
 */
export function generateLocationDescription(location) {
  if (!location) return 'Local SEO services.';
  return `Professional SEO services in ${location.name}, ${location.state}. Get more local leads, improve rankings, and grow your business with expert local SEO.`;
}

/**
 * Generate keywords (comma-separated)
 * Note: Meta keywords are mostly ignored by Google, but useful for internal documentation
 */
export function generateKeywords(service, industry, location) {
  const keywords = [
    `${service?.name?.toLowerCase() || 'SEO'}`,
    `${industry?.name?.toLowerCase() || 'business'}`,
    location?.name?.toLowerCase() || '',
    `SEO services`,
    `digital marketing`,
  ];

  return keywords.filter(Boolean).join(', ');
}

/**
 * Generate OG tags object
 */
export function generateOGTags(title, description, url, imageUrl = null) {
  return {
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:type': 'website',
    'og:site_name': 'SEO Services Australia',
    ...(imageUrl && { 'og:image': imageUrl }),
  };
}

/**
 * Generate Twitter Card tags
 */
export function generateTwitterTags(title, description, imageUrl = null) {
  return {
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    ...(imageUrl && { 'twitter:image': imageUrl }),
  };
}

/**
 * Generate combined meta tags object for page
 */
export function generatePageMeta(service, industry, location, url) {
  const title = generateMetaTitle(service, industry, location);
  const description = generateMetaDescription(service, industry, location);

  return {
    title,
    description,
    keywords: generateKeywords(service, industry, location),
    canonical: url,
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
    author: 'SEO Services Australia',
    ...generateOGTags(title, description, url),
    ...generateTwitterTags(title, description),
  };
}
