import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  BookOpen,
  Award,
  Users,
  Building2,
  Sparkles,
  GraduationCap,
  Layers,
  Mail,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import {
  LABS_DATA,
  DEPARTMENT_METRICS,
  LabId
} from '../data/labsData';
import { SpecializationAdvisor } from '../components/SpecializationAdvisor';
import { SynergyAndComparison } from '../components/SynergyAndComparison';
import { ArchiveAndNewsSection } from '../components/ArchiveAndNewsSection';

export const HomePage: React.FC = () => {
  const [selectedFacultyLab, setSelectedFacultyLab] = useState<'all' | LabId>('all');
  const [selectedHeadTab, setSelectedHeadTab] = useState<LabId>('se');

  const labOrder: LabId[] = ['se', 'csn', 'git', 'keris'];

  const allLecturers = labOrder.flatMap((id) =>
    LABS_DATA[id].lecturers.map((lec) => ({
      ...lec,
      labId: id,
      labShort: LABS_DATA[id].shortName,
      labFull: LABS_DATA[id].fullName,
      labAccent: LABS_DATA[id].accentHex
    }))
  );

  const filteredLecturers =
    selectedFacultyLab === 'all'
      ? allLecturers
      : allLecturers.filter((l) => l.labId === selectedFacultyLab);

  const activeHeadLab = LABS_DATA[selectedHeadTab];
  const activeHeadLecturer =
    activeHeadLab.lecturers.find((l) => l.isHead) || activeHeadLab.lecturers[0];

  return (
    <main className="text-center">
      <section className="relative bg-[#070E1E] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./assets/gallery/git-leuwiliang.jpg"
            alt="Kampus Teknik Informatika UIKA Bogor"
            className="w-full h-full object-cover object-center opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070E1E]/95 via-[#091124]/90 to-[#070E1E]" />
        </div>

        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 p-2.5 backdrop-blur-md shadow-2xl flex items-center justify-center mb-5 border border-white/15">
              <img
                src="./assets/uika-crest.png"
                alt="Lambang UIKA Bogor"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-[11px] sm:text-xs font-mono-code uppercase tracking-[0.3em] text-[#E5C17B] font-semibold">
              PORTAL INFORMASI AKADEMIK · TEKNIK INFORMATIKA UIKA BOGOR
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mt-3 leading-[1.08]">
              Department of Informatics Engineering
            </h1>

            <p className="font-editorial italic text-xl sm:text-2xl text-[#E5C17B] mt-3">
              Empat Laboratorium Keilmuan, Satu Ekosistem Inovasi Riset
            </p>

            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto mt-4 leading-relaxed">
              Pusat informasi terpadu kurikulum laboratorium, dewan dosen pembimbing, peta jalan riset,
              fasilitas praktikum berstandar industri, serta instrumen pemilihan peminatan mahasiswa.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                to="/directory"
                className="inline-flex items-center gap-2 bg-[#E5C17B] hover:bg-[#d4b06a] text-[#091124] text-xs font-mono-code uppercase tracking-widest font-bold px-7 py-3.5 rounded-full transition shadow-lg"
              >
                <BookOpen className="w-4 h-4" />
                <span>Buka Direktori 4 Lab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#specialization-advisor"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-mono-code uppercase tracking-widest font-semibold px-7 py-3.5 rounded-full transition border border-white/15"
              >
                <Compass className="w-4 h-4 text-[#E5C17B]" />
                <span>Simulasi Peminatan</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="academic-hierarchy" className="py-20 paper-grain text-left">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17368A]/10 text-[#17368A] text-xs font-mono-code uppercase tracking-widest font-semibold mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Struktur & Tata Kelola Keilmuan</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420] leading-tight">
              Hierarki Informasi Akademik Departemen
            </h2>
            <div className="w-16 h-1 bg-[#17368A] my-4" />
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Program Studi Teknik Informatika Fakultas Teknik dan Sains Universitas Ibn Khaldun Bogor
              mengatur spesialisasi keilmuan mahasiswa melalui empat pilar laboratorium terakreditasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="soft-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#17368A] font-bold">
                  LEVEL 01 · TINGKAT PROGRAM STUDI
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#0F1420] mt-2">
                  Fondasi Inti Informatika
                </h3>
                <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                  Semester 1–3 membekali mahasiswa logika matematika, algoritma pemrograman,
                  basis data, dan rekayasa berorientasi objek.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#EBE7DE] text-[11px] font-mono-code text-[#17368A] font-semibold">
                Kurikulum Wajib Bersama
              </div>
            </div>

            <div className="soft-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#17368A] font-bold">
                  LEVEL 02 · TINGKAT PEMINATAN
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#0F1420] mt-2">
                  Spesialisasi 4 Laboratorium
                </h3>
                <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                  Semester 4–6 mahasiswa memilih fokus keilmuan terapan: Software Engineering,
                  Computer System & Networking, GIT, atau KERIS.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#EBE7DE] text-[11px] font-mono-code text-[#17368A] font-semibold">
                Praktikum Lanjutan & Proyek Tim
              </div>
            </div>

            <div className="soft-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#17368A] font-bold">
                  LEVEL 03 · TINGKAT RISET & SKRIPSI
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#0F1420] mt-2">
                  Peta Jalan Penelitian
                </h3>
                <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                  Semester 7–8 menyelaraskan topik Tugas Akhir dengan hibah nasional Belmawa, DIPA,
                  dan inkubasi industri nyata.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#EBE7DE] text-[11px] font-mono-code text-[#17368A] font-semibold">
                Bimbingan Dosen Peneliti Lab
              </div>
            </div>

            <div className="soft-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#17368A] font-bold">
                  LEVEL 04 · CAPAIAN LULUSAN
                </span>
                <h3 className="font-editorial text-2xl font-bold text-[#0F1420] mt-2">
                  Profil Lulusan S.Kom.
                </h3>
                <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                  Melahirkan insinyur perangkat lunak, arsitek cloud & cyber security, analis spasial,
                  serta AI specialist berakhlak mulia.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#EBE7DE] text-[11px] font-mono-code text-[#17368A] font-semibold">
                Sertifikasi Kompetensi & Karir
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="explore-labs" className="py-20 ivory-surface text-left">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17368A]/10 text-[#17368A] text-xs font-mono-code uppercase tracking-widest font-semibold mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>Katalog Laboratorium Spesialisasi</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420]">
                Jelajahi Laboratorium Keilmuan
              </h2>
              <div className="w-16 h-1 bg-[#17368A] my-3" />
              <p className="text-sm text-[#4B5563] max-w-2xl leading-relaxed">
                Pilih laboratorium untuk menelaah kurikulum praktikum, dewan dosen pembimbing,
                fasilitas perangkat keras, dan prospek karir spesifik.
              </p>
            </div>

            <Link
              to="/directory"
              className="inline-flex items-center gap-2 bg-[#17368A] hover:bg-[#091124] text-white text-xs font-mono-code uppercase tracking-wider font-semibold px-6 py-3 rounded-full transition shadow-sm shrink-0"
            >
              <span>Lihat Semua Direktori Lab</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {labOrder.map((id, idx) => {
              const lab = LABS_DATA[id];
              const head = lab.lecturers.find((l) => l.isHead) || lab.lecturers[0];

              return (
                <div
                  key={id}
                  className="soft-card p-7 flex flex-col justify-between transition hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase tracking-wider text-white font-bold"
                        style={{ backgroundColor: lab.accentHex }}
                      >
                        Peminatan {lab.shortName}
                      </span>
                      <span className="text-[10px] font-mono-code text-[#6B7280]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl font-bold text-[#0F1420] mt-3 leading-snug">
                      {lab.fullName}
                    </h3>
                    <div className="text-xs text-[#6B7280] mt-1 font-medium">{lab.researchGroupBrand}</div>

                    <p
                      className="font-editorial italic text-xs sm:text-sm text-[#17368A] mt-3 border-l-2 pl-3 py-0.5 leading-relaxed"
                      style={{ borderColor: lab.accentHex }}
                    >
                      "{lab.motto}"
                    </p>

                    <p className="text-xs text-[#4B5563] mt-3 leading-relaxed line-clamp-3">
                      {lab.academicDescription}
                    </p>

                    <div className="mt-5 p-3.5 rounded-2xl bg-[#F6F5F0] space-y-1.5 text-xs text-[#1F2937]">
                      <div className="text-[10px] font-mono-code uppercase tracking-wider font-bold text-[#17368A]">
                        Kepala Laboratorium
                      </div>
                      <div className="font-bold text-[#0F1420]">{head.name}</div>
                      <div className="text-[11px] text-[#4B5563]">
                        {lab.lecturers.length} Dosen Peneliti Aktif
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#EBE7DE] flex items-center justify-between">
                    <Link
                      to={`/lab/${id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider font-bold text-[#17368A] hover:underline"
                    >
                      <span>Halaman Khusus Lab</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lab.accentHex }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F5] py-16">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {DEPARTMENT_METRICS.map((metric) => (
              <div key={metric.label} className="p-5 flex flex-col items-center">
                <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#17368A]">
                  {metric.value}
                </div>
                <div className="text-xs font-mono-code uppercase tracking-wider font-bold text-[#0F1420] mt-2">
                  {metric.label}
                </div>
                <p className="text-xs text-[#4B5563] mt-1 max-w-xs">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 royal-charter-surface text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#E5C17B] font-bold">
            MESSAGE FROM HEAD OF LABORATORY
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-white mt-2">
            Sambutan & Arahan Kepala Laboratorium
          </h2>
          <div className="w-14 h-0.5 bg-[#E5C17B] mx-auto mt-4 mb-8" />

          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {labOrder.map((id) => {
              const lab = LABS_DATA[id];
              const isSelected = selectedHeadTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedHeadTab(id)}
                  className={`px-5 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider transition cursor-pointer ${
                    isSelected
                      ? 'bg-[#C5A059] text-[#091124] font-bold shadow-md'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  KaLab {lab.shortName}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-2xl bg-white/10 p-1 mb-4">
              <img
                src={activeHeadLecturer.photo}
                alt={activeHeadLecturer.name}
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>

            <div className="text-xs font-mono-code uppercase tracking-wider text-[#E5C17B] font-semibold">
              Kepala Laboratorium {activeHeadLab.fullName}
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mt-1">
              {activeHeadLecturer.name}
            </h3>

            <p className="font-editorial italic text-xl sm:text-2xl text-white mt-6 max-w-3xl leading-relaxed">
              "{activeHeadLab.motto} — Kami menyambut setiap mahasiswa Teknik Informatika UIKA
              Bogor untuk bertumbuh bersama dalam budaya riset, praktikum, dan penciptaan karya yang
              memberi manfaat nyata bagi masyarakat."
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-mono-code text-white/85">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10">
                <Mail className="w-3.5 h-3.5 text-[#E5C17B]" />
                {activeHeadLab.contactPerson.email}
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10">
                <Phone className="w-3.5 h-3.5 text-[#E5C17B]" />
                {activeHeadLab.contactPerson.phone}
              </span>
              <Link
                to={`/lab/${activeHeadLab.id}`}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#C5A059] text-[#091124] font-bold hover:opacity-95 transition"
              >
                <span>Buka Halaman Khusus Lab {activeHeadLab.shortName}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faculty-directory" className="py-20 ivory-surface text-left">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold mb-2">
              <Users className="w-4 h-4" />
              <span>Struktur Organisasi & Dewan Dosen · 21 Peneliti Aktif</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420]">
              Direktori Dosen & Peneliti Laboratorium
            </h2>
            <div className="w-16 h-1 bg-[#17368A] my-4" />
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {(['all', 'se', 'csn', 'git', 'keris'] as const).map((filterKey) => (
              <button
                key={filterKey}
                type="button"
                onClick={() => setSelectedFacultyLab(filterKey)}
                className={`px-5 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider transition cursor-pointer ${
                  selectedFacultyLab === filterKey
                    ? 'bg-[#17368A] text-white font-semibold shadow-sm'
                    : 'bg-white text-[#374151] hover:bg-[#EBE7DE] shadow-2xs'
                }`}
              >
                {filterKey === 'all'
                  ? `Semua Dosen (${allLecturers.length})`
                  : `Lab ${filterKey.toUpperCase()} (${LABS_DATA[filterKey].lecturers.length})`}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLecturers.map((lec) => (
              <div
                key={`${lec.labId}-${lec.id}`}
                className="soft-card p-6 flex flex-col items-center text-center justify-between group hover:-translate-y-1 transition"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 rounded-full overflow-hidden bg-[#091124] shadow-md mb-4">
                    <img
                      src={lec.photo}
                      alt={lec.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-1.5 mb-2">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase text-white"
                      style={{ backgroundColor: lec.labAccent }}
                    >
                      LAB {lec.labShort}
                    </span>
                    {lec.isHead && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono-code font-bold uppercase bg-[#C5A059] text-[#091124]">
                        Kepala Lab
                      </span>
                    )}
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-[#0F1420] leading-snug">
                    {lec.name}
                  </h3>
                  <div className="text-[11px] font-mono-code text-[#17368A] font-semibold mt-1">
                    {lec.role}
                  </div>
                  <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                    {lec.specialization}
                  </p>
                  {lec.historicalRole && (
                    <div className="mt-2.5 px-3 py-1 rounded-full bg-[#F6F5F0] text-[10px] font-mono-code text-[#4B5563]">
                      {lec.historicalRole}
                    </div>
                  )}
                </div>

                <Link
                  to={`/lab/${lec.labId}`}
                  className="mt-5 inline-flex items-center gap-1 text-xs font-mono-code text-[#17368A] font-bold hover:underline"
                >
                  <span>Lihat Profil Lab {lec.labShort}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SynergyAndComparison />
      <SpecializationAdvisor />
      <ArchiveAndNewsSection />
    </main>
  );
};
