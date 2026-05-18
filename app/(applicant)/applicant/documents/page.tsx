import React from 'react';

export default function DocumentUploadPage() {
  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <h2 className="text-4xl font-bold text-[#002147] mb-2">Unggah Dokumen</h2>
        <p className="text-lg text-gray-600">Unggah dokumen persyaratan sesuai dengan ketentuan yang berlaku.</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-8 h-96 flex items-center justify-center border-dashed">
        <div className="flex flex-col items-center gap-4 text-gray-400">
          <span className="material-symbols-outlined text-6xl">cloud_upload</span>
          <p className="font-semibold">Klik atau seret dokumen di sini</p>
        </div>
      </div>
    </div>
  );
}
