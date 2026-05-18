'use client';

import React from 'react';
import { DataTable } from '@/components/ui/DataTable';
import { USER_DATA } from '@/lib/mock-data';
import { Badge } from '@/components/ui/Badge';

export default function UserManagementPage() {
  const columns = [
    { header: 'Full Name', accessor: 'name' as const },
    { header: 'Email', accessor: 'email' as const },
    { header: 'Role', accessor: 'role' as const },
    { 
      header: 'Status', 
      accessor: 'status' as const,
      render: (val: string) => {
        const variant = val === 'Active' ? 'success' : 'error';
        return <Badge variant={variant}>{val}</Badge>;
      }
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 text-left">
        <h2 className="text-3xl font-bold text-gray-900">User Management</h2>
        <p className="text-gray-500">Manage system users and their permissions.</p>
      </div>
      <DataTable columns={columns} data={USER_DATA} />
    </div>
  );
}
