import React from 'react';
import Link from 'next/link';

import { ChevronRight, MapPin } from 'lucide-react';
import { allAustralianCities } from '@/lib/locationData';

interface LocationBreadcrumbsProps {
  locationSlug: string;
  serviceSlug?: string;
  className?: string;
}

const LocationBreadcrumbs = ({ locationSlug, serviceSlug, className = '' }: LocationBreadcrumbsProps) => {
  const locationData = allAustralianCities.find(loc => loc.slug === locationSlug);

  if (!locationData) return null;

  return (
    <div className={`flex flex-wrap items-center text-sm text-seo-gray-dark ${className}`}>
      <Link href="/" className="hover:text-seo-blue transition-colors">
        Home
      </Link>
      <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />

      {/* Country */}
      <a
        href={`/${locationData.country.toLowerCase()}`}
        className="hover:text-seo-blue transition-colors"
      >
        {locationData.country}
      </a>
      <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />

      {/* State */}
      <a
        href={`/${locationData.country.toLowerCase()}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}`}
        className="hover:text-seo-blue transition-colors"
      >
        {locationData.state}
      </a>
      <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />

      {/* County (if available) */}
      {locationData.county && (
        <>
          <a
            href={`/${locationData.country.toLowerCase()}/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.county.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:text-seo-blue transition-colors"
          >
            {locationData.county}
          </a>
          <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
        </>
      )}

      {/* Location (City) */}
      <a
        href={`/areas-we-serve/${locationData.slug}`}
        className="hover:text-seo-blue transition-colors flex items-center"
      >
        <MapPin className="h-3 w-3 mr-1" />
        {locationData.name}
      </a>

      {/* Service (if available) */}
      {serviceSlug && (
        <>
          <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
          <span className="text-seo-blue font-medium">
            {serviceSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </>
      )}
    </div>
  );
};

export default LocationBreadcrumbs;
