import React, { useState } from 'react';
import { Product } from '../../../lib/types/inventory';
import { Button } from '../../ui/Button';

interface ProductFormProps {
  initialData?: Partial<Product>;
  onSubmit: (data: Partial<Product>) => void;
  onCancel: () => void;
  isEditing?: boolean;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isEditing = false
}) => {
  const [formData, setFormData] = useState<Partial<Product>>(initialData || {
    name: '',
    sku: '',
    category: '',
    price: 0,
    stockLevel: 0,
    description: '',
    status: 'In Stock'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    let processedValue: string | number = value;
    if (name === 'price' || name === 'stockLevel') {
      processedValue = value === '' ? 0 : parseFloat(value);
    }

    setFormData(prev => {
      const updated = {
        ...prev,
        [name]: processedValue
      };
      
      // Auto-update status based on stock level if it's not manually changed
      if (name === 'stockLevel') {
        const stock = processedValue as number;
        if (stock === 0) {
          updated.status = 'Out of Stock';
        } else if (stock < 20) {
          updated.status = 'Low Stock';
        } else {
          updated.status = 'In Stock';
        }
      }
      
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-8">
      {/* Left Column: Details */}
      <div className="col-span-12 lg:col-span-8 space-y-8">
        {/* General Information Card */}
        <section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-outline-variant pb-4">
            <span className="material-symbols-outlined text-primary">description</span>
            <h3 className="text-xl font-bold text-on-surface">General Information</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-on-surface mb-2">Product Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-outline-variant px-4 py-2 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                type="text" 
                placeholder="e.g. Wireless Mechanical Keyboard"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-on-surface mb-2">SKU</label>
              <div className="relative">
                <input 
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  className={`w-full border border-outline-variant px-4 py-2 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all ${isEditing ? 'bg-surface-container-low cursor-not-allowed text-outline' : ''}`} 
                  type="text" 
                  placeholder="KB-WRL-84"
                  readOnly={isEditing}
                  required
                />
                {isEditing && <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">lock</span>}
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-on-surface mb-2">Category</label>
              <select 
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-outline-variant px-4 py-2 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all cursor-pointer"
                required
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Peripherals">Peripherals</option>
                <option value="Accessories">Accessories</option>
                <option value="Storage">Storage</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-on-surface mb-2">Product Description</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-outline-variant px-4 py-2 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" 
                rows={6}
                placeholder="Enter detailed product description..."
              />
            </div>
          </div>
        </section>

        {/* Pricing & Logistics Card */}
        <section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-outline-variant pb-4">
            <span className="material-symbols-outlined text-primary">payments</span>
            <h3 className="text-xl font-bold text-on-surface">Pricing & Logistics</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-on-surface mb-2">Base Price (USD)</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">$</span>
                <input 
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full border border-outline-variant pl-8 pr-4 py-2 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  type="number" 
                  step="0.01"
                  min="0"
                  required
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-on-surface mb-2">In-Stock Quantity</label>
              <input 
                name="stockLevel"
                value={formData.stockLevel}
                onChange={handleChange}
                className="w-full border border-outline-variant px-4 py-2 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                type="number" 
                min="0"
                required
              />
            </div>
            <div className="col-span-2 flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">info</span>
                <span className="text-sm text-on-surface-variant">Status is automatically updated based on stock level.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold">Current Status:</span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                  formData.status === 'In Stock' ? 'bg-primary-container text-on-primary-container' : 
                  formData.status === 'Low Stock' ? 'bg-secondary-container text-on-secondary-container' : 
                  'bg-error-container text-on-error-container'
                }`}>
                  {formData.status}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column: Media & Actions */}
      <div className="col-span-12 lg:col-span-4 space-y-8">
        {/* Actions Card */}
        <section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-on-surface mb-6 border-b border-outline-variant pb-4">Actions</h3>
          <div className="flex flex-col gap-3">
            <Button type="submit" className="w-full flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">save</span>
              {isEditing ? 'Save Changes' : 'Create Product'}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel} className="w-full">
              Cancel
            </Button>
          </div>
        </section>

        {/* Media Card */}
        <section className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 mb-6 border-b border-outline-variant pb-4">
            <span className="material-symbols-outlined text-primary">image</span>
            <h3 className="text-xl font-bold text-on-surface">Product Media</h3>
          </div>
          <div className="aspect-square w-full rounded-lg bg-surface-container-low border border-outline-variant overflow-hidden mb-4 flex items-center justify-center relative group">
            {formData.imageUrl ? (
              <>
                <img src={formData.imageUrl} alt="Product preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button type="button" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">zoom_in</span>
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setFormData(prev => ({ ...prev, imageUrl: '' }))}
                    className="w-10 h-10 rounded-full bg-error text-on-error flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </>
            ) : (
              <span className="material-symbols-outlined text-outline text-6xl">image</span>
            )}
          </div>
          <button type="button" className="w-full border-2 border-dashed border-outline-variant py-8 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-surface-container-low transition-colors text-on-surface-variant group">
            <span className="material-symbols-outlined text-[32px] group-hover:text-primary transition-colors">cloud_upload</span>
            <span className="text-sm font-medium">Upload New Image</span>
            <span className="text-xs">JPG, PNG or WEBP (Max 5MB)</span>
          </button>
        </section>
      </div>
    </form>
  );
};
