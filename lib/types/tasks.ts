export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'COMPLETED' | 'OVERDUE' | 'LATE';
export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface Assignee {
  id: string;
  name: string;
  role: string;
  department: string;
  avatarUrl: string;
  workload: number;
  maxWorkload: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  assigneeId: string;
  dueDate: string;
  createdDate: string;
  category: string;
  tags: string[]; // Added tags property
}

export interface Attachment {
  id: string;
  name: string;
  size: string;
  type: string;
  url: string;
}

export interface Activity {
  id: string;
  taskId: string;
  userId: string;
  action: string;
  timestamp: string;
}
