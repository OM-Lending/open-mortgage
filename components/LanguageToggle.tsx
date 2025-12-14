"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";
import { hasBlogSlug, type LocaleKey } from "@/lib/blogSlugs";

export const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const tCommon = useTranslations("common.languageToggle");

  const toggleLocale = () => {
    const currentLocale: LocaleKey = locale === "zh" ? "zh" : "en";
    const newLocale: LocaleKey = currentLocale === "en" ? "zh" : "en";

    // Remove locale prefix from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

    // Check if we're on a blog detail page
    const blogDetailMatch = pathWithoutLocale.match(/^\/blogs\/(.+)$/);
    if (blogDetailMatch) {
      const slug = decodeURIComponent(blogDetailMatch[1]);
      // If the target locale doesn't have this blog, redirect to blog list instead of 404
      if (!hasBlogSlug(newLocale, slug)) {
        startTransition(() => {
          router.push(`/${newLocale}/blogs`);
        });
        return;
      }
    }

    // Normal language switch
    const newPath =
      pathWithoutLocale === "/"
        ? `/${newLocale}`
        : `/${newLocale}${pathWithoutLocale}`;

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="px-4 py-2 bg-white text-[#0d3250] border border-[#0d3250] hover:bg-[#0d3250] hover:text-white transition-colors duration-200 font-medium"
      aria-label={tCommon("ariaLabel")}
    >
      {locale === "en" ? tCommon("toZh") : tCommon("toEn")}
    </button>
  );
};
