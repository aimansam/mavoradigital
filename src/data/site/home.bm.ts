import { CircleCheck, FileText, MessageCircle, PanelsTopLeft, Sparkles, Wrench } from "@lucide/astro";

export const ctaHref = "#project-request";
export const siteUrl = "https://mavoradigital.com";
export const bmSiteUrl = `${siteUrl}/bm/`;

export const metadata = {
  title: "Mavora Digital | Website yang bantu bisnes dapat lebih banyak jualan",
  description: "Mavora Digital membina website yang kemas, laju, dan meyakinkan supaya bisnes anda lebih mudah dipercayai, menerima pertanyaan berkualiti, dan menjana jualan.",
  socialPreview: `${siteUrl}/social-preview.png`,
};

export const navigation = [
  { label: "Servis", href: "#services" },
  { label: "Demo", href: "#portfolio" },
  { label: "Pakej", href: "#packages" },
  { label: "Proses", href: "#process" },
  { label: "Soalan", href: "#faq" },
];

export const header = {
  navAriaLabel: "Navigasi utama",
  homeAriaLabel: "Mavora Digital home",
  menuOpenLabel: "Buka menu",
  menuCloseLabel: "Tutup menu",
  ctaLabel: "Permintaan Projek",
  ctaLabelShort: "Projek",
};

export const hero = {
  kicker: "Website freelance untuk bisnes yang fokus pada jualan",
  title: ["Website", "yang", "bantu", "bisnes", "jana", "jualan."],
  copy: "Website anda perlu buat tawaran mudah difahami, mudah dipercayai, dan mudah untuk pelanggan ambil tindakan. Mavora Digital membina halaman yang kemas supaya pelawat berminat menjadi pertanyaan sebenar.",
  proof: "Tawaran jelas / Kepercayaan pembeli / Paparan laju / Laluan pertanyaan terus",
  primaryCta: "Hantar Permintaan Projek",
  secondaryCta: "Lihat Servis",
};

export const motionBand = [
  "Tawaran jelas yang pembeli faham",
  "Lebih dipercayai sebelum mereka hubungi",
  "Lebih banyak pertanyaan daripada pelanggan bersedia",
  "Halaman lebih laju yang kekalkan perhatian",
  "Laluan lebih jelas dari pelawat ke pertanyaan",
];

export const studioStatement = {
  kicker: "Mavora Digital",
  title: "Fokus studio kecil. Website dibina untuk menjual.",
  intro: "Mavora Digital bekerja dengan founder dan bisnes servis yang perlukan website yang orang boleh faham, percaya, dan terus bertindak tanpa proses agensi yang panjang.",
  principles: [
    {
      title: "Tawaran jelas",
      body: "Halaman anda terangkan apa yang anda buat, siapa yang dibantu, dan kenapa ia penting sebelum pelawat hilang minat.",
    },
    {
      title: "Keyakinan pembeli",
      body: "Copy, struktur, dan bukti disusun supaya orang lebih yakin untuk bertanya tentang servis anda.",
    },
    {
      title: "Fokus launch",
      body: "Build kekal lean, laju, dan mudah diserah, dengan laluan jelas ke pertanyaan WhatsApp.",
    },
  ],
};

export const services = [
  {
    title: "Landing page",
    description: "Satu halaman fokus untuk satu tawaran, dibina supaya nilai mudah difahami dan pelawat lebih cepat buat inquiry.",
    points: ["Tawaran jelas", "Aliran CTA", "Kelajuan mobile"],
    icon: Sparkles,
  },
  {
    title: "Website bisnes",
    description: "Website kemas yang menerangkan servis anda dengan jelas, membina kepercayaan, dan memudahkan pelanggan menghubungi anda.",
    points: ["Struktur servis", "Bukti kepercayaan", "Laluan contact"],
    icon: PanelsTopLeft,
  },
  {
    title: "Sistem dan automasi",
    description: "Workflows, integrasi, dan proses automatik yang kurangkan kerja manual dan pastikan bisnes anda berjalan tanpa pengawasan berterusan.",
    points: ["Automasi workflow", "Integrasi tools", "Setup auto-reporting"],
    icon: Wrench,
  },
];

