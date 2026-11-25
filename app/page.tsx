import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="max-w-3xl text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 border-4 border-white shadow-lg flex items-center justify-center text-gray-400 font-medium mb-8">
          Foto
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Halo, saya <span className="text-blue-600">[Nama Kamu]</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          Selamat datang di personal profile saya. Silakan jelajahi halaman-halaman di bawah ini untuk mengenal saya lebih dekat.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition shadow-md">
            Kenali Saya
          </Link>
          <Link href="/contact" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-medium transition">
            Hubungi Saya
          </Link>
        </div>
      </div>
    </main>
  );
}