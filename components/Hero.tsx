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
    <section className="relative w-full h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://categories.api.godaddy.com/v4/videos/raw/video/R8wB5Qa"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair-display), serif" }}
        >
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Link href={ctaLink}>
          <Button variant="primary" className="px-8 py-4 text-lg">
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
};