export const packages = [
  {
    name: "Starter Website",
    price: "Bermula RM800",
    detail: "Sales page ringkas untuk satu tawaran jelas, dibina supaya nilai cepat difahami dan pelawat bergerak ke inquiry.",
    points: ["One-page build fokus jualan", "Laluan pembeli mobile", "Asas SEO dan kelajuan"],
    freeFeatures: ["Setup CTA WhatsApp", "Asas on-page SEO", "Semakan mobile responsive"],
    tiers: [
      { name: "Basic", price: "RM800", scope: "Satu landing page, CTA WhatsApp, asas SEO", meta: "1 semakan / 3-5 hari bekerja" },
      { name: "Plus", price: "RM1,200", scope: "Copy flow lebih kuat, motion asas, polish tambahan", meta: "2 semakan / 5-7 hari bekerja" },
      { name: "Pro", price: "RM1,600", scope: "Landing page premium dengan section lebih mendalam", meta: "3 semakan / 7-10 hari bekerja" },
    ],
    note: "Client sediakan logo, content, gambar, domain, dan akses hosting.",
  },
  {
    name: "Business Website",
    price: "Bermula RM1,800",
    detail: "Website untuk bisnes servis yang perlukan kredibiliti, bukti, dan laluan inquiry yang konsisten.",
    points: ["Section servis yang menjual", "Copy yang bina kepercayaan", "Handoff sedia inquiry"],
    freeFeatures: ["Setup laluan contact", "Setup analytics asas", "Checklist launch"],
    tiers: [
      { name: "Basic", price: "RM1,800", scope: "Website bisnes tiga halaman dengan laluan contact jelas", meta: "1 semakan / 7-10 hari bekerja" },
      { name: "Plus", price: "RM2,500", scope: "Website lima halaman dengan struktur servis lebih kuat", meta: "2 semakan / 10-14 hari bekerja", recommended: true },
      { name: "Pro", price: "RM3,500", scope: "Lima hingga tujuh halaman dengan bukti dan portfolio section", meta: "3 semakan / 14-18 hari bekerja" },
    ],
    note: "Client sediakan aset jenama, content servis, dan gambar. Bantuan copywriting boleh diminta jika perlu.",
  },
  {
    name: "Custom Build",
    price: "Bermula RM4,000",
    detail: "Sales flow yang disesuaikan untuk tawaran yang perlukan content lebih kaya, integrasi, atau ruang untuk scale.",
    points: ["Buyer journey custom", "Perancangan integrasi", "Nota jualan selepas launch"],
    freeFeatures: ["Discovery call", "Pelan integrasi", "Nota handoff selepas launch"],
    tiers: [
      { name: "Basic", price: "RM4,000", scope: "Layout custom atau sales flow khas", meta: "2 semakan / 2-3 minggu" },
      { name: "Plus", price: "RM5,500", scope: "Website custom dengan booking atau perancangan integrasi", meta: "3 semakan / 3-4 minggu" },
      { name: "Pro", price: "RM7,500+", scope: "Projek custom lebih besar dengan support launch lebih mendalam", meta: "Scope selepas discovery" },
    ],
    note: "Scope akhir disahkan selepas semakan halaman, ciri, integrasi, dan kesediaan content.",
  },
];

export const packageTierOptions = packages.flatMap((item) =>
  item.tiers.map((tier) => ({
    group: item.name,
    value: `${item.name} - ${tier.name} (${tier.price})`,
    label: `${tier.name} - ${tier.price}`,
    summary: tier.scope,
    meta: tier.meta,
    freeFeatures: item.freeFeatures.join(", "),
  })),
);

export const websiteTypes = [
  {
    name: "Landing Page",
    detail: "Sesuai bila satu tawaran perlukan pitch yang lebih jelas, trust cepat, dan laluan inquiry terus.",
  },
  {
    name: "Business Website",
    detail: "Sesuai bila pembeli perlu faham servis anda sebelum mereka hubungi.",
  },
  {
    name: "Custom Website",
    detail: "Sesuai untuk sales flow custom, content lebih kaya, integrasi, atau launch lebih besar.",
  },
];

export const pageOptions = ["Home", "Services", "Portfolio", "About", "Contact", "Pricing", "Blog", "Privacy"];
export const featureOptions = ["Contact form", "Booking link", "Map/location", "Gallery", "Testimonials", "Analytics", "Setup SEO", "Animation asas"];
export const businessTypes = ["Restaurant / cafe", "Beauty / personal care", "Automotive", "Retail / shop", "Professional service", "Freelancer / creator", "Bisnes lokal lain", "Bisnes online"];
export const contentReadinessOptions = ["Logo, teks, dan gambar sudah ready", "Saya ada logo sahaja", "Perlu bantuan dengan teks", "Perlu bantuan dengan gambar/content"];
export const domainOwnershipOptions = ["Ya, saya sudah ada domain", "Belum, saya perlukan bantuan domain"];

export const portfolio = {
  kicker: "Demo kami",
  title: "Demo bisnes lokal yang dibina sekitar tawaran jelas dan tindakan pelanggan yang cepat.",
  body: "Setiap konsep tunjuk bagaimana bisnes lokal boleh paparkan tawaran, bina kepercayaan dengan cepat, dan bawa pelawat ke langkah seterusnya.",
  cta: "Lihat semua demo",
  cardAction: "Lihat demo pakej",
};

