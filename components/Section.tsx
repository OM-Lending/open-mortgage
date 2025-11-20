import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  title,
  subtitle
}) => {
  const isDarkBackground = className.includes('text-white');
  const titleColor = isDarkBackground ? 'text-white' : 'text-[#0d3250]';
  
  return (
    <section className={`py-20 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className={`text-3xl md:text-4xl font-black ${titleColor} mb-4 leading-tight`} style={{ fontFamily: 'var(--font-montserrat), sans-serif', fontWeight: 900 }}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

