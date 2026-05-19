import React from 'react';
import Link from 'next/link';

export const PublicHeader: React.FC = () => {
  return (
    <header className="bg-surface border-b border-outline-variant w-full top-0 z-50">
      <div className="flex justify-between items-center w-full px-5 md:px-16 py-4 max-w-[1280px] mx-auto">
        <Link href="/" className="flex items-center gap-4 hover:bg-gray-100 transition-colors p-2 rounded">
          <span className="material-symbols-outlined text-[#002147]" style={{ fontVariationSettings: "'FILL' 0" }}>account_balance</span>
          <h1 className="text-2xl font-bold text-[#002147]">Portal Pengadaan PPPK</h1>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <Link className="text-gray-600 font-semibold hover:bg-gray-100 transition-colors px-2 py-1 rounded" href="/">Beranda</Link>
            <Link className="text-gray-600 font-semibold hover:bg-gray-100 transition-colors px-2 py-1 rounded" href="#">Alur</Link>
            <Link className="text-gray-600 font-semibold hover:bg-gray-100 transition-colors px-2 py-1 rounded" href="#">FAQ</Link>
          </nav>
          <div className="flex gap-4 items-center">
            <Link className="hidden md:block font-semibold text-[#002147] border-2 border-[#002147] px-4 py-2 rounded hover:bg-gray-50" href="#">Masuk</Link>
            <Link className="hidden md:block font-bold bg-[#fed65b] text-[#002147] px-4 py-2 rounded hover:opacity-90 transition-opacity" href="/register">Daftar</Link>
            <button className="hover:bg-gray-100 transition-colors p-2 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-[#002147]" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
