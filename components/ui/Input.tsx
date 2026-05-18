import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] focus:border-transparent transition-all ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
};
