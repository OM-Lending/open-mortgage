'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Navigation } from './Navigation';
import { LanguageToggle } from './LanguageToggle';

export const Header = () => {
  const locale = useLocale();

  return (
    <header className="bg-[#0d3250] text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center">
             <Image
               src="/logo.webp"
               alt="Open Mortgage"
               width={180}
               height={54}
               className="h-8 w-auto object-contain md:h-9"
               priority
             />
          </Link>
          <div className="flex items-center gap-3">
            <Navigation />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
