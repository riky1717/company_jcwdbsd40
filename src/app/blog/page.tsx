import React from 'react';

export default function BlogPage() {
  const artikel = [
    { judul: 'Tren Teknologi Web di Tahun Ini', tanggal: '10 Oktober', ringkasan: 'Pelajari teknologi terbaru yang banyak digunakan industri saat ini.' },
    { judul: 'Pentingnya Website untuk Bisnis UMKM', tanggal: '05 Oktober', ringkasan: 'Bagaimana platform digital dapat mendongkrak penjualan usaha kecil.' },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Blog & Berita</h1>
        <p className="text-gray-600 mb-8">Wawasan terbaru seputar teknologi dan perkembangan bisnis</p>
        
        <div className="space-y-6">
          {artikel.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <span className="text-sm text-gray-400">{item.tanggal}</span>
              <h2 className="text-xl font-semibold text-gray-900 my-1 hover:text-blue-600 cursor-pointer">
                {item.judul}
              </h2>
              <p className="text-gray-600">{item.ringkasan}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
