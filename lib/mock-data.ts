export const INVENTORY_DATA = [
  { id: '1', name: 'Laptop Pro 14', sku: 'LP14-001', quantity: 15, status: 'In Stock' },
  { id: '2', name: 'Wireless Mouse', sku: 'WM-002', quantity: 5, status: 'Low Stock' },
  { id: '3', name: 'Mechanical Keyboard', sku: 'MK-003', quantity: 0, status: 'Out of Stock' },
  { id: '4', name: 'Monitor 27 Inch', sku: 'MON27-004', quantity: 20, status: 'In Stock' },
  { id: '5', name: 'USB-C Hub', sku: 'HUB-005', quantity: 8, status: 'In Stock' },
];

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
  { label: 'Total Pelamar', value: '2.1M+', trend: '+12.5%', icon: 'group' },
  { label: 'Formasi Aktif', value: '12.500', trend: '+5.2%', icon: 'business_center' },
  { label: 'Instansi Terdaftar', value: '85', trend: '0%', icon: 'domain' },
];

export const ASSIGNEE_DATA = [
  { 
    id: 'ASG-001', 
    name: 'Johnathan Doe', 
    role: 'Senior Recruiter', 
    department: 'Talent Acquisition', 
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArGgRIqsTRNdCVfq_mKcZ2XfC5-hWNCAPQDmAz0TvG73nSF7nZ58TaVdg_IX5312bAqu3v-Sx2uR_Bnfm9xVvfeYjacpq0XPvph5eUP-n6hV27qH532W9jG3TsLI7iWWESliruG3ybuGKAOQkq6-I1vkL1rNomVqWrXCyItCthtdOc-VbM1lOgc7gS6a1ZXnVufVVrKYfCh88VousOP3H37ZuGh0jsQXnU0mA2nQ574yupA2pi87GR6nvYMCyVFEANrIaGg3Tnr9Y',
    workload: 3,
    maxWorkload: 5
  },
  { 
    id: 'ASG-002', 
    name: 'Sarah Reed', 
    role: 'Senior Recruiter', 
    department: 'Talent Acquisition', 
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2z15V-bDtv41CjnvHQ3XG7Vc36c6E4297vb7lfHCWYfdLbPYoDIg-h1SVAcVF1w8t9Q6hvxsJNuX-SSNeRLloGLQBzVN7qzwmuoulGugOlqv5qwqS-BQwK_bO7Cw-u_-WGBCt2ExTwvCG9fLqoOxvLT2G3_7yOYuZOSKFZwAWnVzqlPl88ZmRkPrCJ6lzqoKx3zLjWqeqgk30l2oWd4svMx4mRt8hTSgvFwYC-DItVrgfI0Fl_UqybAHRuKTaitXzcD4K3rfWr2A',
    workload: 3,
    maxWorkload: 5
  },
  { 
    id: 'ASG-003', 
    name: 'Marcus Kim', 
    role: 'Compliance Specialist', 
    department: 'HR Compliance', 
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKkwTWD2v1ZgKUagZBqyjHi2lkGOoehZoRRPLXtuQW6BzjCAKZ5CVdMot_MUlwXw3Ab3SL1HE6trn5B_Fg0s79_flEwOWtdfb2O9l244eAehvu7VU8XPTmIOnD3UaMVdZW2pxxxirdxwjATM-8SmE68rdhZbjhpJbORWVGgBAy8v22ydowAaSB_lL-iQifkXa3IKrQjoQh_yG2yNHRhFFFi7kHNN3y-BhBL0jIi2tpPBL4-oxCUO_1YHoVBWVHWQ6lJaUrr7cW3i8',
    workload: 5,
    maxWorkload: 5
  },
  { 
    id: 'ASG-004', 
    name: 'Anita Lee', 
    role: 'Administrative Officer', 
    department: 'Talent Acquisition', 
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-acE2-tzWlaKqijRYvgd42uMU041gvL92CmdPlFdeLA8AZUOENuuw3ziesrGa-w6vQEsIAvI3taPxtSPnNQlR5v0aZ9Xk0co6wJSDoCteXO71_W7mEG3Yi604NQYikC4Bm3SEjGEBFCVbTy5oUFmiuquEhcPl_OLk5U-K28bJe-jhZBFH_AaSYhg6Mwg13ARQhcqxqfmP7KaBofpTz3sWAW67iuKVzOvDkete8GGlxC4_Nh0C4p4pJkwIXT9RSF1Hvfq5K-Pxjpw',
    workload: 4,
    maxWorkload: 5
  },
];

export const TASK_DATA = [
  {
    id: 'REF-2023-0492',
    title: 'Verify Applicant Credentials',
    description: 'Review academic transcripts and professional certifications for Senior Urban Planner position.',
    status: 'OVERDUE',
    priority: 'HIGH',
    assigneeId: 'ASG-001',
    dueDate: '2023-10-12',
    createdDate: '2023-10-01',
    category: 'Credential Verification'
  },
  {
    id: 'REF-2023-0511',
    title: 'Final Interview Scheduling',
    description: 'Coordinate availability between the Department Head and the top 3 candidates for the Civil Engineer role.',
    status: 'IN_PROGRESS',
    priority: 'MEDIUM',
    assigneeId: 'ASG-002',
    dueDate: '2023-10-28',
    createdDate: '2023-10-15',
    category: 'Background Check'
  },
  {
    id: 'REF-2023-0524',
    title: 'Budgetary Approval Review',
    description: 'Review the financial allocation for the upcoming Q4 recruitment cycle across all departments.',
    status: 'OPEN',
    priority: 'LOW',
    assigneeId: 'ASG-003',
    dueDate: '2023-11-02',
    createdDate: '2023-10-20',
    category: 'Security Clearance'
  },
  {
    id: 'REF-2023-0488',
    title: 'Departmental Compliance Audit',
    description: 'Submit the monthly hiring compliance report to the Oversight Committee.',
    status: 'LATE',
    priority: 'HIGH',
    assigneeId: 'ASG-004',
    dueDate: '2023-10-05',
    createdDate: '2023-09-25',
    category: 'HR Audit'
  }
];
