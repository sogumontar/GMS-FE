"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { TASK_DATA, ASSIGNEE_DATA } from '@/lib/mock-data';
import { TaskDetailSidebar } from '@/components/tasks/TaskDetailSidebar';
import { AttachmentList } from '@/components/tasks/AttachmentList';

export default function TaskDetailPage() {
  const { id } = useParams();
  const task = TASK_DATA.find(t => t.id === id);
  const assignee = ASSIGNEE_DATA.find(a => a.id === task?.assigneeId);

  if (!task) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-primary">Task not found</h2>
        <Link href="/admin/tasks" className="text-primary hover:underline mt-4 inline-block">
          Back to tasks
        </Link>
      </div>
    );
  }

  // Mocked data for detail view
  const attachments = [
    { id: '1', name: 'Academic_Transcript_REF_0492.pdf', size: '2.4 MB', type: 'PDF', url: '#' },
    { id: '2', name: 'Professional_Certification_Planner.png', size: '1.2 MB', type: 'PNG', url: '#' },
  ];

  const activities = [
    { id: '1', action: 'Task created', timestamp: 'Oct 01, 2023 at 10:15 AM', user: 'Admin' },
    { id: '2', action: 'Assigned to Johnathan Doe', timestamp: 'Oct 01, 2023 at 10:20 AM', user: 'Admin' },
    { id: '3', action: 'Status updated to Overdue', timestamp: 'Oct 12, 2023 at 12:00 AM', user: 'System' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/admin/tasks">
            <button className="p-2 hover:bg-surface-container rounded-full transition-all">
              <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
            </button>
          </Link>
          <div>
            <h2 className="text-3xl font-bold text-primary">{task.title}</h2>
            <p className="text-on-surface-variant font-medium">{task.id}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href={`/admin/tasks/${task.id}/assign`}>
            <button className="px-6 py-2 border border-primary text-primary font-bold rounded hover:bg-slate-50 transition-all uppercase text-xs tracking-widest">
              Assign Task
            </button>
          </Link>
          <Link href={`/admin/tasks/${task.id}/edit`}>
            <button className="px-6 py-2 bg-primary text-white font-bold rounded hover:bg-primary-container transition-all uppercase text-xs tracking-widest">
              Edit Task
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Description */}
          <section className="bg-surface border border-outline-variant p-8 rounded-xl shadow-sm">
            <h3 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Description</h3>
            <p className="text-on-surface leading-relaxed whitespace-pre-wrap">
              {task.description}
            </p>
          </section>

          {/* Attachments */}
          <section>
            <AttachmentList attachments={attachments} />
          </section>

          {/* Activity Log */}
          <section className="bg-surface border border-outline-variant p-8 rounded-xl shadow-sm">
            <h3 className="text-sm font-bold text-primary mb-6 uppercase tracking-wider">Activity Log</h3>
            <div className="space-y-6">
              {activities.map((activity) => (
                <div key={activity.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mt-1"></div>
                    <div className="flex-1 w-0.5 bg-outline-variant mt-2"></div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">{activity.action}</p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      {activity.timestamp} • {activity.user}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <TaskDetailSidebar task={task as any} assignee={assignee as any} />
        </div>
      </div>
    </div>
  );
}
