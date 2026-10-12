import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Selamat Datang di Company Kami</h1>
        <p className="text-xl mb-8">Solusi Digital Terbaik untuk Pertumbuhan Bisnis Anda</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
          Pelajari Selengkapnya
        </button>
      </section>

      {/* About Brief */}
      <section className="max-w-5xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6">Tentang Kami</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Kami adalah perusahaan inovatif yang bergerak di bidang teknologi dan solusi bisnis. 
          Fokus kami adalah membantu transformasi digital perusahaan Anda agar lebih berkembang, 
          efisien, dan siap bersaing di era modern.
        </p>
         <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Tahun Berdiri: Didirikan pada tahun 2016 di jakarta indonesia. Saat ini, operasional dan manufaktur utamanya 
            berbasis di jakrta pusat, kemayoran, sebagai perusahaan teknologi multinasional
         </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            FOKUS LAYANAN JASA KAMI: pembuatan brending website usaha/bisnis mengembangkan Ios di dalam
            iklan gooegle ads, meta ads,
          </p>
      </section>
    </div>
  );
}
