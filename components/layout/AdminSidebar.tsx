import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const AdminSidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 w-[260px] h-screen border-r border-slate-200 bg-white flex flex-col z-50">
      <div className="px-6 py-6 border-b border-slate-200 flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200">
          <Image 
            alt="Admin User Profile" 
            className="object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlyPV9oHpvF3bbGJKLuLEsWHwlDTD7LG80tiqJKMyIPvEMBWMdMz-fCUWXxJjPzYwQ7Y4a8P9eNYvjzOCAmSYjJzjZHTNh4VZwgnwS7Uw3Jesq6p2X4flmOyJHtvR4C0-82EBNILtWrws325HJBDyqxdKpUz87xjLYXCqBn06QyIFctsibM_TwPfXc8rwRKWjE8V-7oz3cDtlBUXk1CFqhoJh3QV79ScdRnRyQ_Mv3RsBoiEmME8mMYhCU61J_38is9EH-dlLC3do"
            fill
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-xl font-bold text-slate-900 truncate">Admin Console</span>
          <span className="text-sm font-medium text-slate-500 truncate">Operations Manager</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4 flex flex-col">
        <Link className="border-l-[3px] border-blue-900 bg-slate-50 text-blue-900 font-bold px-4 py-3 flex items-center gap-3 transition-colors" href="/admin/dashboard">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-sm">Dashboard</span>
        </Link>
        <Link className="text-slate-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors" href="/admin/operations">
          <span className="material-symbols-outlined">analytics</span>
          <span className="text-sm font-medium">Operations</span>
        </Link>
        <Link className="text-slate-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors" href="/admin/inventory">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-sm font-medium">Inventory</span>
        </Link>
        <Link className="text-slate-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors" href="/admin/users">
          <span className="material-symbols-outlined">group</span>
          <span className="text-sm font-medium">User Management</span>
        </Link>
        <Link className="text-slate-600 px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-sm font-medium">System Settings</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-slate-200 text-center">
        <span className="text-xs text-slate-400">v2.4.0</span>
      </div>
    </aside>
  );
};
