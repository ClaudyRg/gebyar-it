import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Cpu,
  Globe,
  Network,
  BrainCircuit,
  Code2,
  ArrowUpRight,
  Scale,
  CheckCircle2
} from 'lucide-react';
import { SYNERGY_BLUEPRINT, LABS_DATA, LabId } from '../data/labsData';

export const SynergyAndComparison: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(2);
  const activeNode = SYNERGY_BLUEPRINT.nodes[activeNodeIndex];
  const labIds: LabId[] = ['se', 'csn', 'git', 'keris'];

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'se':
        return <Code2 className="w-4 h-4" />;
      case 'csn':
        return <Network className="w-4 h-4" />;
      case 'git':
        return <Globe className="w-4 h-4" />;
      case 'keris':
        return <BrainCircuit className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <>
      <section id="synergy-blueprint" className="py-20 paper-grain text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto mb-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold mb-2">
              <Layers className="w-4 h-4" />
              <span>Arsitektur Kolaborasi Lintas Disiplin · 5 Laboratorium</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420] tracking-tight">
              {SYNERGY_BLUEPRINT.title}
            </h2>
            <div className="w-16 h-1 bg-[#17368A] rounded-full mx-auto my-4" />
            <p className="text-sm text-[#374151] leading-relaxed">
              {SYNERGY_BLUEPRINT.subtitle}. Setiap laboratorium di Program Studi Teknik Informatika
              UIKA Bogor saling menguatkan dalam satu cetak biru riset terpadu.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {SYNERGY_BLUEPRINT.nodes.map((node, index) => {
              const isSelected = activeNodeIndex === index;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNodeIndex(index)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-code uppercase tracking-wider transition cursor-pointer ${
                    isSelected
                      ? 'bg-[#091124] text-white font-bold shadow-md'
                      : 'bg-white text-[#374151] hover:bg-[#EBE7DE] shadow-2xs'
                  }`}
                >
                  <span style={{ color: isSelected ? '#E5C17B' : node.accent }}>
                    {getNodeIcon(node.id)}
                  </span>
                  <span>{node.name}</span>
                </button>
              );
            })}
          </div>

          <div className="soft-card p-8 sm:p-12 text-center max-w-5xl mx-auto">
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-mono-code text-white font-semibold"
              style={{ backgroundColor: activeNode.accent }}
            >
              {activeNode.labCode} · {activeNode.role}
            </span>

            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#0F1420] mt-4">
              {activeNode.name}
            </h3>

            <p className="text-xs font-mono-code uppercase tracking-wider text-[#6B7280] mt-2 mb-6">
              Kontribusi Teknis dalam Ekosistem Smart City Digital Twin
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-4xl mx-auto text-left">
              {activeNode.contributions.map((item) => (
                <div
                  key={item}
                  className="p-4 rounded-2xl bg-[#F6F5F0] flex items-start text-left gap-3"
                >
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: activeNode.accent }}
                  />
                  <span className="text-xs sm:text-sm font-medium text-[#111318] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-[#091124] text-white max-w-4xl mx-auto text-left">
              <div className="text-[10px] font-mono-code uppercase tracking-widest text-[#E5C17B]">
                LUARAN KONKRET INTEGRASI (CONCRETE DELIVERABLE)
              </div>
              <p className="font-editorial text-xl sm:text-2xl italic text-white mt-2 leading-relaxed">
                "{activeNode.concreteOutput}"
              </p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-3">
              <p className="text-xs italic text-[#4B5563] max-w-xl">
                "{SYNERGY_BLUEPRINT.quote}"
              </p>
              {activeNode.id !== 'multimedia' && (
                <Link
                  to={`/lab/${activeNode.id}`}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#17368A] text-white text-xs font-mono-code uppercase tracking-wider font-semibold hover:bg-[#091124] transition"
                >
                  <span>Eksplorasi Lab {activeNode.id.toUpperCase()}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="compare-labs" className="py-20 ivory-surface text-center">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto mb-14 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-[0.2em] text-[#17368A] font-bold mb-2">
              <Scale className="w-4 h-4" />
              <span>Ikhtisar Perbandingan · 4 Peminatan Utama</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0F1420]">
              Matriks Komparasi Empat Laboratorium
            </h2>
            <div className="w-16 h-1 bg-[#17368A] rounded-full mx-auto my-4" />
            <p className="text-xs sm:text-sm text-[#4B5563]">
              Perbandingan berdampingan mencakup profil kelompok riset, kepemimpinan, fasilitas
              perangkat keras, serta prospek lulusan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 lg:gap-8">
            {labIds.map((id) => {
              const lab = LABS_DATA[id];
              return (
                <div
                  key={id}
                  className="soft-card p-7 sm:p-8 flex flex-col justify-between text-left transition hover:-translate-y-1"
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="px-3.5 py-1 rounded-full text-[10px] font-mono-code uppercase tracking-wider text-white font-bold"
                        style={{ backgroundColor: lab.accentHex }}
                      >
                        Peminatan {lab.shortName}
                      </span>
                      <span className="text-[10px] font-mono-code text-[#6B7280]">
                        {lab.shortName}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl lg:text-[26px] font-bold text-[#0F1420] mt-3.5 leading-snug">
                      {lab.fullName}
                    </h3>
                    <div className="text-xs text-[#6B7280] mt-1 font-medium">{lab.researchGroupBrand}</div>

                    <p
                      className="font-editorial italic text-sm text-[#17368A] mt-3.5 border-l-2 pl-3 py-0.5 leading-relaxed"
                      style={{ borderColor: lab.accentHex }}
                    >
                      "{lab.motto}"
                    </p>

                    <div className="w-full h-px bg-[#EBE7DE] my-4" />

                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#6B7280]">
                        Kepala Laboratorium
                      </div>
                      <div className="text-xs font-bold text-[#0F1420]">
                        {lab.contactPerson.name}
                      </div>
                      <div className="text-[11px] text-[#4B5563]">
                        Didukung {lab.lecturers.length} Dosen Peneliti
                      </div>
                    </div>

                    <div className="mt-4 p-4 rounded-2xl bg-[#F6F5F0] space-y-1.5">
                      <div className="text-[10px] font-mono-code uppercase tracking-wider font-bold text-[#17368A]">
                        Fasilitas Utama
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#1F2937]">
                        {lab.hardwareAndFacilities.map((hw) => (
                          <li key={hw.name} className="flex items-start gap-2 leading-snug">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                              style={{ backgroundColor: lab.accentHex }}
                            />
                            <span>{hw.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="text-[10px] font-mono-code uppercase tracking-wider font-bold text-[#17368A]">
                        Prospek Profesi
                      </div>
                      <div className="flex flex-wrap gap-1.5 justify-start">
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

                  <Link
                    to={`/lab/${id}`}
                    className="mt-6 w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-white text-xs font-mono-code uppercase tracking-wider font-semibold transition hover:opacity-95 shadow-xs"
                    style={{ backgroundColor: lab.accentHex }}
                  >
                    <span>Buka Lab {lab.shortName}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
