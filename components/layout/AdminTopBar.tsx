import React from 'react';
import Image from 'next/image';

export const AdminTopBar: React.FC = () => {
  return (
    <header className="sticky top-0 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-none flex justify-between items-center h-16 px-6 z-40 transition-all duration-200">
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:text-blue-700 transition-colors focus:outline-none flex items-center justify-center">
          <span className="material-symbols-outlined">menu_open</span>
        </button>
        <h1 className="text-lg font-extrabold text-blue-900">
          Operations Center
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:text-blue-700 transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 shrink-0">
          <Image 
            alt="User Avatar" 
            className="object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5AbP5tYNwKufEjLG-ypUaiXfGFD_6N8fxsYxUW4iJ7dolzNheGEYhZUT7rfgBUVLckgg9Kk4I6Vqiz-vvq7XSXGu9or2CnNUBXRqUpSN5mdutrds_4J7_8b8XBlvIiYtJEppK4fKKO_ypwg-pipcv0W0fARGcKRG9mLfhw5S_sO9BDNF7mT0p0qBrQ1wX2tWwrrBgL1z9CgFpaa68VDHrCsFbtO5IjP7NXNJY0zmvb3A2yoVhJ35Di0dc8BP19P1WIAIV7mZi_hM"
            fill
          />
        </div>
      </div>
    </header>
  );
};
