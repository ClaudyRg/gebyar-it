import React from 'react';
import { SpecializationAdvisor } from '../components/SpecializationAdvisor';
import { Compass, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AdvisorPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#F5F3EE]">
      <div className="bg-[#091124] text-white py-12 lg:py-16 text-center">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono-code text-[#E5C17B] hover:underline uppercase tracking-wider mb-6 bg-white/10 px-4 py-1.5 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda Portal</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#E5C17B] text-xs font-mono-code uppercase tracking-widest font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Instrumen Penjurusan Akademik</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Asesmen Rekomendasi Peminatan Lab
          </h1>

          <div className="w-16 h-1 bg-[#E5C17B] my-4 rounded-full" />

          <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
            Evaluasi preferensi riset, ketertarikan teknologi, dan orientasi karir untuk
            menemukan laboratorium keilmuan yang paling selaras dengan potensi akademik mahasiswa.
          </p>
        </div>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <SpecializationAdvisor />
      </div>
    </main>
  );
};

export default AdvisorPage;

