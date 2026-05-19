'use client';

import React from 'react';
import { DataTable } from '@/components/ui/DataTable';
import { INVENTORY_DATA } from '@/lib/mock-data';
import { Badge } from '@/components/ui/Badge';

export default function InventoryPage() {
  const columns = [
    { header: 'Product Name', accessor: 'name' as const },
    { header: 'SKU', accessor: 'sku' as const },
    { header: 'Quantity', accessor: 'quantity' as const },
    { 
      header: 'Status', 
      accessor: 'status' as const,
      render: (val: string) => {
        const variant = val === 'In Stock' ? 'success' : val === 'Low Stock' ? 'warning' : 'error';
        return <Badge variant={variant}>{val}</Badge>;
      }
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 text-left">
        <h2 className="text-3xl font-bold text-gray-900">Inventory Management</h2>
        <p className="text-gray-500">Track and manage your stock levels.</p>
      </div>
      <DataTable columns={columns} data={INVENTORY_DATA} />
    </div>
  );
}