export const packagesSection = {
  kicker: "Pakej kami",
  title: "Pilih laluan website yang bisnes anda perlukan sekarang.",
  body: "Tidak pasti laluan mana yang sesuai? Mulakan dengan apa yang paling penting: satu tawaran, website bisnes penuh, atau flow custom.",
  freeIncluded: "Termasuk percuma",
  recommended: "Disarankan",
  packageCta: "Minta pakej ini",
  footnote: "Harga akhir bergantung pada jumlah halaman, kesediaan content, ciri tambahan, integrasi, keperluan copywriting, dan support launch. Bayaran ialah 50% deposit untuk mula dan 50% sebelum launch.",
};

export const process = {
  kicker: "Proses kami",
  title: "Dari idea kasar ke website yang sedia menjual.",
  body: "Proses fokus yang menukar tawaran anda kepada copy jelas, design kemas, halaman laju, dan laluan launch yang yakin.",
  steps: [
    {
      title: "Scope",
      detail: "Tentukan pembeli, tawaran, matlamat, dan tindakan utama.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Design",
      detail: "Susun flow halaman supaya pelawat cepat faham nilai yang anda tawarkan.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Build",
      detail: "Bina website laju dan responsive dengan laluan jelas untuk contact.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Launch",
      detail: "Semak mobile, link, asas SEO, dan butiran go-live.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

export const request = {
  kicker: "Permintaan projek",
  title: "Kongsi scope. Hantar ringkasan ke WhatsApp.",
  body: "Isi butiran projek, kemudian hantar ke WhatsApp untuk sahkan scope, timeline, dan langkah seterusnya.",
  trustTitle: "Permintaan terus melalui WhatsApp",
  trustBody: "Jawapan anda menjadi ringkasan projek yang mudah dibaca.",
  trustPoints: ["Tiada proses form yang panjang", "Balasan scope dan timeline yang jelas", "Hanya butiran yang penting untuk projek"],
  eyebrow: "Butiran projek",
  defaultStatus: "Permintaan anda akan dibuka di WhatsApp sebelum dihantar. Tiada bayaran diperlukan daripada form ini.",
  contactNote: "Contact details boleh disahkan selepas semakan projek.",
  privacy: "Lihat nota privasi",
  submit: "Hantar ke WhatsApp",
  loading: "Menyediakan...",
  success: "Sedia di WhatsApp",
  successStatus: "Mesej WhatsApp sudah disediakan. Hantar di WhatsApp untuk submit permintaan projek.",
  missingNumberStatus: "Nombor WhatsApp belum dikonfigurasi. Tambah PUBLIC_WHATSAPP_NUMBER dalam .env sebelum launch.",
};

export const formLabels = {
  businessName: "Nama bisnes",
  businessNamePlaceholder: "Bisnes atau brand",
  websiteType: "Jenis website",
  packageInterest: "Pakej diminati",
  packagePlaceholder: "Pilih tier pakej",
  packageEmptyTitle: "Pilih pakej untuk preview asas projek.",
  packageEmptyText: "Harga akhir masih boleh dilaras selepas semakan halaman, content, dan tambahan.",
  businessType: "Jenis bisnes",
  businessTypePlaceholder: "Pilih jenis",
  timeline: "Timeline",
  timelinePlaceholder: "Pilih timeline",
  budget: "Fleksibiliti bajet",
  budgetPlaceholder: "Optional",
  domain: "Anda sudah ada domain?",
  pages: "Halaman atau section diperlukan",
  features: "Ciri tambahan atau setup diperlukan",
  contentReadiness: "Kesediaan content",
  currentPresence: "Website atau social sekarang",
  currentPresencePlaceholder: "Website, Instagram, Facebook, atau TikTok",
  mainGoal: "Matlamat utama website",
  mainGoalPlaceholder: "Lebih banyak booking atau inquiry",
  projectNotes: "Ada perkara penting?",
  projectNotesPlaceholder: "Butiran wajib, contoh rujukan, atau kebimbangan.",
};

export const timelineOptions = ["Secepat mungkin", "1-2 minggu", "3-4 minggu", "1-2 bulan", "Flexible"];
export const budgetOptions = ["Kekal dekat dengan pakej dipilih", "Boleh tambah bajet untuk content atau ciri lebih kuat", "Perlukan panduan"];

export const footer = {
  body: "Landing page dan website bisnes yang fokus pada tawaran jelas, kepercayaan, dan inquiry.",
  projectRequest: "Permintaan projek",
  privacy: "Privasi",
  note: "WhatsApp digunakan untuk permintaan projek dan support aktif.",
};

export const icons = { CircleCheck, FileText, MessageCircle };
