// Utility functions for pSEO system

/**
 * Generate slug from string
 */
export function slugify(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Capitalize first letter
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Format location name for URLs
 */
export function formatLocationSlug(name) {
  return slugify(name);
}

/**
 * Generate URL for money page
 */
export function generateMoneyPageUrl(service, industry, location) {
  if (!service || !industry || !location) return null;
  return `/${service.slug}/${industry.slug}/${location.slug}`;
}

/**
 * Generate URL for service + location page
 */
export function generateServiceLocationUrl(service, location) {
  if (!service || !location) return null;
  return `/${service.slug}/${location.slug}`;
}

/**
 * Generate URL for service hub
 */
export function generateServiceUrl(service) {
  if (!service) return null;
  return `/${service.slug}`;
}

/**
 * Generate URL for industry hub
 */
export function generateIndustryUrl(industry) {
  if (!industry) return null;
  return `/${industry.slug}`;
}

/**
 * Generate URL for location hub
 */
export function generateLocationUrl(location) {
  if (!location) return null;
  return `/${location.slug}`;
}

/**
 * Generate canonical URL
 */
export function generateCanonical(path) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://seo-11-09-2026.vercel.app';
  return `${domain}${path}`;
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbs(items) {
  return items.map((item, index) => ({
    '@type': 'BreadcrumbList',
    itemListElement: items.slice(0, index + 1).map((i, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: i.name,
      item: generateCanonical(i.url),
    })),
  }));
}

/**
 * Extract location from slug
 */
export function extractLocationFromSlug(slug) {
  const parts = slug.split('/').filter(Boolean);
  return parts[parts.length - 1];
}

/**
 * Validate URL structure
 */
export function isValidMoneyPageUrl(path) {
  const regex = /^\/[a-z-]+\/[a-z-]+\/[a-z-]+\/?$/;
  return regex.test(path);
}

/**
 * Get tier level from URL
 */
export function getTierLevel(path) {
  const parts = path.split('/').filter(Boolean);
  return parts.length;
}
