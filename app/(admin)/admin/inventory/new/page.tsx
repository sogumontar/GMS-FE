'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ProductForm } from '@/components/features/inventory/ProductForm';
import { Product } from '@/lib/types/inventory';
import { toast } from 'sonner';

export default function NewProductPage() {
  const router = useRouter();

  const handleSubmit = (data: Partial<Product>) => {
    // In a real app, this would be an API call
    console.log('Creating product:', data);
    toast.success('Product created successfully');
    router.push('/admin/inventory');
  };

  const handleCancel = () => {
    router.push('/admin/inventory');
  };

  return (
    <div className="p-8 max-w-[1440px] mx-auto">
      <div className="mb-8 text-left">
        <h2 className="text-3xl font-bold text-on-background">Add New Product</h2>
        <p className="text-on-surface-variant mt-1">Enter the details to create a new inventory entry in the system.</p>
      </div>
      
      <ProductForm 
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}
