/**
 * Generate image filename for money page
 * Format: [service]-[industry]-[location]-[type]-[num].webp
 */
export function generateImageFilename(service, industry, location, type = 'hero', num = 1) {
  const parts = [
    service?.slug || 'service',
    industry?.slug || 'industry',
    location?.slug || 'location',
    type,
    num,
  ];
  return `${parts.join('-')}.webp`;
}

/**
 * Generate alt tag for image
 */
export function generateAltTag(service, industry, location, type = 'hero') {
  const parts = [];

  if (service) parts.push(service.name);
  if (industry) parts.push(`for ${industry.name}`);
  if (location) parts.push(`in ${location.name}`);

  const baseAlt = parts.join(' ') || 'Professional SEO Services';

  const typeTexts = {
    hero: `${baseAlt} - Hero Image`,
    case: `${baseAlt} - Case Study`,
    process: `${baseAlt} - Process Diagram`,
    testimonial: `${baseAlt} - Client Testimonial`,
  };

  return typeTexts[type] || baseAlt;
}

/**
 * Get image path from public folder
 */
export function getImagePath(filename) {
  return `/images/${filename}`;
}

/**
 * Generate image object for Next.js Image component
 */
export function generateImageData(service, industry, location, type = 'hero', priority = false) {
  const filename = generateImageFilename(service, industry, location, type);

  return {
    src: getImagePath(filename),
    alt: generateAltTag(service, industry, location, type),
    width: 1200,
    height: 600,
    priority,
  };
}

/**
 * Generate responsive image sizes
 */
export const RESPONSIVE_SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

/**
 * Generate WebP image loader for optimization
 */
export function imageLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}&f=webp`;
}

/**
 * Check if image exists in public folder
 * Note: This is a placeholder - in production, use a build-time check
 */
export function imageExists(filename) {
  try {
    return require(`../public/images/${filename}`);
  } catch (e) {
    return false;
  }
}

/**
 * Get fallback/placeholder image
 */
export function getFallbackImage(type = 'hero') {
  const colors = {
    hero: 'from-blue-500 to-cyan-500',
    case: 'from-purple-500 to-pink-500',
    process: 'from-green-500 to-emerald-500',
    testimonial: 'from-orange-500 to-red-500',
  };

  return {
    src: `https://via.placeholder.com/1200x600/${colors[type] || 'blue'}`,
    alt: 'Placeholder image',
  };
}

/**
 * Generate image srcset for responsive images
 */
export function generateImageSrcSet(filename) {
  const sizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  return sizes.map(size => `${filename}?w=${size} ${size}w`).join(', ');
}

/**
 * Optimize image quality for web
 * Returns recommended quality settings
 */
export function getOptimalImageQuality(context = 'web') {
  const qualityMap = {
    web: 75,
    mobile: 65,
    hero: 85,
    thumbnail: 60,
  };
  return qualityMap[context] || 75;
}
