'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

export const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    // Remove current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`;
    
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="px-4 py-2 bg-white text-[#0d3250] border border-[#0d3250] hover:bg-[#0d3250] hover:text-white transition-colors duration-200 font-medium"
      aria-label="Toggle language"
    >
      {locale === 'en' ? '中文' : 'EN'}
    </button>
  );
};

