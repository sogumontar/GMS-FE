import React from 'react';
import { PRODUCT_DATA, SALES_HISTORY_DATA } from '@/lib/mock-data';
import { ProductOverview } from '@/components/inventory/ProductOverview';
import { InventoryMetrics } from '@/components/inventory/InventoryMetrics';
import { SalesHistoryTable } from '@/components/inventory/SalesHistoryTable';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = PRODUCT_DATA.find(p => p.id === params.id);
  const sales = SALES_HISTORY_DATA.filter(s => s.productId === params.id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-slate-900">Product Detail</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ProductOverview product={product} />
          <SalesHistoryTable records={sales} />
        </div>
        <InventoryMetrics product={product} />
      </div>
    </div>
  );
}
