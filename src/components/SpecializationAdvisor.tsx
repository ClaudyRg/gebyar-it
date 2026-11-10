import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  CheckCircle2,
  RotateCcw,
  Download,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  FileText,
  UserCheck,
  Check
} from 'lucide-react';
import { ADVISOR_QUESTIONS, LABS_DATA, LabId } from '../data/labsData';

export const SpecializationAdvisor: React.FC = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [studentName, setStudentName] = useState('');
  const [studentNim, setStudentNim] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const currentQuestion = ADVISOR_QUESTIONS[activeQuestionIndex];

  const handleSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    if (activeQuestionIndex < ADVISOR_QUESTIONS.length - 1) {
      setTimeout(() => {
        setActiveQuestionIndex((prev) => Math.min(prev + 1, ADVISOR_QUESTIONS.length - 1));
      }, 250);
    }
  };

  const calculateScores = () => {
    const raw: Record<LabId, number> = { se: 10, csn: 10, git: 10, keris: 10 };
    ADVISOR_QUESTIONS.forEach((q) => {
      const idx = selectedAnswers[q.id];
      if (idx !== undefined) {
        const weights = q.options[idx].weights;
        raw.se += weights.se;
        raw.csn += weights.csn;
        raw.git += weights.git;
        raw.keris += weights.keris;
      }
    });
    const total = raw.se + raw.csn + raw.git + raw.keris;
    const percentages: Record<LabId, number> = {
      se: Math.round((raw.se / total) * 100),
      csn: Math.round((raw.csn / total) * 100),
      git: Math.round((raw.git / total) * 100),
      keris: Math.round((raw.keris / total) * 100)
    };
    const sorted = (Object.keys(raw) as LabId[]).sort((a, b) => raw[b] - raw[a]);
    return {
      percentages,
      primaryLab: LABS_DATA[sorted[0]],
      secondaryLab: LABS_DATA[sorted[1]],
      sortedIds: sorted
    };
  };

  const results = calculateScores();
  const answeredCount = Object.keys(selectedAnswers).length;

  const downloadAcademicDossier = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1200;
    canvas.height = 675;

    ctx.fillStyle = '#091124';
    ctx.fillRect(0, 0, 1200, 675);

    ctx.fillStyle = results.primaryLab.accentHex;
    ctx.fillRect(0, 0, 1200, 110);

    ctx.fillStyle = '#E5C17B';
    ctx.font = '600 13px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('UNIVERSITAS IBN KHALDUN BOGOR · FAKULTAS TEKNIK DAN SAINS', 600, 48);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 28px Georgia, serif';
    ctx.fillText('LEMBAR REKOMENDASI PEMINATAN & LABORATORIUM RISET', 600, 84);

    ctx.fillStyle = '#FAF9F5';
    ctx.fillRect(80, 145, 1040, 460);

    ctx.fillStyle = '#17368A';
    ctx.font = '600 13px "JetBrains Mono", monospace';
    ctx.fillText(`DOSSIER AKADEMIK · ${results.primaryLab.shortName}`, 600, 188);

    ctx.fillStyle = '#0F1420';
    ctx.font = 'bold 34px Georgia, serif';
    ctx.fillText(studentName || 'Mahasiswa Teknik Informatika', 600, 228);

    ctx.fillStyle = '#4B5563';
    ctx.font = '500 15px sans-serif';
    ctx.fillText(studentNim || 'Program Studi Teknik Informatika UIKA Bogor', 600, 254);

    ctx.fillStyle = results.primaryLab.accentHex;
    ctx.font = 'bold 30px Georgia, serif';
    ctx.fillText(
      `Rekomendasi Utama: ${results.primaryLab.fullName} (${results.primaryLab.shortName})`,
      600,
      305
    );

    ctx.fillStyle = '#374151';
    ctx.font = 'italic 17px Georgia, serif';
    ctx.fillText(`"${results.primaryLab.motto}"`, 600, 334);

    ctx.font = '600 14px sans-serif';
    ctx.fillText(
      `Kepala Laboratorium: ${results.primaryLab.contactPerson.name}  |  Sinergi Sekunder: ${results.secondaryLab.fullName}`,
      600,
      368
    );

    results.sortedIds.forEach((id, idx) => {
      const lab = LABS_DATA[id];
      const pct = results.percentages[id];
      const colX = 190 + idx * 270;

      ctx.fillStyle = '#0F1420';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText(`${lab.shortName} (${pct}%)`, colX, 430);

      ctx.fillStyle = '#E5E0D5';
      ctx.fillRect(colX - 80, 445, 160, 12);

      ctx.fillStyle = lab.accentHex;
      ctx.fillRect(colX - 80, 445, Math.round((160 * pct) / 100), 12);
    });

    ctx.fillStyle = '#17368A';
    ctx.font = '600 13px "JetBrains Mono", monospace';
    ctx.fillText(
      `Prospek Karir: ${results.primaryLab.careers
        .slice(0, 3)
        .map((c) => c.title)
        .join(' · ')}`,
      600,
      515
    );

    ctx.fillStyle = '#6B7280';
    ctx.font = '12px "JetBrains Mono", monospace';
    ctx.fillText(
      'Diterbitkan melalui Portal Resmi Gebyar IT 2026 — Program Studi Teknik Informatika UIKA Bogor',
      600,
      572
    );

    const link = document.createElement('a');
    link.download = `Dossier-Peminatan-${results.primaryLab.shortName}-UIKA-2026.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section
      id="specialization-advisor"
      className="py-20 oxford-navy-surface text-white relative"
    >
      <canvas ref={canvasRef} className="hidden" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/15 text-[#E5C17B] text-xs font-mono-code uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Instrumen Akademik Interaktif · Pemilihan Peminatan</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Asesmen Kesesuaian Peminatan & Riset Mahasiswa
          </h2>
          <div className="w-16 h-1 bg-[#C5A059] my-4" />
          <p className="text-sm text-white/75 leading-relaxed max-w-3xl">
            Pilih preferensi studi kasus di panel sebelah kiri untuk melihat rekomendasi
            peminatan utama, peta kompatibilitas 4 laboratorium, dan mengunduh{' '}
            <strong className="text-[#E5C17B]">Kartu Dossier Akademik Resmi</strong> secara
            real-time pada panel sebelah kanan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="soft-glass-dark p-6 rounded-2xl border border-white/10">
              <div className="text-xs font-mono-code uppercase tracking-wider text-[#E5C17B] mb-3 flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                <span>Identitas Mahasiswa Pengisi Asesmen</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono-code text-white/70 mb-1">
                    Nama Lengkap Mahasiswa
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Nama Lengkap Mahasiswa"
                    className="w-full bg-white/8 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono-code text-white/70 mb-1">
                    NPM / Angkatan
                  </label>
                  <input
                    type="text"
                    value={studentNim}
                    onChange={(e) => setStudentNim(e.target.value)}
                    placeholder="NPM / Angkatan"
                    className="w-full bg-white/8 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                  />
                </div>
              </div>
            </div>

            <div className="soft-glass-dark p-6 sm:p-8 rounded-2xl border border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono-code uppercase tracking-wider text-[#E5C17B] font-bold">
                    Kasus {activeQuestionIndex + 1} dari {ADVISOR_QUESTIONS.length}
                  </span>
                  <span className="text-xs text-white/40">·</span>
                  <span className="text-xs font-mono-code text-white/70">
                    {currentQuestion.domain}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {ADVISOR_QUESTIONS.map((q, idx) => {
                    const isAnswered = selectedAnswers[q.id] !== undefined;
                    const isActive = activeQuestionIndex === idx;
                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => setActiveQuestionIndex(idx)}
                        className={`w-8 h-8 rounded-lg text-xs font-mono-code font-bold transition flex items-center justify-center cursor-pointer ${
                          isActive
                            ? 'bg-[#C5A059] text-[#091124] shadow-md ring-2 ring-white/20'
                            : isAnswered
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-white/10 text-white/60 hover:bg-white/20'
                        }`}
                      >
                        {isAnswered && !isActive ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          idx + 1
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/8 mb-5">
                <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#E5C17B] font-bold mb-1">
                  SKENARIO RISET & PENGEMBANGAN
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  {currentQuestion.scenario}
                </p>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                {currentQuestion.question}
              </h3>

              <div className="space-y-3">
                {currentQuestion.options.map((opt, optIdx) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === optIdx;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleSelect(currentQuestion.id, optIdx)}
                      className={`w-full p-4 rounded-2xl transition flex items-start gap-3.5 text-left cursor-pointer border ${
                        isSelected
                          ? 'bg-[#17368A] text-white shadow-lg border-[#C5A059] ring-2 ring-[#C5A059]/50'
                          : 'bg-white/6 text-white/90 hover:bg-white/12 border-white/8'
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-mono-code font-bold mt-0.5 ${
                          isSelected
                            ? 'bg-[#C5A059] text-[#091124]'
                            : 'bg-white/10 text-white/75'
                        }`}
                      >
                        {opt.label}
                      </span>
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm font-semibold leading-relaxed">
                          {opt.text}
                        </div>
                        <div className="text-[11px] text-white/60 mt-1 font-mono-code">
                          {opt.subtext}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  disabled={activeQuestionIndex === 0}
                  onClick={() => setActiveQuestionIndex((prev) => Math.max(0, prev - 1))}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider transition ${
                    activeQuestionIndex === 0
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-white/10 cursor-pointer text-white/80'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Sebelumnya</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedAnswers({});
                    setActiveQuestionIndex(0);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider text-white/60 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Jawaban</span>
                </button>

                <button
                  type="button"
                  disabled={activeQuestionIndex === ADVISOR_QUESTIONS.length - 1}
                  onClick={() =>
                    setActiveQuestionIndex((prev) =>
                      Math.min(ADVISOR_QUESTIONS.length - 1, prev + 1)
                    )
                  }
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider transition ${
                    activeQuestionIndex === ADVISOR_QUESTIONS.length - 1
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-white/10 cursor-pointer text-[#E5C17B]'
                  }`}
                >
                  <span>Selanjutnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 text-left sticky top-24">
            <div className="soft-card text-[#0F1420] p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/20">
              <div className="flex items-center justify-between pb-4 border-b border-[#EBE7DE]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#17368A]/10 text-[#17368A] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#17368A] font-bold">
                      HASIL ANALISIS REAL-TIME
                    </div>
                    <div className="font-editorial text-lg font-bold text-[#0F1420]">
                      Dossier Rekomendasi Peminatan
                    </div>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-bold bg-[#17368A]/10 text-[#17368A]">
                  {answeredCount}/{ADVISOR_QUESTIONS.length} Terjawab
                </span>
              </div>

              <div
                className="mt-5 p-5 rounded-2xl text-white shadow-sm"
                style={{ backgroundColor: results.primaryLab.accentHex }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-code uppercase tracking-widest text-[#E5C17B] font-bold">
                    REKOMENDASI UTAMA
                  </span>
                  <span className="text-xs font-mono-code bg-white/20 px-2 py-0.5 rounded-full">
                    Kecocokan {results.percentages[results.primaryLab.id]}%
                  </span>
                </div>
                <h3 className="font-editorial text-2xl font-bold text-white mt-1.5 leading-snug">
                  {results.primaryLab.fullName} ({results.primaryLab.shortName})
                </h3>
                <div className="text-xs text-white/80 mt-0.5">
                  {results.primaryLab.researchGroupBrand}
                </div>
                <p className="font-editorial italic text-xs sm:text-sm text-white/90 mt-2.5 border-l-2 border-[#E5C17B] pl-2.5">
                  "{results.primaryLab.motto}"
                </p>
              </div>

              <div className="mt-5 space-y-2.5">
                <div className="text-[10px] font-mono-code uppercase tracking-wider font-bold text-[#6B7280]">
                  Distribusi Kompatibilitas 4 Laboratorium
                </div>
                {results.sortedIds.map((id) => {
                  const lab = LABS_DATA[id];
                  const pct = results.percentages[id];
                  return (
                    <div key={id} className="p-2.5 rounded-xl bg-[#F6F5F0]">
                      <div className="flex items-center justify-between text-xs font-bold text-[#0F1420] mb-1">
                        <span>
                          {lab.shortName} · {lab.fullName}
                        </span>
                        <span className="font-mono-code text-[#17368A]">{pct}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#E5E0D5] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: lab.accentHex
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 p-4 rounded-xl bg-[#F6F5F0] space-y-1.5 text-xs text-[#374151]">
                <div>
                  <strong className="text-[#0F1420]">Kepala Laboratorium: </strong>
                  {results.primaryLab.contactPerson.name}
                </div>
                <div>
                  <strong className="text-[#0F1420]">Sinergi Sekunder: </strong>
                  {results.secondaryLab.fullName}
                </div>
                <div className="line-clamp-2">
                  <strong className="text-[#0F1420]">Inspirasi Skripsi: </strong>
                  {results.primaryLab.thesisTopics[0]}
                </div>
              </div>

              <div className="mt-6 space-y-2.5">
                <button
                  type="button"
                  onClick={downloadAcademicDossier}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#17368A] hover:bg-[#091124] text-white text-xs font-mono-code uppercase tracking-wider font-semibold py-3 px-5 rounded-full transition shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#E5C17B]" />
                  <span>Unduh Kartu Dossier (PNG)</span>
                </button>

                <Link
                  to={`/lab/${results.primaryLab.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF9F5] hover:bg-[#EBE7DE] text-[#0F1420] border border-[#EBE7DE] text-xs font-mono-code uppercase tracking-wider font-semibold py-3 px-5 rounded-full transition"
                >
                  <FileText className="w-4 h-4" />
                  <span>Buka Halaman Lab {results.primaryLab.shortName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
