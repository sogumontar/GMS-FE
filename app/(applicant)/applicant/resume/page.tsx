import React from 'react';

export default function FinalResumePage() {
  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <h2 className="text-4xl font-bold text-[#002147] mb-2">Resume Pendaftaran</h2>
        <p className="text-lg text-gray-600">Periksa kembali seluruh data Anda sebelum melakukan konfirmasi akhir.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-6 shadow-sm">
        <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
          <span className="material-symbols-outlined text-[#002147]">fact_check</span>
          <h3 className="text-xl font-bold text-[#002147]">Ringkasan Data</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-32 bg-gray-50 rounded-lg animate-pulse" />
          <div className="h-32 bg-gray-50 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  );
}
