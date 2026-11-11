import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Users,
  Briefcase,
  BookOpen,
  Cpu,
  Camera,
  Mail,
  Phone,
  MapPin,
  FileText,
  Sparkles,
  Layers,
  X,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import {
  LABS_DATA,
  ACHIEVEMENTS_DATA,
  GALLERY_ITEMS,
  LabId,
  GalleryItem
} from '../data/labsData';

export const LabDetailPage: React.FC = () => {
  const { labId } = useParams<{ labId: string }>();
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [labId]);

  if (!labId || !(labId in LABS_DATA)) {
    return <Navigate to="/directory" replace />;
  }

  const currentId = labId as LabId;
  const lab = LABS_DATA[currentId];
  const headLecturer = lab.lecturers.find((l) => l.isHead) || lab.lecturers[0];
  const labAchievements = ACHIEVEMENTS_DATA.filter((a) => a.labId === currentId);
  const labGallery = GALLERY_ITEMS.filter((g) => g.labId === currentId);

  return (
    <main className="paper-grain min-h-screen text-center">
      <section className="relative bg-[#070E1E] text-white overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={lab.heroImage}
            alt={lab.fullName}
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-110"
          />
          <div className="absolute inset-0 bg-[#070E1E]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070E1E] via-transparent to-[#070E1E]/85" />
        </div>

        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 text-left">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono-code text-white/70">
            <Link to="/" className="hover:text-white transition">Beranda</Link>
            <span>/</span>
            <Link to="/directory" className="hover:text-white transition">Direktori Lab</Link>
            <span>/</span>
            <span className="text-[#E5C17B]">Lab {lab.shortName}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-[10px] font-mono-code uppercase tracking-wider text-white font-bold"
                  style={{ backgroundColor: lab.accentHex }}
                >
                  Peminatan {lab.shortName}
                </span>
                <span className="text-xs font-mono-code text-[#E5C17B]">
                  {lab.researchGroupBrand}
                </span>
              </div>

              <h1 className="font-editorial text-4xl sm:text-6xl font-bold text-white leading-tight">
                Laboratorium {lab.fullName}
              </h1>

              <p
                className="font-editorial italic text-lg sm:text-2xl text-[#E5C17B] mt-3 border-l-2 pl-3 py-0.5 leading-relaxed"
                style={{ borderColor: lab.accentHex }}
              >
                "{lab.motto}"
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed mt-4 max-w-2xl">
                {lab.executiveSummary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/directory"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono-code uppercase tracking-wider transition border border-white/15"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Kembali ke Direktori</span>
                </Link>
                <a
                  href="#struktur-dosen"
                  className="px-5 py-2.5 rounded-full bg-[#17368A] hover:bg-[#1D4ED8] text-white text-xs font-mono-code uppercase tracking-wider font-semibold transition shadow-sm"
                >
                  Dewan Dosen ({lab.lecturers.length})
                </a>
                <a
                  href="#fokus-keilmuan"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono-code uppercase tracking-wider transition"
                >
                  Fokus Keilmuan & Riset
                </a>
                <a
                  href="#prospek-karir"
                  className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono-code uppercase tracking-wider transition"
                >
                  Prospek Karir
                </a>
              </div>
            </div>

            <div className="w-full lg:w-96 shrink-0">
              <div className="soft-glass-dark p-6 rounded-2xl border border-white/15 flex flex-col items-center text-center">
                <img
                  src={headLecturer.photo}
                  alt={headLecturer.name}
                  className="w-20 h-20 rounded-full object-cover object-top shadow-md mb-3 ring-2 ring-[#E5C17B]"
                />
                <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#E5C17B]">
                  KEPALA LABORATORIUM
                </div>
                <div className="font-editorial text-xl font-bold text-white mt-1">
                  {headLecturer.name}
                </div>
                <div className="text-xs text-white/70 mt-1">{headLecturer.specialization}</div>
                <div className="mt-4 pt-3 border-t border-white/10 w-full text-[11px] font-mono-code text-white/80 space-y-1">
                  <div>{lab.contactPerson.email}</div>
                  <div>{lab.contactPerson.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="profil-laboratorium" className="py-16 text-left">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-10">
            <div className="text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold">
              BAGIAN 01 · PROFIL LABORATORIUM
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420] mt-2">
              Orientasi Akademik & Piagam Keilmuan
            </h2>
            <div className="w-16 h-1 bg-[#17368A] my-4" />
            <p className="text-sm sm:text-base text-[#1F2937] leading-relaxed">
              {lab.academicDescription}
            </p>
          </div>

          <div
            className="p-8 sm:p-10 rounded-3xl text-white shadow-lg mb-10"
            style={{ backgroundColor: lab.accentHex }}
          >
            <div className="text-[10px] font-mono-code uppercase tracking-widest text-white/80 font-bold">
              VISI LABORATORIUM {lab.shortName}
            </div>
            <p className="font-editorial text-2xl sm:text-3xl font-semibold mt-2 leading-snug">
              "{lab.vision}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="soft-card p-7 sm:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#17368A]/10 text-[#17368A] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#0F1420]">
                  Misi Penyelenggaraan Lab
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#374151]">
                {lab.missions.map((m) => (
                  <li key={m} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#17368A]" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="soft-card p-7 sm:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#17368A]/10 text-[#17368A] flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-[#0F1420]">
                  Tujuan & Layanan Mahasiswa
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#374151]">
                {lab.objectives.map((obj) => (
                  <li key={obj} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#17368A]" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-64 sm:h-80 rounded-3xl overflow-hidden shadow-sm">
            <img
              src={lab.heroImage}
              alt={`Fasilitas Utama ${lab.shortName}`}
              className="w-full h-full object-cover"
            />
            <img
              src={lab.secondaryImage}
              alt={`Aktivitas ${lab.shortName}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="fokus-keilmuan" className="py-16 paper-grain text-left">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold mb-2">
              <BookOpen className="w-4 h-4" />
              <span>BAGIAN 02 · FOKUS KEILMUAN, KURIKULUM & RISET</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420]">
              Peta Jalan Riset & Alur Perkuliahan
            </h2>
            <div className="w-16 h-1 bg-[#17368A] my-4" />
          </div>

          <div className="mb-14">
            <h3 className="font-mono-code text-xs uppercase tracking-widest font-bold text-[#17368A] mb-6">
              A · Pilar Riset Utama ({lab.researchScopes.length} Fokus Keilmuan)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {lab.researchScopes.map((scope) => (
                <div
                  key={scope.code}
                  className="soft-card p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono-code mb-3">
                      <span
                        className="font-bold px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: lab.accentHex }}
                      >
                        {scope.code}
                      </span>
                      <span className="text-[#6B7280]">{scope.periodOrDomain}</span>
                    </div>
                    <h4 className="font-editorial text-2xl font-bold text-[#0F1420]">
                      {scope.title}
                    </h4>
                    <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                      {scope.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 flex flex-wrap gap-1.5 border-t border-[#EBE7DE]">
                    {scope.subtopics.map((sub) => (
                      <span
                        key={sub}
                        className="px-2.5 py-1 rounded-full bg-[#F6F5F0] text-[11px] font-medium text-[#111318]"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h3 className="font-mono-code text-xs uppercase tracking-widest font-bold text-[#17368A] mb-6">
              B · Alur Mata Kuliah & Praktikum Berjenjang
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {lab.curriculum.map((cur) => (
                <div
                  key={cur.courseName}
                  className="soft-card p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-mono-code font-bold uppercase text-white"
                        style={{ backgroundColor: lab.accentHex }}
                      >
                        {cur.semester}
                      </span>
                      <span className="text-xs font-mono-code text-[#6B7280]">
                        {cur.credits}
                      </span>
                    </div>
                    <h4 className="font-editorial text-xl font-bold text-[#0F1420] mt-1 leading-snug">
                      {cur.courseName}
                    </h4>
                    <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">{cur.focus}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-[#EBE7DE]">
                    {cur.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-full bg-[#17368A]/8 text-[11px] font-mono-code font-semibold text-[#17368A]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="plaque-frame text-white p-8 sm:p-12 text-center">
              <div className="inline-flex items-center justify-center gap-2 text-xs font-mono-code uppercase tracking-wider text-[#E5C17B] mb-3">
                <FileText className="w-4 h-4" />
                <span>C · Inspirasi Topik Skripsi & Tugas Akhir Mahasiswa {lab.shortName}</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-6">
                Contoh Judul Penelitian Mahasiswa
              </h3>
              <div className="space-y-3 max-w-3xl mx-auto text-xs sm:text-sm text-white/90 text-left">
                {lab.thesisTopics.map((topic, idx) => (
                  <div key={topic} className="p-3.5 rounded-2xl bg-white/6 leading-relaxed flex items-start gap-3">
                    <span className="font-mono-code text-[#E5C17B] font-bold shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lab.hardwareAndFacilities.map((hw) => (
                <div
                  key={hw.name}
                  className="soft-card p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#17368A]/10 text-[#17368A] flex items-center justify-center mb-3">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div className="font-editorial text-2xl font-bold text-[#0F1420]">
                      {hw.name}
                    </div>
                    <div className="text-xs font-semibold text-[#17368A] mt-1">
                      {hw.specification}
                    </div>
                    <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">{hw.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="struktur-dosen" className="py-16 ivory-surface text-left">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold mb-2">
              <Users className="w-4 h-4" />
              <span>BAGIAN 03 · DEWAN DOSEN & PENELITI</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420]">
              Struktur Organisasi Laboratorium {lab.shortName}
            </h2>
            <div className="w-16 h-1 bg-[#17368A] my-4" />
            <p className="text-xs sm:text-sm text-[#4B5563]">
              Dosen pembimbing akademik, peneliti utama, dan pembimbing tugas akhir pada peminatan{' '}
              {lab.fullName}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {lab.lecturers.map((lec) => (
              <div
                key={lec.id}
                className="soft-card p-6 sm:p-7 flex flex-col items-center text-center justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#091124] overflow-hidden shadow-lg mb-4">
                    <img
                      src={lec.photo}
                      alt={lec.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {lec.isHead && (
                    <span className="px-3.5 py-1 rounded-full bg-[#C5A059] text-[#091124] text-[10px] font-mono-code font-bold uppercase mb-2">
                      Kepala Laboratorium
                    </span>
                  )}

                  <div
                    className="text-xs font-mono-code uppercase tracking-wider font-bold"
                    style={{ color: lab.accentHex }}
                  >
                    {lec.role}
                  </div>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0F1420] mt-1">
                    {lec.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#374151] mt-2 leading-relaxed">
                    {lec.specialization}
                  </p>
                  {lec.historicalRole && (
                    <div className="mt-3 px-3.5 py-1 rounded-full bg-[#F6F5F0] text-[11px] font-mono-code text-[#4B5563]">
                      {lec.historicalRole}
                    </div>
                  )}
                </div>

                <div className="w-full mt-6 pt-4 border-t border-[#EBE7DE] space-y-2 text-xs font-mono-code">
                  <div className="flex items-center justify-center gap-2 text-[#4B5563]">
                    <Mail className="w-3.5 h-3.5 text-[#17368A]" />
                    <span className="truncate">{lec.email || lab.contactPerson.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[#4B5563]">
                    <MapPin className="w-3.5 h-3.5 text-[#17368A]" />
                    <span className="truncate">{lec.scopusArea || lab.contactPerson.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prospek-karir" className="py-16 text-left">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold mb-2">
              <Briefcase className="w-4 h-4" />
              <span>BAGIAN 04 · PROSPEK KARIR & KOMPETENSI LULUSAN</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420]">
              Peluang Profesi Lulusan Peminatan {lab.shortName}
            </h2>
            <div className="w-16 h-1 bg-[#17368A] my-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            <div className="soft-card p-7 sm:p-8 flex flex-col">
              <div className="text-xs font-mono-code uppercase tracking-widest font-bold text-[#17368A] mb-4">
                Kemampuan Teknis Utama (Hard Skills)
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#1F2937]">
                {lab.competencies.hardSkills.map((hs) => (
                  <li key={hs} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#17368A] shrink-0 mt-0.5" />
                    <span>{hs}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="soft-card p-7 sm:p-8 flex flex-col">
              <div className="text-xs font-mono-code uppercase tracking-widest font-bold text-[#17368A] mb-4">
                Karakter & Kemampuan Interpersonal (Soft Skills)
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#1F2937]">
                {lab.competencies.softSkills.map((ss) => (
                  <li key={ss} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#17368A] shrink-0 mt-0.5" />
                    <span>{ss}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {lab.careers.map((car) => (
              <div
                key={car.title}
                className="soft-card p-7 flex flex-col justify-between"
              >
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-mono-code uppercase text-white font-bold"
                    style={{ backgroundColor: lab.accentHex }}
                  >
                    {car.category}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold text-[#0F1420] mt-3">
                    {car.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                    {car.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EBE7DE]">
                  <div className="text-[10px] font-mono-code uppercase text-[#6B7280] mb-2 font-semibold">
                    Instansi & Sektor Pengguna Lulusan
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {car.employers.map((emp) => (
                      <span
                        key={emp}
                        className="px-2.5 py-1 rounded-full bg-[#F6F5F0] text-[11px] font-medium text-[#0F1420]"
                      >
                        {emp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {labAchievements.length > 0 && (
        <section className="py-16 paper-grain text-left">
          <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold mb-2">
                <Camera className="w-4 h-4" />
                <span>BAGIAN 05 · REKAM JEJAK PRESTASI RESMI</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420]">
                Capaian Unggulan Sivitas {lab.shortName}
              </h2>
              <div className="w-16 h-1 bg-[#17368A] my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {labAchievements.map((ach) => (
                <div
                  key={ach.id}
                  className="plaque-frame p-7 text-white flex flex-col justify-between"
                >
                  <div>
                    <span className="px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono-code text-[#E5C17B]">
                      {ach.category} · {ach.year}
                    </span>
                    <h3 className="font-editorial text-2xl font-bold text-white mt-3">
                      {ach.title}
                    </h3>
                    <div className="text-xs font-mono-code text-[#E5C17B] mt-1">
                      {ach.recipient}
                    </div>
                    <p className="text-xs text-white/80 mt-2 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-[#070E1E] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <div className="text-xs font-mono-code uppercase tracking-widest text-[#E5C17B]">
            NAVIGASI DIREKTORI LABORATORIUM
          </div>
          <h3 className="font-editorial text-2xl sm:text-4xl font-bold">
            Ingin Menjelajahi Laboratorium Lainnya?
          </h3>
          <p className="text-xs sm:text-sm text-white/75 max-w-xl">
            Kunjungi direktori empat laboratorium untuk membandingkan spesialisasi, fasilitas praktikum,
            dan fokus riset antar-bidang.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/directory"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#E5C17B] text-[#091124] text-xs font-mono-code uppercase tracking-wider font-bold transition hover:bg-[#d4b06a]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Direktori 4 Lab</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white text-xs font-mono-code uppercase tracking-wider hover:bg-white/20 transition"
            >
              <span>Beranda Portal</span>
            </Link>
          </div>
        </div>
      </section>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-[#091124]/90 flex items-center justify-center p-4 text-center"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="bg-[#FAF9F5] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#091124] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="font-editorial text-xl font-bold">{lightboxItem.title}</h3>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="p-2 rounded-full text-white/75 hover:text-white bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black max-h-[65vh] flex items-center justify-center">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>
            <div className="p-5 text-xs sm:text-sm text-[#374151]">{lightboxItem.subtitle}</div>
          </div>
        </div>
      )}
    </main>
  );
};
