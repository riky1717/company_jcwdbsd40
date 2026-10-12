import React from 'react';
import Image from 'next/image';

export default function EnhancedTeamPage() {
  const anggotaTim = [
    { 
      nama: 'M Riky Darmsyah', 
      jabatan: 'CEO & Founder', 
      keahlian: 'Business Strategy', 
      foto: '/pp2.jpg' // Path ke folder public/budi.jpg
    },
    { 
      nama: 'Siti Rahma', 
      jabatan: 'Lead Fullstack Developer', 
      keahlian: 'Next.js & Cloud Expert', 
      foto: '/pp3.jpg' // Path ke folder public/siti.jpg
    },
    { 
      nama: 'Andi Wijaya', 
      jabatan: 'Senior UI/UX Designer', 
      keahlian: 'Product Identity', 
      foto: '/pp1.jpg' // Path ke folder public/andi.jpg
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Para Profesional Ahli
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Orang-Orang Hebat di Balik Layar
          </h1>
        </div>
        
        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {anggotaTim.map((person, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300 text-center"
            >
              {/* 📸 FOTO AVATAR BULAT */}
              <div className="w-28 h-28 rounded-full mx-auto mb-6 relative overflow-hidden shadow-md border-4 border-slate-100 bg-slate-200">
                <Image 
                  src={person.foto} 
                  alt={person.nama}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-1">{person.nama}</h3>
              <p className="text-blue-600 font-semibold text-sm mb-3">{person.jabatan}</p>
              
              <div className="inline-block bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full font-medium mb-6">
                ✨ {person.keahlian}
              </div>
              
              {/* Fake Social Media Links Icons */}
              <div className="flex justify-center gap-4 text-slate-400 text-sm border-t border-slate-100 pt-4">
                <span className="hover:text-blue-600 cursor-pointer transition">LinkedIn</span>
                <span className="text-slate-200">•</span>
                <span className="hover:text-blue-400 cursor-pointer transition">Twitter</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
