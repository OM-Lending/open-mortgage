"use client";

import React from "react";
import { Button } from "./Button";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  locale: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="relative flex min-h-[440px] w-full items-center justify-center overflow-hidden h-[78vh]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        suppressHydrationWarning
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1
          className="mb-5 text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontWeight: 900,
          }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className="mx-auto mb-8 max-w-3xl text-lg font-semibold leading-relaxed text-gray-100 md:text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {subtitle}
          </p>
        ) : null}
        <Link href={ctaLink}>
          <Button variant="primary" className="px-8 py-4 text-lg rounded-full">
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
};
