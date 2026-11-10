import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Camera,
  X,
  ArrowUpRight,
  ZoomIn
} from 'lucide-react';
import {
  ACHIEVEMENTS_DATA,
  GALLERY_ITEMS,
  LABS_DATA,
  LabId,
  GalleryItem
} from '../data/labsData';

export const ArchiveAndNewsSection: React.FC = () => {
  const [selectedLabFilter, setSelectedLabFilter] = useState<'all' | LabId>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['Semua', 'Fasilitas', 'Produk & Sistem', 'Prestasi', 'Kegiatan & Riset'];

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    const matchLab = selectedLabFilter === 'all' || item.labId === selectedLabFilter;
    const matchCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchLab && matchCat;
  });

  return (
    <>
      <section className="py-20 paper-grain text-center">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto mb-14 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.25em] text-[#17368A] font-bold mb-2">
              <Award className="w-4 h-4 text-[#C5A059]" />
              <span>Hall of Distinction · Prestasi Sivitas & Mahasiswa</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420]">
              Rising Stars & Capaian Unggulan
            </h2>
            <div className="w-16 h-1 bg-[#17368A] rounded-full mx-auto my-4" />
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Rekam jejak autentik pendanaan riset nasional, inkubasi Google Bangkit, Google Student
              Ambassador, juara inovasi daerah, hingga kelulusan terbaik Wisuda ke-79 s.d. ke-82.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {ACHIEVEMENTS_DATA.slice(0, 6).map((ach) => {
              const lab = LABS_DATA[ach.labId];
              return (
                <div
                  key={ach.id}
                  className="plaque-frame p-7 text-white flex flex-col items-center text-center justify-between group"
                >
                  <div className="flex flex-col items-center w-full">
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-mono-code uppercase tracking-widest text-[#E5C17B]">
                        {ach.category}
                      </span>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold text-white"
                        style={{ backgroundColor: lab.accentHex }}
                      >
                        {lab.shortName} · {ach.year}
                      </span>
                    </div>

                    {ach.image && (
                      <div className="my-2 h-44 w-full overflow-hidden rounded-2xl bg-black/40 shadow-md">
                        <img
                          src={ach.image}
                          alt={ach.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500 opacity-90"
                        />
                      </div>
                    )}

                    <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#FAF9F5] leading-snug mt-4">
                      {ach.title}
                    </h3>
                    <div className="text-xs font-mono-code text-[#E5C17B] mt-2">
                      {ach.recipient}
                    </div>
                    <p className="text-xs text-white/75 mt-3 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 flex items-center justify-center gap-3 text-[11px] font-mono-code">
                    <Link
                      to={`/lab/${ach.labId}`}
                      className="px-4 py-1.5 rounded-full bg-white/10 text-[#E5C17B] hover:bg-white/20 transition inline-flex items-center gap-1"
                    >
                      <span>Eksplorasi Lab {lab.shortName}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 oxford-navy-surface text-white text-center">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto mb-14 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.2em] text-[#60A5FA] mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
              <span>Pusat Komunikasi & Agenda Akademik · Edisi 2026</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white">
              Warta Riset, Hilirisasi & Proyek Strategis
            </h2>
            <div className="w-16 h-0.5 bg-[#60A5FA] mx-auto my-4" />
            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              Sorotan proyek kolaborasi nasional (Korlantas Polri, BPS, Survei Drone RTK) serta
              hilirisasi riset sivitas akademika Teknik Informatika UIKA Bogor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#101C38] group min-h-[320px] flex flex-col items-center justify-end p-7 text-center shadow-xl">
              <img
                src="./assets/gallery/git-leuwiliang.jpg"
                alt="Survei Drone Persawahan Leuwiliang"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-[#091124]/75 to-transparent" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#14532D] text-white text-[10px] font-mono-code uppercase tracking-widest mb-3">
                  LAPORAN LAPANGAN · LAB GIT
                </span>
                <h3 className="font-editorial text-2xl font-bold text-white">
                  Survei Persawahan dengan Drone Multispectral & RTK di Leuwiliang
                </h3>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Pemetaan ortofoto sentimeter dan model permukaan 3D mendukung pertanian presisi
                  Kabupaten Bogor.
                </p>
                <Link
                  to="/lab/git"
                  className="mt-4 inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono-code uppercase tracking-wider px-5 py-2 rounded-full transition"
                >
                  <span>Riset GIT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#101C38] group min-h-[320px] flex flex-col items-center justify-end p-7 text-center shadow-xl">
              <img
                src="./assets/gallery/se-korlantas.jpg"
                alt="Proyek Korlantas Polri Lab SE"
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-[#091124]/75 to-transparent" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#17368A] text-white text-[10px] font-mono-code uppercase tracking-widest mb-3">
                  HILIRISASI · LAB SE
                </span>
                <h3 className="font-editorial text-2xl font-bold text-white">
                  Proyek Kolaborasi Korlantas Polri, Sistem BPS, SIAK & SIMPEG
                </h3>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Rekayasa sistem informasi berskala instansi nasional dan layanan Smart Campus UIKA
                  Bogor.
                </p>
                <Link
                  to="/lab/se"
                  className="mt-4 inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono-code uppercase tracking-wider px-5 py-2 rounded-full transition"
                >
                  <span>Riset SE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#101C38] group min-h-[320px] flex flex-col items-center justify-end p-7 text-center shadow-xl">
              <img
                src="./assets/gallery/keris-kamis.jpg"
                alt="Diskusi Kamis Lab KERIS"
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091124] via-[#091124]/75 to-transparent" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#7C2D12] text-white text-[10px] font-mono-code uppercase tracking-widest mb-3">
                  TRADISI RISET · LAB KERIS
                </span>
                <h3 className="font-editorial text-2xl font-bold text-white">
                  Kolokium Kamis, Hibah PKM AI & Google Student Ambassador 2025
                </h3>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Pendampingan rutin ide skripsi melahirkan model Autoencoder dan optimasi rute
                  angkot Bogor.
                </p>
                <Link
                  to="/lab/keris"
                  className="mt-4 inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-mono-code uppercase tracking-wider px-5 py-2 rounded-full transition"
                >
                  <span>Riset KERIS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="documentary-archive" className="py-20 ivory-surface text-center">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto mb-8 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold mb-2">
              <Camera className="w-4 h-4" />
              <span>Arsip Visual Terverifikasi · 32 Dokumentasi Resmi</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420]">
              Galeri Fasilitas, Produk & Dokumentasi Kegiatan
            </h2>
            <div className="w-16 h-1 bg-[#17368A] rounded-full mx-auto my-4" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {(['all', 'se', 'csn', 'git', 'keris'] as const).map((labKey) => (
              <button
                key={labKey}
                type="button"
                onClick={() => setSelectedLabFilter(labKey)}
                className={`px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider transition cursor-pointer ${
                  selectedLabFilter === labKey
                    ? 'bg-[#091124] text-white font-semibold shadow-sm'
                    : 'bg-white text-[#374151] hover:bg-[#EBE7DE] shadow-2xs'
                }`}
              >
                {labKey === 'all' ? 'Semua Lab' : `Lab ${labKey.toUpperCase()}`}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#17368A] text-white shadow-xs'
                    : 'bg-[#EBE7DE] text-[#374151] hover:bg-[#D6D1C4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => {
              const lab = LABS_DATA[item.labId];
              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className="group soft-card overflow-hidden flex flex-col items-center text-center justify-between cursor-pointer hover:-translate-y-1 transition"
                >
                  <div className="w-full">
                    <div className="relative h-48 overflow-hidden bg-[#091124]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute top-3 inset-x-0 flex items-center justify-center gap-1.5">
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase text-white"
                          style={{ backgroundColor: lab.accentHex }}
                        >
                          {lab.shortName}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code bg-[#091124]/85 text-white">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-[#091124]/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-[10px] font-mono-code text-[#6B7280]">
                        ARSIP {item.year} · LAB {lab.shortName}
                      </div>
                      <h3 className="font-editorial text-lg font-bold text-[#0F1420] leading-snug mt-1 group-hover:text-[#17368A] transition">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#4B5563] mt-1.5 line-clamp-2 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-[#091124]/90 backdrop-blur-xs flex items-center justify-center p-4 text-center"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="bg-[#FAF9F5] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#091124] text-white px-6 py-4 flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#E5C17B]">
                  {LABS_DATA[lightboxItem.labId].shortName} · {lightboxItem.category} ({lightboxItem.year})
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white">
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="p-2 rounded-full text-white/75 hover:text-white bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black max-h-[65vh] flex items-center justify-center overflow-hidden">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 flex flex-col items-center gap-3 bg-[#FAF9F5]">
              <p className="text-xs sm:text-sm text-[#374151]">{lightboxItem.subtitle}</p>
              <Link
                to={`/lab/${lightboxItem.labId}`}
                onClick={() => setLightboxItem(null)}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#17368A] text-white text-xs font-mono-code uppercase tracking-wider"
              >
                <span>Buka Halaman {LABS_DATA[lightboxItem.labId].shortName}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
