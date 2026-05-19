"use client";

import React, { useState } from 'react';
import { Priority, Task } from '@/lib/types/tasks';

interface TaskFormProps {
  initialData?: Partial<Task>;
  onSubmit: (data: Partial<Task>) => void;
  onCancel: () => void;
  submitLabel?: string;
}

export const TaskForm: React.FC<TaskFormProps> = ({ 
  initialData, 
  onSubmit, 
  onCancel,
  submitLabel = 'Create Task'
}) => {
  const [formData, setFormData] = useState<Partial<Task>>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    priority: initialData?.priority || 'MEDIUM',
    dueDate: initialData?.dueDate || '',
    category: initialData?.category || 'General',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-primary mb-1">Task Title</label>
          <input 
            type="text"
            required
            className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary outline-none"
            placeholder="e.g., Verify Applicant Credentials"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-1">Description</label>
          <textarea 
            rows={4}
            required
            className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
            placeholder="Provide detailed instructions for this task..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-primary mb-1">Category</label>
            <input 
              type="text"
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary outline-none"
              placeholder="e.g., Background Check"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-1">Due Date</label>
            <input 
              type="date"
              required
              className="w-full px-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary outline-none"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-3">
          <span className="block text-sm font-bold text-primary">Priority Level</span>
          <div className="flex w-full border-2 border-outline-variant bg-surface-container rounded-lg overflow-hidden">
            {(['LOW', 'MEDIUM', 'HIGH'] as Priority[]).map((p) => (
              <label key={p} className="flex-1 text-center cursor-pointer group">
                <input 
                  type="radio" 
                  name="priority" 
                  value={p}
                  className="sr-only peer"
                  checked={formData.priority === p}
                  onChange={() => setFormData({ ...formData, priority: p })}
                />
                <div className="py-3 text-sm font-bold text-on-surface-variant peer-checked:bg-primary-container peer-checked:text-white transition-all group-hover:bg-surface-variant">
                  {p}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-6 border-t border-outline-variant">
        <button 
          type="button"
          onClick={onCancel}
          className="flex-1 px-8 py-4 text-sm font-bold uppercase tracking-widest border-2 border-outline-variant rounded-lg hover:bg-surface-container transition-all"
        >
          Cancel
        </button>
        <button 
          type="submit"
          className="flex-1 px-8 py-4 text-sm font-extrabold uppercase tracking-widest bg-secondary-container text-on-secondary-container rounded-lg shadow-sm active:scale-95 transition-all"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
};
