import React from 'react';
import Image from 'next/image';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  image?: string;
  imageAlt?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, image, imageAlt = '' }) => {
  return (
    <div 
      className={`bg-white border border-[#e0e0e0] p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full min-h-[250px] ${className}`}
      style={{
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
    >
      {title && (
        <h3 className="text-xl font-semibold text-[#0d3250] mb-3 text-center">{title}</h3>
      )}
      {image && (
        <div className="mb-4 w-full aspect-video relative overflow-hidden rounded">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};

