'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import { ProductForm } from '@/components/features/inventory/ProductForm';
import { INVENTORY_DATA } from '@/lib/mock-data';
import { Product } from '@/lib/types/inventory';
import { toast } from 'sonner';

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  const product = INVENTORY_DATA.find(p => p.id === id);

  if (!product) {
    return (
      <div className="p-8 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-on-background">Product Not Found</h2>
        <button 
          onClick={() => router.push('/admin/inventory')}
          className="mt-4 text-primary font-bold hover:underline"
        >
          Back to Inventory
        </button>
      </div>
    );
  }

  const handleSubmit = (data: Partial<Product>) => {
    // In a real app, this would be an API call
    console.log('Updating product:', data);
    toast.success('Product updated successfully');
    router.push(`/admin/inventory/${id}`);
  };

  const handleCancel = () => {
    router.push(`/admin/inventory/${id}`);
  };

  return (
    <div className="p-8 max-w-[1440px] mx-auto">
      <div className="mb-8 text-left">
        <h2 className="text-3xl font-bold text-on-background">Edit Product</h2>
        <p className="text-on-surface-variant mt-1">Update the details for product: <span className="font-bold">{product.name}</span></p>
      </div>
      
      <ProductForm 
        initialData={product}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isEditing
      />
    </div>
  );
}
