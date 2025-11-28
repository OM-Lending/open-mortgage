'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useState, useEffect, useRef } from 'react';

export const Navigation = () => {
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services');
  const tResources = useTranslations('resources');
  const tMore = useTranslations('more');
  const locale = useLocale();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const servicesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const servicesLinks = [
    { href: `/${locale}/services`, label: tServices('ourService') },
    { href: `/${locale}/services/home-loan`, label: tServices('homeLoan') },
    { href: `/${locale}/services/car-loan`, label: tServices('carLoan') },
    { href: `/${locale}/services/commercial-loan`, label: tServices('commercialLoan') },
  ];

  const resourcesLinks = [
    { href: `/${locale}/resources/free-valuation`, label: tResources('freeValuation') },
    { href: `/${locale}/resources/loan-preparation`, label: tResources('loanPreparation') },
    { href: `/${locale}/resources/repayment-calculator`, label: tResources('repaymentCalculator') },
    { href: `/${locale}/resources/stamp-duty-calculator`, label: tResources('stampDutyCalculator') },
    { href: `/${locale}/resources/loan-borrowing-calculator`, label: tResources('loanBorrowingCalculator') },
  ];

  const moreLinks = [
    { href: `/${locale}/loan-products`, label: tMore('loanProducts') },
    { href: `/${locale}/faq`, label: tMore('faq') },
    { href: `/${locale}/about-us`, label: tMore('aboutUs') },
    { href: `/${locale}/contact-us`, label: tMore('contactUs') },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link href={`/${locale}`} className="text-white hover:text-gray-200 font-medium">
          {tNav('home')}
        </Link>
        
        <div
          ref={servicesRef}
          className="relative"
        >
          <button 
            className="text-white hover:text-gray-200 font-medium flex items-center"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            {tNav('services')}
            <svg className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-[#e0e0e0] shadow-lg z-50">
              {servicesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-[#0d3250] hover:bg-[#0d3250] hover:text-white transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div
          ref={resourcesRef}
          className="relative"
        >
          <button 
            className="text-white hover:text-gray-200 font-medium flex items-center"
            onClick={() => setResourcesOpen(!resourcesOpen)}
          >
            {tNav('resources')}
            <svg className={`ml-1 w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {resourcesOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-[#e0e0e0] shadow-lg z-50">
              {resourcesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-[#0d3250] hover:bg-[#0d3250] hover:text-white transition-colors"
                  onClick={() => setResourcesOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href={`/${locale}/blogs`} className="text-white hover:text-gray-200 font-medium">
          {tNav('blogs')}
        </Link>

        <div
          ref={moreRef}
          className="relative"
        >
          <button 
            className="text-white hover:text-gray-200 font-medium flex items-center"
            onClick={() => setMoreOpen(!moreOpen)}
          >
            {tNav('more')}
            <svg className={`ml-1 w-4 h-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {moreOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-[#e0e0e0] shadow-lg z-50">
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-[#0d3250] hover:bg-[#0d3250] hover:text-white transition-colors"
                  onClick={() => setMoreOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#e0e0e0] z-50">
          <div className="flex flex-col">
            <Link
              href={`/${locale}`}
              className="px-4 py-3 text-[#0d3250] border-b border-[#e0e0e0]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {tNav('home')}
            </Link>
            <div className="border-b border-[#e0e0e0]">
              <button
                className="w-full px-4 py-3 text-left text-[#0d3250] flex items-center justify-between"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                {tNav('services')}
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="bg-gray-50">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-8 py-2 text-[#0d3250] hover:bg-[#0d3250] hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="border-b border-[#e0e0e0]">
              <button
                className="w-full px-4 py-3 text-left text-[#0d3250] flex items-center justify-between"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                {tNav('resources')}
                <svg className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesOpen && (
                <div className="bg-gray-50">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-8 py-2 text-[#0d3250] hover:bg-[#0d3250] hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href={`/${locale}/blogs`}
              className="px-4 py-3 text-[#0d3250] border-b border-[#e0e0e0]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {tNav('blogs')}
            </Link>
            <div className="border-b border-[#e0e0e0]">
              <button
                className="w-full px-4 py-3 text-left text-[#0d3250] flex items-center justify-between"
                onClick={() => setMoreOpen(!moreOpen)}
              >
                {tNav('more')}
                <svg className={`w-4 h-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {moreOpen && (
                <div className="bg-gray-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-8 py-2 text-[#0d3250] hover:bg-[#0d3250] hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

