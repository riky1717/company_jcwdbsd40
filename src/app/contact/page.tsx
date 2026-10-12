import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-center mb-2">Hubungi Kami</h1>
        <p className="text-gray-600 text-sm text-center mb-6">Kirim pesan dan kami akan segera merespons Anda</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-blue-500" placeholder="Nama lengkap Anda" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-blue-500" placeholder="nama@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-blue-500 h-24" placeholder="Tuliskan pesan Anda..."></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded text-sm font-semibold hover:bg-blue-700 transition">
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}
