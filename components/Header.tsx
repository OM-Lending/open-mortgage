'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Navigation } from './Navigation';
import { LanguageToggle } from './LanguageToggle';

export const Header = () => {
  const locale = useLocale();

  return (
    <header className="bg-[#0d3250] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 relative">
          <Link href={`/${locale}`} className="text-2xl font-bold text-white">
            Open Mortgage
          </Link>
          <div className="flex items-center gap-4">
            <Navigation />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

