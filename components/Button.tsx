import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'px-6 py-3 font-medium transition-colors duration-200 border-0';
  
  const variants = {
    primary: 'bg-[#0d3250] text-white hover:bg-[#1a4a70]',
    secondary: 'bg-white text-[#0d3250] border-2 border-[#0d3250] hover:bg-[#0d3250] hover:text-white',
    outline: 'bg-transparent text-[#0d3250] border-2 border-[#0d3250] hover:bg-[#0d3250] hover:text-white'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

