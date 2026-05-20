import React from 'react';
import { InventoryMetric } from '../../../lib/types/inventory';

interface InventoryOverviewProps {
  metrics: InventoryMetric;
}

export const InventoryOverview: React.FC<InventoryOverviewProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Total Products */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col justify-between">
        <span className="text-sm font-medium text-on-surface-variant flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">category</span>
          Total Products
        </span>
        <span className="text-3xl font-bold text-on-background mt-4">
          {metrics.totalProducts.toLocaleString()}
        </span>
      </div>

      {/* Low Stock Alerts */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col justify-between">
        <span className="text-sm font-medium text-on-surface-variant flex items-center gap-2">
          <span className="material-symbols-outlined text-on-secondary-container text-[18px]">warning</span>
          Low Stock Alerts
        </span>
        <span className="text-3xl font-bold text-on-background mt-4">
          {metrics.lowStockAlerts}
        </span>
      </div>

      {/* Out of Stock */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col justify-between">
        <span className="text-sm font-medium text-on-surface-variant flex items-center gap-2">
          <span className="material-symbols-outlined text-error text-[18px]">error</span>
          Out of Stock
        </span>
        <span className="text-3xl font-bold text-on-background mt-4">
          {metrics.outOfStock}
        </span>
      </div>

      {/* Total Value */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed to-secondary-fixed opacity-20"></div>
        <span className="text-sm font-medium text-on-surface-variant flex items-center gap-2 relative z-10">
          <span className="material-symbols-outlined text-primary text-[18px]">account_balance_wallet</span>
          Total Value
        </span>
        <span className="text-3xl font-bold text-on-background mt-4 relative z-10">
          ${(metrics.totalValue / 1000).toFixed(1)}k
        </span>
      </div>
    </div>
  );
};
