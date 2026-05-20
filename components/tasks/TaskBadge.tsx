import React from 'react';
import { TaskStatus, Priority } from '@/lib/types/tasks';

interface TaskBadgeProps {
  type: 'status' | 'priority' | 'category';
  value: string;
}

export const TaskBadge: React.FC<TaskBadgeProps> = ({ type, value }) => {
  const getStyles = () => {
    if (type === 'status') {
      switch (value) {
        case 'OVERDUE':
        case 'LATE':
          return 'bg-error-container text-on-error-container';
        case 'COMPLETED':
          return 'bg-green-100 text-green-800';
        case 'IN_PROGRESS':
          return 'bg-blue-100 text-blue-800';
        default:
          return 'bg-surface-container text-on-surface-variant';
      }
    }
    
    if (type === 'priority') {
      switch (value) {
        case 'HIGH':
          return 'bg-error-container text-on-error-container font-bold';
        case 'MEDIUM':
          return 'bg-secondary-container text-on-secondary-fixed-variant';
        case 'LOW':
          return 'bg-surface-container text-on-surface-variant';
        default:
          return 'bg-surface-container text-on-surface-variant';
      }
    }

    // Default for category or others
    return 'bg-primary-container text-on-primary-fixed';
  };

  return (
    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${getStyles()}`}>
      {value.replace('_', ' ')}
    </span>
  );
};
