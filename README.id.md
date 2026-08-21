# Cognis Bahasa Inggris

[English](README.en.md) · [Deutsch](README.de.md) · **Bahasa Indonesia** · [日本語](README.ja.md)

Cognis Bahasa Inggris adalah ekstensi pembelajaran bahasa Inggris yang dapat dipasang untuk gateway Cognis Study. Modul ini mempertahankan UUID modul permanen dan data pustaka bahasa Inggris bawaan dari modul bahasa Study terintegrasi sebelumnya, sekaligus mengikuti kontrak modul eksternal Cognis.

## Fitur

- Data alfabet bahasa Inggris dan halaman alfabet terautentikasi di `/study/alphabet`.
- Ringkasan pustaka khusus administrator di `/study/en-library`.
- Titik masuk ruang kelas di `/study/en-classroom`.
- API pustaka hanya-baca yang terautentikasi di `/api/v1/modules/study-language-en/library`.
- Kapabilitas `study:language:en` untuk integrasi Study tanpa mengimpor bagian internal Cognis.
- Navigasi, halaman, dan metadata marketplace yang dilokalkan dalam bahasa Inggris, Jerman, Indonesia, dan Jepang.
- Hook pembersihan saat penghapusan modul untuk mendukung siklus hidup modul.

## Instalasi

Tambahkan repositori Git ini sebagai sumber modul di marketplace modul Cognis, tinjau dependensi gateway Study serta kapabilitas autentikasi yang dideklarasikan, lalu pasang dan aktifkan modul. UUID gateway Study yang diperlukan adalah `338b9237-a2c8-5bcf-9437-bccc9abd9a27`.

## Arsitektur

`bootstrap.js` adalah satu-satunya titik integrasi host. Berkas ini mendaftarkan permukaan UI dan API milik modul melalui `ctx`, menyediakan deskriptor bahasa Inggris sebagai kapabilitas publik, dan memperluas flow bootstrap platform. Kode runtime menggunakan impor relatif terhadap repositori dan tidak mengimpor bagian internal Cognis.

Manifest menerbitkan `ui.stringsBaseUrl` agar Cognis dapat memuat terjemahan milik modul sebelum UI browser dimulai. Registrasi UI dan API tetap bercakupan sehingga tidak ada perilaku milik modul yang tertinggal setelah modul dinonaktifkan atau dihapus.

## Pemeriksaan kualitas kontributor

```sh
npm install
npm run lint
npm test
npm run check:manifest
git diff --check
```

Setelah mengubah berkas yang dikirimkan, jalankan `npm run manifest:hashes` sebelum validasi atau commit. Lihat [`docs/standard.id.md`](docs/standard.id.md) untuk kontrak integrasi lengkap; referensi setara dalam bahasa Jerman, Inggris, dan Jepang tersedia di sebelahnya.
