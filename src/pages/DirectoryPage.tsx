import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  BookOpen,
  Users,
  Building2,
  Sparkles,
  GraduationCap,
  Layers,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Globe,
  Network,
  BrainCircuit,
  Search
} from 'lucide-react';
import {
  LABS_DATA,
  DEPARTMENT_METRICS,
  LabId
} from '../data/labsData';
import { SpecializationAdvisor } from '../components/SpecializationAdvisor';

export const DirectoryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | LabId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const labOrder: LabId[] = ['se', 'csn', 'git', 'keris'];

  const filteredLabIds = labOrder.filter((id) => {
    const lab = LABS_DATA[id];
    const matchFilter = activeFilter === 'all' || id === activeFilter;
    const matchSearch =
      searchQuery.trim() === '' ||
      lab.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.researchScopes.some((rs) =>
        rs.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchFilter && matchSearch;
  });

  const getLabIcon = (id: LabId) => {
    switch (id) {
      case 'se':
        return <Cpu className="w-5 h-5" />;
      case 'csn':
        return <Network className="w-5 h-5" />;
      case 'git':
        return <Globe className="w-5 h-5" />;
      case 'keris':
        return <BrainCircuit className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <main className="paper-grain min-h-screen text-center">
      <section className="relative bg-[#070E1E] text-white py-14 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#070E1E]/95 via-[#091124]/90 to-[#070E1E]" />

        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 text-left">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono-code text-white/70">
            <Link to="/" className="hover:text-white transition">Beranda</Link>
            <span>/</span>
            <span className="text-[#E5C17B]">Direktori Laboratorium</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5C17B]/15 text-[#E5C17B] text-xs font-mono-code uppercase tracking-widest mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Direktori Akademik 4 Laboratorium Keilmuan</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Pusat Laboratorium & Peminatan Informatika
            </h1>
            <p className="text-sm sm:text-base text-white/80 mt-4 leading-relaxed max-w-3xl">
              Eksplorasi komprehensif empat kelompok riset terpadu Program Studi Teknik Informatika
              UIKA Bogor: Software Engineering (SE), Computer System & Networking (CSN),
              Geospatial Information Technology (GIT), dan Knowledge Engineering & Reliable Intelligent Systems (KERIS).
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider transition cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#E5C17B] text-[#091124] font-bold shadow-md'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Semua Lab (4)
              </button>
              {labOrder.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveFilter(id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider transition cursor-pointer ${
                    activeFilter === id
                      ? 'bg-[#E5C17B] text-[#091124] font-bold shadow-md'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Lab {LABS_DATA[id].shortName}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari riset, lab, atau fokus..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-full text-xs font-mono-code text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#E5C17B]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredLabIds.map((id) => {
              const lab = LABS_DATA[id];
              const head = lab.lecturers.find((l) => l.isHead) || lab.lecturers[0];

              return (
                <article
                  key={id}
                  className="soft-card p-7 sm:p-9 flex flex-col justify-between transition hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="px-3.5 py-1 rounded-full text-[10px] font-mono-code uppercase tracking-widest text-white font-bold"
                        style={{ backgroundColor: lab.accentHex }}
                      >
                        Peminatan {lab.shortName}
                      </span>
                      <span className="text-xs font-mono-code text-[#6B7280]">
                        {lab.researchGroupBrand}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-sm"
                        style={{ backgroundColor: lab.accentHex }}
                      >
                        {getLabIcon(id)}
                      </div>
                      <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F1420] leading-snug">
                        {lab.fullName} ({lab.shortName})
                      </h2>
                    </div>

                    <p
                      className="font-editorial italic text-sm sm:text-base text-[#17368A] mt-3 border-l-2 pl-3 py-0.5 leading-relaxed"
                      style={{ borderColor: lab.accentHex }}
                    >
                      "{lab.motto}"
                    </p>

                    <p className="text-xs sm:text-sm text-[#4B5563] mt-3 leading-relaxed line-clamp-3">
                      {lab.academicDescription}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 h-40 rounded-2xl overflow-hidden shadow-xs">
                      <img
                        src={lab.heroImage}
                        alt={`Ruang ${lab.fullName}`}
                        className="w-full h-full object-cover"
                      />
                      <img
                        src={lab.secondaryImage}
                        alt={`Aktivitas ${lab.fullName}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="mt-5 space-y-3">
                      <div>
                        <div className="text-[10px] font-mono-code uppercase tracking-wider font-bold text-[#17368A] mb-1.5">
                          Fokus Keilmuan & Riset Utama
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {lab.researchScopes.slice(0, 3).map((rs) => (
                            <span
                              key={rs.code}
                              className="px-2.5 py-1 rounded-full bg-[#F6F5F0] text-[11px] font-medium text-[#111318]"
                            >
                              {rs.title}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] font-mono-code uppercase tracking-wider font-bold text-[#17368A] mb-1.5">
                          Prospek Karir Lulusan
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {lab.careers.slice(0, 3).map((c) => (
                            <span
                              key={c.title}
                              className="px-2.5 py-1 rounded-full bg-[#17368A]/8 text-[11px] font-medium text-[#17368A]"
                            >
                              {c.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 pt-5 border-t border-[#EBE7DE] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={head.photo}
                        alt={head.name}
                        className="w-11 h-11 rounded-full object-cover object-top shadow-xs shrink-0"
                      />
                      <div>
                        <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#6B7280]">
                          Kepala Laboratorium
                        </div>
                        <div className="text-xs font-bold text-[#0F1420]">
                          {head.name}
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/lab/${id}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white text-xs font-mono-code uppercase tracking-wider font-semibold transition hover:opacity-95 shadow-sm"
                      style={{ backgroundColor: lab.accentHex }}
                    >
                      <span>Detail Lab</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <SpecializationAdvisor />
    </main>
  );
};

