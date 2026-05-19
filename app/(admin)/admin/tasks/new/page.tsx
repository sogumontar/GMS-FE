"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { TaskForm } from '@/components/tasks/TaskForm';
import { Task } from '@/lib/types/tasks';

export default function NewTaskPage() {
  const router = useRouter();

  const handleSubmit = (data: Partial<Task>) => {
    // In a real app, we would call an API here.
    // For this prototype, we'll just log and redirect.
    console.log('Creating new task:', data);
    router.push('/admin/tasks');
  };

  return (
    <div className="p-8 max-w-3xl mx-auto w-full space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-primary">Create New Task</h2>
        <p className="text-on-surface-variant mt-2">
          Initiate a new recruitment workflow task and assign it to a team member.
        </p>
      </div>

      <div className="bg-surface border border-outline-variant p-8 rounded-xl shadow-sm">
        <TaskForm 
          onSubmit={handleSubmit} 
          onCancel={() => router.push('/admin/tasks')}
        />
      </div>
    </div>
  );
}
