import React from 'react';
import Image from 'next/image';
import { Assignee } from '@/lib/types/tasks';
import { WorkloadBar } from '../ui/WorkloadBar';

interface UserCardProps {
  user: Assignee;
  onAssign: (userId: string) => void;
  isCurrentAssignee?: boolean;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onAssign, isCurrentAssignee }) => {
  return (
    <div className="group bg-surface border border-outline-variant p-5 rounded-xl flex flex-col md:flex-row md:items-center gap-6 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
          <Image 
            src={user.avatarUrl} 
            alt={user.name} 
            fill 
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-primary leading-tight">{user.name}</h3>
          <p className="text-sm text-on-surface-variant font-medium">{user.role}</p>
          <p className="text-xs text-on-surface-variant opacity-60 mt-0.5">{user.department}</p>
        </div>
      </div>
      
      <div className="flex-1 max-w-xs">
        <WorkloadBar current={user.workload} max={user.maxWorkload} />
      </div>

      <div className="flex items-center gap-3">
        {isCurrentAssignee ? (
          <span className="px-6 py-2 bg-slate-100 text-slate-500 font-bold rounded-lg text-sm border border-slate-200">
            Currently Assigned
          </span>
        ) : (
          <button 
            onClick={() => onAssign(user.id)}
            disabled={user.workload >= user.maxWorkload}
            className="px-8 py-3 bg-secondary-container text-on-secondary-container font-bold rounded-lg hover:brightness-95 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            Assign
          </button>
        )}
      </div>
    </div>
  );
};
