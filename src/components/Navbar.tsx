import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Compass,
  BookOpen,
  ArrowUpRight,
  Building2,
  MapPin
} from 'lucide-react';
import { LABS_DATA, LabId } from '../data/labsData';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const labOrder: LabId[] = ['se', 'csn', 'git', 'keris'];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-[#091124] text-[#D8D4C8] text-[11px] font-mono-code tracking-wider">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 h-9 flex items-center justify-between">
          <div className="flex items-center gap-3 truncate">
            <span className="inline-flex items-center gap-1.5 text-[#E5C17B] font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              UNIVERSITAS IBN KHALDUN BOGOR
            </span>
            <span className="hidden md:inline text-white/25">·</span>
            <span className="hidden md:inline text-white/80">
              FAKULTAS TEKNIK DAN SAINS · PROGRAM STUDI TEKNIK INFORMATIKA
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 shrink-0 text-xs text-[#E5C17B]">
            <span>Portal Riset & Peminatan Mahasiswa</span>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(15,20,32,0.06)]'
            : 'bg-[#F6F5F0]/95 backdrop-blur-xs'
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-[#091124] p-1.5 flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                <img
                  src="./assets/uika-crest.png"
                  alt="Lambang UIKA Bogor"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-semibold">
                  Portal Informasi Akademik · UIKA
                </span>
                <span className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#0F1420] leading-none mt-0.5 group-hover:text-[#17368A] transition">
                  Laboratorium Teknik Informatika
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1.5 bg-[#FAF9F5] px-3.5 py-1.5 rounded-full shadow-sm border border-[#DDD8CB]">
              <Link
                to="/"
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
                  location.pathname === '/'
                    ? 'bg-[#17368A] text-white shadow-xs'
                    : 'text-[#111827] hover:text-[#17368A] hover:bg-black/5'
                }`}
              >
                Beranda
              </Link>

              <Link
                to="/directory"
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 ${
                  location.pathname === '/directory'
                    ? 'bg-[#17368A] text-white shadow-xs'
                    : 'text-[#111827] hover:text-[#17368A] hover:bg-black/5'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Direktori Lab</span>
              </Link>

              {labOrder.map((labId) => {
                const lab = LABS_DATA[labId];
                const isActive = location.pathname === `/lab/${labId}`;
                return (
                  <Link
                    key={labId}
                    to={`/lab/${labId}`}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#17368A] text-white shadow-xs'
                        : 'text-[#111827] hover:text-[#17368A] hover:bg-black/5'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full ring-2 ring-white/60 shrink-0"
                      style={{ backgroundColor: isActive ? '#E5C17B' : lab.accentHex }}
                    />
                    <span>{lab.shortName}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center">
              <Link
                to="/advisor"
                className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition shadow-sm ${
                  location.pathname === '/advisor'
                    ? 'bg-[#C5A059] text-[#091124] font-bold shadow-md'
                    : 'bg-[#17368A] hover:bg-[#091124] text-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-[#E5C17B]" />
                <span>Asesmen Peminatan</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white text-[#0F1420] shadow-xs hover:bg-[#EBE7DE] transition"
              aria-label="Buka Menu Navigasi"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-[#FAF9F5] px-4 pt-4 pb-6 space-y-4 shadow-xl text-center border-t border-[#EBE7DE]">
            <div className="grid grid-cols-1 gap-1.5">
              <Link
                to="/"
                className={`px-4 py-2.5 rounded-full text-sm font-semibold ${
                  location.pathname === '/'
                    ? 'bg-[#17368A] text-white'
                    : 'text-[#111318] hover:bg-[#EBE7DE]/60'
                }`}
              >
                Beranda Portal
              </Link>

              <Link
                to="/directory"
                className={`px-4 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 ${
                  location.pathname === '/directory'
                    ? 'bg-[#17368A] text-white'
                    : 'bg-white text-[#111318] shadow-2xs'
                }`}
              >
                <BookOpen className="w-4 h-4 text-[#C5A059]" />
                <span>Direktori 4 Laboratorium</span>
              </Link>

              <Link
                to="/advisor"
                className={`px-4 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 ${
                  location.pathname === '/advisor'
                    ? 'bg-[#C5A059] text-[#091124] font-bold'
                    : 'bg-[#17368A] text-white'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Asesmen Rekomendasi Peminatan</span>
              </Link>

              <div className="pt-2 pb-1 text-[11px] font-mono-code uppercase tracking-widest text-[#6B7280]">
                Halaman Khusus Laboratorium
              </div>

              {labOrder.map((labId) => {
                const lab = LABS_DATA[labId];
                const isActive = location.pathname === `/lab/${labId}`;
                return (
                  <Link
                    key={labId}
                    to={`/lab/${labId}`}
                    className={`px-4 py-2.5 rounded-full text-sm flex items-center justify-center gap-2 ${
                      isActive
                        ? 'bg-[#17368A] font-bold text-white'
                        : 'bg-white text-[#111318] shadow-2xs'
                    }`}
                  >
                    <span className="font-mono-code text-xs font-bold">[{lab.shortName}]</span>
                    <span>{lab.fullName}</span>
                  </Link>
                );
              })}
            </div>

            <div className="text-[11px] text-[#4B5563] flex items-center justify-center gap-1.5 pt-1 font-mono-code">
              <MapPin className="w-3.5 h-3.5 text-[#17368A] shrink-0" />
              <span>Jl. Sholeh Iskandar KM. 2, Kedung Badak, Kota Bogor 16162</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
