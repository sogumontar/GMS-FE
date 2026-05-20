'use client';

import React, { use } from 'react';
import { useRouter } from 'next/navigation';
import { ProductDetailView } from '@/components/features/inventory/ProductDetailView';
import { INVENTORY_DATA } from '@/lib/mock-data';
import { toast } from 'sonner';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  const product = INVENTORY_DATA.find(p => p.id === id);

  if (!product) {
    return (
      <div className="p-8 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <span className="material-symbols-outlined text-6xl text-outline mb-4">inventory_2</span>
        <h2 className="text-2xl font-bold text-on-background">Product Not Found</h2>
        <p className="text-on-surface-variant mt-2">The product you are looking for does not exist or has been removed.</p>
        <button 
          onClick={() => router.push('/admin/inventory')}
          className="mt-6 text-primary font-bold hover:underline"
        >
          Back to Inventory
        </button>
      </div>
    );
  }

  const handleEdit = () => {
    router.push(`/admin/inventory/${id}/edit`);
  };

  const handleArchive = () => {
    // In a real app, this would be an API call
    toast.info('Product archived successfully');
    router.push('/admin/inventory');
  };

  return (
    <div className="p-8 max-w-[1440px] mx-auto">
      <ProductDetailView 
        product={product}
        onEdit={handleEdit}
        onArchive={handleArchive}
      />
    </div>
  );
}
