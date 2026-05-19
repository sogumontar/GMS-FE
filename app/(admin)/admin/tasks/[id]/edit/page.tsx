"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { TASK_DATA } from '@/lib/mock-data';
import { TaskForm } from '@/components/tasks/TaskForm';
import { Task } from '@/lib/types/tasks';

export default function EditTaskPage() {
  const router = useRouter();
  const { id } = useParams();
  const task = TASK_DATA.find(t => t.id === id);

  if (!task) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-primary">Task not found</h2>
        <button onClick={() => router.back()} className="text-primary hover:underline mt-4">
          Go back
        </button>
      </div>
    );
  }

  const handleSubmit = (data: Partial<Task>) => {
    // Mocked update
    console.log('Updating task:', task.id, data);
    router.push(`/admin/tasks/${task.id}`);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto w-full space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-primary">Edit Task</h2>
        <p className="text-on-surface-variant mt-2">
          Update the metadata and instructions for this task.
        </p>
      </div>

      <div className="bg-surface border border-outline-variant p-8 rounded-xl shadow-sm">
        <TaskForm 
          initialData={task as any}
          onSubmit={handleSubmit} 
          onCancel={() => router.back()}
          submitLabel="Save Changes"
        />
      </div>
    </div>
  );
}
