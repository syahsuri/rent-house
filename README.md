# Rumah Sewa — situs satu rumah

Situs statis satu halaman untuk menyewakan satu rumah. Tujuan tunggal: pengunjung chat WhatsApp untuk lihat rumah.

## Jalankan

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build statis (bisa host gratis di mana saja)

```bash
npm run build    # hasil di ./out
```

Upload folder `out/` ke Netlify / Vercel / GitHub Pages / Cloudflare Pages.

## Ubah isi

Semua teks, harga, spesifikasi, nomor WhatsApp, dan lokasi ada di **`content.ts`**.
Tidak perlu sentuh komponen.

## Foto

Taruh gambar di `public/photos/`, lalu isi `src` di `content.ts`. Lihat `public/photos/README.md`.
Tanpa foto asli, situs pakai blok placeholder otomatis.

## Stack

Next.js 14 (App Router, static export) · Tailwind · Framer Motion.
