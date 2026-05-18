'use client';

import React from 'react';
import Link from 'next/link';
import { useMockAction } from '@/components/providers/MockProvider';
import { useRouter } from 'next/navigation';

export const RegistrationForm: React.FC = () => {
  const mockAction = useMockAction();
  const router = useRouter();

  const handleContinue = () => {
    mockAction('Data identitas berhasil diverifikasi!', () => {
      router.push('/admin/dashboard');
    });
  };

  return (
    <form className="space-y-8">
      {/* KTP Data Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700">Nomor Induk Kependudukan (NIK)</label>
          <input className="w-full border border-gray-300 rounded-lg p-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" maxLength={16} placeholder="16 digit NIK KTP" type="text" />
          <span className="text-xs text-gray-500 flex items-center gap-1"><span className="material-symbols-outlined text-base">info</span>Sesuai dengan KTP Anda</span>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700">Nomor Kartu Keluarga (KK)</label>
          <input className="w-full border border-gray-300 rounded-lg p-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" maxLength={16} placeholder="16 digit Nomor KK" type="text" />
          <span className="text-xs text-gray-500 flex items-center gap-1"><span className="material-symbols-outlined text-base">info</span>Tertera di bagian atas Kartu Keluarga</span>
        </div>
      </div>
      {/* Full Name */}
      <div className="flex flex-col gap-3">
        <label className="text-sm font-semibold text-gray-700">Nama Lengkap (Sesuai KTP)</label>
        <input className="w-full border border-gray-300 rounded-lg p-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" placeholder="Masukkan nama lengkap tanpa gelar" type="text" />
        <div className="bg-gray-50 p-3 rounded border border-gray-200 mt-1">
          <p className="text-xs text-gray-600 leading-relaxed"><strong>Perhatian:</strong> Masukkan nama persis seperti yang tertera di KTP. Kesalahan penulisan nama dapat menyebabkan kegagalan proses verifikasi administrasi.</p>
        </div>
      </div>
      {/* Birth Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700">Tempat Lahir (Sesuai KTP)</label>
          <input className="w-full border border-gray-300 rounded-lg p-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" placeholder="Setingkat Kabupaten/Kota" type="text" />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700">Tanggal Lahir</label>
          <div className="relative">
            <input className="w-full border border-gray-300 rounded-lg p-4 pr-12 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" type="date" />
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-200 w-full my-6"></div>
      <h4 className="text-xl font-bold text-[#002147] mb-4">Informasi Kontak & Akun</h4>
      {/* Contact Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700">Nomor Handphone Aktif</label>
          <div className="relative flex items-center">
            <div className="absolute left-0 top-0 bottom-0 px-4 bg-gray-50 border-r border-gray-300 rounded-l-lg flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-600">+62</span>
            </div>
            <input className="w-full border border-gray-300 rounded-lg p-4 pl-16 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" placeholder="81234567890" type="tel" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700">Alamat Email Aktif</label>
          <input className="w-full border border-gray-300 rounded-lg p-4 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" placeholder="contoh@email.go.id" type="email" />
        </div>
      </div>
      {/* Password Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700">Kata Sandi</label>
          <div className="relative">
            <input className="w-full border border-gray-300 rounded-lg p-4 pr-12 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" placeholder="Minimal 8 karakter" type="password" />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#002147] focus:outline-none" type="button">
              <span className="material-symbols-outlined">visibility_off</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-semibold text-gray-700">Konfirmasi Kata Sandi</label>
          <div className="relative">
            <input className="w-full border border-gray-300 rounded-lg p-4 pr-12 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" placeholder="Ulangi kata sandi" type="password" />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#002147] focus:outline-none" type="button">
              <span className="material-symbols-outlined">visibility_off</span>
            </button>
          </div>
        </div>
      </div>
      {/* Action Area */}
      <div className="pt-8 mt-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link className="text-sm font-semibold text-[#002147] hover:underline transition-colors flex items-center gap-2" href="/">
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          Kembali ke Beranda
        </Link>
        <button 
          className="w-full md:w-auto px-8 py-4 bg-[#fed65b] text-[#002147] font-bold rounded-lg hover:bg-[#e9c349] focus:outline-none focus:ring-2 focus:ring-[#002147] transition-all flex items-center justify-center gap-3" 
          type="button"
          onClick={handleContinue}
        >
          Lanjutkan
          <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </button>
      </div>
    </form>
  );
};
