import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Task, Assignee } from '@/lib/types/tasks';
import { TaskBadge } from './TaskBadge';

interface TaskCardProps {
  task: Task;
  assignee?: Assignee;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, assignee }) => {
  const isOverdue = task.status === 'OVERDUE' || task.status === 'LATE';

  return (
    <div className={`group bg-surface border ${isOverdue ? 'border-error-container border-2' : 'border-outline-variant'} p-6 rounded-lg flex flex-col md:flex-row md:items-center gap-6 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5 relative overflow-hidden`}>
      {isOverdue && <div className="absolute left-0 top-0 bottom-0 w-1 bg-error" />}
      
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <TaskBadge type="status" value={task.status} />
          <span className="text-[12px] text-on-surface-variant font-medium">{task.id}</span>
        </div>
        <Link href={`/admin/tasks/${task.id}`}>
          <h3 className="text-xl font-bold text-primary group-hover:text-primary-container transition-colors">
            {task.title}
          </h3>
        </Link>
        <p className="text-sm text-on-surface-variant mt-1 line-clamp-2">
          {task.description}
        </p>
      </div>

      <div className="flex flex-col md:items-end gap-3 min-w-[200px]">
        {assignee && (
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
              <Image 
                src={assignee.avatarUrl} 
                alt={assignee.name} 
                fill 
                className="object-cover"
              />
            </div>
            <span className="text-sm font-semibold text-on-surface">{assignee.name}</span>
          </div>
        )}
        <div className={`flex items-center gap-2 ${isOverdue ? 'text-error font-bold' : 'text-on-surface-variant'}`}>
          <span className="material-symbols-outlined text-[20px]">
            {isOverdue ? 'event_busy' : 'calendar_today'}
          </span>
          <span className="text-sm">Due: {task.dueDate}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-lg transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
    </div>
  );
};
