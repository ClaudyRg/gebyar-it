export type LabId = 'se' | 'csn' | 'git' | 'keris';

export interface Lecturer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  photo: string;
  isHead?: boolean;
  historicalRole?: string;
  email?: string;
  phone?: string;
  scopusArea?: string;
}

export interface CareerProspect {
  title: string;
  category: string;
  description: string;
  employers: string[];
}

export interface ResearchScope {
  code: string;
  title: string;
  periodOrDomain: string;
  summary: string;
  subtopics: string[];
}

export interface CurriculumItem {
  semester: string;
  courseName: string;
  credits: string;
  focus: string;
  tools: string[];
}

export interface AchievementItem {
  id: string;
  year: string;
  title: string;
  recipient: string;
  category: 'Pendanaan & Hibah' | 'Kompetisi Nasional' | 'Sertifikasi & MBKM' | 'Akademik & Lulusan' | 'Produk & Sistem';
  description: string;
  image?: string;
  labId: LabId;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Fasilitas' | 'Produk & Sistem' | 'Prestasi' | 'Kegiatan & Riset';
  labId: LabId;
  year: string;
  image: string;
}

export interface HardwareFacility {
  name: string;
  specification: string;
  purpose: string;
}

export interface LabData {
  id: LabId;
  code: string;
  shortName: string;
  fullName: string;
  researchGroupBrand: string;
  tagline: string;
  motto: string;
  accentHex: string;
  secondaryHex: string;
  badgeBg: string;
  heroImage: string;
  secondaryImage: string;
  executiveSummary: string;
  academicDescription: string;
  vision: string;
  missions: string[];
  objectives: string[];
  servicesAndActivities: string[];
  competencies: {
    hardSkills: string[];
    softSkills: string[];
  };
  lecturers: Lecturer[];
  careers: CareerProspect[];
  researchScopes: ResearchScope[];
  curriculum: CurriculumItem[];
  thesisTopics: string[];
  hardwareAndFacilities: HardwareFacility[];
  contactPerson: {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
  };
}

export interface AdvisorQuestion {
  id: number;
  domain: string;
  scenario: string;
  question: string;
  options: {
    label: string;
    text: string;
    subtext: string;
    weights: Record<LabId, number>;
  }[];
}

export interface AcademicEvent {
  date: string;
  dayNumber: number;
  month: string;
  title: string;
  category: 'Kompetisi' | 'Kolokium Riset' | 'Praktikum Lapangan' | 'Akademik';
  lab: string;
  location: string;
  description: string;
}

export const DEPARTMENT_METRICS = [
  {
    value: '04 + 1',
    label: 'Laboratorium Riset & Sinergi',
    detail: 'SE, CSN, GIT, KERIS & kolaborasi lintas lab Multimedia'
  },
  {
    value: '21',
    label: 'Dosen & Peneliti Aktif',
    detail: 'Kualifikasi Doktor (S3) dan Magister (S2) tersertifikasi'
  },
  {
    value: 'Rp 140 Jt+',
    label: 'Inkubasi & Hibah Riset',
    detail: 'Best Capstone Bangkit by Google, Hibah PKM Belmawa & LLDIKTI'
  },
  {
    value: '40+',
    label: 'Produk & Publikasi Terapan',
    detail: 'SIAK, SIMPEG, Korlantas Polri, BPS, WebGIS & Sistem Cerdas'
  }
];

