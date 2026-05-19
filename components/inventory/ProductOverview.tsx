import React from 'react';
import { Product } from '@/lib/types/inventory';

interface ProductOverviewProps {
  product: Product;
}

export const ProductOverview: React.FC<ProductOverviewProps> = ({ product }) => {
  return (
    <div className="p-6 bg-white border border-slate-200 rounded-lg">
      <h2 className="text-xl font-bold text-slate-900">{product.name}</h2>
      <p className="text-sm text-slate-500 mb-4">{product.brand} | {product.category}</p>
      <p className="text-slate-700">{product.description}</p>
    </div>
  );
};
