import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full relative bg-gray-50 py-16 md:py-24 border-b border-gray-200 flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-[#002147] to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1280px] px-5 md:px-16 mx-auto text-center flex flex-col items-center gap-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-[#002147] bg-opacity-5 text-[#002147] border border-[#002147] border-opacity-20 rounded-full px-4 py-1 text-xs uppercase tracking-wider mb-2 font-medium">Tahun Anggaran 2024</span>
            <h2 className="text-4xl md:text-6xl font-bold text-[#002147]">Portal Rekrutmen ASN/PPPK</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Sistem seleksi calon Aparatur Sipil Negara yang transparan, akuntabel, dan terintegrasi. Temukan formasi yang sesuai dengan kualifikasi pendidikan Anda dan mulai pengabdian untuk negeri.</p>
          </div>
          
          {/* Search Formation Card */}
          <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl p-6 md:p-8 mt-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="material-symbols-outlined text-[#002147]" style={{ fontVariationSettings: "'FILL' 1" }}>search</span>
              <h3 className="text-2xl font-bold text-[#002147]">Cari Formasi</h3>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-5 flex flex-col gap-2 text-left">
                <label className="text-sm font-semibold text-gray-700" htmlFor="tingkat-pendidikan">Tingkat Pendidikan</label>
                <div className="relative">
                  <select className="w-full appearance-none bg-white border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" id="tingkat-pendidikan">
                    <option disabled selected value="">Pilih Tingkat Pendidikan</option>
                    <option value="s1">S-1 / D-IV</option>
                    <option value="d3">D-III</option>
                    <option value="sma">SMA / Sederajat</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">arrow_drop_down</span>
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col gap-2 text-left">
                <label className="text-sm font-semibold text-gray-700" htmlFor="program-studi">Program Studi</label>
                <div className="relative">
                  <input className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147] placeholder:text-gray-400" id="program-studi" placeholder="Ketik Program Studi..." type="text" />
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col justify-end">
                <button className="w-full bg-[#fed65b] text-[#002147] font-bold py-3 px-4 rounded-md hover:bg-[#e9c349] transition-colors focus:outline-none focus:ring-2 focus:ring-[#002147] flex items-center justify-center gap-2" type="button">
                  <span>Cari</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Information / Stats Banner */}
      <section className="w-full bg-[#002147] text-white py-12 border-b border-gray-200">
        <div className="w-full max-w-[1280px] px-5 md:px-16 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white divide-opacity-20">
          <div className="flex flex-col items-center gap-2 pt-4 md:pt-0">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>business_center</span>
            <h4 className="text-4xl font-bold">12.500+</h4>
            <p className="text-sm opacity-90">Formasi Tersedia</p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-4 md:pt-0">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>domain</span>
            <h4 className="text-4xl font-bold">85</h4>
            <p className="text-sm opacity-90">Instansi Pusat & Daerah</p>
          </div>
          <div className="flex flex-col items-center gap-2 pt-4 md:pt-0">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 0" }}>how_to_reg</span>
            <h4 className="text-4xl font-bold">2.1M+</h4>
            <p className="text-sm opacity-90">Pelamar Terdaftar</p>
          </div>
        </div>
      </section>

      {/* Latest Announcements Section */}
      <section className="w-full max-w-[1280px] px-5 md:px-16 mx-auto py-16 md:py-24 flex flex-col gap-12">
        <div className="flex justify-between items-end border-b border-gray-200 pb-4">
          <div className="flex flex-col gap-2 text-left">
            <h2 className="text-3xl font-bold text-[#002147]">Pengumuman Terbaru</h2>
            <p className="text-sm text-gray-600">Informasi resmi terkini seputar proses rekrutmen.</p>
          </div>
          <Link className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#002147] hover:underline" href="#">
            Lihat Semua <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <article className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group hover:border-[#002147] transition-colors">
            <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
              <Image 
                alt="Gedung pemerintahan" 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1CWZ8ozeCJ8rpLt2mjIG_kGK-zIEHR1L49pSssx5VYFXBehJKVZ66d8XSZ7TXyS07Nu3M-Wkjc82jkTZB6gl0byBiAGQ8dTok1kOwa0Fq97j0Vl9p7YX9NidFLAS_DkJCv7O7WwqVKo4nBn31FUg7fYPtLuo8Gjy23tutVBEm3N71vNRgUqUYDKQJTx_wyQPtqqNVEYhM_hlQnZqI2WgFKm_UgJ8mstTqTyf3RT3kZhGt8r-Z-TiROYmHXp9jAiiVkgp2jBpvznw"
                fill
              />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-grow text-left">
              <span className="inline-block self-start bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">24 Agustus 2024</span>
              <h3 className="text-xl font-bold text-[#002147] line-clamp-2">
                <Link className="focus:outline-none" href="#">Jadwal Pelaksanaan SKD CPNS Tahun 2024 Resmi Dirilis</Link>
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Badan Kepegawaian Negara secara resmi telah mengumumkan jadwal pelaksanaan Seleksi Kompetensi Dasar (SKD) untuk seluruh instansi pusat dan daerah.</p>
              <Link className="text-sm font-semibold text-[#002147] mt-2 group-hover:underline flex items-center gap-1" href="#">Baca selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
          </article>
          {/* Card 2 */}
          <article className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group hover:border-[#002147] transition-colors">
            <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
              <Image 
                alt="Dokumen dan pulpen" 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBnrNm3fegz9ZQdWhLLRiRDnd9uyRl6UDzdwdSMZgv3RBtyMuXR75HdCkwDbz2EXGaVM52SBIaTV6ObtuBdKLKYnHuvx3pT3ksd6tm_SCKflXorKgO01GaqwzIcOZUqlWmycET1KVaCwmqjvgkkAEsEMsTP2ES9au_BfKBQVCicBwQxrFz160xw0x4KwtrV8OL_sV7EZz2UF9p7wCnAnOEKpV0QtUDYXOt5CnCVcTwVs2F9LUi4Ut5HUM2ewuVZo14VIH1qKYVk-Y"
                fill
              />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-grow text-left">
              <span className="inline-block self-start bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">22 Agustus 2024</span>
              <h3 className="text-xl font-bold text-[#002147] line-clamp-2">
                <Link className="focus:outline-none" href="#">Panduan Lengkap Unggah Dokumen Persyaratan PPPK Teknis</Link>
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Hindari kesalahan fatal dalam pemberkasan. Berikut adalah panduan resmi spesifikasi dan format dokumen yang wajib diunggah pelamar.</p>
              <Link className="text-sm font-semibold text-[#002147] mt-2 group-hover:underline flex items-center gap-1" href="#">Baca selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
          </article>
          {/* Card 3 */}
          <article className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group hover:border-[#002147] transition-colors">
            <div className="h-48 w-full bg-gray-100 relative overflow-hidden">
              <Image 
                alt="Orang bekerja di depan laptop" 
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3327wEQPXtV0XRBsYyOj1iP3Xg4S2OtkVOWijOyVPec2J7jIn2PRet4OpjYAal9ppjOIwQ6NkXP0nr0WSNUV520Oey2WDRriP5XgV7z96UGTuBj3RXUHH5MCIEHPbZBxGlNkZbHKInYG_H46vH10nC-AcT37AtnufoxOdsakicrJ8dCMu50Peh4hi3rgz02-tyZ-rElH_wd6Ze56g7VvGGyx4G9a3CYagElJLhv2Y7WPyIzK6abo0_58Lj8Di6J94AMpDYw34dQQ"
                fill
              />
            </div>
            <div className="p-6 flex flex-col gap-4 flex-grow text-left">
              <span className="inline-block self-start bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">20 Agustus 2024</span>
              <h3 className="text-xl font-bold text-[#002147] line-clamp-2">
                <Link className="focus:outline-none" href="#">Penyesuaian Passing Grade SKD untuk Formasi Khusus</Link>
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3 flex-grow">Kementerian PANRB menetapkan kebijakan penyesuaian nilai ambang batas bagi pelamar jalur formasi khusus disabilitas dan putra/putri Papua.</p>
              <Link className="text-sm font-semibold text-[#002147] mt-2 group-hover:underline flex items-center gap-1" href="#">Baca selengkapnya <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
            </div>
          </article>
        </div>
        <Link className="md:hidden flex items-center justify-center gap-2 text-sm font-semibold text-[#002147] border border-gray-200 rounded py-3 mt-4 hover:bg-gray-50" href="#">
          Lihat Semua Pengumuman
        </Link>
      </section>
    </div>
  );
}
