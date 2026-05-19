'use client';

import React from 'react';
import { MetricCard } from '@/components/features/MetricCard';
import { DASHBOARD_METRICS, APPLICATION_DATA } from '@/lib/mock-data';
import { DataTable } from '@/components/ui/DataTable';
import { Badge } from '@/components/ui/Badge';

export default function AdminDashboard() {
  const columns = [
    { header: 'Type', accessor: 'type' as const },
    { header: 'Submitted At', accessor: 'submittedAt' as const },
    { 
      header: 'Status', 
      accessor: 'status' as const,
      render: (val: string) => {
        const variant = val === 'Submitted' ? 'success' : val === 'Draft' ? 'info' : 'warning';
        return <Badge variant={variant}>{val}</Badge>;
      }
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 text-left">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-500">Real-time metrics and system operations.</p>
      </div>
      
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DASHBOARD_METRICS.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      {/* Recent Applications */}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-gray-900 text-left">Recent Applications</h3>
        <DataTable columns={columns} data={APPLICATION_DATA} />
      </div>
    </div>
  );
}