export const LABS_DATA: Record<LabId, LabData> = {
  se: {
    id: 'se',
    code: 'Software Engineering',
    shortName: 'SE',
    fullName: 'Software Engineering',
    researchGroupBrand: 'RISE Center & InnoSoft Laboratory',
    tagline: 'Rekayasa Perangkat Lunak, Arsitektur Enterprise, Mobile & Smart Campus',
    motto: 'Build Your Skill, Build Your Product',
    accentHex: '#17368A',
    secondaryHex: '#2563EB',
    badgeBg: '#EBF0FA',
    heroImage: './assets/fasilitas/se-1.jpg',
    secondaryImage: './assets/fasilitas/se-2.jpg',
    executiveSummary:
      'Laboratorium Software Engineering (RISE Center / InnoSoft) berfokus pada pengembangan keilmuan dan rekayasa perangkat lunak modern yang terukur, berorientasi objek, serta berdampak langsung pada ekosistem Smart Campus dan mitra nasional.',
    academicDescription:
      'Laboratorium Software Engineering merupakan pusat keunggulan rekayasa perangkat lunak di Program Studi Teknik Informatika Fakultas Teknik dan Sains Universitas Ibn Khaldun (UIKA) Bogor. Mahasiswa ditempa tidak hanya menguasai sintaks pemrograman, melainkan merancang arsitektur sistem berskala instansi, menerapkan prinsip UI/UX berbasis riset pengguna, membangun aplikasi lintas platform (Web & Mobile Native/Hybrid), serta menghilirisasi produk riset menjadi sistem produksi nyata seperti SIAK, SIMPEG, sistem Korlantas Polri, dan portal Badan Pusat Statistik (BPS).',
    vision:
      'Menghasilkan riset unggulan berbasis teknologi web, mobile, dan kecerdasan buatan untuk mendukung pengembangan Smart Campus.',
    missions: [
      'Menyelenggarakan pendidikan akademik dan praktikum keahlian bidang teknologi web, mobile, dan kecerdasan buatan.',
      'Menyelenggarakan kegiatan sharing knowledge alumni untuk meningkatkan pengalaman dan keahlian mahasiswa agar terus berkembang, berdaya saing global, berakhlak mulia, dan berjiwa kewirausahaan.',
      'Mengembangkan penelitian di bidang teknologi web, mobile, dan kecerdasan buatan yang terpadu, produktif, dan terukur yang dapat diterapkan di lingkungan kampus.',
      'Menyelenggarakan pengabdian kepada masyarakat sebagai bentuk keterlibatan perguruan tinggi dalam pengamalan ilmu pengetahuan, teknologi, dan seni (IPTEKS).',
      'Menyelenggarakan kemitraan dengan dunia usaha dan menjaga hubungan dengan alumni untuk mendukung kegiatan akademik dan non-akademik.'
    ],
    objectives: [
      'Penyelarasan topik skripsi mahasiswa Teknik Informatika pada domain Rekayasa Perangkat Lunak.',
      'Menyediakan fasilitas penelitian DIPA, desentralisasi, PKM, dan finalisasi publikasi ilmiah mahasiswa serta dosen.',
      'Menyelenggarakan Open Dialog bersama pakar industri dan praktisi teknologi untuk wawasan rekayasa nyata.',
      'Melahirkan produk perangkat lunak institusional yang siap diadopsi oleh kampus, pemerintah, dan industri.'
    ],
    servicesAndActivities: [
      'Open Dialog bersama pakar rekayasa perangkat lunak dan alumni industri teknologi.',
      'Penyediaan sarana riset mahasiswa (Skripsi, PKM, Hibah DIPA, dan Inkubasi Startup).',
      'Klinik kode, seminar progres skripsi, pameran poster riset, serta tradisi penyambutan wisudawan RPL.',
      'Pengembangan sistem informasi strategis kampus (SIAK, SIMPEG, Website Prodi, Aplikasi Mobile UCL, Support PMB).'
    ],
    competencies: {
      hardSkills: [
        'Merancang dan membangun arsitektur website profil instansi, korporasi, dan portal layanan publik.',
        'Membangun sistem pengolahan data berskala enterprise berbasis web dan web service (REST/GraphQL).',
        'Mengembangkan aplikasi perangkat bergerak (Mobile Apps) baik secara Native (Android) maupun Hybrid.',
        'Mendesain antarmuka pengguna berdasarkan kaidah perancangan User Interface & User Experience (UI/UX) modern.',
        'Menganalisis kebutuhan sistem dan memodelkannya ke dalam perancangan berorientasi objek (OOP & UML).',
        'Mengkombinasikan multi-bahasa pemrograman dan basis data untuk menghasilkan performa aplikasi yang optimal.'
      ],
      softSkills: [
        'Kemampuan kolaborasi lintas fungsi dalam tim agile (Teamwork) maupun eksekusi mandiri.',
        'Komunikasi teknis dan publik yang artikulatif, jujur, berdedikasi, dan memiliki integritas tinggi.',
        'Hasrat belajar berkelanjutan (lifelong learning) terhadap evolusi framework dan arsitektur baru.',
        'Berpikir analitis dan logis (Analytical & Logical Thinking) dalam memecahkan bottleneck sistem.',
        'Keterampilan interpersonal dan kepemimpinan proyek teknologi.'
      ]
    },
    lecturers: [
      {
        id: 'berlina',
        name: 'Berlina Wulandari, S.T., M.Kom.',
        role: 'Kepala Laboratorium Software Engineering',
        specialization: 'System Analyst, Enterprise Architecture & Software Engineering',
        photo: './assets/dosen/berlina.jpg',
        isHead: true,
        email: 'berlina@uika-bogor.ac.id',
        phone: '0858-8588-4433'
      },
      {
        id: 'safaruddin',
        name: 'Safaruddin Hidayat Al Ikhsan, S.Kom., M.Kom.',
        role: 'Dosen Peneliti Senior SE',
        specialization: 'Mobile Programming, Cross-Platform Architecture & Smart Systems',
        photo: './assets/dosen/safaruddin.jpg',
        historicalRole: 'Kepala Lab InnoSoft Periode 2020–2024'
      },
      {
        id: 'fitrah',
        name: 'Fitrah Satrya Fajar Kusumah, S.Kom., M.Kom.',
        role: 'Dosen Peneliti SE',
        specialization: 'System Analyst, Object-Oriented Engineering & E-Government Systems',
        photo: './assets/dosen/fitrah.jpg'
      },
      {
        id: 'hersanto',
        name: 'Hersanto Fajri, S.Ds., M.M.D.',
        role: 'Dosen Peneliti SE & Multimedia',
        specialization: 'Multimedia Design, UI/UX Research, Interactive Visual Media & AR',
        photo: './assets/dosen/hersanto.jpg'
      },
      {
        id: 'freza',
        name: 'Freza Riana, S.Si., M.Si. / M.Kom.',
        role: 'Dosen Peneliti SE',
        specialization: 'Mathematics, Statistical Computing & Algorithmic Analysis',
        photo: './assets/dosen/freza.jpg'
      }
    ],
    careers: [
      {
        title: 'Fullstack & Backend Software Engineer',
        category: 'Engineering',
        description: 'Merancang layanan mikro, RESTful API, arsitektur database terdistribusi, dan aplikasi web skala tinggi.',
        employers: ['GoTo', 'Traveloka', 'Perbankan Digital', 'BUMN & Instansi Pemerintah']
      },
      {
        title: 'Mobile Application Developer (Android / iOS)',
        category: 'Mobile',
        description: 'Membangun aplikasi mobile native (Kotlin/Swift) maupun multiplatform dengan integrasi sensor dan pembayaran digital.',
        employers: ['Startup Unicorn', 'Software House Nasional', 'E-Commerce', 'Fintech']
      },
      {
        title: 'UI/UX Designer & Frontend Architect',
        category: 'Product & Design',
        description: 'Menerjemahkan riset perilaku pengguna menjadi design system presisi dan antarmuka web interaktif berkinerja tinggi.',
        employers: ['Digital Agency', 'Product Tech Company', 'Konsultan Transformasi Digital']
      },
      {
        title: 'System Analyst & Software Quality Assurance',
        category: 'Architecture & QA',
        description: 'Memetakan spesifikasi kebutuhan bisnis menjadi cetak biru teknis serta menjamin reliabilitas perangkat lunak.',
        employers: ['Kementerian / Lembaga', 'Korporasi Multinasional', 'Konsultan TI']
      },
      {
        title: 'Database Developer & IT Technopreneur',
        category: 'Data & Venture',
        description: 'Mengelola gudang data transaksional atau mendirikan usaha rintisan (startup) berbasis produk perangkat lunak.',
        employers: ['Founder Startup', 'BPS', 'Enterprise Data Center']
      }
    ],
    researchScopes: [
      {
        code: 'SE-01',
        title: 'Web Engineering & Semantic Systems',
        periodOrDomain: 'Pilar Riset Utama 01',
        summary: 'Pengembangan arsitektur aplikasi web modern, layanan terdistribusi, dan web semantik.',
        subtopics: ['Web Programming', 'Web Design', 'Web Service Development', 'Semantic Web & Ontology']
      },
      {
        code: 'SE-02',
        title: 'Mobile Engineering & Ubiquitous Apps',
        periodOrDomain: 'Pilar Riset Utama 02',
        summary: 'Rekayasa perangkat lunak bergerak untuk layanan akademik, geospasial, komersial, dan interaktif.',
        subtopics: ['Mobile Apps (Native & Hybrid)', 'Mobile GIS', 'Mobile Game Development', 'Mobile Commerce']
      },
      {
        code: 'SE-03',
        title: 'UI/UX & Human-Centered Interaction',
        periodOrDomain: 'Pilar Riset Utama 03',
        summary: 'Metode perancangan berpusat pada manusia, evaluasi ketergunaan (usability), dan sistem desain visual.',
        subtopics: ['Interactive Prototyping', 'Visual Design System', 'Usability Heuristics', 'Design Thinking']
      },
      {
        code: 'SE-04',
        title: 'Augmented Reality & Digital Media',
        periodOrDomain: 'Pilar Riset Utama 04',
        summary: 'Komputasi visual, pengolahan citra/teks, dan pengenalan pola untuk media interaktif.',
        subtopics: ['Image Processing', 'Text Processing', 'Pattern Recognition', 'Augmented Reality (AR)']
      },
      {
        code: 'SE-05',
        title: 'Big Data & Enterprise Analytics',
        periodOrDomain: 'Pilar Riset Utama 05',
        summary: 'Arsitektur penyimpanan dan penggalian data skala besar untuk ekstraksi sentimen dan informasi.',
        subtopics: ['Data Mining', 'Data Warehouse', 'Big Data Algorithm', 'Sentiment Analysis']
      },
      {
        code: 'SE-06',
        title: 'Decision Support & Enterprise Systems',
        periodOrDomain: 'Pilar Riset Utama 06',
        summary: 'Sistem pendukung keputusan, perencanaan sumber daya korporasi (ERP), dan sistem peramalan.',
        subtopics: ['Forecasting System', 'Enterprise Resource Planning (ERP)', 'Enterprise System', 'Intelligent System']
      }
    ],
    curriculum: [
      {
        semester: 'Semester 3–4',
        courseName: 'Desain & Analisis Algoritma + Pemrograman Web',
        credits: '6 SKS + Praktikum',
        focus: 'Fondasi kompleksitas algoritma, struktur data, dan arsitektur aplikasi web modern.',
        tools: ['TypeScript', 'PHP / Laravel', 'PostgreSQL', 'Git']
      },
      {
        semester: 'Semester 4–5',
        courseName: 'User Interface & Experience (UI/UX) + Rekayasa Perangkat Lunak',
        credits: '6 SKS + Proyek',
        focus: 'Rekayasa kebutuhan, pemodelan UML/OOAD, SDLC Agile/Scrum, dan prototyping antarmuka.',
        tools: ['Figma', 'UML / Enterprise Architect', 'React / Next.js', 'Postman']
      },
      {
        semester: 'Semester 5–6',
        courseName: 'Pemrograman Perangkat Bergerak (Android) + Teknologi Multimedia',
        credits: '6 SKS + Praktikum',
        focus: 'Pengembangan aplikasi mobile native/hybrid, manajemen state, dan integrasi API cloud.',
        tools: ['Kotlin / Android Studio', 'Flutter', 'Firebase', 'REST API']
      },
      {
        semester: 'Semester 6–7',
        courseName: 'Augmented Reality & Proyek Perangkat Lunak Smart Campus',
        credits: '6 SKS Capstone',
        focus: 'Hilirisasi produk skala institusi (SIAK, SIMPEG, GovTech) dan kesiapan publikasi/industri.',
        tools: ['Unity / ARCore', 'Docker', 'CI/CD Pipeline', 'Automated Testing']
      }
    ],
    thesisTopics: [
      'Rancang Bangun Sistem Informasi Akademik (SIAK) & Kepegawaian (SIMPEG) Terintegrasi Berbasis Microservices',
      'Pengembangan Aplikasi Mobile Smart Campus (UCL & Portal Prodi) dengan Arsitektur Clean Code',
      'Sistem Informasi Pelayanan Publik & Pengolahan Data Statistik pada Badan Pusat Statistik (BPS) Kabupaten Bogor',
      'Evaluasi Usability dan Perancangan Ulang Antarmuka Aplikasi Layanan Publik Berbasis Human-Centered Design',
      'Implementasi Augmented Reality dan Enterprise Decision Support System untuk Optimalisasi Layanan Instansi'
    ],
    hardwareAndFacilities: [
      {
        name: 'Ruang Praktikum & Kolaborasi RISE Center',
        specification: 'Workstation pengembangan full-stack, layar proyeksi interaktif & ruang diskusi agile',
        purpose: 'Pengembangan proyek kolaboratif SIAK, SIMPEG, inkubasi PKM, dan klinik skripsi.'
      },
      {
        name: 'Mobile & UI/UX Testing Testbed',
        specification: 'Perangkat uji Android multi-resolusi, server staging lokal & repositori terpusat',
        purpose: 'Pengujian kualitas perangkat lunak (QA), kompilasi native Android, dan simulasi beban.'
      }
    ],
    contactPerson: {
      name: 'Berlina Wulandari, S.T., M.Kom.',
      role: 'Kepala Laboratorium Software Engineering',
      email: 'berlina@uika-bogor.ac.id',
      phone: '0858-8588-4433',
      location: 'Gedung Fakultas Teknik dan Sains, Kampus UIKA Bogor, Jl. Sholeh Iskandar KM. 2, Kota Bogor'
    }
  },

  csn: {
    id: 'csn',
    code: 'Computer System & Networking',
    shortName: 'CSN',
    fullName: 'Computer System & Networking',
    researchGroupBrand: 'Net-Centric Computing (NCC) Laboratory',
    tagline: 'Arsitektur Jaringan, Infrastruktur Cloud, Keamanan Siber & Sistem Terbenam (IoT)',
    motto: 'Jembatan antara Komputasi, Jaringan, dan Keamanan Digital',
    accentHex: '#0F4C5C',
    secondaryHex: '#0284C7',
    badgeBg: '#E6F4F7',
    heroImage: './assets/fasilitas/csn-1.jpg',
    secondaryImage: './assets/fasilitas/csn-2.jpg',
    executiveSummary:
      'Laboratorium Computer System & Networking (CSN / NCC) merupakan tulang punggung transformasi digital yang menjembatani arsitektur perangkat keras tingkat RTL, protokol jaringan berkecepatan tinggi, infrastruktur Cloud, keamanan siber, hingga Wireless Sensor Network (IoT).',
    academicDescription:
      'Mengacu pada klasifikasi Computing Curricula (CC2005) ACM/IEEE, Laboratorium Computer System and Networking mengkaji komputer sebagai rangkaian terpadu (FPGA, mikrokontroler, DSP, GPGPU) serta komunikasi antar-perangkat melalui protokol berkabel maupun nirkabel. Mahasiswa dibekali keahlian langsung (hands-on) merancang topologi jaringan enterprise, mengelola orkestrasi cloud (AWS, Azure, OpenStack), melakukan mitigasi serangan siber (Firewall, IDS/IPS, VPN, MITM), serta merancang komunikasi kawanan drone (drone swarm) dan telemetri LoRa/NB-IoT.',
    vision:
      'Menjadi pusat unggulan riset dan praktikum di bidang arsitektur sistem komputer, infrastruktur jaringan terdistribusi, komputasi awan, dan keamanan digital yang adaptif terhadap kebutuhan industri.',
    missions: [
      'Menyelenggarakan praktikum berbasis perangkat nyata (hands-on hardware & network testbed) dan simulasi presisi tinggi.',
      'Mengembangkan riset strategis pada bidang jaringan komputer, sistem terbenam (embedded systems), WSN/IoT, dan keamanan siber.',
      'Menjalin kolaborasi industri untuk menyelaraskan kurikulum sertifikasi jaringan dan administrasi cloud.',
      'Membangun solusi infrastruktur telekomunikasi dan pemantauan cerdas bagi ketahanan bencana dan masyarakat.'
    ],
    objectives: [
      'Mencetak lulusan yang menguasai perancangan, implementasi, dan pemeliharaan jaringan berkeandalan tinggi (high availability).',
      'Menghasilkan prototipe perangkat keras-lunak terintegrasi berbasis mikrokontroler, RTOS, dan sensor nirkabel.',
      'Mengembangkan standar pengukuran performa jaringan, kualitas layanan (QoS), dan audit keamanan informasi.',
      'Mendorong publikasi ilmiah bereputasi pada ranah Cloud Computing, IoT, dan Network Survivability.'
    ],
    servicesAndActivities: [
      'Praktikum perancangan topologi jaringan komputer, routing & switching menggunakan perangkat Cisco, Mikrotik, GNS3, dan Packet Tracer.',
      'Simulasi pengujian penetrasi jaringan (Serangan MITM, Firewall, IDS/IPS, VPN) dan manajemen server Linux.',
      'Riset laboratorium Wireless Sensor Network (WSN), Body Area Network (BAN), LoRa/NB-IoT, dan Drone Networking.',
      'Kolaborasi pameran inovasi daerah bersama laboratorium lintas peminatan.'
    ],
    competencies: {
      hardSkills: [
        'Merancang dan mengonfigurasi topologi jaringan skala enterprise (LAN, WAN, Routing, Switching, Cisco, GNS3, Packet Tracer).',
        'Mengelola infrastruktur dan layanan komputasi awan (AWS, Microsoft Azure, OpenStack) serta virtualisasi server.',
        'Menerapkan arsitektur keamanan jaringan berlapis (Firewall, IDS/IPS, VPN, mitigasi Man-in-the-Middle & kriptografi).',
        'Membangun sistem monitoring jaringan real-time, instrumentasi performa, dan otomatisasi administrasi sistem (Linux/NOS).',
        'Mengintegrasikan sistem terbenam (Embedded Systems), mikrokontroler, LoRa/NB-IoT, serta komunikasi jaringan drone.'
      ],
      softSkills: [
        'Ketelitian tinggi dalam diagnosis gangguan infrastruktur kritis (mission-critical troubleshooting).',
        'Kepatuhan terhadap standar etika keamanan siber, privasi data, dan tata kelola TI.',
        'Ketangguhan dalam perencanaan pemulihan bencana (Disaster Recovery & Business Continuity).',
        'Kolaborasi teknis lintas tim antara pengembang perangkat lunak dan insinyur perangkat keras.'
      ]
    },
    lecturers: [
      {
        id: 'yuggo',
        name: 'Yuggo Afrianto, S.T., M.Kom.',
        role: 'Kepala Laboratorium Computer System & Networking',
        specialization: 'Network Architecture, Wireless Sensor Networks, Cloud & Cybersecurity',
        photo: './assets/dosen/yuggo.jpg',
        isHead: true,
        historicalRole: 'Kepala Lab Net-Centric Computing (NCC) 2020–2024',
        email: 'informatika@uika-bogor.ac.id'
      },
      {
        id: 'ritzkal',
        name: 'Dr. Ritzkal, S.Kom., M.Kom.',
        role: 'Dosen Peneliti Senior CSN',
        specialization: 'Computer Systems, Robotics, Embedded Systems & Network Instrumentation',
        photo: './assets/dosen/ritzkal.jpg'
      },
      {
        id: 'ade',
        name: 'Ade Hendri Hendrawan, S.Kom., M.Kom.',
        role: 'Dosen Peneliti CSN',
        specialization: 'Network Administration, Information Security & Internetworking Protocols',
        photo: './assets/dosen/ade.jpg'
      },
      {
        id: 'bayu',
        name: 'Bayu Adhi Prakosa, S.Kom., M.T. / M.Kom.',
        role: 'Dosen Peneliti CSN',
        specialization: 'Cloud Computing, Virtualization, IoT Telemetry & Distributed Systems',
        photo: './assets/dosen/bayu.jpg'
      },
      {
        id: 'eri',
        name: 'Dr. Eri Sasmita Susanto, S.Kom., M.Kom.',
        role: 'Dosen Peneliti CSN',
        specialization: 'Computer Architecture, Digital Signal Processing & Smart Infrastructure',
        photo: './assets/dosen/eri.jpg'
      }
    ],
    careers: [
      {
        title: 'Network & Infrastructure Engineer',
        category: 'Core Networking',
        description: 'Merancang, mengimplementasikan, dan memelihara jaringan korporasi, data center, serta transmisi kabel/nirkabel berkeandalan tinggi.',
        employers: ['Telkom Indonesia', 'ISP Nasional', 'Data Center Tier-III/IV', 'Perbankan']
      },
      {
        title: 'Cloud Architect & DevOps Engineer',
        category: 'Cloud & Scale',
        description: 'Merancang arsitektur komputasi awan yang tangguh, aman, dan terukur pada ekosistem AWS, Azure, maupun OpenStack.',
        employers: ['Cloud Provider', 'Unicorn Tech', 'Multinational Enterprise']
      },
      {
        title: 'Cybersecurity Specialist & SOC Analyst',
        category: 'Security',
        description: 'Melakukan pengamanan perimeter jaringan, konfigurasi IDS/IPS, analisis insiden siber, dan pengujian penetrasi.',
        employers: ['BSSN', 'Lembaga Keuangan', 'Konsultan Keamanan Siber']
      },
      {
        title: 'IoT System Designer & Computer Architecture Engineer',
        category: 'Embedded & IoT',
        description: 'Merancang subsistem mikrokontroler, jaringan sensor nirkabel (WSN), smart meter LoRa, dan telemetri industri.',
        employers: ['Industri Manufaktur 4.0', 'Smart Agrikultur', 'R&D Telekomunikasi']
      },
      {
        title: 'System Test & Field Reliability Engineer',
        category: 'Operations',
        description: 'Menjamin keandalan operasional perangkat keras-jaringan dan melakukan standarisasi pengujian performa di lapangan.',
        employers: ['Vendor Telekomunikasi', 'Tower & Fiber Provider', 'Instansi Pemerintahan']
      }
    ],
    researchScopes: [
      {
        code: 'CSN-01',
        title: 'Computer Systems & RTL Platform Architecture',
        periodOrDomain: 'Klasifikasi CC2005 ACM/IEEE',
        summary: 'Kompilasi komponen komputasi efisien pada level Register-Transfer Level (RTL) ke atas untuk eksekusi algoritma berkinerja tinggi.',
        subtopics: ['FPGA & Mikrokontroler', 'DSP & GPGPU Platform', 'VHDL, Verilog, Matlab & Proteus', 'Hardware Compilation']
      },
      {
        code: 'CSN-02',
        title: 'System Programming, Instrumentation & Networking',
        periodOrDomain: 'Low-Level & Telemetry',
        summary: 'Pemrograman di bawah layer aplikasi umum untuk instrumentasi pengukuran kinerja dan standarisasi metrik keamanan.',
        subtopics: ['Network Instrumentation', 'Performance Benchmarking', 'Security Measurement Standards', 'Kernel & Socket Programming']
      },
      {
        code: 'CSN-03',
        title: 'Wireless Sensor Networks (WSN) & IoT',
        periodOrDomain: 'Strategic Sensing',
        summary: 'Pemanfaatan sensor node, RFID, LoRa/NB-IoT, dan komunikasi darurat bencana dari skala Body Area Network (BAN) hingga regional.',
        subtopics: ['Body Area Networking (BAN)', 'Smart Meter LoRa / NB-IoT', 'Anti-Theft & Sabotage WSN', 'Disaster Communication Network']
      },
      {
        code: 'CSN-04',
        title: 'Network Management, Survivability & Maintenance',
        periodOrDomain: 'High Availability',
        summary: 'Algoritma pengelolaan jaringan untuk menjaga performa, skalabilitas, toleransi kesalahan, dan ketahanan terhadap infiltrasi.',
        subtopics: ['Fault Tolerance & Scalability', 'Disaster Recovery Planning', 'Business Continuity', 'Network Survivability']
      },
      {
        code: 'CSN-05',
        title: 'Information Security, Cryptography & Cyber Defense',
        periodOrDomain: 'Cybersecurity',
        summary: 'Protokol keamanan jaringan, kontrol akses, mitigasi rekayasa sosial, dan kriptografi ringan untuk perangkat terbatas.',
        subtopics: ['Firewall, IDS/IPS & VPN', 'MITM Attack Simulation & Mitigation', 'Lightweight Cryptography for FPGA/IoT', 'Access Control']
      },
      {
        code: 'CSN-06',
        title: 'Cloud Computing, OS & Embedded Systems',
        periodOrDomain: 'Cloud & Edge',
        summary: 'Arsitektur komputasi awan tangguh, riset sistem operasi (Linux, RTOS, NOS), serta sistem terbenam untuk kendali otomatis.',
        subtopics: ['Hybrid Cloud (AWS, Azure, OpenStack)', 'NS-3, GlomoSim & Mininet', 'Linux, Android, RTOS & NOS', 'Drone Swarm Communication']
      }
    ],
    curriculum: [
      {
        semester: 'Semester 3–4',
        courseName: 'Arsitektur & Organisasi Komputer + Jaringan Komputer Dasar',
        credits: '6 SKS + Praktikum',
        focus: 'Arsitektur mikrokomputer, pengalamatan IPv4/IPv6, protokol TCP/IP, serta desain topologi LAN/WAN.',
        tools: ['Cisco Packet Tracer', 'Wireshark', 'MikroTik RouterOS', 'Linux CLI']
      },
      {
        semester: 'Semester 4–5',
        courseName: 'Sistem Operasi & Administrasi Jaringan Enterprise',
        credits: '6 SKS + Praktikum',
        focus: 'Manajemen kernel Linux/NOS, routing dinamis (OSPF/BGP), switching VLAN, dan emulasi jaringan kompleks.',
        tools: ['GNS3', 'Mininet', 'Ubuntu Server', 'Bash / Python Automation']
      },
      {
        semester: 'Semester 5–6',
        courseName: 'Keamanan Jaringan Siber & Sistem Terbenam (Embedded / IoT)',
        credits: '6 SKS + Praktikum',
        focus: 'Implementasi Firewall, IDS/IPS, VPN, mitigasi MITM, serta rancang bangun node sensor mikrokontroler.',
        tools: ['Snort / Suricata', 'OpenVPN', 'ESP32 / Arduino / LoRa', 'Proteus / VHDL']
      },
      {
        semester: 'Semester 6–7',
        courseName: 'Cloud Computing & Proyek Infrastruktur Terdistribusi',
        credits: '6 SKS Capstone',
        focus: 'Orkestrasi hybrid cloud, komunikasi drone swarm, monitoring jaringan real-time, dan riset simulasi NS-3.',
        tools: ['AWS / Azure / OpenStack', 'Docker', 'Grafana / Prometheus', 'NS-3 Simulator']
      }
    ],
    thesisTopics: [
      'Arsitektur dan Implementasi Hybrid Cloud Networking untuk Ketersediaan Layanan Tinggi (High Availability)',
      'Simulasi Serangan Man-in-the-Middle (MITM) dan Mitigasi Berlapis Menggunakan IDS/IPS pada Jaringan Kampus',
      'Protokol Komunikasi Kawanan Drone (Drone Swarm Communication) untuk Pemantauan Area Bencana',
      'Rancang Bangun Smart Meter Berbasis LoRa / NB-IoT untuk Telemetri Konsumsi Energi Mandiri',
      'Sistem Monitoring Kinerja dan Deteksi Anomali Jaringan Real-Time Terotomatisasi'
    ],
    hardwareAndFacilities: [
      {
        name: 'Laboratorium Jaringan & Rak Server NCC',
        specification: 'Perangkat Router & Switch Enterprise, MikroTik, Server Rack & Stasiun Kerja Simulasi',
        purpose: 'Praktikum konfigurasi fisik topologi jaringan, manajemen server, dan emulasi GNS3/Mininet.'
      },
      {
        name: 'Embedded, Robotics & WSN Testbed',
        specification: 'Kit Mikrokontroler, Modul Transceiver LoRa/NB-IoT, Sensor Node & Instrumen Pengukuran',
        purpose: 'Pengembangan prototipe sistem terbenam, rumah/kampus cerdas, dan jaringan sensor nirkabel.'
      }
    ],
    contactPerson: {
      name: 'Yuggo Afrianto, S.T., M.Kom.',
      role: 'Kepala Laboratorium Computer System & Networking',
      email: 'informatika@uika-bogor.ac.id',
      phone: '0812-1280-1389 (Sekretariat Gebyar IT)',
      location: 'Laboratorium CSN / NCC, Gedung Fakultas Teknik dan Sains UIKA Bogor'
    }
  },

  git: {
    id: 'git',
    code: 'Geospatial Information Technology',
    shortName: 'GIT',
    fullName: 'Geospatial Information Technology',
    researchGroupBrand: 'GeoAI & Spatial Intelligence Laboratory',
    tagline: 'Sains Geospasial, Penginderaan Jauh, Pemrograman Spasial, Drone RTK & GeoAI',
    motto: 'Dari Coding, Data, Peta, Analisis, AI, ke Solusi Dunia Nyata',
    accentHex: '#14532D',
    secondaryHex: '#0D9488',
    badgeBg: '#E7F3EC',
    heroImage: './assets/fasilitas/git-1.jpg',
    secondaryImage: './assets/fasilitas/git-2.jpg',
    executiveSummary:
      'Laboratorium Geospatial Information Technology (GIT) memadukan ilmu komputer, pemrograman spasial, akuisisi citra satelit/drone presisi sentimeter (RTK), dan Artificial Intelligence (GeoAI) untuk menghasilkan sistem pendukung keputusan berbasis lokasi.',
    academicDescription:
      'Hampir seluruh aktivitas manusia memiliki dimensi ruang. Laboratorium GIT di Teknik Informatika UIKA Bogor membawa mahasiswa melampaui pembuatan peta konvensional menuju Geospatial Intelligence (GIS + Big Data + Cloud + IoT + AI). Mahasiswa belajar memproses citra satelit multitemporal melalui Google Earth Engine, mengoperasikan wahana nirawak DJI Phantom 4 Pro & Multispectral dengan D-RTK 2 Mobile Station di lapangan, menulis skrip pemrograman spasial (Python GeoPandas, Rasterio, Shapely), hingga membangun WebGIS, Spatial Decision Support System (SDSS), dan Digital Twin.',
    vision:
      'Menjadi Laboratorium Penelitian terakreditasi dan terbaik di bidang teknologi informasi Geospasial serta mampu mencetak lulusan mahasiswa yang berdaya saing nasional dan internasional bidang informasi Geospasial pada Tahun 2045.',
    missions: [
      'Menghasilkan riset inovatif di bidang Geospatial Information Technology dan GeoAI.',
      'Berkontribusi aktif terhadap pengembangan bahan ajar dan kurikulum geoinformatika modern.',
      'Meningkatkan kapasitas dan kapabilitas peneliti dosen maupun mahasiswa melalui survei lapangan dan kolaborasi.',
      'Mengembangkan kolaborasi strategis di tataran nasional, regional, dan internasional.'
    ],
    objectives: [
      'Mengintegrasikan 5 pilar kompetensi: Geospatial, Programming, Spatial Data, Artificial Intelligence, dan Application.',
      'Menghasilkan lulusan yang tidak hanya mampu menggunakan software GIS, tetapi membangun algoritma dan sistem geospasial.',
      'Mewujudkan peta jalan riset 2025–2030: Intelligent Geospatial Technology for Data-Driven Decision Making.',
      'Menjadi motor sinergi lintas 5 laboratorium dalam pengembangan Smart City Digital Twin Kota Bogor.'
    ],
    servicesAndActivities: [
      'Akuisisi data lapangan menggunakan Drone DJI Phantom 4 Pro & Phantom 4 Multispectral + Base Station D-RTK 2 (seperti survei persawahan Kecamatan Leuwiliang).',
      'Praktikum berjenjang Semester 4 hingga Semester 7: SIG, Penginderaan Jauh, Pemodelan Spasial, Pemrograman Spasial, dan GeoAI.',
      'Riset Cloud Computing geospasial menggunakan Google Earth Engine (Landsat, Sentinel, MODIS, DEM SRTM).',
      'Family Gathering, diskusi riset spasial, serta kolaborasi pemetaan tata ruang dan kebencanaan daerah.'
    ],
    competencies: {
      hardSkills: [
        'Menguasai teknik survei pemetaan lapangan dengan GPS Geodetik, Drone Multirotor, Multispectral, dan Base Station RTK.',
        'Menguasai perangkat lunak GIS komersial maupun Open Source serta arsitektur Geodatabase (PostGIS/Spatial Database).',
        'Menguasai Pemrograman Spasial (Python GeoPandas, Rasterio, Shapely, JavaScript) untuk otomatisasi geoprocessing.',
        'Menguasai Pemodelan Spasial untuk tata ruang, kebencanaan (risiko banjir), hidrologi, pertanian presisi, dan kehutanan.',
        'Mengembangkan aplikasi WebGIS, Mobile GIS, Spatial Decision Support System (SDSS), dan model GeoAI (Deteksi Objek & Klasifikasi Citra).'
      ],
      softSkills: [
        'Kemampuan observasi lapangan dan pemecahan masalah nyata berbasis konteks keruangan (spatial thinking).',
        'Kepemimpinan operasional dalam perencanaan misi terbang drone dan survei tim lapangan.',
        'Kemampuan komunikasi lintas disiplin bersama perencana wilayah, instansi pemerintah, dan masyarakat.',
        'Ketekunan analitis dalam mengolah data citra berdimensi besar (Big Spatial Data).'
      ]
    },
    lecturers: [
      {
        id: 'erwin',
        name: 'Dr. Erwin Hermawan, S.Si., M.Sc.',
        role: 'Kepala Laboratorium Geospatial Information Technology',
        specialization: 'Pemodelan Spasial Dinamik, GeoAI & Spatial Decision Support Systems',
        photo: './assets/dosen/erwin.jpg',
        isHead: true,
        email: 'informatika@uika-bogor.ac.id'
      },
      {
        id: 'iksal',
        name: 'Iksal Yanuarsyah, S.Hut., M.Sc., Ph.D.',
        role: 'Dosen Peneliti Senior GIT',
        specialization: 'Aplikasi Penginderaan Jauh (Remote Sensing), Google Earth Engine & Kehutanan',
        photo: './assets/dosen/iksal.jpg',
        historicalRole: 'Koordinator Riset Geoinformatika 2020–2024'
      },
      {
        id: 'sahid',
        name: 'Sahid Agustian H., S.T., M.Kom.',
        role: 'Dosen Peneliti GIT',
        specialization: 'Pemrograman Spasial, WebGIS Architecture & Spatial Automation',
        photo: './assets/dosen/sahid.jpg'
      },
      {
        id: 'nurul',
        name: 'Nurul Kamilah, S.Kom., M.Kom.',
        role: 'Dosen Peneliti GIT',
        specialization: 'Perancangan Sistem Informasi Geospasial & Basis Data Spasial',
        photo: './assets/dosen/nurul.jpg'
      },
      {
        id: 'aftaf',
        name: 'Mohammad Aftaf Muhajir, S.Si., M.Kom.',
        role: 'Dosen Peneliti GIT',
        specialization: 'Pemrograman Spasial, Pemodelan Risiko Bencana & Analisis Raster',
        photo: './assets/dosen/aftaf-slide.jpg'
      },
      {
        id: 'fety',
        name: 'Fety Fatimah, S.Kom., M.Kom.',
        role: 'Dosen Peneliti GIT',
        specialization: 'Perancangan Sistem Informasi Geospasial & Kartografi Digital',
        photo: './assets/dosen/fety.jpg'
      }
    ],
    careers: [
      {
        title: 'Geospatial Software & WebGIS Developer',
        category: 'Software & WebGIS',
        description: 'Membangun platform WebGIS interaktif, Spatial API, Geodatabase, dan dashboard pemantauan pembangunan.',
        employers: ['Kementerian PUPR', 'Bappeda', 'Konsultan Smart City', 'Tech Startup']
      },
      {
        title: 'GeoAI Engineer & Geospatial Data Scientist',
        category: 'Data & AI',
        description: 'Mengembangkan model Deep Learning untuk deteksi bangunan dari citra satelit, klasifikasi tutupan lahan, dan prediksi banjir.',
        employers: ['BRIN', 'Perusahaan Satelit & Pemetaan', 'Lembaga Riset Global']
      },
      {
        title: 'GIS Specialist & Remote Sensing Analyst',
        category: 'Geospatial Core',
        description: 'Menganalisis citra satelit (Sentinel/Landsat) dan foto udara multispektral untuk tata ruang, lingkungan, dan agrikultur.',
        employers: ['BIG (Badan Informasi Geospasial)', 'KLHK', 'BPN/ATR', 'BNPB']
      },
      {
        title: 'Geospatial Solution Architect & Digital Twin Specialist',
        category: 'Advanced Architecture',
        description: 'Merancang ekosistem Digital Twin perkotaan yang menyatukan data spasial 3D, sensor IoT, dan analitik prediktif.',
        employers: ['BUMN Konstruksi & Infrastruktur', 'Pertambangan & Energi', 'Konsultan Multinasional']
      }
    ],
    researchScopes: [
      {
        code: 'GIT-2025',
        title: 'Geospatial Data & GIS Foundation',
        periodOrDomain: 'Roadmap Fase 1 (2025)',
        summary: 'Penguatan fondasi manajemen data raster/vektor, basis data spasial, WebGIS, dan penjaminan kualitas data spasial.',
        subtopics: ['GIS & Kartografi', 'Spatial Database (PostGIS)', 'WebGIS Development', 'Spatial Data Quality']
      },
      {
        code: 'GIT-2026',
        title: 'Spatial Modeling & Optimization Analysis',
        periodOrDomain: 'Roadmap Fase 2 (2026)',
        summary: 'Pemodelan kuantitatif keruangan dan optimasi lokasi fasilitas publik maupun komoditas wilayah.',
        subtopics: ['Spatial Statistics', 'Spatial Modeling', 'Location Optimization', 'Spatial Decision Support System (SDSS)']
      },
      {
        code: 'GIT-2027',
        title: 'Remote Sensing & Earth Observation',
        periodOrDomain: 'Roadmap Fase 3 (2027)',
        summary: 'Observasi permukaan bumi resolusi tinggi menggunakan citra satelit cloud (Google Earth Engine), UAV/Drone RTK, dan LiDAR.',
        subtopics: ['Google Earth Engine (Sentinel, Landsat, MODIS)', 'UAV / Drone Multispectral & RTK', 'LiDAR & 3D DSM', 'Time-Series Change Detection']
      },
      {
        code: 'GIT-2028',
        title: 'GeoAI (Geospatial Artificial Intelligence)',
        periodOrDomain: 'Roadmap Fase 4 (2028)',
        summary: 'Integrasi operator Machine Learning dan Deep Learning untuk ekstraksi objek otomatis dan regresi/klasifikasi spasial.',
        subtopics: ['Spatial Clustering & Regression', 'Deep Learning Object Detection (Building Footprint)', 'Scene & Landuse Classification', '3D Building Extraction']
      },
      {
        code: 'GIT-2029',
        title: 'Intelligent Geospatial System Integration',
        periodOrDomain: 'Roadmap Fase 5 (2029)',
        summary: 'Konvergensi GeoAI dengan jaringan sensor IoT dan komputasi awan untuk pemantauan spasial waktu nyata (real-time).',
        subtopics: ['GeoAI + IoT Telemetry', 'Cloud Spatial Computing', 'Real-Time Flood & Environmental Monitoring', 'Automated Spatial Pipelines']
      },
      {
        code: 'GIT-2030',
        title: 'Autonomous & Predictive Geospatial System',
        periodOrDomain: 'Roadmap Fase 6 (2030)',
        summary: 'Sistem geospasial prediktif dan otonom untuk rekomendasi kebijakan tata ruang serta Smart City Digital Twin.',
        subtopics: ['Predictive Spatial Simulation', 'Automated Policy Recommendation', 'Autonomous Spatial Decision', 'Smart City Digital Twin']
      }
    ],
    curriculum: [
      {
        semester: 'Semester 4',
        courseName: 'Sistem Informasi Geografis (SIG) + Praktikum',
        credits: '4 SKS',
        focus: 'Memahami dan mengelola data raster & vektor, sistem koordinat, geoprocessing, spatial analysis, kartografi, dan WebGIS dasar.',
        tools: ['QGIS / ArcGIS', 'PostGIS', 'Leaflet / Mapbox']
      },
      {
        semester: 'Semester 5',
        courseName: 'Pemodelan Spasial + Penginderaan Jauh & Praktikum',
        credits: '6 SKS',
        focus: 'Membangun model pemecahan masalah spasial serta mengekstraksi informasi dari citra satelit dan foto udara drone.',
        tools: ['Google Earth Engine', 'Sentinel / Landsat', 'DJI Terra / Pix4D']
      },
      {
        semester: 'Semester 6',
        courseName: 'Pemrograman Spasial + Proyek Perangkat Lunak Bidang [GIT]',
        credits: '6 SKS',
        focus: 'Mengolah dan mengotomatisasi data spasial dengan kode pemrograman serta membangun aplikasi WebGIS/Mobile GIS utuh.',
        tools: ['Python (GeoPandas, Rasterio, Shapely)', 'JavaScript', 'GeoServer']
      },
      {
        semester: 'Semester 7',
        courseName: 'Geospatial Artificial Intelligence (GeoAI) + Praktikum',
        credits: '4 SKS',
        focus: 'Mengintegrasikan Machine Learning & Deep Learning dengan data geospasial untuk deteksi objek, klasifikasi, dan prediksi risiko banjir.',
        tools: ['PyTorch / TensorFlow', 'Scikit-Learn', 'Deep Learning Spatial Operators']
      }
    ],
    thesisTopics: [
      'WebGIS: Sistem Informasi Persebaran dan Optimasi Lokasi Fasilitas Publik Terintegrasi Dashboard Analitik',
      'Disaster GIS: Pemetaan dan Pemodelan Spasial Risiko Banjir Menggunakan DEM, Curah Hujan, dan Tutupan Lahan',
      'Remote Sensing: Monitoring Perubahan Tutupan Lahan Multitemporal (2018–2024) Menggunakan Citra Sentinel/Landsat di Google Earth Engine',
      'Spatial Optimization: Analisis Aksesibilitas Jaringan Jalan dan Kepadatan Penduduk untuk Penentuan Lokasi Optimal',
      'GeoAI: Deteksi Otomatis Tapak Bangunan (Building Footprint) dari Citra Satelit dan Ortofoto Drone Berbasis Deep Learning'
    ],
    hardwareAndFacilities: [
      {
        name: 'DJI Phantom 4 Pro Quadcopter',
        specification: 'Sensor 1" CMOS 20MP, Kamera 4K 60fps, Jarak Terbang ±7 KM (OcuSync), Waktu Terbang ±30 Menit',
        purpose: 'Survei pemetaan udara, pembuatan ortofoto resolusi tinggi, dan pemodelan permukaan 3D.'
      },
      {
        name: 'DJI Phantom 4 Multispectral + D-RTK 2 Mobile Station Combo',
        specification: '5 Band Multispectral (Blue, Green, Red, Red Edge, NIR) + Base Station RTK Akurasi Sentimeter',
        purpose: 'Pertanian presisi (analisis indeks vegetasi & kesehatan tanaman), kehutanan, dan survei kadastral presisi tinggi.'
      },
      {
        name: 'Workstation Geokomputasi & Studio Peta GIT',
        specification: 'Multi-monitor GIS Workstation, Perangkat GPS Lapangan & Server Geodatabase',
        purpose: 'Pengolahan data fotogrametri drone, kompilasi Google Earth Engine, dan pelatihan GeoAI.'
      }
    ],
    contactPerson: {
      name: 'Dr. Erwin Hermawan, S.Si., M.Sc.',
      role: 'Kepala Laboratorium Geospatial Information Technology',
      email: 'informatika@uika-bogor.ac.id',
      phone: '0812-1280-1389 (Sekretariat Gebyar IT)',
      location: 'Laboratorium GIT, Gedung Fakultas Teknik dan Sains UIKA Bogor'
    }
  },

  keris: {
    id: 'keris',
    code: 'Knowledge Engineering & Reliable Intelligent Systems',
    shortName: 'KERIS',
    fullName: 'Knowledge Engineering & Reliable Intelligent Systems',
    researchGroupBrand: 'KERIS Research Group',
    tagline: 'Kecerdasan Buatan (AI), Machine Learning, Rekaya Pengetahuan, Ontologi & Sains Data',
    motto: 'Tumbuh Bersama-sama adalah Kunci Keberhasilan',
    accentHex: '#7C2D12',
    secondaryHex: '#B45309',
    badgeBg: '#FDF3EC',
    heroImage: './assets/fasilitas/keris-1.jpg',
    secondaryImage: './assets/fasilitas/keris-2.jpg',
    executiveSummary:
      'Kelompok Riset Knowledge Engineering and Reliable Intelligent Systems (KERIS) mengkaji rekayasa sistem cerdas, representasi pengetahuan berbasis ontologi & knowledge graph, data mining, computer vision, serta pengembangan model prediksi AI yang andal.',
    academicDescription:
      'Didirikan sebagai kelompok riset keilmuan terfokus di Program Studi Teknik Informatika UIKA Bogor, Laboratorium KERIS membina budaya riset kolaboratif antara dosen, mahasiswa, dan alumni. Didukung fasilitas komputasi berperforma tinggi (GPU NVIDIA RTX 3060), KERIS secara konsisten melahirkan hibah Program Kreativitas Mahasiswa (PKM) tingkat nasional (pendanaan Belmawa/LLDIKTI), delegasi Bangkit Academy, magang riset PT Telkom (Divisi Data & IoT), pertukaran pelajar internasional ke Malaysia, hingga mahasiswa terpilih sebagai Google Student Ambassador (GSA) 2025.',
    vision:
      'Menghasilkan pusat riset dan keilmuan di bidang rekayasa pengetahuan dan sistem cerdas di wilayah Bogor Raya pada tahun 2030.',
    missions: [
      'Mendukung Program Studi Teknik Informatika dalam menyelenggarakan pendidikan dan pengajaran berkualitas.',
      'Membangun budaya riset yang hidup dan kolaboratif di lingkungan laboratorium.',
      'Memotivasi, mendampingi, dan mengarahkan mahasiswa dalam meraih prestasi akademik maupun kompetisi nasional/internasional.',
      'Memfasilitasi dan mendukung dosen serta mahasiswa dalam melakukan riset maupun Pengabdian kepada Masyarakat (PkM) terkait rekayasa pengetahuan dan sistem cerdas.'
    ],
    objectives: [
      'Menghasilkan lulusan yang memiliki kompetensi unggul di bidang rekayasa pengetahuan, sains data, dan sistem cerdas.',
      'Menghasilkan skripsi atau Tugas Akhir mahasiswa yang mutakhir mengikuti perkembangan teknologi AI.',
      'Menghasilkan mahasiswa berprestasi dalam kompetisi keilmuan sistem cerdas, hibah PKM, dan program kepemimpinan teknologi global.',
      'Menghasilkan publikasi ilmiah bereputasi serta embrio produk rintisan (start-up) berbasis hasil penelitian.'
    ],
    servicesAndActivities: [
      'Diskusi rutin perkembangan ide skripsi dan kolokium riset setiap hari Kamis bersama tim dosen pembimbing.',
      'Sosialisasi program percepatan kelulusan dan klinik metodologi penelitian sistem cerdas.',
      'Sharing session bersama Alumni Lab KERIS untuk jejaring karir industri dan riset.',
      'Pembimbingan intensif proposal hibah PKM Belmawa, seleksi Bangkit Academy, dan Google Student Ambassador.'
    ],
    competencies: {
      hardSkills: [
        'Keahlian menganalisis dan mengolah data kompleks untuk mengekstraksi informasi serta pengetahuan baru (insight discovery).',
        'Keahlian merepresentasikan pengetahuan ke dalam struktur formal (Ontologi, Semantic Web, dan Knowledge Graph).',
        'Keahlian merancang, melatih, dan mengevaluasi model prediksi, klasifikasi, serta klasterisasi berbasis Machine Learning & Deep Learning.',
        'Keahlian menganalisis pola citra (Computer Vision) dan pengenalan pola (Pattern Recognition).',
        'Keahlian mengembangkan Sistem Pakar (Expert Systems), sistem inferensi, serta sistem analisis data terotomatisasi.'
      ],
      softSkills: [
        'Pola pikir ilmiah yang kritis, terstruktur, dan berorientasi pada validitas metodologi riset.',
        'Budaya kolaborasi lintas angkatan ("Tumbuh bersama-sama adalah kunci keberhasilan").',
        'Kemampuan mempresentasikan temuan data dan model matematis secara jelas kepada pemangku kepentingan.',
        'Kepemimpinan literasi teknologi (seperti peran Google Student Ambassador di lingkungan kampus).'
      ]
    },
    lecturers: [
      {
        id: 'puspa',
        name: 'Dr. Puspa Eosina, S.Si., M.Kom.',
        role: 'Kepala Laboratorium KERIS Research Group',
        specialization: 'Data Mining, Machine Learning & Predictive Analytics',
        photo: './assets/dosen/puspa.jpg',
        isHead: true,
        email: 'informatika@uika-bogor.ac.id'
      },
      {
        id: 'foni',
        name: 'Dr. Foni Agus Setiawan, S.Kom., M.Kom.',
        role: 'Dosen Peneliti Senior KERIS',
        specialization: 'Semantic Web, Ontology Modeling & Knowledge Engineering',
        photo: './assets/dosen/foni.jpg'
      },
      {
        id: 'gibtha',
        name: 'Gibtha Fitri Laxmi, S.Kom., M.Kom.',
        role: 'Dosen Peneliti KERIS',
        specialization: 'Computer Vision, Image Processing & Pattern Recognition',
        photo: './assets/dosen/gibtha.jpg'
      },
      {
        id: 'andi',
        name: 'Andi Eko K., S.Si., M.T.',
        role: 'Dosen Peneliti KERIS',
        specialization: 'Internet of Things (IoT), Big Data Infrastructure & Sensor Analytics',
        photo: './assets/dosen/andi.jpg'
      },
      {
        id: 'dewi',
        name: 'Dewi Primasari, S.Kom., M.M. / M.Kom.',
        role: 'Dosen Peneliti KERIS (Koordinator PkM)',
        specialization: 'Pengabdian Kepada Masyarakat, Business Intelligence & Information Systems',
        photo: './assets/dosen/dewi.jpg'
      }
    ],
    careers: [
      {
        title: 'AI & Machine Learning Specialist',
        category: 'Artificial Intelligence',
        description: 'Merancang arsitektur model pembelajaran mesin, deep learning, computer vision, dan sistem otomasi cerdas.',
        employers: ['R&D Teknologi', 'GoTo / Traveloka', 'Perusahaan AI Global', 'Startup DeepTech']
      },
      {
        title: 'Data Scientist & Predictive Modeler',
        category: 'Data Science',
        description: 'Mengolah data skala besar untuk membangun model peramalan, deteksi anomali, dan rekomendasi strategis.',
        employers: ['Telkom Indonesia (Divisi Data)', 'Perbankan & Fintech', 'E-Commerce']
      },
      {
        title: 'Knowledge Engineer & Ontology Architect',
        category: 'Knowledge Systems',
        description: 'Membangun basis pengetahuan terstruktur, knowledge graph, sistem pakar medis/pertanian, dan sistem inferensi.',
        employers: ['Lembaga Riset Kesehatan & Agrikultur', 'Enterprise Knowledge Management', 'Konsultan AI']
      },
      {
        title: 'Data Quality Engineer & Business Intelligence Analyst',
        category: 'Analytics & BI',
        description: 'Menjamin integritas pipeline data serta menerjemahkan pola historis menjadi keputusan eksekutif.',
        employers: ['Korporasi Retail & FMCG', 'Instansi Pemerintah', 'Konsultan Analitik']
      },
      {
        title: 'Peneliti Muda (Academic & Industrial Researcher)',
        category: 'Research',
        description: 'Melaksanakan riset fundamental dan terapan untuk publikasi ilmiah bereputasi maupun inovasi paten/HKI.',
        employers: ['BRIN', 'Perguruan Tinggi', 'Think Tank Kebijakan Publik']
      }
    ],
    researchScopes: [
      {
        code: 'KERIS-01',
        title: 'Pengembangan Model Berbasis Artificial Intelligence',
        periodOrDomain: 'Lingkup Penelitian 01',
        summary: 'Pengembangan algoritma dan perangkat lunak pengolah data untuk menghasilkan informasi baru serta analisis prediksi melalui pelatihan data.',
        subtopics: ['Model Identifikasi', 'Model Prediksi (Autoencoder, Time-Series)', 'Model Klasifikasi & Klasterisasi (KNN, Deep Learning)']
      },
      {
        code: 'KERIS-02',
        title: 'Model Pengetahuan Berbasis Ontologi & Semantic Web',
        periodOrDomain: 'Lingkup Penelitian 02',
        summary: 'Representasi pengetahuan formal menggunakan ontologi dan simulasi dinamika spasial-temporal.',
        subtopics: ['Pemodelan Ontologi Domain Spesifik', 'Model Pandemi COVID-19 Kota Bogor', 'Cellular Automata & Visualisasi Koefisien']
      },
      {
        code: 'KERIS-03',
        title: 'Pengembangan Produk Terapan Berbasis AI',
        periodOrDomain: 'Lingkup Penelitian 03',
        summary: 'Hilirisasi algoritma cerdas menjadi produk interaktif yang dapat digunakan langsung oleh masyarakat dan industri.',
        subtopics: ['Media Pembelajaran Cerdas Berbasis AR/VR', 'Sistem Otomasi Berbasis Visi Komputer', 'Optimasi Rute Angkutan Kota Bogor Berbasis AI']
      },
      {
        code: 'KERIS-04',
        title: 'Pengembangan Sistem Pakar (Expert Systems)',
        periodOrDomain: 'Lingkup Penelitian 04',
        summary: 'Sistem perangkat lunak yang mengintegrasikan Basis Pengetahuan (Knowledge Graph), Mesin Inferensi, dan Antarmuka Pakar.',
        subtopics: ['Knowledge Graph Management', 'Inference Engine Architecture', 'Sistem Pakar Medis, Penyakit Tanaman & Arkeologi']
      },
      {
        code: 'KERIS-05',
        title: 'Sistem Analisis Data & Kolaborasi Lintas Disiplin',
        periodOrDomain: 'Lingkup Penelitian 05',
        summary: 'Analytic Data System hasil integrasi berbagai model AI untuk pemantauan fenomena kritis dan sinergi lintas lab.',
        subtopics: ['Sistem Pengawasan Kondisi Tanah & Peringatan Gempa', 'Precision Farming & Tree Counting', 'Kolaborasi Geospasial & IoT']
      }
    ],
    curriculum: [
      {
        semester: 'Semester 3–4',
        courseName: 'Kecerdasan Buatan Fundamental & Statistika Komputasi',
        credits: '6 SKS + Praktikum',
        focus: 'Pencarian heuristik, representasi pengetahuan dasar, probabilitas, dan eksplorasi data ilmiah.',
        tools: ['Python', 'NumPy / Pandas', 'Jupyter Notebook']
      },
      {
        semester: 'Semester 5',
        courseName: 'Data Mining & Machine Learning',
        credits: '6 SKS + Praktikum',
        focus: 'Algoritma supervised/unsupervised learning, feature engineering, evaluasi model, dan penggalian pola.',
        tools: ['Scikit-Learn', 'Matplotlib / Seaborn', 'SQL & NoSQL']
      },
      {
        semester: 'Semester 6',
        courseName: 'Sistem Pakar, Semantic Web & Pengolahan Citra / Visi Komputer',
        credits: '6 SKS + Proyek',
        focus: 'Rekayasa ontologi, knowledge graph, mesin inferensi, serta ekstraksi fitur citra digital.',
        tools: ['Protégé (OWL/RDF)', 'OpenCV', 'Neo4j / Knowledge Graph']
      },
      {
        semester: 'Semester 7',
        courseName: 'Deep Learning & Kolokium Riset Skripsi KERIS',
        credits: '6 SKS Capstone',
        focus: 'Arsitektur jaringan saraf tiruan dalam (Autoencoder, CNN, التنبؤ) pada GPU RTX 3060 dan publikasi ilmiah.',
        tools: ['PyTorch / TensorFlow', 'CUDA RTX 3060', 'Mendeley / LaTeX']
      }
    ],
    thesisTopics: [
      'Model Prediksi Kanker Menggunakan Metode Deep Autoencoder (Didanai Hibah PKM LLDIKTI - Belmawa)',
      'Implementasi Algoritma K-Nearest Neighbor (KNN) dalam Pemetaan Geografis UMKM Sektor Kuliner',
      'Pemodelan Cellular Automata dalam Menentukan Koefisien Penyebaran COVID-19 dengan Visualisasi Dinamis',
      'Optimasi Rute Angkutan Kota Bogor Berbasis Artificial Intelligence (Studi Kasus Jaringan Transportasi Kota Bogor)',
      'Pengembangan Sistem Pakar Berbasis Knowledge Graph dan Sistem Analisis Data Deteksi Dini Anomali Tanah'
    ],
    hardwareAndFacilities: [
      {
        name: 'High-Performance Computing (HPC) Workstation RTX 3060',
        specification: 'Komputer Performansi Tinggi dengan Akselerator GPU NVIDIA GeForce RTX 3060',
        purpose: 'Pelatihan model Deep Learning, Autoencoder, Computer Vision, dan simulasi komputasi intensif.'
      },
      {
        name: 'Ruang Kolokium & Diskusi Riset KERIS',
        specification: 'Ruang seminar progres mingguan (Diskusi Kamis), perpustakaan referensi riset & stasiun kerja kolaboratif',
        purpose: 'Bimbingan intensif skripsi, penyusunan proposal PKM, dan sharing session bersama alumni.'
      }
    ],
    contactPerson: {
      name: 'Dr. Puspa Eosina, S.Si., M.Kom.',
      role: 'Kepala Laboratorium KERIS Research Group',
      email: 'informatika@uika-bogor.ac.id',
      phone: '0812-1280-1389 (Sekretariat Gebyar IT)',
      location: 'Laboratorium KERIS, Gedung Fakultas Teknik dan Sains UIKA Bogor'
    }
  }
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-rizki-bangkit',
    year: '2024',
    title: 'Penerima Funding Rp 140 Juta Best Capstone Project Bangkit Academy by Google',
    recipient: 'Muhammad Rizki (Angkatan 2021 — Lab SE)',
    category: 'Pendanaan & Hibah',
    description:
      'Meraih dana inkubasi Rp 140.000.000 dari Google, predikat Distinction Graduate Bangkit Academy (Google, GoTo, Traveloka), Mahasiswa Teladan FTS UIKA 2024, serta Magang Merdeka di PT Sebangku Jaya Abadi.',
    image: './assets/gallery/se-bangkit.jpg',
    labId: 'se'
  },
  {
    id: 'ach-keris-gsa',
    year: '2025',
    title: '2 Mahasiswa Terpilih sebagai Google Student Ambassador (GSA) 2025',
    recipient: 'Delegasi Mahasiswa Lab KERIS TI-UIKA',
    category: 'Sertifikasi & MBKM',
    description:
      'Terpilih dalam program resmi Google untuk menjadi pemimpin dan penggerak literasi kecerdasan buatan (Google Gemini & AI) di lingkungan kampus.',
    image: './assets/gallery/keris-seminar.jpg',
    labId: 'keris'
  },
  {
    id: 'ach-se-innosoft-bogor',
    year: '2020',
    title: 'Sapu Bersih Juara I, II, dan III Lomba Inovasi Tingkat Kabupaten Bogor',
    recipient: 'Tim InnoSoft — Laboratorium Software Engineering',
    category: 'Kompetisi Nasional',
    description:
      'Tim InnoSoft Lab SE memborong seluruh podium utama (Juara 1, 2, dan 3) pada ajang Gelar Inovasi Daerah Kabupaten Bogor.',
    image: './assets/gallery/se-inovasi2020.jpg',
    labId: 'se'
  },
  {
    id: 'ach-se-keris-hackathon',
    year: '2020–2022',
    title: 'Top 5 & Top 10 Finalis Nasional Hackathon (EDSEN Hackathon & Nasional)',
    recipient: 'Kolaborasi Tim InnoSoft (SE) & Tim Riset KERIS',
    category: 'Kompetisi Nasional',
    description:
      'Menembus 5 Besar Finalis Lomba Hackathon Tingkat Nasional (2020) dan 10 Besar Finalis Nasional EDSEN Hackathon (2022).',
    image: './assets/gallery/se-edsen.jpg',
    labId: 'se'
  },
  {
    id: 'ach-keris-pkm',
    year: '2019–2024',
    title: '4 Hibah Program Kreativitas Mahasiswa (PKM) LLDIKTI & Belmawa',
    recipient: 'Tim Riset Mahasiswa Lab KERIS',
    category: 'Pendanaan & Hibah',
    description:
      'Pendanaan riset: Prediksi Kanker dengan Autoencoder (2019), KNN Pemetaan UMKM Kuliner (2020), Cellular Automata COVID-19 (2022), dan Optimasi Rute Angkot Bogor Berbasis AI (2024).',
    image: './assets/gallery/keris-diskusi.jpg',
    labId: 'keris'
  },
  {
    id: 'ach-git-leuwiliang',
    year: '2025',
    title: 'Akuisisi Data Presisi Persawahan dengan Drone Multispectral & RTK',
    recipient: 'Tim Survei Lapangan Lab GIT — Kecamatan Leuwiliang',
    category: 'Produk & Sistem',
    description:
      'Implementasi lapangan DJI Phantom 4 Multispectral dan Base Station D-RTK 2 untuk pemetaan ortofoto, model permukaan 3D, dan pertanian presisi di Kabupaten Bogor.',
    image: './assets/gallery/git-leuwiliang.jpg',
    labId: 'git'
  },
  {
    id: 'ach-se-alvano',
    year: '2024',
    title: 'Sertifikasi Dev Android, Oracle SQL, BNSP & Intern Frontend BPS Kab. Bogor',
    recipient: 'Alvano Hastagina (Angkatan 2022 — Lab SE)',
    category: 'Sertifikasi & MBKM',
    description:
      'Meraih sertifikasi Junior Web Developer BNSP, Oracle Academy SQL, Dev Certification for Android (dev.id), Dicoding Expert, dan Frontend Developer di BPS Kabupaten Bogor.',
    image: './assets/gallery/se-bps.jpg',
    labId: 'se'
  },
  {
    id: 'ach-keris-mbkm',
    year: '2022–2024',
    title: 'Jejak Global & Nasional: UNICEL Malaysia, PT Telkom, Bangkit & Orbit AI',
    recipient: '17+ Mahasiswa Lab KERIS dalam Program MBKM & Internasional',
    category: 'Sertifikasi & MBKM',
    description:
      'Pertukaran pelajar & internship internasional di Malaysia (UNICEL), Magang PT Telkom Bandung (IoT) & Jakarta (Data), serta 7 lulusan Bangkit Academy.',
    image: './assets/gallery/keris-alumni.jpg',
    labId: 'keris'
  },
  {
    id: 'ach-se-wisuda',
    year: '2022–2025',
    title: 'Lulusan Terbaik Prodi Teknik Informatika (Wisuda ke-79, 80, 81 & 82) & Lulus Tepat Waktu',
    recipient: 'Sivitas Mahasiswa Laboratorium Software Engineering',
    category: 'Akademik & Lulusan',
    description:
      'Mencetak lulusan terbaik berturut-turut pada Wisuda UIKA ke-79 hingga ke-82, serta rekor kelulusan tepat waktu (4 tahun) satu angkatan penuh.',
    image: './assets/gallery/se-wisuda.jpg',
    labId: 'se'
  },
  {
    id: 'ach-csn-kolaborasi',
    year: '2021–2025',
    title: 'Undangan Pameran Gelar Inovasi Daerah & Penguatan Infrastruktur Jaringan',
    recipient: 'Kolaborasi Lab CSN (NCC) & Lab SE',
    category: 'Produk & Sistem',
    description:
      'Diundang secara resmi dalam Pameran Gelar Inovasi Daerah Kabupaten Bogor serta pengembangan prototipe LoRa/NB-IoT dan keamanan jaringan.',
    image: './assets/gallery/se-pameran2021.jpg',
    labId: 'csn'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-se-fas-1',
    title: 'Ruang Praktikum & Riset Software Engineering',
    subtitle: 'Fasilitas pengembangan sistem informasi dan bimbingan riset RPL UIKA Bogor',
    category: 'Fasilitas',
    labId: 'se',
    year: '2026',
    image: './assets/fasilitas/se-1.jpg'
  },
  {
    id: 'gal-se-fas-2',
    title: 'Stasiun Kerja Kolaboratif RISE Center',
    subtitle: 'Infrastruktur penunjang praktikum pemrograman web, mobile, dan UI/UX',
    category: 'Fasilitas',
    labId: 'se',
    year: '2026',
    image: './assets/fasilitas/se-2.jpg'
  },
  {
    id: 'gal-csn-fas-1',
    title: 'Laboratorium Computer System & Networking (CSN)',
    subtitle: 'Ruang praktikum topologi jaringan, konfigurasi router/switch, dan administrasi server',
    category: 'Fasilitas',
    labId: 'csn',
    year: '2026',
    image: './assets/fasilitas/csn-1.jpg'
  },
  {
    id: 'gal-csn-fas-2',
    title: 'Testbed Jaringan & Perangkat Keras NCC',
    subtitle: 'Fasilitas eksperimen keamanan jaringan, cloud computing, dan sistem terbenam',
    category: 'Fasilitas',
    labId: 'csn',
    year: '2026',
    image: './assets/fasilitas/csn-2.jpg'
  },
  {
    id: 'gal-git-fas-1',
    title: 'Laboratorium Geospatial Information Technology (GIT)',
    subtitle: 'Pusat pemrosesan citra satelit, pemodelan spasial, dan pengembangan WebGIS',
    category: 'Fasilitas',
    labId: 'git',
    year: '2026',
    image: './assets/fasilitas/git-1.jpg'
  },
  {
    id: 'gal-git-fas-2',
    title: 'Studio Komputasi Spasial & GeoAI',
    subtitle: 'Workstation analisis data geospasial dan pengolahan fotogrametri udara',
    category: 'Fasilitas',
    labId: 'git',
    year: '2026',
    image: './assets/fasilitas/git-2.jpg'
  },
  {
    id: 'gal-git-fas-3',
    title: 'Ruang Diskusi & Riset Geoinformatika',
    subtitle: 'Fasilitas kolaborasi dosen dan mahasiswa peminatan GIT UIKA Bogor',
    category: 'Fasilitas',
    labId: 'git',
    year: '2026',
    image: './assets/fasilitas/git-3.jpg'
  },
  {
    id: 'gal-keris-fas-1',
    title: 'Laboratorium Riset KERIS (Knowledge Engineering)',
    subtitle: 'Dilengkapi komputer performansi tinggi (RTX 3060) untuk pelatihan model AI',
    category: 'Fasilitas',
    labId: 'keris',
    year: '2026',
    image: './assets/fasilitas/keris-1.jpg'
  },
  {
    id: 'gal-keris-fas-2',
    title: 'Ruang Kolokium & Diskusi Mingguan KERIS',
    subtitle: 'Pusat kegiatan diskusi ide skripsi hari Kamis dan riset sistem cerdas',
    category: 'Fasilitas',
    labId: 'keris',
    year: '2026',
    image: './assets/fasilitas/keris-2.jpg'
  },
  {
    id: 'gal-git-drone',
    title: 'Armada Drone DJI Phantom 4 Multispectral & RTK',
    subtitle: 'Wahana akuisisi data geospasial resolusi tinggi dengan sensor 5-band multispektral',
    category: 'Fasilitas',
    labId: 'git',
    year: '2025',
    image: './assets/gallery/git-drone.jpg'
  },
  {
    id: 'gal-git-rtk',
    title: 'Pemasangan Base Station D-RTK 2 di Lapangan',
    subtitle: 'Kalibrasi titik kontrol geodetik untuk akurasi posisi tingkat sentimeter',
    category: 'Kegiatan & Riset',
    labId: 'git',
    year: '2025',
    image: './assets/gallery/git-rtk.jpg'
  },
  {
    id: 'gal-git-leuwiliang',
    title: 'Survei Drone Persawahan Kecamatan Leuwiliang',
    subtitle: 'Akuisisi data ortofoto dan analisis pertanian presisi Kabupaten Bogor',
    category: 'Kegiatan & Riset',
    labId: 'git',
    year: '2025',
    image: './assets/gallery/git-leuwiliang.jpg'
  },
  {
    id: 'gal-git-lapangan',
    title: 'Praktik Lapangan Penerbangan Wahana Nirawak',
    subtitle: 'Pelatihan kesiapan perangkat, rencana misi terbang, dan keselamatan survei',
    category: 'Kegiatan & Riset',
    labId: 'git',
    year: '2025',
    image: './assets/gallery/git-lapangan.jpg'
  },
  {
    id: 'gal-git-gathering',
    title: 'Family Gathering Sivitas Laboratorium GIT',
    subtitle: 'Membangun solidaritas dan budaya kolaborasi lintas angkatan di peminatan GIT',
    category: 'Kegiatan & Riset',
    labId: 'git',
    year: '2024',
    image: './assets/gallery/git-gathering.jpg'
  },
  {
    id: 'gal-git-diskusi',
    title: 'Forum Diskusi & Sharing Keilmuan Geospasial',
    subtitle: 'Pertukaran gagasan penelitian antara dosen pembimbing dan mahasiswa GIT',
    category: 'Kegiatan & Riset',
    labId: 'git',
    year: '2024',
    image: './assets/gallery/git-diskusi.jpg'
  },
  {
    id: 'gal-git-apresiasi',
    title: 'Apresiasi & Pengukuhan Anggota Laboratorium GIT',
    subtitle: 'Penghargaan atas dedikasi dan kepemimpinan mahasiswa dalam kegiatan riset',
    category: 'Prestasi',
    labId: 'git',
    year: '2024',
    image: './assets/gallery/git-apresiasi.jpg'
  },
  {
    id: 'gal-se-siakad',
    title: 'Produk Unggulan: Sistem Informasi Akademik (SIAK)',
    subtitle: 'Dikembangkan oleh tim mahasiswa dan dosen Laboratorium Software Engineering',
    category: 'Produk & Sistem',
    labId: 'se',
    year: '2024',
    image: './assets/gallery/se-siakad.jpg'
  },
  {
    id: 'gal-se-simpeg',
    title: 'Produk Unggulan: Sistem Informasi Kepegawaian (SIMPEG)',
    subtitle: 'Transformasi digital manajemen sumber daya manusia di lingkungan kampus',
    category: 'Produk & Sistem',
    labId: 'se',
    year: '2024',
    image: './assets/gallery/se-simpeg.jpg'
  },
  {
    id: 'gal-se-ucl',
    title: 'Aplikasi Mobile Prodi & Smart Campus (UCL)',
    subtitle: 'Inovasi layanan akademik berbasis perangkat bergerak karya mahasiswa RPL',
    category: 'Produk & Sistem',
    labId: 'se',
    year: '2024',
    image: './assets/gallery/se-ucl.jpg'
  },
  {
    id: 'gal-se-webprodi',
    title: 'Portal Resmi Program Studi Teknik Informatika',
    subtitle: 'Pengembangan arsitektur web informasi akademik dan publikasi prodi',
    category: 'Produk & Sistem',
    labId: 'se',
    year: '2024',
    image: './assets/gallery/se-webprodi.jpg'
  },
  {
    id: 'gal-se-korlantas',
    title: 'Proyek Kolaborasi Dosen & Mahasiswa bersama Korlantas Polri',
    subtitle: 'Pengembangan sistem perangkat lunak tingkat nasional tahun 2022',
    category: 'Produk & Sistem',
    labId: 'se',
    year: '2022',
    image: './assets/gallery/se-korlantas.jpg'
  },
  {
    id: 'gal-se-bps',
    title: 'Pengembangan Sistem Informasi Badan Pusat Statistik (BPS)',
    subtitle: 'Kontribusi nyata mahasiswa SE dalam modernisasi pengolahan data instansi',
    category: 'Produk & Sistem',
    labId: 'se',
    year: '2024',
    image: './assets/gallery/se-bps.jpg'
  },
  {
    id: 'gal-se-asean',
    title: 'Proyek Tingkat ASEAN Bersama Mahasiswa RPL',
    subtitle: 'Eksposur rekayasa perangkat lunak mahasiswa UIKA di kancah Asia Tenggara',
    category: 'Prestasi',
    labId: 'se',
    year: '2023',
    image: './assets/gallery/se-asean.jpg'
  },
  {
    id: 'gal-se-bangkit',
    title: 'Penerima Dana Inkubasi Rp 140 Juta Google Bangkit Academy',
    subtitle: 'Muhammad Rizki — Best Capstone Project & Distinction Graduate',
    category: 'Prestasi',
    labId: 'se',
    year: '2024',
    image: './assets/gallery/se-bangkit.jpg'
  },
  {
    id: 'gal-se-inovasi2020',
    title: 'Tim InnoSoft Borong Juara I, II & III Lomba Inovasi Kab. Bogor',
    subtitle: 'Dominasi penuh karya riset perangkat lunak di tingkat pemerintah daerah',
    category: 'Prestasi',
    labId: 'se',
    year: '2020',
    image: './assets/gallery/se-inovasi2020.jpg'
  },
  {
    id: 'gal-se-edsen',
    title: '10 Besar Finalis Nasional EDSEN Hackathon 2022',
    subtitle: 'Tim InnoSoft Lab SE bersaing di kompetisi rekayasa perangkat lunak nasional',
    category: 'Prestasi',
    labId: 'se',
    year: '2022',
    image: './assets/gallery/se-edsen.jpg'
  },
  {
    id: 'gal-se-mawapres',
    title: 'Finalis Mahasiswa Berprestasi (Mawapres) Tingkat Jawa Barat',
    subtitle: 'Representasi keunggulan akademik mahasiswa peminatan RPL UIKA Bogor',
    category: 'Prestasi',
    labId: 'se',
    year: '2023',
    image: './assets/gallery/se-mawapres.jpg'
  },
  {
    id: 'gal-se-pameran2021',
    title: 'Kolaborasi Lab SE & CSN (NCC) pada Pameran Gelar Inovasi Daerah',
    subtitle: 'Sinergi perangkat lunak dan sistem jaringan dalam pameran inovasi Kabupaten Bogor',
    category: 'Kegiatan & Riset',
    labId: 'csn',
    year: '2021',
    image: './assets/gallery/se-pameran2021.jpg'
  },
  {
    id: 'gal-keris-kamis',
    title: 'Tradisi Ilmiah: Diskusi Perkembangan Ide Skripsi Setiap Kamis',
    subtitle: 'Pendampingan intensif metodologi AI dan Knowledge Engineering di Lab KERIS',
    category: 'Kegiatan & Riset',
    labId: 'keris',
    year: '2024',
    image: './assets/gallery/keris-kamis.jpg'
  },
  {
    id: 'gal-keris-sosialisasi',
    title: 'Sosialisasi Program Percepatan Kelulusan Bersama Dosen Pembimbing',
    subtitle: 'Penyelarasan peta jalan riset mahasiswa KERIS agar lulus tepat waktu dengan riset bermutu',
    category: 'Kegiatan & Riset',
    labId: 'keris',
    year: '2022',
    image: './assets/gallery/keris-sosialisasi.jpg'
  },
  {
    id: 'gal-keris-alumni',
    title: 'Sharing Session Bersama Alumni Laboratorium KERIS',
    subtitle: 'Transfer pengalaman industri Data Science dan AI lintas generasi',
    category: 'Kegiatan & Riset',
    labId: 'keris',
    year: '2022',
    image: './assets/gallery/keris-alumni.jpg'
  },
  {
    id: 'gal-se-pkm',
    title: 'Klinik Penyusunan Proposal Hibah PKM',
    subtitle: 'Pendampingan intensif perumusan gagasan riset mahasiswa hingga pendanaan nasional',
    category: 'Kegiatan & Riset',
    labId: 'se',
    year: '2024',
    image: './assets/gallery/se-pkm.jpg'
  }
];

