"use client";

import React from 'react';

import { allAustralianCities } from '@/lib/locationData';
import { MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const CountryCities = () => {
  // Group cities by state (excluding "Various" state)
  const stateGroups = allAustralianCities.reduce((groups, city) => {
    if (city.state === "Various") return groups;

    if (!groups[city.state]) {
      groups[city.state] = [];
    }
    groups[city.state].push(city);
    return groups;
  }, {} as Record<string, typeof allAustralianCities>);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Our Service Locations
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
            SEO Services Across Australia
          </h2>
          <p className="text-base text-seo-gray-dark">
            We provide specialized SEO solutions for businesses in all major Australian cities
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(stateGroups).map(([state, cities], stateIndex) => (
            <AnimatedSection
              key={state}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
              animation="fade-in"
              delay={stateIndex * 100}
            >
              <h3 className="text-xl font-bold text-seo-dark mb-4 pb-2 border-b">
                <a
                  href={`/australia/${state.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-seo-blue transition-colors"
                >
                  {state}
                </a>
              </h3>

              <div className="grid grid-cols-2 gap-2">
                {cities.slice(0, 8).map((city) => (
                  <a
                    key={city.id}
                    href={`/areas-we-serve/${city.slug}`}
                    className="flex items-center p-2 rounded-md hover:bg-seo-blue/5 transition-colors group"
                  >
                    <MapPin className="h-4 w-4 text-seo-gray-medium group-hover:text-seo-blue transition-colors mr-1 flex-shrink-0" />
                    <span className="text-sm text-seo-gray-dark group-hover:text-seo-blue transition-colors truncate">
                      {city.name}
                    </span>
                  </a>
                ))}

                {cities.length > 8 && (
                  <a
                    href={`/australia/${state.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-center p-2 rounded-md bg-seo-blue/5 hover:bg-seo-blue/10 text-seo-blue text-sm font-medium transition-colors col-span-2 mt-2"
                  >
                    View all {cities.length} cities
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCities;
