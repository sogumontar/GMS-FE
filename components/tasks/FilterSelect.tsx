import React from 'react';

interface FilterSelectProps {
  label: string;
  icon: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export const FilterSelect: React.FC<FilterSelectProps> = ({ 
  label, 
  icon, 
  options, 
  value, 
  onChange 
}) => {
  return (
    <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
        {icon}
      </span>
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-surface border border-outline-variant rounded-lg pl-10 pr-10 py-3 text-sm font-semibold focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer outline-none"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
        expand_more
      </span>
    </div>
  );
};
