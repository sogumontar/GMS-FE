import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-[#002147] text-white hover:bg-[#001b3d] focus:ring-[#002147]',
    secondary: 'bg-[#fed65b] text-[#002147] hover:bg-[#e9c349] focus:ring-[#fed65b]',
    outline: 'border-2 border-[#002147] text-[#002147] hover:bg-gray-50 focus:ring-[#002147]',
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-400',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
