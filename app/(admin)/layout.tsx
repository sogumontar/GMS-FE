"use client";
import React, { useState } from 'react';
import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { AdminTopBar } from "@/components/layout/AdminTopBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-[#f8f9ff] min-h-screen relative overflow-x-hidden">
      {/* Sidebar Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar container with responsive behavior */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <AdminSidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-[260px] w-full transition-all duration-300">
        <AdminTopBar onMenuClick={toggleSidebar} />
        <main className="flex-1 p-4 md:p-8 w-full max-w-[1440px] mx-auto flex flex-col gap-4 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}
