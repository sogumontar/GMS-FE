import { Product, InventoryMetric } from './types/inventory'; // Added Product and InventoryMetric import
import { Task } from './types/tasks'; // Assuming Task is also defined in types/tasks

export const USER_DATA = [
  { id: '1', name: 'Ahmad Sudrajat', email: 'ahmad@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Siti Aminah', email: 'siti@example.com', role: 'Viewer', status: 'Active' },
  { id: '3', name: 'Budi Santoso', email: 'budi@example.com', role: 'Editor', status: 'Inactive' },
  { id: '4', name: 'Dewi Lestari', email: 'dewi@example.com', role: 'Admin', status: 'Active' },
];

export const APPLICATION_DATA = [
  { id: '1', type: 'PPPK Teknis', submittedAt: '2024-08-20', status: 'Submitted' },
  { id: '2', type: 'CPNS Umum', submittedAt: '2024-08-22', status: 'Draft' },
  { id: '3', type: 'PPPK Kesehatan', submittedAt: '2024-08-24', status: 'Under Review' },
];
export const DASHBOARD_METRICS = [
  { label: 'Total Pelamar', value: '2.2M+', trend: '+12.5%', icon: 'group' },
  { label: 'Formasi Aktif', value: '12.500', trend: '+5.2%', icon: 'business_center' },
  { label: 'Instansi Terdaftar', value: '85', trend: '0%', icon: 'domain' },
];

export const INVENTORY_DATA: Product[] = [
  {
    id: "prod-001",
    name: "Wireless Mechanical Keyboard",
    sku: "KB-WRL-84",
    category: "Peripherals",
    price: 129.99,
    stockLevel: 450,
    status: "In Stock",
    imageUrl: "/stitch-assets/keyboard.png",
    description: "A high-quality wireless mechanical keyboard with tactile switches and customizable RGB backlighting."
  },
  {
    id: "prod-002",
    name: "Ergonomic Wireless Mouse",
    sku: "MS-ERG-02",
    category: "Peripherals",
    price: 79.99,
    stockLevel: 12,
    status: "Low Stock",
    imageUrl: "/stitch-assets/mouse.png",
    description: "An ergonomic wireless mouse designed for comfort during long work sessions, featuring adjustable DPI settings."
  },
  {
    id: "prod-003",
    name: "27 4K Professional Monitor",
    sku: "MN-4K-27P",
    category: "Electronics",
    price: 499.00,
    stockLevel: 0,
    status: "Out of Stock",
    imageUrl: "/stitch-assets/monitor.png",
    description: "A 27-inch 4K professional monitor with excellent color accuracy and a sleek, minimalist design."
  },
  {
    id: "prod-004",
    name: "USB-C Docking Station",
    sku: "AC-DK-USBC",
    category: "Accessories",
    price: 149.50,
    stockLevel: 89,
    status: "In Stock",
    imageUrl: "/stitch-assets/dock.png",
    description: "A versatile USB-C docking station providing multiple ports for enhanced connectivity."
  },
  {
    id: "prod-005",
    name: "Noise Cancelling Headphones",
    sku: "AU-NC-HP",
    category: "Electronics",
    price: 299.99,
    stockLevel: 25,
    status: "In Stock",
    imageUrl: "/stitch-assets/headphones.png",
    description: "Premium noise cancelling headphones with long battery life and superior sound quality."
  },
  {
    id: "prod-006",
    name: "Smart Watch Series 5",
    sku: "WT-SM-S5",
    category: "Electronics",
    price: 399.00,
    stockLevel: 8,
    status: "Low Stock",
    imageUrl: "/stitch-assets/watch.png",
    description: "Advanced smart watch with health tracking features and a vibrant always-on display."
  },
  {
    id: "prod-007",
    name: "Leather Laptop Sleeve",
    sku: "AC-LS-13",
    category: "Accessories",
    price: 45.00,
    stockLevel: 120,
    status: "In Stock",
    imageUrl: "/stitch-assets/sleeve.png",
    description: "Genuine leather laptop sleeve providing stylish protection for 13-inch laptops."
  },
  {
    id: "prod-008",
    name: "Portable SSD 1TB",
    sku: "ST-SS-1T",
    category: "Storage",
    price: 119.99,
    stockLevel: 0,
    status: "Out of Stock",
    imageUrl: "/stitch-assets/ssd.png",
    description: "Compact and fast portable SSD with 1TB capacity, perfect for high-speed data transfer."
  }
];

