'use client';

import React from 'react';
import { useMockAction } from '@/components/providers/MockProvider';
import { useRouter } from 'next/navigation';

export const ApplicationForm: React.FC = () => {
  const mockAction = useMockAction();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mockAction('Formulir pendaftaran berhasil disimpan!', () => {
      router.push('/applicant/dashboard');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-left">
      {/* Section 1: Biodata */}
      <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
          <span className="material-symbols-outlined text-[#002147]">person_check</span>
          <h3 className="text-xl font-bold text-[#002147]">Informasi Biodata</h3>
        </div>
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="gelar_depan">Gelar Depan <span className="text-gray-500 font-normal text-xs">(Opsional)</span></label>
            <input className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-900 focus:ring-1 focus:ring-[#002147] outline-none" id="gelar_depan" placeholder="Contoh: Dr., Prof." type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="gelar_belakang">Gelar Belakang <span className="text-gray-500 font-normal text-xs">(Opsional)</span></label>
            <input className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-900 focus:ring-1 focus:ring-[#002147] outline-none" id="gelar_belakang" placeholder="Contoh: S.Kom., M.Si." type="text" />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-gray-700">Jenis Kelamin</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-3 p-4 border border-gray-200 rounded cursor-pointer hover:border-[#002147] flex-1">
                <input className="w-4 h-4 text-[#002147]" name="jenis_kelamin" type="radio" value="pria" />
                <span className="text-sm text-gray-900">Pria</span>
              </label>
              <label className="flex items-center gap-3 p-4 border border-gray-200 rounded cursor-pointer hover:border-[#002147] flex-1">
                <input className="w-4 h-4 text-[#002147]" name="jenis_kelamin" type="radio" value="wanita" />
                <span className="text-sm text-gray-900">Wanita</span>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="agama">Agama</label>
            <select className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-900 focus:ring-1 focus:ring-[#002147] outline-none bg-white" id="agama">
              <option disabled selected value="">Pilih Agama</option>
              <option value="islam">Islam</option>
              <option value="kristen">Kristen</option>
              <option value="katolik">Katolik</option>
              <option value="hindu">Hindu</option>
              <option value="buddha">Buddha</option>
              <option value="konghucu">Konghucu</option>
            </select>
          </div>
        </div>
      </section>

      {/* Section 2: Pemilihan Formasi */}
      <section className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3">
          <span className="material-symbols-outlined text-[#002147]">work</span>
          <h3 className="text-xl font-bold text-[#002147]">Pemilihan Formasi</h3>
        </div>
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="instansi">Instansi Tujuan</label>
            <select className="w-full border border-gray-300 rounded px-4 py-3 text-sm text-gray-900 focus:ring-1 focus:ring-[#002147] outline-none bg-white" id="instansi">
              <option disabled selected value="">Pilih Instansi...</option>
              <option value="kemenkeu">Kementerian Keuangan</option>
              <option value="kemdikbud">Kementerian Pendidikan dan Kebudayaan</option>
              <option value="kemenkes">Kementerian Kesehatan</option>
            </select>
          </div>
        </div>
      </section>

      <div className="flex justify-end gap-4">
        <button type="button" className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50">Simpan Draft</button>
        <button type="submit" className="px-6 py-3 bg-[#002147] text-white rounded-lg font-bold hover:bg-[#001b3d]">Kirim Pendaftaran</button>
      </div>
    </form>
  );
};
