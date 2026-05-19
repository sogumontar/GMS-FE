import React from 'react';

export default function ApplicantDashboard() {
  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <h1 className="text-4xl font-bold text-[#002147] mb-2">Halo, Ahmad!</h1>
        <p className="text-gray-600">Pantau status pendaftaran PPPK Anda di sini.</p>
      </div>
      
      {/* Bento Grid Layout Shell */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-white rounded-xl border border-gray-200 p-6 h-96 animate-pulse" />
        <div className="md:col-span-4 bg-white rounded-xl border border-gray-200 p-6 h-96 animate-pulse" />
      </div>
    </div>
  );
}
