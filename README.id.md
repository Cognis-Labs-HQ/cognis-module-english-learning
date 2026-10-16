# Belajar Bahasa Inggris

[English](README.en.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [日本語](README.ja.md)

Konten belajar bahasa Inggris dan integrasi penyedia untuk Cognis Study.

## Fitur

- 52 kartu huruf dan 17 gabungan dengan panduan tulisan JSON asli; 123 kata pemula, 21 kartu tata bahasa/tanda baca dan 45 kalimat tertaut.
- 37 paradigma verba, kopula dan adjektiva terkurasi beserta bentuk tidak beraturan dan IPA; kartu pendukung tersembunyi mempertahankan graf kalimat lengkap.
- Kamus Gratis yang dapat dicari, batas definisi/pelafalan, atribusi tersembunyi dan cache milik host.
- Tujuh dek awal terlokalisasi memakai kartu kilas, favorit dan berbagi Cognis.

## Pemasangan

Pasang dan aktifkan repositori ini melalui pasar modul Cognis. Gateway Study dan kapabilitas `study:library:provider` diperlukan.

## Arsitektur

Bootstrap mendaftarkan penyedia melalui ctx, memuat paket terlindungi, menerbitkan deskriptor Inggris dan kait alur yang dapat dilepas. Penonaktifan melepas penyedia; penghapusan dapat mempertahankan atau menghapus paket secara berantai melalui Cognis. Antarmuka, kebijakan cache dan implementasi privat host tidak diduplikasi.

[`docs/index.id.md`](docs/index.id.md) · [`docs/dictionary.id.md`](docs/dictionary.id.md)

## Pemeriksaan Kontributor

```sh
npm install
npm run manifest:hashes
npm test
npm run lint
npm run check:manifest
git diff --check
```

## Ucapan dan rekaman

Modul mendaftarkan bahasa melalui `study:audio:provider` dan menyimpan ID suara ElevenLabs opsional melalui `db:executor`. Kosongkan untuk menghilangkan `voiceId` dari permintaan dan memakai suara bawaan. Kredensial, pencarian suara, dan audio uji diatur pada modul ElevenLabs terpisah. Paket bahasa tidak memuat rekaman hasil generasi atau implementasi HTTP penyedia.

Cognis memeriksa kartu global tersimpan sebelum meminta `speech:synthesis`. Membuka kartu tidak membuat audio. Administrator dapat membuat ulang audio kartu global di samping pemutar saat mengedit. Kartu pribadi dan kelas menerima unggahan atau rekaman mikrofon hingga 5 MiB. Kalimat tetap memakai komposisi berkelanjutan sebagai cadangan bila rekaman kartu penyusun tersedia; komposisi pribadi dan kelas tidak memicu sintesis penyedia. Rekaman eksplisit diutamakan. Hanya pelafalan pertama yang digunakan.

Versi paket konten dinaikkan saat konten berubah untuk mencegah konflik aktivasi dengan revisi yang telah dimasukkan.
