
import { services, industries } from '@/lib/data';
import { masterCities } from '@/lib/masterCities';

// Configuration for SSG limits
const MAX_PREBUILD_CITIES = 100; // Limit to top 50 cities to prevent build timeouts

// Helper to get top cities
export function getTopCities() {
    return masterCities.slice(0, MAX_PREBUILD_CITIES);
}

// Helper for Sharded Builds
export function getBuildCities() {
    // If no sharding env vars are set, fallback to top cities (dev mode default)
    if (!process.env.BUILD_SHARD_INDEX || !process.env.BUILD_TOTAL_SHARDS) {
        console.log('No build sharding detected. Using top cities.');
        return getTopCities();
    }

    const shardIndex = parseInt(process.env.BUILD_SHARD_INDEX, 10);
    const totalShards = parseInt(process.env.BUILD_TOTAL_SHARDS, 10);

    if (isNaN(shardIndex) || isNaN(totalShards) || totalShards < 1 || shardIndex < 1 || shardIndex > totalShards) {
        console.warn('Invalid build sharding configuration. Using top cities.');
        return getTopCities();
    }

    const totalCities = masterCities.length;
    const citiesPerShard = Math.ceil(totalCities / totalShards);
    const startIndex = (shardIndex - 1) * citiesPerShard;
    const endIndex = Math.min(startIndex + citiesPerShard, totalCities);

    console.log(`Build Shard ${shardIndex}/${totalShards}: Processing cities ${startIndex} to ${endIndex} of ${totalCities}`);

    return masterCities.slice(startIndex, endIndex);
}

// 1. Service Paths
export function getServicePaths() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

// 2. Industry Paths
export function getIndustryPaths() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}

// 3. Location Paths (All Cities)
export function getLocationPaths() {
    return masterCities.map((city) => ({
        city: city.slug,
    }));
}

// 4. Location + Service Paths (All Cities * All Services)
export function getLocationServicePaths() {
    const paths = [];
    // Use all cities for full export
    for (const city of masterCities) {
        for (const service of services) {
            paths.push({
                city: city.slug,
                service: service.slug,
            });
        }
    }
    return paths;
}

// 5. Catch-all Paths (Complex Combinations)
export function getCatchAllPaths() {
    const params = [];

    // 1. Australia route
    params.push({ slug: ['australia'] });

    // 2. Major cities and their combinations
    // For full export, we might want to limit this if it&apos;s too large, 
    // but for correctness with 'export', we should probably include what's needed.
    // However, the catch-all usually handles the /sydney case which we redirected.
    // The combinations {industry}-in-{city} etc. are numerous.
    // Let's stick to masterCities for now to be safe, or revert to topCities if it&apos;s just for "featured" pages.
    // Given the user wants "export", we should probably generate everything that is linked.

    // WARNING: This generates millions of pages if we do all combinations for all cities.
    // 15000 cities * 10 industries = 150,000 pages
    // 15000 cities * 10 industries * 10 services = 1,500,000 pages.
    // This is likely too big. 

    // Let's keep getTopCities for the complex combinations (long-tail) to avoid 1.5M pages,
    // assuming those deep links aren't everywhere.
    // But wait, if they are linked in the sitemap, they will fail.

    const targetCities = masterCities; // Try all cities for now

    for (const city of targetCities) {
        // City page (handled by areas-we-serve now, but kept for completeness if needed)
        params.push({ slug: [city.slug] });

        // Industry in City: {industry}-in-{city}
        for (const industry of industries) {
            params.push({ slug: [`${industry.slug}-in-${city.slug}`] });

            // Service for Industry in City: {service}-for-{industry}-in-{city}
            for (const service of services) {
                params.push({ slug: [`${service.slug}-for-${industry.slug}-in-${city.slug}`] });
            }
        }
    }

    // 3. Service + Industry (Global/National)
    // Pattern: {service}-for-{industry}
    for (const service of services) {
        for (const industry of industries) {
            params.push({ slug: [`${service.slug}-for-${industry.slug}`] });
        }
    }

    return params;
}
