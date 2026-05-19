"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { TASK_DATA, ASSIGNEE_DATA } from '@/lib/mock-data';
import { TaskCard } from '@/components/tasks/TaskCard';
import { FilterSelect } from '@/components/tasks/FilterSelect';

export default function TasksPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filteredTasks = TASK_DATA.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) || 
                          task.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === '' || task.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const remainingToday = TASK_DATA.filter(t => t.status !== 'COMPLETED').length;

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-primary">My Priority Tasks</h2>
          <p className="text-on-surface-variant mt-2">Manage and track your active recruitment workflows and administrative deadlines.</p>
        </div>
        <div className="flex gap-3">
          <FilterSelect 
            label="All Tasks"
            icon="filter_list"
            value={statusFilter}
            onChange={setStatusFilter}
            options={[
              { label: 'Due Soon', value: 'IN_PROGRESS' },
              { label: 'Overdue', value: 'OVERDUE' },
              { label: 'Late', value: 'LATE' },
              { label: 'Completed', value: 'COMPLETED' },
            ]}
          />
          <Link href="/admin/tasks/new">
            <button className="bg-secondary-container text-on-secondary-fixed font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-all shadow-sm">
              <span className="material-symbols-outlined">add_task</span>
              New Task
            </button>
          </Link>
        </div>
      </div>

      {/* Search and Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 bg-surface border border-outline-variant rounded-lg p-2 flex items-center">
          <span className="material-symbols-outlined px-3 text-on-surface-variant">search</span>
          <input 
            type="text"
            placeholder="Search tasks by title, applicant name, or reference ID..." 
            className="flex-1 border-none focus:ring-0 bg-transparent text-sm py-2 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-on-surface-variant bg-surface-container-low border border-outline-variant rounded-lg mr-2">
            <span className="text-[10px]">⌘</span>K
          </kbd>
        </div>
        <div className="bg-primary text-white p-4 rounded-lg flex items-center justify-between shadow-sm">
          <div>
            <p className="text-xs opacity-80">Remaining for Today</p>
            <p className="text-2xl font-bold">{String(remainingToday).padStart(2, '0')}</p>
          </div>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">pending_actions</span>
          </div>
        </div>
      </div>

      {/* Task Grid/List */}
      <div className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task as any} 
              assignee={ASSIGNEE_DATA.find(a => a.id === task.assigneeId) as any}
            />
          ))
        ) : (
          <div className="text-center py-20 bg-surface border border-dashed border-outline-variant rounded-lg">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">inbox</span>
            <p className="text-on-surface-variant">No tasks found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Footer Pagination / Load More */}
      <div className="flex flex-col items-center justify-center py-10 border-t border-outline-variant gap-4">
        <p className="text-xs text-on-surface-variant font-medium">
          Showing {filteredTasks.length} of {TASK_DATA.length} priority tasks
        </p>
        <button className="border-2 border-primary text-primary font-bold px-8 py-2 rounded hover:bg-primary-container hover:text-white transition-all focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          View All Tasks
        </button>
      </div>
    </div>
  );
}
