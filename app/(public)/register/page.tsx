import React from 'react';
import { RegistrationForm } from '@/components/features/RegistrationForm';

export default function RegistrationPage() {
  return (
    <div className="w-full max-w-[1280px] mx-auto py-12 px-5 md:px-16 flex flex-col items-center">
      {/* Page Intent / Header */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#002147] mb-4">Pendaftaran Akun</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Sistem seleksi calon aparatur sipil negara. Pastikan seluruh data kependudukan yang Anda masukkan valid dan sesuai dengan dokumen resmi yang diterbitkan oleh pemerintah.</p>
      </div>

      {/* Stepper Visual */}
      <div className="w-full max-w-3xl mb-12 relative px-4">
        <div className="absolute left-0 top-5 w-full h-1 bg-gray-200 z-0 rounded-full"></div>
        <div className="absolute left-0 top-5 w-1/3 h-1 bg-[#002147] z-0 rounded-full transition-all duration-500"></div>
        <div className="relative z-10 flex justify-between items-start">
          <div className="flex flex-col items-center gap-3 w-1/3">
            <div className="w-10 h-10 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold ring-4 ring-white shadow-sm">1</div>
            <span className="text-sm font-semibold text-[#002147] text-center">Pengecekan Identitas</span>
          </div>
          <div className="flex flex-col items-center gap-3 w-1/3">
            <div className="w-10 h-10 rounded-full bg-white text-gray-400 border-2 border-gray-300 flex items-center justify-center font-bold ring-4 ring-white">2</div>
            <span className="text-sm font-semibold text-gray-400 text-center opacity-80">Lengkapi Biodata</span>
          </div>
          <div className="flex flex-col items-center gap-3 w-1/3">
            <div className="w-10 h-10 rounded-full bg-white text-gray-400 border-2 border-gray-300 flex items-center justify-center font-bold ring-4 ring-white">3</div>
            <span className="text-sm font-semibold text-gray-400 text-center opacity-80">Konfirmasi</span>
          </div>
        </div>
      </div>

      {/* Form Card Container */}
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl p-6 md:p-12 shadow-sm text-left">
        <div className="mb-10 pb-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-[#002147] mb-2">Langkah 1: Identitas Kependudukan</h3>
          <p className="text-sm text-gray-600">Lengkapi data di bawah ini untuk proses verifikasi dengan database kependudukan nasional.</p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}