export const SYNERGY_BLUEPRINT = {
  title: 'Smart City Digital Twin — Kota Bogor',
  subtitle: 'Satu Proyek Strategis — Kolaborasi Terpadu 5 Laboratorium Teknik Informatika UIKA Bogor',
  quote:
    'Kolaborasi antar-lab menghasilkan solusi teknologi yang jauh lebih besar daripada jika setiap bidang bekerja sendiri.',
  nodes: [
    {
      id: 'se',
      labCode: 'Peminatan Software Engineering',
      name: 'Software Engineering',
      role: 'Geospatial & Enterprise Software Layer',
      accent: '#17368A',
      contributions: ['Arsitektur Platform WebGIS & Citizen Portal', 'Spatial REST/GraphQL API Gateway', 'Cloud Application & Microservices', 'Mobile Command Center UI/UX'],
      concreteOutput: 'Platform WebGIS & Aplikasi Mobile untuk Monitoring Pembangunan Kota Bogor secara Terpadu.'
    },
    {
      id: 'csn',
      labCode: 'Peminatan Computer System & Networking',
      name: 'Computer System & Networking',
      role: 'IoT Telemetry, Edge & Secure Network Layer',
      accent: '#0F4C5C',
      contributions: ['Jaringan Sensor Nirkabel (WSN) & LoRaWAN', 'Telemetri Tinggi Muka Air & Cuaca Real-Time', 'Infrastruktur Edge/Cloud Server Tangguh', 'Keamanan Transmisi Data & Protokol Jaringan'],
      concreteOutput: 'Real-Time Flood & Environmental Sensor Network di Daerah Aliran Sungai Ciliwung-Cisadane.'
    },
    {
      id: 'git',
      labCode: 'Peminatan Geospatial Information Technology',
      name: 'Geospatial Information Technology',
      role: 'Spatial Intelligence & Earth Observation Core',
      accent: '#14532D',
      contributions: ['Akuisisi Ortofoto Drone RTK & Citra Satelit', 'Pemodelan Hidrologi & Digital Surface Model (DSM)', 'Geodatabase Terpusat & Analisis Spasial', 'Spatial Decision Support System (SDSS)'],
      concreteOutput: 'Peta Dasar Resolusi Sentimeter & Model Spasial Dinamik Tata Ruang Kota Bogor.'
    },
    {
      id: 'keris',
      labCode: 'Peminatan KERIS (Sistem Cerdas)',
      name: 'Knowledge Engineering & Reliable Intelligent Systems',
      role: 'GeoAI, Predictive Modeling & Knowledge Graph Layer',
      accent: '#7C2D12',
      contributions: ['Model Deep Learning Prediksi Risiko Banjir & Kemacetan', 'Deteksi Objek Bangunan & Tutupan Lahan Otomatis', 'Ontologi Kebencanaan & Sistem Pakar Mitigasi', 'Optimasi Rute Transportasi Berbasis AI'],
      concreteOutput: 'Mesin Prediksi Risiko Banjir & Rekomendasi Kebijakan Berbasis AI (GeoAI).'
    },
    {
      id: 'multimedia',
      labCode: 'Laboratorium Multimedia & Grafika',
      name: 'Multimedia & Interactive Computing',
      role: '3D Digital Twin & Immersive Visualization Layer',
      accent: '#4C1D95',
      contributions: ['Pemodelan 3D GIS Bangunan & Infrastruktur Kota', 'Simulasi Virtual Reality (VR) & Augmented Reality (AR)', 'Visualisasi Interaktif Tata Kota Berbasis Waktu Nyata', 'Antarmuka Imersif Ruang Kendali (Command Center)'],
      concreteOutput: 'Visualisasi 3D Digital Twin Kota Bogor Interaktif untuk Simulasi Tata Ruang.'
    }
  ]
};

