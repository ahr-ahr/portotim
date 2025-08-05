export type ProjectCategory = "Backend" | "Frontend" | "Backend + Frontend";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  result?: string;
  hero?: string; // URL gambar (opsional)
  problem?: string;
  solution?: string;
  features?: string[];
  tech?: string[];
  metrics?: { label: string; value: string }[];
  links?: {
    demo?: string;
    repo?: string;
    caseStudy?: string;
  };
  category: ProjectCategory; // <<— baru
};

export const projects: Project[] = [
  {
    slug: "investor-dashboard",
    title: "Investor Dashboard",
    summary:
      "MDX konten, modal top-up, container queries, dan interaksi halus.",
    result: "Retensi +15%",
    hero: "",
    problem: "Investor kesulitan memantau performa & riwayat transaksi.",
    solution:
      "Dashboard performa, modal top-up, dan histori transaksi terstruktur.",
    features: [
      "Top-up modal",
      "Riwayat transaksi",
      "Grafik performa portofolio",
    ],
    tech: ["Vite", "Tailwind", "Laravel", "Chart.js"],
    metrics: [{ label: "Retensi", value: "+15%" }],
    links: { demo: "#", caseStudy: "#" },
    category: "Frontend", // <<— UI/UX heavy
  },
  {
    slug: "google-account-auto-register-bot",
    title: "Google Account Auto-Register Bot",
    summary:
      "Bot otomatisasi pendaftaran akun Google dengan script Shell & Batch. Struktur backend menggunakan PHP OOP.",
    result: "GMV +32%",
    hero: "", // (opsional, tambahkan di public/images)
    problem:
      "Manual registrasi akun Google menyulitkan operasional skala besar.",
    solution:
      "Dibuat sistem backend + bot CLI untuk otomatisasi pembuatan akun, logging granular, dan validasi.",
    features: [
      "Script batch & shell CLI-friendly",
      "Chrome driver",
      "Logging status granular per akun",
    ],
    tech: ["PHP", "Shell", "HTML", "Batchfile"],
    metrics: [
      { label: "GMV", value: "+32%" },
      { label: "Akun per hari", value: "500+" },
      { label: "Error rate", value: "<0.2%" },
    ],
    links: {
      repo: "https://github.com/ahr-ahr/xixixixi",
      //caseStudy: "/case-studies/google-bot", // buat markdown atau page lokal
    },
    category: "Backend",
  },
  {
    slug: "landing-page-hosting",
    title: "Landing Page Hosting Service",
    summary:
      "Landing page stylish & modern untuk jasa hosting (domain, server, dll) dengan teknologi modern dan desain responsive.",
    result: "Tingkat konversi meningkat +18%",
    hero: "", // opsional, masukkan ke /public/images
    problem:
      "Website hosting tradisional cenderung monoton dan tidak menarik perhatian user.",
    solution:
      "Landing page full responsive berbasis Tailwind + HTML statis, dirancang cepat, estetik, dan ringan. Meningkatkan engagement & trust.",
    features: [
      "Desain bersih & profesional",
      "Responsive & fast loading",
      "Paket hosting yang terstruktur",
      "CTA terintegrasi untuk konversi",
    ],
    tech: ["HTML", "Tailwind CSS", "Vite"],
    metrics: [
      { label: "Konversi", value: "+18%" },
      { label: "Speed score", value: "99/100" },
    ],
    links: {
      repo: "https://github.com/ahr-ahr/landing-page-hosting",
      demo: "https://landing-page-hosting.ahr180607.my.id",
    },
    category: "Frontend",
  },
  {
    slug: "detect",
    title: "Deteksi Kacamata & Senyum (CLI)",
    summary:
      "Skrip Python untuk deteksi wajah senyum dan kacamata menggunakan OpenCV dan model pre-trained.",
    result: "Akurasi prediksi gender 95%, usia sekitar 84%, senyum 79%.",
    hero: "", // bisa kamu tambahkan nanti jika ada tangkapan layar dari output terminal
    problem:
      "Belum tersedia skrip ringan berbasis CLI yang langsung bisa digunakan untuk deteksi senyum & kacamata dari wajah.",
    solution:
      "Script Python berbasis OpenCV yang menerima input gambar/video dan memberikan prediksi senyum dan kacamata secara efisien.",
    features: [
      "Prediksi usia dari gambar/video",
      "Model gender/age detection dari OpenCV",
      "Dukungan input webcam atau file gambar",
      "Tampilan hasil langsung di terminal atau jendela OpenCV",
    ],
    tech: ["Python", "OpenCV"],
    metrics: [
      { label: "Akurasi kacamata", value: "84%" },
      { label: "Akurasi senyum", value: "79%" },
    ],
    links: {
      repo: "https://github.com/ahr-ahr/detect",
    },
    category: "Backend",
  },
  {
    slug: "floating-app-controller",
    title: "Floating App Controller (Windows)",
    summary:
      "Aplikasi Python GUI untuk mem-float/unfloat jendela aktif di Windows, dilengkapi fitur keyword, hotkey, dan auto-float.",
    result: "Workflow multitasking pengguna meningkat secara signifikan.",
    hero: "", // tambahkan screenshot GUI jika ada, misalnya: "/images/floating-app-controller.png"
    problem:
      "Sulit menjaga jendela aplikasi tertentu agar tetap terlihat saat berpindah antar jendela lain.",
    solution:
      "Aplikasi berbasis Python + GUI Tkinter yang memungkinkan pengguna menampilkan jendela `always-on-top`, cari berdasarkan keyword, dan atur dengan hotkey.",
    features: [
      "Daftar jendela aktif yang bisa dipilih",
      "Set jendela always-on-top atau kembali normal",
      "Cari & auto-float berdasarkan keyword",
      "Hotkey global (Ctrl + Alt + F) untuk mem-float jendela aktif",
      "Interface GUI ringan menggunakan Tkinter",
    ],
    tech: ["Python", "Tkinter", "pywin32", "keyboard", "Pillow"],
    metrics: [
      { label: "Waktu setup", value: "< 2 menit" },
      { label: "Hotkey Responsiveness", value: "Realtime" },
    ],
    links: {
      repo: "https://github.com/ahr-ahr/Floating-App-Controller",
    },
    category: "Backend + Frontend",
  },
  {
    slug: "audit-log-application",
    title: "Audit Log Application (PHP + Notifikasi Otomatis)",
    summary:
      "Aplikasi web untuk mencatat aktivitas user (login, akses halaman, logout, dll) yang terintegrasi dengan notifikasi WhatsApp, Telegram, dan email.",
    result: "Audit trail sistem lebih transparan & real-time.",
    hero: "", // opsional: bisa pakai screenshot halaman dashboard
    problem:
      "Sulit mengetahui aktivitas pengguna dan tidak ada sistem log real-time yang dapat diawasi admin.",
    solution:
      "Audit log real-time berbasis web, menyimpan data lengkap ke DB dan mengirim notifikasi otomatis ke admin via WA, Telegram, dan email.",
    features: [
      "Pencatatan login, logout, URI, dan aksi user",
      "Integrasi notifikasi: WhatsApp, Telegram, Email",
      "Notifikasi bisa otomatis via cron job",
      "Dashboard daftar log",
      "Autentikasi dan pendaftaran user (bcrypt)",
    ],
    tech: [
      "PHP",
      "MySQL/MariaDB",
      "PHPMailer",
      "Telegram Bot API",
      "WhatsApp API (local)",
      "Composer",
      "Cron Job",
    ],
    metrics: [
      { label: "Penerapan produksi", value: "Internal monitoring system" },
      { label: "Respons pengiriman log", value: "< 3 detik (via Telegram/WA)" },
    ],
    links: {
      repo: "https://github.com/ahr-ahr/audit-log-app",
      demo: "", // bisa ditambahkan jika ada live server lokal / demo online
    },
    category: "Backend + Frontend",
  },
  {
    slug: "cek-winrate-mlbb-web",
    title: "Cek Win Rate MLBB (Mobile Legends Bang Bang)",
    summary:
      "Web app sederhana untuk mengecek win rate akun MLBB hanya dengan masukan total match, win rate dan target win rate.",
    result: "Cek WR hanya dalam 2 detik tanpa login.",
    hero: "", // opsional, bisa diisi tangkapan layar halaman
    problem:
      "Tidak ada cara mudah dan instan untuk mengecek Win Rate Mobile Legends tanpa install aplikasi atau login.",
    solution:
      "Aplikasi web statis berbasis Tailwind & JavaScript yang langsung menampilkan WR MLBB dari total match, win rate dan target win rate.",
    features: [
      "Total match, Win rate dan Target win rate",
      "Validasi input ID & nickname",
      "Menampilkan WR dalam detik",
      "Desain minimalis berbasis Tailwind",
      "No backend, no database, instant load",
    ],
    tech: ["HTML", "TailwindCSS", "JavaScript"],
    metrics: [
      { label: "Waktu cek WR", value: "< 2 detik" },
      { label: "Dependencies", value: "0 (tanpa backend)" },
    ],
    links: {
      repo: "https://github.com/briangtg/cek-wr",
      demo: "https://briangtg.github.io/cek-wr/", // aktif berdasarkan GitHub Pages
    },
    category: "Frontend",
  },
];
