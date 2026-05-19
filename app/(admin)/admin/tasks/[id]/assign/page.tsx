"use client";

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { TASK_DATA, ASSIGNEE_DATA } from '@/lib/mock-data';
import { UserCard } from '@/components/tasks/UserCard';

export default function AssignTaskPage() {
  const router = useRouter();
  const { id } = useParams();
  const task = TASK_DATA.find(t => t.id === id);
  const [search, setSearch] = useState('');

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

  const filteredUsers = ASSIGNEE_DATA.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.role.toLowerCase().includes(search.toLowerCase()) ||
    user.department.toLowerCase().includes(search.toLowerCase())
  );

  const handleAssign = (userId: string) => {
    // Mocked assignment
    console.log(`Assigning task ${task.id} to user ${userId}`);
    router.push(`/admin/tasks/${task.id}`);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto w-full space-y-8">
      {/* Context Header */}
      <div className="p-6 bg-primary-container text-white rounded-xl flex items-center justify-between shadow-md">
        <div>
          <h1 className="text-2xl font-bold mb-1">Assign Task</h1>
          <div className="flex items-center gap-2 opacity-90 text-sm">
            <span className="material-symbols-outlined text-sm">info</span>
            <p>Assigning: <span className="font-bold text-secondary-fixed">{task.title} - {task.id}</span></p>
          </div>
        </div>
        <div className="hidden lg:block text-right">
          <p className="text-on-primary-container text-xs font-bold uppercase tracking-wider">Due Date</p>
          <p className="font-bold">{task.dueDate}</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
            person_search
          </span>
          <input 
            type="text"
            className="w-full pl-14 pr-6 py-5 bg-surface border border-outline-variant rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all shadow-sm"
            placeholder="Search team members by name, role, or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {['All Departments', 'Talent Acquisition', 'HR Compliance', 'Technical Assessment'].map(dept => (
            <span 
              key={dept}
              className="px-4 py-1.5 bg-surface-container text-on-surface-variant rounded-full text-xs font-bold border border-outline-variant/30 cursor-pointer hover:bg-surface-container-high transition-colors"
            >
              {dept}
            </span>
          ))}
        </div>
      </div>

      {/* User List */}
      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <UserCard 
            key={user.id} 
            user={user as any} 
            onAssign={handleAssign}
            isCurrentAssignee={task.assigneeId === user.id}
          />
        ))}
        {filteredUsers.length === 0 && (
          <div className="text-center py-20 bg-surface border border-dashed border-outline-variant rounded-lg">
            <p className="text-on-surface-variant italic">No team members found matching your search.</p>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="flex justify-between items-center pt-6 border-t border-outline-variant">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary font-bold hover:underline transition-all"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back to Task Details
        </button>
      </div>
    </div>
  );
}
