import React from 'react';

export const ProductForm: React.FC = () => {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-lg">
      <h2 className="text-lg font-bold text-slate-900 mb-4">Product Information (Skeleton)</h2>
      <div className="space-y-4">
        <div className="h-10 bg-slate-100 rounded animate-pulse" />
        <div className="h-10 bg-slate-100 rounded animate-pulse" />
        <div className="h-10 bg-slate-100 rounded animate-pulse" />
      </div>
    </div>
  );
};
