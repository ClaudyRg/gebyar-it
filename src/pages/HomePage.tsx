import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
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
  Phone
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
      <section className="relative bg-[#070E1E] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./assets/gallery/git-leuwiliang.jpg"
            alt="Kampus & Kegiatan Riset Teknik Informatika UIKA Bogor"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070E1E]/85 via-[#091124]/80 to-[#070E1E]" />
        </div>

        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-20 lg:pt-20 lg:pb-24 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#091124]/90 p-2.5 shadow-2xl flex items-center justify-center mb-5">
              <img
                src="./assets/uika-crest.png"
                alt="Lambang Fakultas Teknik dan Sains UIKA Bogor"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-[11px] sm:text-xs font-mono-code uppercase tracking-[0.3em] text-[#E5C17B] font-semibold">
              FAKULTAS TEKNIK DAN SAINS · UNIVERSITAS IBN KHALDUN BOGOR
            </div>

            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mt-3 leading-[1.06]">
              Department of Informatics Engineering
            </h1>

            <p className="font-editorial italic text-xl sm:text-2xl text-[#D8D4C8] mt-3">
              Empat Laboratorium Keilmuan, Satu Fondasi Inovasi Informatika
            </p>

            <p className="text-xs sm:text-sm text-white/75 max-w-2xl mx-auto mt-4 leading-relaxed">
              Eksplorasi mendalam profil riset, struktur organisasi dosen, kurikulum berjenjang,
              inventaris perangkat keras, prestasi nasional, serta prospek lulusan pada empat
              peminatan utama:{' '}
              <span className="text-white font-semibold">SE, CSN, GIT, dan KERIS</span>.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#four-specializations"
                className="inline-flex items-center gap-2 bg-[#17368A] hover:bg-[#1D4ED8] text-white text-xs font-mono-code uppercase tracking-widest font-semibold px-7 py-3.5 rounded-full transition shadow-lg"
              >
                <BookOpen className="w-4 h-4 text-[#E5C17B]" />
                <span>Jelajahi 4 Laboratorium</span>
              </a>
              <a
                href="#specialization-advisor"
                className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#d4b06a] text-[#091124] text-xs font-mono-code uppercase tracking-widest font-bold px-7 py-3.5 rounded-full transition shadow-lg"
              >
                <Compass className="w-4 h-4" />
                <span>Simulasi Pemilihan Peminatan</span>
              </a>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {labOrder.map((id, idx) => {
              const lab = LABS_DATA[id];
              return (
                <Link
                  key={id}
                  to={`/lab/${id}`}
                  className="group soft-glass-dark p-7 transition hover:-translate-y-1 flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono-code uppercase tracking-[0.2em] text-[#E5C17B] font-semibold mb-2">
                      <span>0{idx + 1} · {lab.shortName}</span>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lab.accentHex }} />
                    </div>
                    <h2 className="font-editorial text-2xl font-bold text-white group-hover:text-[#E5C17B] transition leading-snug">
                      {lab.fullName}
                    </h2>
                    <p className="text-xs text-white/70 mt-2 line-clamp-3 leading-relaxed">
                      {lab.tagline}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-code text-[#E5C17B] group-hover:text-white">
                    <span>{lab.researchGroupBrand}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 paper-grain relative overflow-hidden">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17368A]/10 text-[#17368A] text-xs font-mono-code uppercase tracking-widest font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Tentang Program Studi & Ekosistem Laboratorium</span>
          </div>

          <div className="font-sans-ui font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#0F1420]/10 select-none leading-none">
            INFORMATIKA UIKA
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420] leading-tight -mt-3 sm:-mt-5 max-w-4xl mx-auto">
            Teknik Informatika Tidak Hanya Tentang Menulis Baris Kode, Melainkan Membangun Solusi Nyata
          </h2>

          <div className="w-16 h-1 bg-[#17368A] rounded-full mx-auto my-6" />

          <p className="text-sm sm:text-base text-[#374151] leading-relaxed max-w-4xl mx-auto">
            Perkembangan teknologi informasi membawa keilmuan Informatika ke berbagai domain
            strategis masyarakat dan industri. Oleh karena itu,{' '}
            <strong className="text-[#0F1420]">
              Program Studi Teknik Informatika Fakultas Teknik dan Sains Universitas Ibn Khaldun
              (UIKA) Bogor
            </strong>{' '}
            mengembangkan kurikulum berbasis laboratorium peminatan yang memadukan fondasi
            algoritma dengan spesialisasi riset terfokus.
          </p>

          <p className="text-sm text-[#4B5563] leading-relaxed max-w-4xl mx-auto mt-4">
            Empat laboratorium peminatan utama—<strong>Software Engineering (SE)</strong>,{' '}
            <strong>Computer System & Networking (CSN)</strong>,{' '}
            <strong>Geospatial Information Technology (GIT)</strong>, dan{' '}
            <strong>Knowledge Engineering & Reliable Intelligent Systems (KERIS)</strong>—beserta
            dukungan laboratorium <strong>Multimedia</strong> berkolaborasi mencetak lulusan yang
            unggul secara teknis, matang dalam riset, dan siap memimpin transformasi digital.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="soft-card p-6">
              <div className="text-xs font-mono-code font-bold text-[#17368A] uppercase tracking-wider">
                01 · Fondasi Keilmuan Kuat
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-2 leading-relaxed">
                Algoritma, rekayasa berorientasi objek, jaringan komputer, analisis spasial, dan
                kecerdasan buatan.
              </p>
            </div>
            <div className="soft-card p-6">
              <div className="text-xs font-mono-code font-bold text-[#17368A] uppercase tracking-wider">
                02 · Hilirisasi & Dampak Nyata
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-2 leading-relaxed">
                Produk riset diadopsi oleh kampus (SIAK/SIMPEG), Korlantas Polri, BPS, hingga
                pertanian presisi daerah.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5">
            <div className="overflow-hidden rounded-2xl shadow-md h-48 sm:h-56">
              <img
                src="./assets/fasilitas/se-1.jpg"
                alt="Lab SE UIKA"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md h-48 sm:h-56">
              <img
                src="./assets/fasilitas/csn-1.jpg"
                alt="Lab CSN UIKA"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md h-48 sm:h-56">
              <img
                src="./assets/fasilitas/git-1.jpg"
                alt="Lab GIT UIKA"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md h-48 sm:h-56">
              <img
                src="./assets/fasilitas/keris-1.jpg"
                alt="Lab KERIS UIKA"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="royal-charter-surface text-white py-20">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-xs font-mono-code uppercase tracking-[0.25em] text-[#E5C17B] font-semibold">
              PIAGAM AKADEMIK · ACADEMIC CHARTER
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold mt-2">
              Visi, Misi, Tujuan & Capaian Lulusan
            </h2>
            <div className="w-16 h-0.5 bg-[#E5C17B] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[1440px] mx-auto text-left">
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#E5C17B]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-mono-code text-xs uppercase tracking-[0.2em] font-bold text-white">
                  VISION
                </h3>
                <div className="w-10 h-0.5 bg-[#E5C17B]/70 my-3" />
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  Menjadi ekosistem laboratorium penelitian dan pengembangan keilmuan Teknik
                  Informatika yang unggul, terakreditasi, dan berdampak nyata dalam bidang rekayasa
                  perangkat lunak, infrastruktur jaringan & komputasi awan, intelijen geospasial, serta
                  rekayasa pengetahuan & sistem cerdas menuju daya saing nasional dan internasional
                  (2030–2045).
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#E5C17B]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-mono-code text-xs uppercase tracking-[0.2em] font-bold text-white">
                  MISSION
                </h3>
                <div className="w-10 h-0.5 bg-[#E5C17B]/70 my-3" />
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  Menyelenggarakan pendidikan akademik dan praktikum berstandar industri, membangun
                  budaya riset kolaboratif antara dosen, mahasiswa, dan alumni, serta mengembangkan
                  penelitian terpadu dan pengabdian masyarakat berbasis IPTEKS untuk mendukung Smart
                  Campus dan ketahanan digital nasional.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#E5C17B]">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-mono-code text-xs uppercase tracking-[0.2em] font-bold text-white">
                  OBJECTIVES
                </h3>
                <div className="w-10 h-0.5 bg-[#E5C17B]/70 my-3" />
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  Menyelaraskan topik Tugas Akhir (Skripsi) mahasiswa dengan peta jalan riset
                  mutakhir, meningkatkan raihan hibah PKM Belmawa, DIPA, dan Bangkit Academy, serta
                  melahirkan prototipe, HKI, dan aplikasi produksi yang diadopsi instansi pemerintah
                  maupun industri.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#E5C17B]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-mono-code text-xs uppercase tracking-[0.2em] font-bold text-white">
                  OUTCOMES
                </h3>
                <div className="w-10 h-0.5 bg-[#E5C17B]/70 my-3" />
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  Melahirkan lulusan Sarjana Komputer (S.Kom.) yang menguasai perancangan arsitektur
                  sistem, pengujian kualitas, keamanan jaringan, pemodelan spasial, serta analisis
                  data berbasis AI—dilengkapi integritas akhlak mulia, kepemimpinan tim, dan kesiapan
                  berwirausaha.
                </p>
              </div>
            </div>
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

      <section id="four-specializations" className="py-20 paper-grain">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <div className="text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold mb-2">
              DIREKTORI UTAMA · EMPAT PEMINATAN & LABORATORIUM
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420] tracking-tight">
              Profil Empat Laboratorium Keilmuan
            </h2>
            <div className="w-16 h-1 bg-[#17368A] rounded-full mx-auto my-4" />
            <p className="text-sm text-[#374151] leading-relaxed">
              Setiap laboratorium memiliki fokus riset, infrastruktur praktikum, struktur organisasi
              dosen, serta prospek karir lulusan yang dirancang spesifik menjawab tantangan era
              transformasi digital.
            </p>
          </div>

          <div className="space-y-12">
            {labOrder.map((id) => {
              const lab = LABS_DATA[id];
              const head = lab.lecturers.find((l) => l.isHead) || lab.lecturers[0];

              return (
                <article
                  key={id}
                  className="soft-card p-7 sm:p-10 lg:p-12 text-left max-w-[1536px] mx-auto overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-7 flex flex-col items-start">
                      <div className="flex items-center gap-2">
                        <span
                          className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase tracking-wider text-white font-bold"
                          style={{ backgroundColor: lab.accentHex }}
                        >
                          Peminatan {lab.shortName}
                        </span>
                        <span className="text-xs font-mono-code text-[#6B7280]">
                          {lab.researchGroupBrand}
                        </span>
                      </div>

                      <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F1420] mt-3 leading-tight">
                        {lab.fullName} ({lab.shortName})
                      </h3>

                      <p
                        className="font-editorial italic text-lg sm:text-xl text-[#17368A] mt-2.5 border-l-2 pl-3 py-0.5 leading-relaxed"
                        style={{ borderColor: lab.accentHex }}
                      >
                        "{lab.motto}"
                      </p>

                      <p className="text-sm text-[#374151] leading-relaxed mt-4">
                        {lab.executiveSummary}
                      </p>

                      <div className="mt-5 w-full bg-[#F6F5F0] rounded-2xl p-5">
                        <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#17368A] font-bold">
                          VISI KEILMUAN {lab.shortName}
                        </div>
                        <p className="text-xs sm:text-sm text-[#0F1420] mt-1.5 leading-relaxed">
                          {lab.vision}
                        </p>
                      </div>

                      <div className="mt-6 w-full space-y-4">
                        <div>
                          <div className="text-xs font-mono-code uppercase tracking-wider font-bold text-[#0F1420] mb-2">
                            Lingkup Riset & Kompetensi Utama
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {lab.researchScopes.map((rs) => (
                              <span
                                key={rs.code}
                                className="px-3.5 py-1.5 rounded-full bg-[#F6F5F0] text-xs font-medium text-[#1F2937]"
                              >
                                {rs.title}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-mono-code uppercase tracking-wider font-bold text-[#0F1420] mb-2">
                            Prospek Karir Lulusan
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {lab.careers.map((car) => (
                              <span
                                key={car.title}
                                className="px-3.5 py-1.5 rounded-full bg-[#17368A]/8 text-xs font-semibold text-[#17368A]"
                              >
                                {car.title}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-5 w-full">
                      <div className="grid grid-cols-2 gap-3.5 h-48 sm:h-56">
                        <div className="rounded-2xl overflow-hidden shadow-sm h-full">
                          <img
                            src={lab.heroImage}
                            alt={`Fasilitas ${lab.fullName}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-sm h-full">
                          <img
                            src={lab.secondaryImage}
                            alt={`Suasana ${lab.fullName}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#EBE7DE] flex items-center gap-4">
                        <img
                          src={head.photo}
                          alt={head.name}
                          className="w-16 h-16 rounded-full object-cover object-top shadow-md shrink-0"
                        />
                        <div>
                          <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#17368A] font-bold">
                            Kepala Laboratorium {lab.shortName}
                          </div>
                          <div className="font-editorial text-lg font-bold text-[#0F1420] leading-snug">
                            {head.name}
                          </div>
                          <div className="text-xs text-[#4B5563]">
                            Didukung oleh {lab.lecturers.length} Dosen Peneliti
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/lab/${id}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-mono-code uppercase tracking-widest font-semibold text-white transition shadow-md hover:opacity-95"
                        style={{ backgroundColor: lab.accentHex }}
                      >
                        <span>Buka Halaman Lengkap {lab.shortName}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 royal-charter-surface text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mt-4 leading-relaxed">
              {activeHeadLab.academicDescription}
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
                <span>Lihat Struktur Lab {activeHeadLab.shortName}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="faculty-directory" className="py-20 ivory-surface">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold mb-2">
              <Users className="w-4 h-4" />
              <span>Struktur Organisasi & Dewan Dosen · 21 Peneliti Aktif</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420]">
              Direktori Dosen & Peneliti Laboratorium
            </h2>
            <div className="w-16 h-1 bg-[#17368A] rounded-full mx-auto my-4" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
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
                  <span>Profil Lab {lec.labShort}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpecializationAdvisor />
      <SynergyAndComparison />
      <ArchiveAndNewsSection />
    </main>
  );
};
