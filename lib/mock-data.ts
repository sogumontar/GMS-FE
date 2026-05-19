import { Product, SalesRecord } from "./types/inventory";

export const PRODUCT_DATA: Product[] = [
  {
    id: "QPU-12-CORE-X",
    name: "Quantum Processor Unit 12-Core",
    category: "High-Performance Computing",
    description: "State-of-the-art 12-core processor for intensive computational tasks.",
    basePrice: 1200.00,
    stockLevel: 45,
    reorderPoint: 50,
    status: "ACTIVE",
    brand: "StitchCompute",
    imageUrl: "/stitch-assets/qpu-12.jpg",
    tags: ["processor", "computing"]
  },
  {
    id: "MTR-88-DISPLAY",
    name: "Matrix Display 88-inch",
    category: "Visual Hardware",
    description: "Ultra-high definition 88-inch display panel.",
    basePrice: 2500.00,
    stockLevel: 120,
    reorderPoint: 20,
    status: "ACTIVE",
    brand: "StitchVisual",
    imageUrl: "/stitch-assets/mtr-88.jpg",
    tags: ["display", "hardware"]
  }
];

export const SALES_HISTORY_DATA: SalesRecord[] = [
  {
    id: "#ORD-99821",
    productId: "QPU-12-CORE-X",
    date: "2026-05-15",
    customer: "Global Tech Corp",
    quantity: 5,
    status: "COMPLETED",
    totalAmount: 6000.00
  },
  {
    id: "#ORD-99825",
    productId: "QPU-12-CORE-X",
    date: "2026-05-18",
    customer: "Innovation Lab",
    quantity: 2,
    status: "PROCESSING",
    totalAmount: 2400.00
  }
];
