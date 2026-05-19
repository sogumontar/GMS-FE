import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-6xl font-bold text-[#002147] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Maaf, halaman yang Anda cari belum tersedia di prototype ini atau telah dipindahkan.
      </p>
      <Link 
        href="/" 
        className="bg-[#002147] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#001b3d] transition-colors"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
