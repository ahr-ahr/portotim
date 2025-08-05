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
  links?: { demo?: string; repo?: string; caseStudy?: string };
  category: ProjectCategory; // <<— baru
};

export const projects: Project[] = [
  {
    slug: "aplikasi-kurir-realtime",
    title: "Aplikasi Kurir Realtime",
    summary:
      "Trim rute polyline, status progres, dan notifikasi visual saat delivered.",
    result: "Waktu antar -18%",
    hero: "",
    problem: "Tracking pengiriman belum realtime & rute sering tidak akurat.",
    solution:
      "Trim polyline dinamis, socket event status, dan visual notifikasi delivered.",
    features: [
      "Trim rute polyline saat kurir bergerak",
      "Status progres (pickup → dropoff)",
      "Notifikasi visual saat delivered",
    ],
    tech: ["Leaflet", "Socket.io", "ORS", "Laravel", "PostgreSQL"],
    metrics: [
      { label: "Waktu antar", value: "-18%" },
      { label: "Kesalahan rute", value: "-23%" },
    ],
    links: { demo: "#", caseStudy: "#" },
    category: "Backend + Frontend", // <<— isi sesuai
  },
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
    slug: "marketplace-sql",
    title: "Marketplace SQL",
    summary:
      "13+ tabel: seller, produk, order, cart, voucher, komplain, log status.",
    result: "GMV +32%",
    hero: "",
    problem: "Struktur data awal belum siap skala & promosi otomatis.",
    solution:
      "Skema lengkap: katalog, order, voucher, promosi otomatis, banner hybrid.",
    features: [
      "Promosi otomatis",
      "Banner hybrid",
      "Log status order granular",
    ],
    tech: ["Go", "Laravel", "PostgreSQL"],
    metrics: [{ label: "GMV", value: "+32%" }],
    links: { repo: "#", caseStudy: "#" },
    category: "Backend", // <<— dominan server/data
  },
];
