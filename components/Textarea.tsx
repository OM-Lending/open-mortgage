import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-[#0d3250] mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-2 border border-[#e0e0e0] bg-white text-[#0d3250] focus:outline-none focus:border-[#0d3250] min-h-[120px] ${className}`}
        {...props}
      />
    </div>
  );
};

