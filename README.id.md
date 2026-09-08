# Cognis Bahasa Inggris

[English](README.en.md) · [Deutsch](README.de.md) · **Bahasa Indonesia** · [日本語](README.ja.md)

Cognis Bahasa Inggris adalah ekstensi pembelajaran bahasa Inggris yang dapat dipasang untuk gateway Cognis Study. Modul ini mempertahankan UUID modul permanen dan data pustaka bahasa Inggris bawaan dari modul bahasa Study terintegrasi sebelumnya, sekaligus mengikuti kontrak modul eksternal Cognis.

## Fitur

- Data alfabet, kosakata, partikel, dan kalimat bahasa Inggris yang dirender oleh pustaka Study bersama di `/study/library`.
- Label kalimat sepenuhnya dibentuk oleh rujukan kata, partikel, dan tanda baca yang berurutan tanpa celah.
- Daftar pelafalan dan rujukan audio HTTPS tanpa media biner di dalam paket.
- Digraf majemuk bahasa Inggris dengan tautan komposisi yang terpisah dari definisi terlokalisasi.
- Alternatif huruf kapital yang dideklarasikan sebagai varian dan selalu ditempatkan di sisi kanan kartu dasar huruf kecil.
- Posisi tampilan alfabet numerik dan label berbasis definisi terlokalisasi untuk kata, partikel, serta kalimat.
- Kartu minimal ringkas yang dibatasi hanya untuk lapisan karakter alfabet.
- Paket konten bahasa Inggris deklaratif yang diserap melalui kapabilitas `study:library` dari host.
- String definisi terlokalisasi milik modul yang ditautkan dari setiap rekaman alfabet bawaan.
- Kapabilitas `study:language:en` untuk integrasi Study tanpa mengimpor bagian internal Cognis.
- Metadata skema dan marketplace yang dilokalkan dalam bahasa Inggris, Jerman, Indonesia, dan Jepang.
- SVG bendera Inggris yang dapat diskalakan untuk ikon modul.
- Hook pembersihan saat penghapusan modul untuk mendukung siklus hidup modul.

## Instalasi

Tambahkan repositori Git ini sebagai sumber modul di marketplace modul Cognis, tinjau dependensi gateway Study serta kapabilitas pustaka Study yang dideklarasikan, lalu pasang dan aktifkan modul. UUID gateway Study yang diperlukan adalah `338b9237-a2c8-5bcf-9437-bccc9abd9a27`.

## Arsitektur

`bootstrap.js` adalah satu-satunya titik integrasi host. Berkas ini menyerap paket konten deklaratif melalui `ctx`, menyediakan deskriptor bahasa Inggris sebagai kapabilitas publik, dan hanya mengekspos direktori lokal melalui namespace statis modul. Modul tidak memperluas UI host maupun alur bootstrap. Kode runtime menggunakan impor relatif terhadap repositori dan tidak mengimpor bagian internal Cognis.

Deskriptor bahasa kanonis menyediakan `languageCode: "en"` untuk tombol subnavigasi Study; Cognis membawa pilihan ini melalui state router, bukan parameter kueri URL.

Manifest menerbitkan `ui.stringsBaseUrl` agar Cognis dapat memuat terjemahan milik modul sebelum Study merender paket. Satu-satunya registrasi statis menyajikan sumber daya bahasa ini; tidak ada UI milik modul yang dapat dieksekusi tersisa setelah modul dinonaktifkan atau dihapus.

## Pemeriksaan kualitas kontributor

```sh
npm install
npm run lint
npm test
npm run check:manifest
git diff --check
```

Setelah mengubah berkas yang dikirimkan, jalankan `npm run manifest:hashes` sebelum validasi atau commit. Lihat [`docs/standard.id.md`](docs/standard.id.md) untuk kontrak integrasi lengkap; referensi setara dalam bahasa Jerman, Inggris, dan Jepang tersedia di sebelahnya.
