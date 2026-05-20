import React from 'react';
import Image from 'next/image';
import { Assignee, Task } from '@/lib/types/tasks';
import { TaskBadge } from './TaskBadge';

interface TaskDetailSidebarProps {
  task: Task;
  assignee?: Assignee;
}

export const TaskDetailSidebar: React.FC<TaskDetailSidebarProps> = ({ task, assignee }) => {
  return (
    <div className="space-y-8">
      {/* Assignee Section */}
      <div className="bg-surface border border-outline-variant p-6 rounded-xl">
        <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Assignee</h3>
        {assignee ? (
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-outline-variant">
              {assignee.avatarUrl && ( // Only render Image if avatarUrl exists
                              <Image
                                src={assignee.avatarUrl}
                                alt={assignee.name}
                                fill
                                className="object-cover"
                              />
                            )}
            </div>
            <div>
              <p className="font-bold text-primary">{assignee.name}</p>
              <p className="text-xs text-on-surface-variant">{assignee.role}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-on-surface-variant italic">Unassigned</p>
        )}
        <button className="w-full mt-4 py-2 border border-primary text-primary text-xs font-bold rounded hover:bg-primary hover:text-white transition-all uppercase tracking-widest">
          Change Assignee
        </button>
      </div>

      {/* Metadata Section */}
      <div className="bg-surface border border-outline-variant p-6 rounded-xl space-y-4">
        <div>
          <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Status</p>
          <TaskBadge type="status" value={task.status} />
        </div>
        <div>
          <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Priority</p>
          <TaskBadge type="priority" value={task.priority} />
        </div>
        <div>
          <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Due Date</p>
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            <span>{task.dueDate}</span>
          </div>
        </div>
        <div>
          <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Category</p>
          <p className="text-sm font-semibold text-primary">{task.category}</p>
        </div>
      </div>
    </div>
  );
};
