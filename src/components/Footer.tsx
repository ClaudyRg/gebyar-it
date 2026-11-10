import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ArrowUpRight
} from 'lucide-react';
import { LABS_DATA, LabId } from '../data/labsData';

export const Footer: React.FC = () => {
  const labIds: LabId[] = ['se', 'csn', 'git', 'keris'];

  return (
    <footer id="official-footer" className="bg-[#070D1C] text-[#D8D4C8] text-center">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="flex flex-col items-center max-w-3xl mx-auto mb-12">
          <div className="w-16 h-16 rounded-2xl bg-[#091124] p-2 flex items-center justify-center shadow-lg mb-4">
            <img
              src="./assets/uika-crest.png"
              alt="Lambang UIKA Bogor"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-[10px] font-mono-code uppercase tracking-[0.25em] text-[#E5C17B]">
            FAKULTAS TEKNIK DAN SAINS
          </div>
          <div className="font-editorial text-3xl sm:text-4xl font-bold text-white mt-1">
            Program Studi Teknik Informatika
          </div>
          <div className="text-xs sm:text-sm text-white/70 mt-1">
            Universitas Ibn Khaldun (UIKA) Bogor
          </div>

          <p className="text-xs sm:text-sm text-white/75 leading-relaxed mt-4 max-w-2xl">
            Portal Direktori Resmi Empat Laboratorium & Peminatan Keilmuan: Software Engineering
            (SE), Computer System & Networking (CSN), Geospatial Information Technology (GIT), dan
            Knowledge Engineering & Reliable Intelligent Systems (KERIS).
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-white/85">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/6">
              <MapPin className="w-3.5 h-3.5 text-[#E5C17B] shrink-0" />
              <span>Jl. Sholeh Iskandar KM. 2, Kedung Badak, Kota Bogor 16162</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/6">
              <Mail className="w-3.5 h-3.5 text-[#E5C17B] shrink-0" />
              <span>berlina@uika-bogor.ac.id · informatika@uika-bogor.ac.id</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/6">
              <Phone className="w-3.5 h-3.5 text-[#E5C17B] shrink-0" />
              <span>0858-8588-4433 (Lab SE) · 0812-1280-1389 (CP Gebyar IT)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {labIds.map((id) => {
            const lab = LABS_DATA[id];
            return (
              <Link
                key={id}
                to={`/lab/${id}`}
                className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition flex flex-col items-center text-center justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono-code text-[#E5C17B] uppercase tracking-wider">
                    Peminatan {lab.shortName}
                  </div>
                  <div className="font-editorial text-xl font-semibold text-white group-hover:text-[#60A5FA] mt-1">
                    {lab.fullName} ({lab.shortName})
                  </div>
                  <div className="text-[11px] text-white/65 mt-1">
                    KaLab: {lab.contactPerson.name}
                  </div>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-mono-code text-[#E5C17B]">
                  <span>Buka Lab</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
