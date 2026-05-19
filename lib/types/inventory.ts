export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  basePrice: number;
  stockLevel: number;
  reorderPoint: number;
  status: 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
  brand: string;
  imageUrl: string;
  tags: string[];
}

export interface SalesRecord {
  id: string;
  productId: string;
  date: string;
  customer: string;
  quantity: number;
  status: 'COMPLETED' | 'PROCESSING' | 'REFUNDED';
  totalAmount: number;
}
