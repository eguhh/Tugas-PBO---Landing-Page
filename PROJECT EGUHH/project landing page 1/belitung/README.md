# 📸 Panduan Menambahkan Foto — Belitung Island Landing Page

Tinggal taruh foto lo ke folder yang sesuai dengan nama file di bawah ini.
**Format yang didukung:** `.jpg`, `.jpeg`, `.png`, `.webp`

---

## 📁 Struktur Folder

```
belitung/
├── index.html
├── style.css
├── app.js
├── images/
│   ├── beaches/          ← Foto kartu pantai (3 foto)
│   ├── nature/           ← Kosong, bisa dipakai nanti
│   ├── gallery/          ← Foto galeri (9 foto)
│   ├── hero.jpg          ← Foto utama halaman (fullscreen)
│   ├── intro-main.jpg    ← Foto besar di bagian "Mengapa Belitung"
│   ├── intro-top.jpg     ← Foto kecil kanan atas
│   ├── intro-bot.jpg     ← Foto kecil kanan bawah
│   ├── nature-bg.jpg     ← Background section Wisata Alam
│   └── cta-bg.jpg        ← Background section CTA banner
└── README.md
```

---

## 🏖️ Foto Pantai — `images/beaches/`

| Nama File                | Untuk Apa                         | Tips                          |
|--------------------------|-----------------------------------|-------------------------------|
| `tanjung-kelayang.jpg`   | Kartu Pantai Tanjung Kelayang     | Foto dengan batu granit       |
| `tanjung-tinggi.jpg`     | Kartu Pantai Tanjung Tinggi       | Foto "Laskar Pelangi"         |
| `pulau-lengkuas.jpg`     | Kartu Pulau Lengkuas              | Foto mercusuar / snorkeling   |

---

## 🖼️ Foto Galeri — `images/gallery/`

| Nama File       | Caption di Website        | Tips                          |
|-----------------|---------------------------|-------------------------------|
| `galeri-1.jpg`  | Tanjung Kelayang          | Foto landscape / wide         |
| `galeri-2.jpg`  | Tanjung Tinggi            | Foto portrait / tinggi        |
| `galeri-3.jpg`  | Pantai Belitung           | Bebas                         |
| `galeri-4.jpg`  | Island Hopping            | Foto portrait / tinggi        |
| `galeri-5.jpg`  | Air Jernih Toska          | Close-up air biru             |
| `galeri-6.jpg`  | Sunset Belitung           | Foto sunset / golden hour     |
| `galeri-7.jpg`  | Batu Granit Ikonik        | Foto portrait / tinggi        |
| `galeri-8.jpg`  | Snorkeling Spot           | Bawah air atau snorkeling     |
| `galeri-9.jpg`  | Lautan Biru               | Foto dari atas / drone        |

> **Note:** `galeri-2.jpg`, `galeri-4.jpg`, `galeri-7.jpg` ditampilkan lebih tinggi
> di galeri masonry. Idealnya pakai foto portrait (vertikal) untuk 3 slot ini.

---

## 🌅 Foto Background & Intro — `images/`

| Nama File         | Lokasi di Website                          | Rekomendasi Ukuran  |
|-------------------|--------------------------------------------|---------------------|
| `hero.jpg`        | Background besar di halaman utama          | Min. 1920×1080px    |
| `intro-main.jpg`  | Foto besar di section "Mengapa Belitung"   | Min. 800×600px      |
| `intro-top.jpg`   | Foto kecil kanan atas section intro        | Min. 400×300px      |
| `intro-bot.jpg`   | Foto kecil kanan bawah section intro       | Min. 400×300px      |
| `nature-bg.jpg`   | Background gelap section Wisata Alam       | Min. 1920×1080px    |
| `cta-bg.jpg`      | Background section ajakan booking          | Min. 1600×900px     |

---

## ✏️ Cara Ganti Caption Galeri

Buka `app.js`, cari bagian `static getGalleryItems()`, lalu ubah nilai `caption`:

```js
new GalleryItem({ src: 'images/gallery/galeri-1.jpg', alt: 'Nama Foto', caption: 'Caption Lo' }),
```

---

## ✏️ Cara Ganti Data Kartu Pantai / Wisata

Buka `app.js`, cari `static getBeaches()` atau `static getNatureTours()`:

```js
new Attraction({
  name: 'Nama Destinasi',
  location: 'Lokasi',
  description: 'Deskripsi singkat...',
  image: 'images/beaches/nama-file.jpg',  // ← ganti path foto
  rating: 4.9,
  duration: '2–4 jam',
  price: 'Rp 25.000',
  tags: ['Tag1', 'Tag2'],
}),
```

---

## 🚀 Cara Jalankan

1. Buka Laragon → Start All
2. Taruh folder `belitung/` ke dalam `C:/laragon/www/`
3. Buka browser → `http://localhost/belitung/`

---

Kalau ada foto yang belum tersedia, bagian itu akan kosong/putih.
Itu normal — tinggal masukin fotonya sesuai nama file di atas! ✅
