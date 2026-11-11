import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Compass,
  Award,
  Layers,
  BookOpen,
  ArrowUpRight,
  Building2,
  MapPin,
  Scale
} from 'lucide-react';
import { LABS_DATA, LabId } from '../data/labsData';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const labOrder: LabId[] = ['se', 'csn', 'git', 'keris'];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-[#091124] text-[#D8D4C8] text-[11px] font-mono-code tracking-wider">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 h-9 flex items-center justify-center sm:justify-between">
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
          <div className="hidden sm:flex items-center gap-5 shrink-0">
            <button
              onClick={() => scrollToSection('compare-labs')}
              className="inline-flex items-center gap-1.5 text-white/75 hover:text-white transition cursor-pointer"
            >
              <Scale className="w-3 h-3 text-[#E5C17B]" />
              Komparasi Lab
            </button>
            <button
              onClick={() => scrollToSection('synergy-blueprint')}
              className="inline-flex items-center gap-1.5 text-white/75 hover:text-white transition cursor-pointer"
            >
              <Layers className="w-3 h-3 text-[#E5C17B]" />
              Sinergi 5 Lab
            </button>
            <button
              onClick={() => scrollToSection('documentary-archive')}
              className="inline-flex items-center gap-1.5 text-white/75 hover:text-white transition cursor-pointer"
            >
              <Award className="w-3 h-3 text-[#E5C17B]" />
              Arsip & Prestasi
            </button>
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

            <nav className="hidden lg:flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full shadow-2xs border border-[#EBE7DE]">
              <Link
                to="/"
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                  location.pathname === '/'
                    ? 'bg-[#17368A] text-white shadow-xs'
                    : 'text-[#1F2937] hover:text-[#17368A] hover:bg-[#17368A]/5'
                }`}
              >
                Beranda
              </Link>

              <Link
                to="/directory"
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition flex items-center gap-1.5 ${
                  location.pathname === '/directory'
                    ? 'bg-[#17368A] text-white shadow-xs'
                    : 'text-[#1F2937] hover:text-[#17368A] hover:bg-[#17368A]/5'
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
                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#17368A] text-white shadow-xs'
                        : 'text-[#1F2937] hover:text-[#17368A] hover:bg-[#17368A]/5'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: isActive ? '#E5C17B' : lab.accentHex }}
                    />
                    <span>{lab.shortName}</span>
                  </Link>
                );
              })}

              <button
                onClick={() => scrollToSection('faculty-directory')}
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1F2937] hover:text-[#17368A] hover:bg-[#17368A]/5 transition cursor-pointer"
              >
                Dosen
              </button>
            </nav>

            <div className="hidden lg:flex items-center">
              <button
                onClick={() => scrollToSection('specialization-advisor')}
                className="inline-flex items-center gap-2 bg-[#17368A] hover:bg-[#091124] text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition shadow-sm cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-[#E5C17B]" />
                <span>Asesmen Peminatan</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
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

            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => scrollToSection('specialization-advisor')}
                className="flex items-center justify-center gap-1.5 bg-[#17368A] text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-3 rounded-full"
              >
                <Compass className="w-3.5 h-3.5" />
                Asesmen Lab
              </button>
              <button
                onClick={() => scrollToSection('explore-labs')}
                className="flex items-center justify-center gap-1.5 bg-[#091124] text-white text-xs font-semibold uppercase tracking-wider py-2.5 px-3 rounded-full"
              >
                <Layers className="w-3.5 h-3.5" />
                Katalog Lab
              </button>
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
