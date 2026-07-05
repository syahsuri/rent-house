# Foto rumah

Taruh gambar asli di sini. Lalu isi field `src` di `content.ts`.

Contoh:
```
public/photos/depan.jpg   →  gallery[0].src = '/photos/depan.jpg'
public/photos/og.jpg      →  gambar preview link WhatsApp (1200×630)
public/photos/map.png     →  location.mapImage = '/photos/map.png'
```

Sampai foto asli ada, situs pakai blok placeholder (solid + label) otomatis.
Rasio yang dipakai: portrait 3:4, landscape 4:3, square 1:1.
