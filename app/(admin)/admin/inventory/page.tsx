'use client';

import React, { useMemo } from 'react';
import { DataTable } from '@/components/ui/DataTable';
import { INVENTORY_DATA } from '@/lib/mock-data';
import { InventoryOverview } from '@/components/features/inventory/InventoryOverview';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function InventoryPage() {
  const router = useRouter();

  const metrics = useMemo(() => {
    return {
      totalProducts: INVENTORY_DATA.length,
      lowStockAlerts: INVENTORY_DATA.filter(item => item.status === 'Low Stock').length,
      outOfStock: INVENTORY_DATA.filter(item => item.status === 'Out of Stock').length,
      totalValue: INVENTORY_DATA.reduce((sum, item) => sum + item.price * item.stockLevel, 0)
    };
  }, []);

  const handleRowClick = (item: any) => {
    router.push(`/admin/inventory/${item.id}`);
  };

  const handleAddProduct = () => {
    router.push('/admin/inventory/new');
  };

  const columns = [
    { 
      header: 'Product & SKU', 
      accessor: 'name' as const,
      render: (_: any, item: any) => (
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-surface border border-outline-variant flex-shrink-0 flex items-center justify-center overflow-hidden">
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
            ) : (
              <span className="material-symbols-outlined text-outline">image</span>
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-on-surface">{item.name}</span>
            <span className="text-xs text-outline font-mono uppercase tracking-tight">SKU: {item.sku}</span>
          </div>
        </div>
      )
    },
    { header: 'Category', accessor: 'category' as const },
    { 
      header: 'Unit Price', 
      accessor: 'price' as const,
      align: 'right' as const,
      render: (val: number) => <span className="font-mono text-on-surface">${val.toFixed(2)}</span>
    },
    { 
      header: 'Stock Level', 
      accessor: 'stockLevel' as const,
      align: 'right' as const,
      render: (val: number) => (
        <div className="flex items-center justify-end gap-2">
          <span className={`font-medium ${val === 0 ? 'text-error' : val < 20 ? 'text-on-secondary-container' : 'text-on-surface'}`}>
            {val}
          </span>
          <div className="w-16 h-1.5 bg-surface-variant rounded-full overflow-hidden flex-shrink-0">
            <div 
              className={`h-full rounded-full ${val === 0 ? 'bg-error' : val < 20 ? 'bg-secondary-container' : 'bg-primary-container'}`} 
              style={{ width: `${Math.min(100, (val / 500) * 100)}%` }}
            ></div>
          </div>
        </div>
      )
    },
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
    <div className="flex flex-col gap-8 p-8 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-on-background">Inventory Management</h2>
          <p className="text-on-surface-variant mt-1">Manage your product catalog, track stock levels across warehouses, and monitor SKU velocity.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export CSV
          </Button>
          <Button onClick={handleAddProduct} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Add Product
          </Button>
        </div>
      </div>

      {/* Summary Bento Grid */}
      <InventoryOverview metrics={metrics} />

      {/* Main Data Table Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col overflow-hidden">
        {/* Table Controls Header */}
        <div className="p-6 border-b border-outline-variant flex flex-col md:flex-row gap-4 items-center justify-between bg-surface-bright">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
            <input 
              className="w-full pl-10 pr-4 py-2 border border-outline-variant rounded-lg bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-sm text-on-surface outline-none transition-all" 
              placeholder="Search by product name, SKU..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <select className="px-4 py-2 border border-outline-variant rounded-lg bg-surface-container-lowest text-sm text-on-surface-variant outline-none appearance-none cursor-pointer">
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Peripherals">Peripherals</option>
              <option value="Storage">Storage</option>
            </select>
            <select className="px-4 py-2 border border-outline-variant rounded-lg bg-surface-container-lowest text-sm text-on-surface-variant outline-none appearance-none cursor-pointer">
              <option value="">Status: All</option>
              <option value="in-stock">In Stock</option>
              <option value="low-stock">Low Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Table Container */}
        <DataTable 
          columns={columns} 
          data={INVENTORY_DATA} 
          onRowClick={handleRowClick}
        />

        {/* Pagination Placeholder */}
        <div className="p-4 border-t border-outline-variant flex items-center justify-between text-on-surface-variant">
          <span className="text-xs">Showing 1 to {INVENTORY_DATA.length} of {INVENTORY_DATA.length} entries</span>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" disabled>
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </Button>
            <span className="text-sm font-bold bg-primary-container text-on-primary-container w-8 h-8 rounded-lg flex items-center justify-center">1</span>
            <Button variant="ghost" size="sm" disabled>
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
