import React from 'react';
import Link from 'next/link';
import { allAustralianCities } from '@/lib/locationData';
import { services } from '@/lib/data';
import { MapPin, ArrowRight, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const LocationSitemap = () => {
  // Group cities by state on the server
  const citiesByState: Record<string, typeof allAustralianCities> = {};
  allAustralianCities.forEach(city => {
    const state = city.state === "Various" ? "Other Locations" : city.state;
    if (!citiesByState[state]) {
      citiesByState[state] = [];
    }
    citiesByState[state].push(city);
  });

  const states = Object.keys(citiesByState).sort();

  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatedSection animation="fade-in">
        <h2 className="text-3xl font-display font-bold text-seo-dark mb-3 text-center">
          Australia SEO Services - All Locations
        </h2>
        <p className="text-center text-seo-gray-dark mb-10 max-w-3xl mx-auto">
          Browse our comprehensive directory of SEO services available across all major Australian cities and regions.
          Showing {allAustralianCities.length} locations in total.
        </p>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={100}>
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-seo-dark">Australian States & Territories</h3>
            <Link href="/sitemap" className="text-seo-blue hover:underline flex items-center">
              <span>View full sitemap</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {states.filter(state => state !== "Other Locations").map(state => (
              <a
                key={state}
                href={`/australia/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <Globe className="h-5 w-5 text-seo-blue mr-3" />
                <div>
                  <span className="font-medium">{state}</span>
                  <span className="text-sm text-seo-gray-dark block">
                    {citiesByState[state].length} locations
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {states.map((state, stateIndex) => (
          <AnimatedSection key={state} className="bg-white rounded-xl shadow-sm p-6" animation="fade-in" delay={200 + stateIndex * 50}>
            <h3 className="text-xl font-bold text-seo-dark mb-4 border-b pb-2">
              {state !== "Other Locations" ? (
                <a
                  href={`/australia/${state.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-seo-blue transition-colors"
                >
                  {state}
                </a>
              ) : (
                <span>{state}</span>
              )}
              <span className="text-sm text-seo-gray-dark ml-2">({citiesByState[state].length})</span>
            </h3>
            <ul className="space-y-2">
              {citiesByState[state].map((city, cityIndex) => (
                <li key={`${city.id}-${cityIndex}`}>
                  <a
                    href={`/areas-we-serve/${city.slug}`}
                    className="flex items-center text-seo-gray-dark hover:text-seo-blue transition-colors"
                  >
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{city.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-16" animation="fade-in" delay={300}>
        <h2 className="text-2xl font-display font-bold text-seo-dark mb-6 text-center">
          Our Services Available in All Australian Cities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-all" animation="fade-in" delay={350 + index * 50}>
              <h3 className="text-lg font-semibold text-seo-dark mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-seo-gray-dark mb-3">
                {service.title} services available in all major Australian cities.
              </p>
              <a
                href={`/service/${service.slug}`}
                className="text-sm text-seo-blue font-medium hover:underline flex items-center"
              >
                <span>Learn more <span className="sr-only">about {service.title}</span></span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <div className="mt-16 text-center">
        <Link href="/sitemap" className="inline-flex items-center justify-center bg-seo-blue text-white px-6 py-3 rounded-md hover:bg-seo-blue-light transition-colors">
          View Complete Sitemap
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default LocationSitemap;
