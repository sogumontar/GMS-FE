import React from 'react';

export const InventoryMetrics: React.FC = () => {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-lg">
      <h2 className="text-lg font-bold text-slate-900 mb-4">Inventory Metrics (Skeleton)</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-20 bg-slate-100 rounded animate-pulse" />
        <div className="h-20 bg-slate-100 rounded animate-pulse" />
        <div className="h-20 bg-slate-100 rounded animate-pulse" />
      </div>
    </div>
  );
};
