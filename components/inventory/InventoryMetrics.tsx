import React from 'react';
import { Product } from '@/lib/types/inventory';

interface InventoryMetricsProps {
  product: Product;
}

export const InventoryMetrics: React.FC<InventoryMetricsProps> = ({ product }) => {
  const isLowStock = product.stockLevel <= product.reorderPoint;
  return (
    <div className={`p-6 border rounded-lg ${isLowStock ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-white'}`}>
      <h3 className="font-bold text-slate-900 mb-2">Inventory</h3>
      <p>Stock Level: {product.stockLevel}</p>
      <p>Reorder Point: {product.reorderPoint}</p>
      {isLowStock && <span className="text-red-600 font-bold">Low Stock Warning</span>}
    </div>
  );
};
