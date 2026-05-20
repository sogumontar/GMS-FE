export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stockLevel: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  imageUrl?: string;
  description?: string;
}

export interface InventoryMetric {
  totalProducts: number;
  lowStockAlerts: number;
  outOfStock: number;
  totalValue: number; // Assuming this is a numerical value for currency
}