export const ADVISOR_QUESTIONS: AdvisorQuestion[] = [
  {
    id: 1,
    domain: 'Orientasi Masalah & Objek Kajian',
    scenario: 'Program Studi Teknik Informatika UIKA Bogor menugaskan tim lintas peminatan untuk merespons persoalan banjir dan kemacetan di Kota Bogor.',
    question: 'Bagian rekayasa mana yang paling memicu rasa ingin tahu intelektual Anda?',
    options: [
      {
        label: 'A',
        text: 'Merancang arsitektur aplikasi web/mobile layanan publik yang cepat, intuitif, dan digunakan ribuan warga.',
        subtext: 'Fokus pada Software Architecture, Fullstack Web/Mobile & UI/UX Engineering.',
        weights: { se: 35, csn: 5, git: 10, keris: 5 }
      },
      {
        label: 'B',
        text: 'Merakit jaringan sensor IoT LoRa di sungai, merancang server cloud tangguh, dan mengamankan trafik data dari serangan siber.',
        subtext: 'Fokus pada Network Infrastructure, Cloud, Cybersecurity & Embedded IoT.',
        weights: { se: 5, csn: 35, git: 10, keris: 5 }
      },
      {
        label: 'C',
        text: 'Menerbangkan drone RTK/Multispectral, mengolah citra satelit di Google Earth Engine, dan memetakan zona risiko spasial.',
        subtext: 'Fokus pada Geospatial Intelligence, Remote Sensing, Spatial Programming & WebGIS.',
        weights: { se: 5, csn: 5, git: 35, keris: 10 }
      },
      {
        label: 'D',
        text: 'Melatih model Machine Learning/Deep Learning dan menyusun Knowledge Graph untuk memprediksi anomali secara cerdas.',
        subtext: 'Fokus pada Artificial Intelligence, Data Mining, Ontology & Expert Systems.',
        weights: { se: 5, csn: 5, git: 10, keris: 35 }
      }
    ]
  },
  {
    id: 2,
    domain: 'Instrumen & Ekosistem Kerja',
    scenario: 'Saat bekerja di laboratorium selama dua semester ke depan, lingkungan teknis seperti apa yang paling ingin Anda kuasai?',
    question: 'Pilih tumpukan teknologi (tech stack & instrumen) yang paling sesuai dengan target keahlian Anda:',
    options: [
      {
        label: 'A',
        text: 'React/Next.js, Kotlin/Flutter, Figma Design System, REST API, dan Enterprise Database.',
        subtext: 'Ekosistem Rekayasa Perangkat Lunak & Produk Digital.',
        weights: { se: 30, csn: 5, git: 10, keris: 5 }
      },
      {
        label: 'B',
        text: 'Cisco/MikroTik, GNS3, AWS/OpenStack, Firewall/IDS, Linux Kernel, dan Mikrokontroler ESP32/FPGA.',
        subtext: 'Ekosistem Sistem Komputer, Jaringan & Keamanan Siber.',
        weights: { se: 5, csn: 30, git: 5, keris: 10 }
      },
      {
        label: 'C',
        text: 'Python GeoPandas/Rasterio, PostGIS, QGIS, Google Earth Engine, dan Wahana Drone DJI RTK.',
        subtext: 'Ekosistem Teknologi Informasi Geospasial & Pemetaan Cerdas.',
        weights: { se: 10, csn: 5, git: 30, keris: 5 }
      },
      {
        label: 'D',
        text: 'PyTorch/TensorFlow di GPU RTX 3060, Scikit-Learn, OpenCV, dan Protégé Ontology/Knowledge Graph.',
        subtext: 'Ekosistem Kecerdasan Buatan, Sains Data & Rekayasa Pengetahuan.',
        weights: { se: 5, csn: 5, git: 10, keris: 30 }
      }
    ]
  },
  {
    id: 3,
    domain: 'Topik Skripsi & Publikasi Ilmiah',
    scenario: 'Menjelang Semester 6 dan 7, mahasiswa memilih topik Tugas Akhir (Skripsi) yang selaras dengan peta jalan riset dosen.',
    question: 'Judul penelitian mana yang paling ingin Anda pertahankan di hadapan dewan penguji?',
    options: [
      {
        label: 'A',
        text: 'Pengembangan Sistem Informasi Enterprise Terintegrasi & Aplikasi Mobile Smart Campus Berbasis Clean Architecture.',
        subtext: 'Luaran: Produk Perangkat Lunak Institusional & Evaluasi Usability.',
        weights: { se: 30, csn: 5, git: 5, keris: 5 }
      },
      {
        label: 'B',
        text: 'Simulasi Mitigasi Serangan MITM pada Hybrid Cloud serta Komunikasi Kawanan Drone (Swarm) Berbasis LoRa/NB-IoT.',
        subtext: 'Luaran: Arsitektur Jaringan Tangguh, Protokol Keamanan & WSN.',
        weights: { se: 5, csn: 30, git: 5, keris: 5 }
      },
      {
        label: 'C',
        text: 'Deteksi Tapak Bangunan Otomatis dari Citra Satelit & Pemodelan Spasial Risiko Bencana Berbasis WebGIS.',
        subtext: 'Luaran: Spatial Decision Support System (SDSS) & Peta Analitik.',
        weights: { se: 5, csn: 5, git: 30, keris: 10 }
      },
      {
        label: 'D',
        text: 'Model Prediksi Medis Menggunakan Autoencoder & Optimasi Rute Transportasi Perkotaan Berbasis Artificial Intelligence.',
        subtext: 'Luaran: Model Prediktif AI, Publikasi Ilmiah & Sistem Pakar.',
        weights: { se: 5, csn: 5, git: 5, keris: 30 }
      }
    ]
  },
  {
    id: 4,
    domain: 'Prospek Karir & Peran Industri',
    scenario: 'Setelah diwisuda dengan gelar Sarjana Komputer (S.Kom.) dari UIKA Bogor, jalur karir profesional mana yang menjadi prioritas utama Anda?',
    question: 'Pilih profil lulusan yang paling merepresentasikan visi masa depan Anda:',
    options: [
      {
        label: 'A',
        text: 'Fullstack Web/Mobile Engineer, System Analyst, UI/UX Architect, atau Founder Startup Perangkat Lunak.',
        subtext: 'Membangun produk perangkat lunak untuk korporasi, BUMN, dan masyarakat.',
        weights: { se: 25, csn: 5, git: 5, keris: 5 }
      },
      {
        label: 'B',
        text: 'Network Engineer, Cloud Architect, Cybersecurity Specialist, atau IoT Infrastructure Designer.',
        subtext: 'Menjaga ketersediaan, skalabilitas, dan keamanan infrastruktur digital nasional.',
        weights: { se: 5, csn: 25, git: 5, keris: 5 }
      },
      {
        label: 'C',
        text: 'GIS Developer, GeoAI Engineer, Remote Sensing Specialist, atau Digital Twin Architect di BIG/KLHK/PUPR/Industri.',
        subtext: 'Memimpin transformasi keputusan berbasis lokasi dan intelijen spasial.',
        weights: { se: 5, csn: 5, git: 25, keris: 5 }
      },
      {
        label: 'D',
        text: 'Data Scientist, AI/Machine Learning Engineer, Knowledge Engineer, atau Peneliti Muda.',
        subtext: 'Mengubah data mentah menjadi pengetahuan terstruktur dan kecerdasan prediktif.',
        weights: { se: 5, csn: 5, git: 5, keris: 25 }
      }
    ]
  }
];

