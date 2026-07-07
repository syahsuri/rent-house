// ─────────────────────────────────────────────────────────────
// Semua isi situs ada di sini. Ubah teks/angka/foto tanpa
// menyentuh komponen. Ganti [dummy] dengan data rumah asli.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Nomor WhatsApp format internasional tanpa "+" atau spasi
  whatsapp: '6281234567890',
  waMessage: 'Halo, saya tertarik dengan rumahnya. Boleh info jadwal lihat rumah?',
  ownerName: 'Suril',
  url: 'https://rumah-sewa.example.com',
};

export const hero = {
  // Lockup tipografis — pendek, deklaratif. Titik jadi ritme.
  headline: ['Rumah 2 kamar.', 'Siap huni.'],
  // Lokasi singkat di atas headline
  eyebrow: 'Disewakan · Lhokseumawe',
  // Teks kecil di "sampul buku" — kesan katalog/edisi.
  cover: {
    kicker: 'Katalog Rumah Sewa · Edisi Lhokseumawe',
    volume: 'Vol. 01',
    open: 'Buka buku',
  },
  // Kalimat pengantar singkat di bawah lockup
  intro:
    'Sebuah rumah tenang di Jl. Merdeka, Lhokseumawe — terang di siang hari, sejuk di malam hari, dan cuma semenit dari kampus. Buka halaman demi halaman, lalu bayangkan hari-hari Anda di dalamnya.',
  // Strip spesifikasi seperti legenda gambar teknik
  specStrip: [
    { label: 'Harga', value: 'Rp 15jt', unit: '/tahun' },
    { label: 'Luas', value: '90', unit: 'm²' },
    { label: 'Kamar', value: '2', unit: 'tidur' },
  ],
};

// Daftar isi "buku" — dipakai BookNav (TOC) & sebagai chrome tiap Spread.
// no  : nomor bab (dua digit), pageNo: nomor halaman cetak di sudut.
export const chapters: {
  id: string;
  no: string;
  title: string;
  pageNo: string;
  lead: string;
}[] = [
  {
    id: 'galeri',
    no: '01',
    title: 'Galeri',
    pageNo: '2',
    lead: 'Berkeliling sebentar sebelum datang langsung.',
  },
  {
    id: 'spesifikasi',
    no: '02',
    title: 'Spesifikasi',
    pageNo: '4',
    lead: 'Angka-angka penting, tercatat rapi.',
  },
  {
    id: 'lokasi',
    no: '03',
    title: 'Lokasi',
    pageNo: '6',
    lead: 'Dekat ke mana-mana, jauh dari bising.',
  },
  {
    id: 'kontak',
    no: '04',
    title: 'Kontak',
    pageNo: '8',
    lead: 'Halaman terakhir — mari mengobrol.',
  },
];

// Galeri: grid tak beraturan. span mengatur ukuran di grid 12 kolom.
// crop: 'portrait' | 'landscape' | 'square' — hanya untuk rasio placeholder.
export const gallery: {
  src?: string;
  alt: string;
  label: string;
  crop: 'portrait' | 'landscape' | 'square';
  span: string;
}[] = [
  { alt: 'Tampak depan rumah', label: 'Tampak depan', crop: 'landscape', span: 'md:col-span-7' },
  { alt: 'Ruang tamu', label: 'Ruang tamu', crop: 'portrait', span: 'md:col-span-5' },
  { alt: 'Kamar tidur utama', label: 'Kamar utama', crop: 'portrait', span: 'md:col-span-4' },
  { alt: 'Dapur', label: 'Dapur', crop: 'landscape', span: 'md:col-span-8' },
  { alt: 'Kamar mandi', label: 'Kamar mandi', crop: 'square', span: 'md:col-span-4' },
  { alt: 'Carport dan halaman', label: 'Carport', crop: 'landscape', span: 'md:col-span-8' },
];

// Lembar spesifikasi — gaya data sheet arsitek.
export const specSheet: { group: string; rows: { k: string; v: string }[] }[] = [
  {
    group: 'Bangunan',
    rows: [
      { k: 'Kamar tidur', v: '2' },
      { k: 'Kamar mandi', v: '1' },
      { k: 'Luas tanah', v: '90 m²' },
      { k: 'Luas bangunan', v: '60 m²' },
      { k: 'Carport', v: '1 mobil' },
    ],
  },
  {
    group: 'Utilitas',
    rows: [
      { k: 'Listrik', v: '1300 W' },
      { k: 'Air', v: 'Sumur bor' },
      { k: 'Perabotan', v: 'Semi furnished' },
      { k: 'Sertifikat', v: 'Kontrak tahunan' },
    ],
  },
];

export const location = {
  address: 'Jl. Merdeka No. 12, Lhokseumawe, Aceh',
  // Gambar peta statis di /public/photos/map.png (opsional). Kosong = blok placeholder.
  mapImage: undefined as string | undefined,
  mapsLink: 'https://maps.google.com/?q=Lhokseumawe',
  proximity: [
    { place: 'Kampus Unimal', time: '5 menit' },
    { place: 'Pasar Inpres', time: '7 menit' },
    { place: 'RSUD Cut Meutia', time: '10 menit' },
    { place: 'Pantai Ujong Blang', time: '12 menit' },
  ],
};

export const cta = {
  heading: 'Mau lihat langsung?',
  body: 'Foto memang bagus, tapi tak sebanding melangkah masuk dan merasakannya sendiri. Chat saya di WhatsApp — balas cepat, jadwal survei bisa diatur kapan pun Anda sempat.',
  button: 'Chat lewat WhatsApp',
};
