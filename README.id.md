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

Paket menyertakan rekaman WAV terverifikasi untuk setiap kartu terkurasi yang bersuara, karakter, partikel, serta seluruh transformasi skema yang dapat dicapai, termasuk bentuk jamak dan rantai perubahan verba. `gJx1vCzNCD1EQHT212Ls` adalah suara yang ditetapkan untuk bahasa ini. `data/audio/recordings.json` mencatat permintaan, suara, model, pengaturan, jalur transformasi, dan checksum; kredensial serta alat pembuatan tidak disertakan.

Kalimat memakai sampel PCM yang persis sama dengan rekaman kata dan partikel penyusunnya secara berurutan, termasuk transformasi yang dipilih. Karena itu, suara dan pelafalan dalam berkas kalimat sama dengan pemutaran tiap kata. Kalimat baru memakai komposisi host; varian yang rekamannya tidak tersedia tidak boleh diganti dengan pelafalan bentuk dasar. Rekaman mencakup paket terkurasi, bukan semua entri kamus yang dimuat sesuai kebutuhan atau seluruh kalimat buatan pengguna.

Bootstrap mendaftarkan penyedia yang dapat dilepas melalui `study:audio:provider.registerProvider`. Kartu dan varian bawaan berfungsi tanpa ElevenLabs terpasang atau dikonfigurasi. Rekaman leksikal yang belum tersedia dapat memakai kapabilitas opsional `elevenlabs-tts:synthesis` yang sudah diatur; suara bawaan permintaan adalah suara bahasa yang ditetapkan, dengan penggantian suara administrator untuk sintesis baru. Kalimat baru tidak meminta sintesis kalimat utuh secara terpisah. Cognis mengelola otorisasi kartu global, cache, unggahan manual, serta kebijakan komposisi pribadi dan kelas. Hanya pelafalan utama yang dipilih.

Berkas memakai PCM mono 24 kHz 16 bit dengan puncak terbatas dan keluaran yang dipastikan tidak hening. Permintaan memakai model tetap per bahasa, kecepatan 0,9, kemiripan 0,85, serta gaya 0; stabilitasnya 0,75 untuk bahasa Inggris dan 0,9 untuk bahasa Jepang. Nilai seed disimpan per permintaan; keluaran hening yang ditolak dicatat dan dicoba ulang tanpa mengganti suara. Bahasa Inggris memakai tag fonem IPA yang ditulis dalam data. Manifes konten menyatakan direktori aset paket dan menaikkan versi paket untuk instalasi.