export const ACADEMIC_CALENDAR_EVENTS: AcademicEvent[] = [
  {
    date: '2026-11-07',
    dayNumber: 7,
    month: 'Nov 2026',
    title: 'Survei Akuisisi Data Drone RTK & Praktik Lapangan GIT',
    category: 'Praktikum Lapangan',
    lab: 'Lab GIT',
    location: 'Kabupaten Bogor & Studio GIT',
    description: 'Kalibrasi Base Station D-RTK 2 dan pemetaan ortofoto resolusi tinggi bersama mahasiswa Semester 5 & 6.'
  },
  {
    date: '2026-11-12',
    dayNumber: 12,
    month: 'Nov 2026',
    title: 'Kolokium Kamis: Diskusi Progres Ide Skripsi & Riset AI',
    category: 'Kolokium Riset',
    lab: 'Lab KERIS',
    location: 'Ruang Riset KERIS FTS UIKA',
    description: 'Evaluasi mingguan metodologi Machine Learning, Knowledge Graph, dan persiapan publikasi ilmiah mahasiswa.'
  },
  {
    date: '2026-11-13',
    dayNumber: 13,
    month: 'Nov 2026',
    title: 'Batas Akhir Pengumpulan Karya Lomba Website Gebyar IT 2026',
    category: 'Kompetisi',
    lab: '4 Laboratorium TI',
    location: 'Portal Gebyar IT & GitHub Pages',
    description: 'Pengiriman tautan repositori GitHub, URL hosting live (gebyar-it), dan dokumen PDF hasil karya peserta.'
  },
  {
    date: '2026-11-16',
    dayNumber: 16,
    month: 'Nov 2026',
    title: 'Sidang Penilaian Dewan Juri Lomba Website Laboratorium & Peminatan',
    category: 'Kompetisi',
    lab: 'Dewan Juri Prodi TI',
    location: 'Fakultas Teknik dan Sains UIKA Bogor',
    description: 'Penilaian komprehensif meliputi Desain Interface, Inovasi Fitur, Kelengkapan Isi 4 Lab, dan Orisinalitas Kode.'
  },
  {
    date: '2026-11-19',
    dayNumber: 19,
    month: 'Nov 2026',
    title: 'Open Dialog & Klinik Arsitektur Produk Smart Campus (SIAK/SIMPEG)',
    category: 'Akademik',
    lab: 'Lab SE & Lab CSN',
    location: 'RISE Center & Lab NCC',
    description: 'Bedah arsitektur microservices, keamanan jaringan kampus, dan sharing session bersama alumni industri.'
  },
  {
    date: '2026-11-21',
    dayNumber: 21,
    month: 'Nov 2026',
    title: 'Pengumuman Penganugerahan Juara Gebyar IT 2026',
    category: 'Kompetisi',
    lab: 'Himpunan & Prodi TI UIKA',
    location: 'Auditorium Universitas Ibn Khaldun Bogor',
    description: 'Puncak apresiasi karya terbaik Lomba Website Laboratorium dan Peminatan Program Studi Teknik Informatika.'
  }
];

