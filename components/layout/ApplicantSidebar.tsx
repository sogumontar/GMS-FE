import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const ApplicantSidebar: React.FC = () => {
  return (
    <aside className="bg-[#f3f3f3] text-[#002147] h-full w-72 border-r border-outline-variant fixed left-0 top-0 z-40 hidden md:flex flex-col">
      <div className="p-6 border-b border-outline-variant flex flex-col items-start gap-4">
        <div className="flex items-center gap-3 w-full">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-outline-variant">
            <Image 
              alt="User Profile Picture" 
              className="object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2dDIbkzOHC1XIKKXVnN2KWO6E-PBZI7x35xfcs20Tl8NtrZn0zIwWb3P9k6SO22iCH5XJZyjqQutkshAZy3trkAi9kYv-wOOeLDwrQh0Ip_9goovL_B4CO33P61Agtu9AxPV7IB8uuCyP3uleQftIQhfO4o5VmMNk83oNMzXbLFdau0tHbGexb42p0v4yqQDLHvvkuGwwHASr7GPU-UuqyoiEnAUmlLLxtY3p6dj_kcNSvQqzu79_Gka4UQ6wZV2U_pWBRmY36g0"
              fill
            />
          </div>
          <div>
            <h2 className="text-[#002147] font-bold text-lg leading-tight">Ahmad Sudrajat</h2>
            <p className="text-gray-600 text-xs">Pelamar Umum</p>
          </div>
        </div>
        <p className="text-gray-600 text-xs">NIP: 198502...</p>
      </div>
      <nav className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto">
        <Link className="bg-[#fed65b] text-[#002147] font-bold rounded-lg px-4 py-3 mx-2 my-1 flex items-center gap-4" href="/applicant/dashboard">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          Dashboard
        </Link>
        <Link className="text-gray-700 px-4 py-3 mx-2 my-1 flex items-center gap-4 hover:bg-gray-200 rounded-lg transition-all" href="#">
          <span className="material-symbols-outlined">person</span>
          Biodata
        </Link>
        <Link className="text-gray-700 px-4 py-3 mx-2 my-1 flex items-center gap-4 hover:bg-gray-200 rounded-lg transition-all" href="/applicant/apply">
          <span className="material-symbols-outlined">edit_note</span>
          Pendaftaran
        </Link>
        <Link className="text-gray-700 px-4 py-3 mx-2 my-1 flex items-center gap-4 hover:bg-gray-200 rounded-lg transition-all" href="/applicant/documents">
          <span className="material-symbols-outlined">cloud_upload</span>
          Dokumen
        </Link>
        <Link className="text-gray-700 px-4 py-3 mx-2 my-1 flex items-center gap-4 hover:bg-gray-200 rounded-lg transition-all" href="/applicant/resume">
          <span className="material-symbols-outlined">description</span>
          Resume
        </Link>
      </nav>
    </aside>
  );
};
