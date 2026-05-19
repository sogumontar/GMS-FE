"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const AdminSidebar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/admin/operations', label: 'Operations', icon: 'analytics' },
    { href: '/admin/inventory', label: 'Inventory Management', icon: 'inventory_2' },
    { href: '/admin/users', label: 'User Management', icon: 'group' },
    { href: '/admin/tasks', label: 'Tasks', icon: 'assignment_ind' },
    { href: '#', label: 'System Settings', icon: 'settings' },
  ];

  return (
    <aside className="w-[260px] h-screen border-r border-slate-200 bg-white flex flex-col">
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
        {navItems.map((item) => {
          const isActive = item.href !== '#' && (pathname === item.href || pathname.startsWith(item.href + '/'));
          return (
            <Link 
              key={item.href}
              className={`${
                isActive 
                  ? "border-l-[3px] border-blue-900 bg-slate-50 text-blue-900 font-bold" 
                  : "text-slate-600 hover:bg-slate-50"
              } px-4 py-3 flex items-center gap-3 transition-colors`} 
              href={item.href}
            >
              <span 
                className="material-symbols-outlined" 
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className={`text-sm ${isActive ? "" : "font-medium"}`}>{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-200 text-center">
        <span className="text-xs text-slate-400">v2.4.0</span>
      </div>
    </aside>
  );
};
