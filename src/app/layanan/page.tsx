import React from 'react';
import Image from 'next/image';

export default function EnhancedLayananPage() {
  const listLayanan = [
    { 
      gambar: '/layanan1.png', // Path ke folder public/web-dev.jpg
      tag: 'Development',
      nama: 'Pengembangan Web Premium', 
      deskripsi: 'Pembuatan website profil perusahaan, e-commerce, dan web apps kustom menggunakan Next.js yang sangat cepat, aman, dan ramah SEO.' 
    },
    { 
      gambar: '/layanan2.jpg', // Path ke folder public/mobile-dev.jpg
      tag: 'Mobile Apps',
      nama: 'Aplikasi Android & iOS', 
      deskripsi: 'Solusi aplikasi mobile native maupun cross-platform dengan performa tinggi untuk mendukung mobilitas bisnis modern Anda.' 
    },
    { 
      gambar: '/layanan3.jpg', // Path ke folder public/consulting.jpg
      tag: 'Consulting',
      nama: 'Konsultasi IT & Cloud', 
      deskripsi: 'Arsitektur infrastruktur teknologi terbaik, migrasi cloud, dan audit keamanan sistem untuk efisiensi operasional maksimal.' 
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Solusi Bisnis End-to-End
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Layanan Utama Kami
          </h1>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {listLayanan.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* 📸 FOTO LAYANAN */}
                <div className="relative h-48 w-full bg-slate-200">
                  <Image 
                    src={item.gambar} 
                    alt={item.nama}
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2">{item.nama}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.deskripsi}</p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a href="/contact" className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group">
                  Konsultasi Sekarang 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
