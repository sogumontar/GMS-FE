import React from 'react';
import { ProductForm } from '@/components/inventory/ProductForm';
import { ProductImageUpload } from '@/components/inventory/ProductImageUpload';

export default function AddProductPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Add New Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductForm />
        <ProductImageUpload />
      </div>
    </div>
  );
}
