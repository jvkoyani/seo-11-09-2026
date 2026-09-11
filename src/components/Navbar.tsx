"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ChevronDown, FileText, Briefcase } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { locations, services, industries } from '@/lib/data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLocations = () => setIsLocationsOpen(!isLocationsOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleIndustries = () => setIsIndustriesOpen(!isIndustriesOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsLocationsOpen(false);
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
    setIsResourcesOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menus when pathname changes
  useEffect(() => {
    const menuState = { isMenuOpen, isLocationsOpen, isServicesOpen, isIndustriesOpen, isResourcesOpen };
    setIsMenuOpen(false);
    setIsLocationsOpen(false);
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
    setIsResourcesOpen(false);
  }, [pathname]);

  return (

    <>
      <AnimatedSection
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'py-3 bg-white shadow-md' : 'py-5 bg-white shadow-sm'
          }`}
        animation="fade-in"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center" onClick={handleLinkClick}>
              <Image 
                src="/logo.webp" 
                alt="Power My SEO" 
                width={120} 
                height={36} 
                sizes="(max-width: 768px) 120px, 120px"
                className="h-10 md:h-12 w-auto"
                priority={true}
              />
            </Link>

            <div className="hidden md:flex items-center space-x-8">

              <div className="relative">
                <button
                  onClick={toggleServices}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="flex items-center text-seo-dark hover:text-seo-blue font-medium transition-colors focus:outline-none"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out overflow-hidden z-50 ${isServicesOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'}`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2 grid grid-cols-1 gap-1">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm font-medium text-seo-dark hover:bg-seo-gray-light hover:text-seo-blue transition-colors"
                      onClick={handleLinkClick}
                    >
                      All Services
                    </Link>
                    <div className="h-px bg-gray-100 my-1 mx-4"></div>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={`/service/${service.slug}`}
                        className="block px-4 py-2 text-sm text-seo-dark hover:bg-seo-gray-light hover:text-seo-blue transition-colors"
                        onClick={handleLinkClick}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={toggleIndustries}
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                  className="flex items-center text-seo-dark hover:text-seo-blue font-medium transition-colors focus:outline-none"
                >
                  Industries
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out overflow-hidden z-50 ${isIndustriesOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'}`}
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <div className="py-2 grid grid-cols-1 gap-1">
                    <Link
                      href="/industries"
                      className="block px-4 py-2 text-sm font-medium text-seo-dark hover:bg-seo-gray-light hover:text-seo-blue transition-colors"
                      onClick={handleLinkClick}
                    >
                      All Industries
                    </Link>
                    <div className="h-px bg-gray-100 my-1 mx-4"></div>
                    {industries.map((industry) => (
                      <Link
                        key={industry.id}
                        href={`/industries/${industry.slug}`}
                        className="block px-4 py-2 text-sm text-seo-dark hover:bg-seo-gray-light hover:text-seo-blue transition-colors"
                        onClick={handleLinkClick}
                      >
                        {industry.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={toggleLocations}
                  onMouseEnter={() => setIsLocationsOpen(true)}
                  onMouseLeave={() => setIsLocationsOpen(false)}
                  className="flex items-center text-seo-dark hover:text-seo-blue font-medium transition-colors focus:outline-none"
                >
                  Locations
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out overflow-hidden z-50 ${isLocationsOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'}`}
                  onMouseEnter={() => setIsLocationsOpen(true)}
                  onMouseLeave={() => setIsLocationsOpen(false)}
                >
                  <div className="py-2 grid grid-cols-1 gap-1">
                    {locations.map((loc) => (
                      <Link
                        key={loc.id}
                        href={`/areas-we-serve/${loc.slug}`}
                        className="block px-4 py-2 text-sm text-seo-dark hover:bg-seo-gray-light hover:text-seo-blue transition-colors"
                        onClick={handleLinkClick}
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <button
                  onClick={toggleResources}
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                  className="flex items-center text-seo-dark hover:text-seo-blue font-medium transition-colors focus:outline-none"
                >
                  Resources
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out overflow-hidden z-50 ${isResourcesOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'}`}
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  <div className="py-2 grid grid-cols-1 gap-1">
                    <Link
                      href="/blogs"
                      className="flex items-center px-4 py-2 text-sm text-seo-dark hover:bg-seo-gray-light hover:text-seo-blue transition-colors"
                      onClick={handleLinkClick}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Blog Articles
                    </Link>
                    <Link
                      href="/case-studies"
                      className="flex items-center px-4 py-2 text-sm text-seo-dark hover:bg-seo-gray-light hover:text-seo-blue transition-colors"
                      onClick={handleLinkClick}
                    >
                      <Briefcase className="h-4 w-4 mr-2" />
                      Case Studies
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="text-seo-dark hover:text-seo-blue font-medium transition-colors"
                onClick={handleLinkClick}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-2 px-5 rounded-md transition-colors button-hover-effect"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>

            <button
              className="md:hidden text-seo-dark focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </AnimatedSection>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white z-40 transition-all duration-300 md:hidden overflow-y-auto"
          style={{ top: isScrolled ? '64px' : '80px' }}
        >
          <div className="flex flex-col p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-64px)]">

            <div>
              <button
                onClick={toggleServices}
                className="text-lg font-medium text-seo-dark hover:text-seo-blue transition-colors focus:outline-none flex items-center"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 ml-4 transition-all duration-200 space-y-2 ${isServicesOpen ? 'block' : 'hidden'}`}>
                <Link
                  href="/services"
                  className="block py-2 font-medium text-seo-gray-dark hover:text-seo-blue transition-colors"
                  onClick={handleLinkClick}
                >
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/service/${service.slug}`}
                    className="block py-2 text-seo-gray-dark hover:text-seo-blue transition-colors"
                    onClick={handleLinkClick}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={toggleIndustries}
                className="text-lg font-medium text-seo-dark hover:text-seo-blue transition-colors focus:outline-none flex items-center"
              >
                Industries
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 ml-4 transition-all duration-200 space-y-2 ${isIndustriesOpen ? 'block' : 'hidden'}`}>
                <Link
                  href="/industries"
                  className="block py-2 font-medium text-seo-gray-dark hover:text-seo-blue transition-colors"
                  onClick={handleLinkClick}
                >
                  All Industries
                </Link>
                {industries.map((industry) => (
                  <Link
                    key={industry.id}
                    href={`/industries/${industry.slug}`}
                    className="block py-2 text-seo-gray-dark hover:text-seo-blue transition-colors"
                    onClick={handleLinkClick}
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={toggleLocations}
                className="text-lg font-medium text-seo-dark hover:text-seo-blue transition-colors focus:outline-none flex items-center"
              >
                Locations
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 ml-4 transition-all duration-200 space-y-2 ${isLocationsOpen ? 'block' : 'hidden'}`}>
                {locations.map((loc) => (
                  <Link
                    key={loc.id}
                    href={`/areas-we-serve/${loc.slug}`}
                    className="block py-2 text-seo-gray-dark hover:text-seo-blue transition-colors"
                    onClick={handleLinkClick}
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={toggleResources}
                className="text-lg font-medium text-seo-dark hover:text-seo-blue transition-colors focus:outline-none flex items-center"
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`mt-2 ml-4 transition-all duration-200 space-y-2 ${isResourcesOpen ? 'block' : 'hidden'}`}>
                <Link
                  href="/blogs"
                  className="flex items-center py-2 text-seo-gray-dark hover:text-seo-blue transition-colors"
                  onClick={handleLinkClick}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Blog Articles
                </Link>
                <Link
                  href="/case-studies"
                  className="flex items-center py-2 text-seo-gray-dark hover:text-seo-blue transition-colors"
                  onClick={handleLinkClick}
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Case Studies
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="text-lg font-medium text-seo-dark hover:text-seo-blue transition-colors"
              onClick={handleLinkClick}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="bg-seo-blue text-white text-center py-3 px-5 rounded-md transition-colors button-hover-effect"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
