# Cognis Bahasa Inggris

[English](README.en.md) · [Deutsch](README.de.md) · **Bahasa Indonesia** · [日本語](README.ja.md)

Cognis Bahasa Inggris adalah ekstensi pembelajaran bahasa Inggris yang dapat dipasang untuk gateway Cognis Study. Modul ini mempertahankan UUID modul permanen dan data pustaka bahasa Inggris bawaan dari modul bahasa Study terintegrasi sebelumnya, sekaligus mengikuti kontrak modul eksternal Cognis.

## Fitur

- Data alfabet bahasa Inggris dan halaman alfabet terautentikasi di `/study/alphabet?language=en`.
- Pustaka Study bersama di `/study/library?language=en`.
- Titik masuk ruang kelas di `/study/en-classroom?language=en`.
- Paket konten bahasa Inggris deklaratif yang diserap melalui kapabilitas `study:library` dari host.
- Kapabilitas `study:language:en` untuk integrasi Study tanpa mengimpor bagian internal Cognis.
- Navigasi, halaman, dan metadata marketplace yang dilokalkan dalam bahasa Inggris, Jerman, Indonesia, dan Jepang.
- SVG bendera Inggris yang dapat diskalakan untuk ikon modul.
- Hook pembersihan saat penghapusan modul untuk mendukung siklus hidup modul.

## Instalasi

Tambahkan repositori Git ini sebagai sumber modul di marketplace modul Cognis, tinjau dependensi gateway Study serta kapabilitas pustaka Study yang dideklarasikan, lalu pasang dan aktifkan modul. UUID gateway Study yang diperlukan adalah `338b9237-a2c8-5bcf-9437-bccc9abd9a27`.

## Arsitektur

`bootstrap.js` adalah satu-satunya titik integrasi host. Berkas ini mendaftarkan permukaan UI milik modul serta menyerap paket konten deklaratif melalui `ctx`, menyediakan deskriptor bahasa Inggris sebagai kapabilitas publik, dan memperluas flow bootstrap platform. Kode runtime menggunakan impor relatif terhadap repositori dan tidak mengimpor bagian internal Cognis.

Manifest menerbitkan `ui.stringsBaseUrl` agar Cognis dapat memuat terjemahan milik modul sebelum UI browser dimulai. Registrasi UI tetap bercakupan sehingga tidak ada perilaku milik modul yang tertinggal setelah modul dinonaktifkan atau dihapus.

## Pemeriksaan kualitas kontributor

```sh
npm install
npm run lint
npm test
npm run check:manifest
git diff --check
```

Setelah mengubah berkas yang dikirimkan, jalankan `npm run manifest:hashes` sebelum validasi atau commit. Lihat [`docs/standard.id.md`](docs/standard.id.md) untuk kontrak integrasi lengkap; referensi setara dalam bahasa Jerman, Inggris, dan Jepang tersedia di sebelahnya.
