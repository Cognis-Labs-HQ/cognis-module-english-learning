# Belajar Bahasa Inggris

[English](README.en.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [日本語](README.ja.md)

Konten belajar bahasa Inggris dan integrasi penyedia untuk Cognis Study.

## Fitur

- 52 kartu huruf dan 17 gabungan dengan panduan tulisan JSON asli; 192 kata pemula, 21 kartu tata bahasa/tanda baca dan 49 kalimat tertaut.
- 37 paradigma verba, kopula dan adjektiva terkurasi beserta bentuk tidak beraturan dan IPA; kartu pendukung tersembunyi mempertahankan graf kalimat lengkap.
- Kamus Gratis yang dapat dicari, batas definisi/pelafalan, atribusi tersembunyi dan cache milik host.
- Sepuluh dek awal terlokalisasi memakai kartu kilas, favorit dan berbagi Cognis.

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

Kalimat bawaan memakai rekaman kalimat utuh yang dibuat langsung sebelum audio komposit. Kalimat baru atau yang belum direkam memakai komposisi host dengan PCM penyusun berurutan dan transformasi terpilih; varian yang hilang tidak diganti bentuk dasarnya. Rekaman mencakup paket terkurasi, bukan seluruh entri kamus atau semua kemungkinan kalimat buatan pengguna.

Bootstrap mendaftarkan penyedia yang dapat dilepas melalui `study:audio:provider.registerProvider`. Kartu dan varian bawaan berfungsi tanpa ElevenLabs terpasang atau dikonfigurasi. Rekaman leksikal yang belum tersedia dapat memakai kapabilitas opsional `elevenlabs-tts:synthesis` yang sudah diatur; suara bawaan permintaan adalah suara bahasa yang ditetapkan, dengan penggantian suara administrator untuk sintesis baru. Kalimat baru tidak meminta sintesis kalimat utuh secara terpisah. Cognis mengelola otorisasi kartu global, cache, unggahan manual, serta kebijakan komposisi pribadi dan kelas. Hanya pelafalan utama yang dipilih.

Berkas memakai PCM mono 24 kHz 16 bit dengan puncak terbatas dan keluaran yang dipastikan tidak hening. Permintaan memakai model tetap per bahasa, kecepatan 0,9, kemiripan 0,85, serta gaya 0; stabilitasnya 0,75 untuk bahasa Inggris dan 0,9 untuk bahasa Jepang. Nilai seed disimpan per permintaan; keluaran hening yang ditolak dicatat dan dicoba ulang tanpa mengganti suara. Bahasa Inggris memakai tag fonem IPA yang ditulis dalam data. Manifes konten menyatakan direktori aset paket dan menaikkan versi paket untuk instalasi.

## Ilustrasi Kosakata

Setiap kartu kosakata bawaan kini memiliki ilustrasi tersendiri yang dihasilkan dengan gaya pensil warna dan cat air (192 kartu). Benda konkret, tindakan, dan adegan kontekstual untuk konsep abstrak ditampilkan melalui galeri detail kartu dan popup gambar yang sudah ada. Foto sumber lama telah diganti. [Katalog gambar](data/library/assets/images/catalog.json) mencatat sumber pembuatan, gaya, asal potongan, checksum, dan pemetaan kartu; [lisensi gambar](data/library/assets/images/LICENSE.md) menjelaskan karya bawaan. Gambar dimuat secara lokal, dan host mempertahankan gambar khusus pengguna saat penyedia dimuat ulang.

## Kosakata Rumah Tangga

Lima belas nomina sehari-hari mencakup furnitur, pakaian, benda, dan makanan, dilengkapi makna dalam empat bahasa, tautan pelafalan, rekaman khusus, serta dek Benda Sehari-hari. Nomina bahasa Inggris yang dapat dihitung menyertakan transformasi jamak dengan rekaman, termasuk fish yang tidak berubah; rice tetap nomina tak terhitung. Ejaan Jepang untuk pemula menautkan bacaan lengkap ke kana atomik, termasuk tanda vokal panjang ー dalam テーブル dan コート.

## Kosakata Makanan dan Tubuh

Pemutaran kalimat paket memakai PCM yang disusun persis dari klip penyusun, termasuk transformasi terpilih. Rekaman seluruh kalimat yang dihasilkan terpisah tetap diinventarisasi dengan asal suara dan permintaan asli, tetapi tidak menimpa rekaman komposisi. Kalimat baru tetap memakai komposisi dan cache milik host.

## Inventaris Rekaman

Pemutaran kalimat paket memakai PCM yang disusun persis dari klip penyusun, termasuk transformasi terpilih. Rekaman seluruh kalimat yang dihasilkan terpisah tetap diinventarisasi dengan asal suara dan permintaan asli, tetapi tidak menimpa rekaman komposisi. Kalimat baru tetap memakai komposisi dan cache milik host.

## Normalisasi katalog eksplisit dan inventaris komposisi kalimat

Pemutaran kalimat paket memakai PCM yang disusun persis dari klip penyusun, termasuk transformasi terpilih. Rekaman seluruh kalimat yang dihasilkan terpisah tetap diinventarisasi dengan asal suara dan permintaan asli, tetapi tidak menimpa rekaman komposisi. Kalimat baru tetap memakai komposisi dan cache milik host.

## Label ilustrasi terlokalisasi dan nama aset netral

Nama berkas dan ID ilustrasi memakai digest SHA-256, sedangkan pengenal lembar sumber memakai digest sumber. Metadata katalog menyediakan label Jerman, Inggris, Indonesia, dan Jepang dari makna kartu yang sudah ditulis. Label tampilan terpisah dari pengenal penyimpanan netral. Data gambar dan identitas kartu tetap sama; revisi konten memperbarui semua referensi gambar paket.

## Tinjauan Akhir dan Akses Bahasa Nonaktif

Pencopotan menghapus konfigurasi suara tanpa bergantung pada retensi konten. Penonaktifan menghapus rute modul, UI statis, dan registrasi penyedia; konfigurasi bertahan saat dinonaktifkan atau dimulai ulang dan hanya dilayani ketika aktif. Cognis membatasi skema, kartu, dan media tersimpan menurut penyedia bahasa aktif serta memulihkan akses saat diaktifkan kembali. Hasil referensi menggabungkan identitas sumber setara sambil mempertahankan rekaman sumber, urutan bacaan, dan makna. Kalimat paket mengutamakan PCM komposisi persis dari klip penyusun, sebelum rekaman langsung yang disimpan terpisah. Permintaan suara memvalidasi teks bahasa ternormalisasi dengan batas panjang; KanjiVG membatalkan isi respons gagal dan menerima tanda vokal panjang.
