"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProductItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};

interface LoanProductsShowcaseProps {
  title: string;
  subtitle: string;
  products: ProductItem[];
}

export function LoanProductsShowcase({
  title,
  subtitle,
  products,
}: LoanProductsShowcaseProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const defaultImage = products[0]?.image;

  return (
    <section className="relative py-20 md:py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#f8fbff]" />
      {defaultImage && (
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-700 ${
            activeImage ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <Image
            src={defaultImage}
            alt=""
            fill
            className="object-cover blur-2xl scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/78" />
        </div>
      )}
      {products.map((product) => (
        <div
          key={product.id}
          className={`absolute inset-0 z-0 transition-all duration-700 ${
            activeImage === product.image ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <Image
            src={product.image}
            alt=""
            fill
            className={`object-cover blur-2xl transition-transform duration-700 ${
              activeImage === product.image ? "scale-110" : "scale-105"
            }`}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/72" />
        </div>
      ))}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-black text-[#0d3250] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 900 }}
          >
            {title}
          </h2>
          <p className="text-lg text-[#5d6d7b] max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => {
              const content = (
                <div
                  className="relative min-h-[300px] rounded-[28px] overflow-hidden border border-[#dbe4ef]/75 shadow-[0_10px_28px_rgba(13,50,80,0.08)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(13,50,80,0.12)] hover:-translate-y-0.5"
                  onMouseEnter={() => setActiveImage(product.image)}
                  onMouseLeave={() => setActiveImage(null)}
                  onFocus={() => setActiveImage(product.image)}
                  onBlur={() => setActiveImage(null)}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/64 via-black/46 to-black/34" />
                  <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-white text-center">
                    <div className="max-w-[30ch]">
                      <h3 className="text-4xl font-bold mb-3 leading-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]">
                        {product.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-100 leading-relaxed [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              );

              return product.href ? (
                <Link key={product.id} href={product.href} className="block">
                  {content}
                </Link>
              ) : (
                <div key={product.id}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
