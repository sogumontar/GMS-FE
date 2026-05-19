import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  trend?: string;
  icon: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value, trend, icon }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-[#002147] transition-colors shadow-sm">
      <div className="flex justify-between items-start text-left">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</span>
          <span className="text-3xl font-bold text-[#002147]">{value}</span>
        </div>
        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-[#002147]">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      {trend && (
        <div className="flex items-center gap-2 mt-auto pt-2">
          <div className="flex items-center text-[#002147] bg-gray-100 px-2 py-0.5 rounded text-xs font-bold">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            <span>{trend}</span>
          </div>
          <span className="text-xs text-gray-500">vs last month</span>
        </div>
      )}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#002147]/5 rounded-full blur-2xl group-hover:bg-[#002147]/10 transition-colors"></div>
    </div>
  );
};
