import fs from 'fs';
import path from 'path';

/**
 * Load services data
 */
export function loadServices() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'services.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading services:', error);
    return [];
  }
}

/**
 * Load industries data
 */
export function loadIndustries() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'industries.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading industries:', error);
    return [];
  }
}

/**
 * Load locations data
 */
export function loadLocations() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'locations.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading locations:', error);
    return [];
  }
}

/**
 * Get service by slug
 */
export function getServiceBySlug(slug) {
  const services = loadServices();
  return services.find(s => s.slug === slug);
}

/**
 * Get industry by slug
 */
export function getIndustryBySlug(slug) {
  const industries = loadIndustries();
  return industries.find(i => i.slug === slug);
}

/**
 * Get location by slug
 */
export function getLocationBySlug(slug) {
  const locations = loadLocations();
  return locations.find(l => l.slug === slug);
}

/**
 * Generate seed set for getStaticPaths
 * Returns top N items for initial build
 * Rest build on-demand via fallback: 'blocking'
 */
export function generateSeedSet(seedSize = 2000) {
  const services = loadServices();
  const industries = loadIndustries();
  const locations = loadLocations();

  const paths = [];

  // Tier 1: Service hubs
  services.forEach(service => {
    paths.push({
      params: {
        service: service.slug,
      },
      revalidate: 86400, // 1 day
    });
  });

  // Tier 1: Industry hubs
  industries.forEach(industry => {
    paths.push({
      params: {
        industry: industry.slug,
      },
      revalidate: 86400,
    });
  });

  // Tier 1: Location hubs (top N only)
  locations.slice(0, 10).forEach(location => {
    paths.push({
      params: {
        location: location.slug,
      },
      revalidate: 604800, // 7 days
    });
  });

  // Tier 2: Service + Location (top combinations)
  services.slice(0, 5).forEach(service => {
    locations.slice(0, 10).forEach(location => {
      paths.push({
        params: {
          service: service.slug,
          location: location.slug,
        },
        revalidate: 86400,
      });
    });
  });

  return paths.slice(0, seedSize);
}

/**
 * Get count of potential pages at each tier
 */
export function getPageCounts() {
  const services = loadServices();
  const industries = loadIndustries();
  const locations = loadLocations();

  return {
    tier1_services: services.length,
    tier1_industries: industries.length,
    tier1_locations: locations.length,
    tier2_service_location: services.length * locations.length,
    tier2_service_industry: services.length * industries.length,
    tier2_industry_location: industries.length * locations.length,
    tier3_money_pages: services.length * industries.length * locations.length,
    total_approximate: (
      services.length +
      industries.length +
      locations.length +
      services.length * locations.length +
      services.length * industries.length +
      industries.length * locations.length +
      services.length * industries.length * locations.length
    ),
  };
}

/**
 * Validate data integrity
 */
export function validateData() {
  const services = loadServices();
  const industries = loadIndustries();
  const locations = loadLocations();

  const errors = [];

  if (services.length === 0) errors.push('No services loaded');
  if (industries.length === 0) errors.push('No industries loaded');
  if (locations.length === 0) errors.push('No locations loaded');

  // Check for duplicate slugs
  const serviceSlugs = services.map(s => s.slug);
  const industryShlugs = industries.map(i => i.slug);
  const locationSlugs = locations.map(l => l.slug);

  if (new Set(serviceSlugs).size !== serviceSlugs.length) {
    errors.push('Duplicate service slugs found');
  }
  if (new Set(industryShlugs).size !== industryShlugs.length) {
    errors.push('Duplicate industry slugs found');
  }
  if (new Set(locationSlugs).size !== locationSlugs.length) {
    errors.push('Duplicate location slugs found');
  }

  return {
    valid: errors.length === 0,
    errors,
    counts: {
      services: services.length,
      industries: industries.length,
      locations: locations.length,
    },
  };
}
