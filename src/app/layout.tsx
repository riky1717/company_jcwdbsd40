import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Website Company Profile Resmi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800 antialiased">
        
        {/* GLOBAL NAVBAR */}
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-blue-600 tracking-wide">
              CORP<span className="text-gray-800">SPACE</span>
            </Link>
            
            {/* Nav Links */}
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/home" className="text-gray-600 hover:text-blue-600 transition">Beranda</Link>
              <Link href="/layanan" className="text-gray-600 hover:text-blue-600 transition">Layanan</Link>
              <Link href="/team" className="text-gray-600 hover:text-blue-600 transition">Tim</Link>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition">Blog</Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Kontak
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">CORPSPACE</h3>
              <p className="text-sm leading-relaxed">
                Mitra transformasi digital terpercaya untuk membangun masa depan bisnis Anda yang lebih cerah dan inovatif.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Navigasi</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/home" className="hover:text-white transition">Beranda</Link></li>
                <li><Link href="/layanan" className="hover:text-white transition">Layanan</Link></li>
                <li><Link href="/team" className="hover:text-white transition">Tim Kami</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Kontak Utama</h3>
              <p className="text-sm">info@corpspace.com</p>
              <p className="text-sm mt-1">+62 21 1234 5678</p>
              <p className="text-sm mt-1">Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center text-xs">
            &copy; {new Date().getFullYear()} CORPSPACE. Hak Cipta Dilindungi.
          </div>
        </footer>

      </body>
    </html>
  );
}
