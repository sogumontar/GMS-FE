import React from 'react';

export default function OperationCenterPage() {
  return (
    <div className="flex flex-col gap-8 text-left">
      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-bold text-gray-900">Operations Center</h2>
        <p className="text-gray-500">Monitor system performance and background tasks.</p>
      </div>
      
      <div className="bg-slate-900 text-slate-300 font-mono p-6 rounded-xl overflow-hidden shadow-lg border border-slate-800">
        <div className="flex items-center gap-2 mb-4 text-slate-500 border-b border-slate-800 pb-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs">system_logs.log</span>
        </div>
        <div className="space-y-1 text-sm">
          <p className="text-green-400">[INFO] 2024-05-18 10:24:01 System startup complete.</p>
          <p>[INFO] 2024-05-18 10:25:12 Database connection established.</p>
          <p className="text-blue-400">[DEBUG] 2024-05-18 10:26:05 Syncing with national registry...</p>
          <p className="text-green-400">[INFO] 2024-05-18 10:27:44 1.2M records processed successfully.</p>
          <p className="text-yellow-400">[WARN] 2024-05-18 10:30:11 Latency spike detected in API gateway.</p>
          <p>[INFO] 2024-05-18 10:35:00 Backup routine initialized.</p>
        </div>
      </div>
    </div>
  );
}
