import React from "react";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  image?: string;
  imageAlt?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  title,
  image,
  imageAlt = "",
}) => {
  return (
    <div
      className={`bg-white border border-[#e3e7f5] rounded-[32px] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full min-h-[250px] shadow-sm ${className}`}
    >
      {title && (
        <div className="mb-4 min-h-[52px] flex items-center justify-center">
          <h3 className="text-xl font-semibold text-[#0d3250] text-center">
            {title}
          </h3>
        </div>
      )}
      {image && (
        <div className="mb-5 w-full aspect-video relative overflow-hidden rounded-2xl shadow-inner">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};
