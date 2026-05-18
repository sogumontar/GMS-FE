import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002147] w-full py-12 px-5 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-outline-variant mt-auto text-white">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Portal Pengadaan PPPK</h2>
          <p className="text-sm opacity-80">© 2024 Badan Kepegawaian Negara. Seluruh Hak Cipta Dilindungi.</p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-6">
          <Link className="text-sm opacity-80 hover:opacity-100 hover:text-[#e9c349] transition-opacity" href="#">Kebijakan Privasi</Link>
          <Link className="text-sm opacity-80 hover:opacity-100 hover:text-[#e9c349] transition-opacity" href="#">Syarat & Ketentuan</Link>
          <Link className="text-sm opacity-80 hover:opacity-100 hover:text-[#e9c349] transition-opacity" href="#">Bantuan (FAQ)</Link>
          <Link className="text-sm opacity-80 hover:opacity-100 hover:text-[#e9c349] transition-opacity" href="#">Kontak Kami</Link>
        </nav>
      </div>
    </footer>
  );
};
