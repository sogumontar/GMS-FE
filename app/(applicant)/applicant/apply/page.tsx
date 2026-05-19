import React from 'react';
import { ApplicationForm } from '@/components/features/ApplicationForm';

export default function ApplyPage() {
  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <h2 className="text-4xl font-bold text-[#002147] mb-2">Formulir Pendaftaran</h2>
        <p className="text-lg text-gray-600">Harap isi data diri dan pilih formasi tujuan Anda dengan saksama. Pastikan data sesuai dengan dokumen resmi.</p>
      </div>
      <ApplicationForm />
    </div>
  );
}