// Placeholder for Inventory Metrics - will be calculated dynamically
export const INITIAL_INVENTORY_METRICS: InventoryMetric = {
  totalProducts: INVENTORY_DATA.length,
  lowStockAlerts: INVENTORY_DATA.filter(item => item.status === 'Low Stock').length,
  outOfStock: INVENTORY_DATA.filter(item => item.status === 'Out of Stock').length,
  totalValue: INVENTORY_DATA.reduce((sum, item) => {
    return sum + item.price * item.stockLevel;
  }, 0)
};

// Mock data for Task Management
// Ensure sufficient data for task pages if styling fixes are needed.
// For example, include tasks with different statuses and assignees.
export const TASK_DATA: Task[] = [ // Added Task type annotation
  {
    id: "task-001",
    title: "Onboard New Applicant",
    description: "Complete onboarding process for the new candidate.",
    status: "IN_PROGRESS",
    priority: "HIGH",
    dueDate: "2024-07-20T10:00:00Z",
    assigneeId: "assignee-001",
    createdDate: "2024-05-20T10:00:00Z",
    category: "Recruitment",
    tags: ["onboarding", "HR"]
  },
  {
    id: "task-002",
    title: "Review Candidate CV",
    description: "Review the CV of the latest applicant for the Senior Developer role.",
    status: "COMPLETED",
    priority: "MEDIUM",
    dueDate: "2024-07-18T14:30:00Z",
    assigneeId: "assignee-002",
    createdDate: "2024-05-20T10:00:00Z",
    category: "Recruitment",
    tags: ["recruitment", "CV"]
  },
  {
    id: "task-003",
    title: "Prepare Q3 Performance Report",
    description: "Compile data and prepare the quarterly performance report.",
    status: "OVERDUE",
    priority: "HIGH",
    dueDate: "2024-07-15T17:00:00Z",
    assigneeId: "assignee-001",
    createdDate: "2024-05-20T10:00:00Z",
    category: "Recruitment",
    tags: ["reporting", "finance"]
  },
  {
    id: "task-004",
    title: "Schedule Team Meeting",
    description: "Schedule the weekly team sync meeting for next Monday.",
    status: "LATE",
    priority: "LOW",
    dueDate: "2024-07-19T09:00:00Z",
    assigneeId: "assignee-003",
    createdDate: "2024-05-20T10:00:00Z",
    category: "Recruitment",
    tags: ["meeting", "scheduling"]
  },
  {
    id: "task-005",
    title: "Update Inventory Policy",
    description: "Revise the company inventory management policy for the upcoming year.",
    status: "OPEN",
    priority: "MEDIUM",
    dueDate: "2024-07-25T11:00:00Z",
    assigneeId: "assignee-002",
    createdDate: "2024-05-20T10:00:00Z",
    category: "Recruitment",
    tags: ["policy", "inventory"]
  }
];

export const ASSIGNEE_DATA = [
  {
    id: "assignee-001",
    name: "Alice Johnson",
    role: "HR Manager",
    department: "HRD"
  },
  {
    id: "assignee-002",
    name: "Bob Williams",
    role: "Recruiter",
    department: "HRD"
  },
  {
    id: "assignee-003",
    name: "Charlie Brown",
    role: "Team Lead",
    department: "Technology"
  }
];
