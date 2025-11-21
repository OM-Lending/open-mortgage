'use client';

import Image from 'next/image';
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
          <Link href={`/${locale}`} className="inline-flex items-center gap-2">
            <Image
              src="/om-logo-blue.svg"
              alt="Open Mortgage"
              width={150}
              height={45}
              className="h-auto w-auto"
              priority
            />
            <span className="sr-only">Open Mortgage</span>
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

