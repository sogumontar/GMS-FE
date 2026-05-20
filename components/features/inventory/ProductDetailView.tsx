import React from 'react';
import { Product } from '../../../lib/types/inventory';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';

interface ProductDetailViewProps {
  product: Product;
  onEdit: () => void;
  onArchive: () => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onEdit,
  onArchive
}) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Breadcrumbs & Header Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="text-left">
          <nav className="flex items-center gap-1 text-on-surface-variant mb-2 text-xs font-medium">
            <span>Inventory</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-bold">Product Details</span>
          </nav>
          <h2 className="text-3xl font-bold text-on-background">{product.name}</h2>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onArchive} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">archive</span>
            Archive
          </Button>
          <Button onClick={onEdit} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">edit</span>
            Edit Product
          </Button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Product Overview Card */}
        <section className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm">
          <div className="w-full md:w-1/3 bg-surface-container p-6 flex items-center justify-center border-r border-outline-variant">
            <div className="relative group w-full aspect-square">
              {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded-lg shadow-md" />
              ) : (
                <div className="w-full h-full bg-surface-container-low rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-outline text-6xl">image</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex-1 p-6 flex flex-col justify-between text-left">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-flex items-center px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded text-[10px] mb-1 uppercase font-bold tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-bold text-on-background">{product.name}</h3>
                  <p className="font-mono text-xs text-on-surface-variant">SKU: {product.sku}</p>
                </div>
                <Badge variant={product.status === 'In Stock' ? 'success' : product.status === 'Low Stock' ? 'warning' : 'error'}>
                  {product.status}
                </Badge>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {product.description || 'No description available for this product. High-performance enterprise asset designed for reliability and efficiency.'}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant mt-6">
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase mb-1 font-bold">Category</p>
                <p className="text-sm font-semibold">{product.category}</p>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase mb-1 font-bold">Status</p>
                <p className="text-sm font-semibold">{product.status}</p>
              </div>
              <div>
                <p className="text-[10px] text-on-surface-variant uppercase mb-1 font-bold">ID</p>
                <p className="text-sm font-semibold font-mono">{product.id}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory Details Card */}
        <section className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col shadow-sm text-left">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary">analytics</span>
            <h3 className="text-xl font-bold text-on-background">Inventory Metrics</h3>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant/30">
              <p className="text-xs text-on-surface-variant mb-1 uppercase font-bold">Current Stock</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-primary">{product.stockLevel}</span>
                <span className="text-xs text-on-surface-variant mb-1 font-medium">units</span>
              </div>
              <div className="w-full bg-outline-variant/20 h-1.5 rounded-full mt-2 overflow-hidden">
                <div 
                  className={`h-full ${product.status === 'In Stock' ? 'bg-primary' : product.status === 'Low Stock' ? 'bg-secondary' : 'bg-error'}`} 
                  style={{ width: `${Math.min(100, (product.stockLevel / 500) * 100)}%` }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant mb-1 flex items-center gap-1 uppercase font-bold">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                Warehouse Location
              </p>
              <p className="text-sm font-semibold text-on-background">Warehouse A, Aisle 4, Shelf 12</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-on-surface-variant mb-1 uppercase font-bold">Unit Price</p>
                <p className="text-xl font-bold text-on-background">${product.price.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant mb-1 uppercase font-bold">Total Value</p>
                <p className="text-xl font-bold text-on-background">${(product.price * product.stockLevel).toLocaleString()}</p>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Manage Logistics
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
