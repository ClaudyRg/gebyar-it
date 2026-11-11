import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  ArrowUpRight
} from 'lucide-react';
import {
  ACHIEVEMENTS_DATA,
  LABS_DATA
} from '../data/labsData';

export const ArchiveAndNewsSection: React.FC = () => {
  return (
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
  );
};
