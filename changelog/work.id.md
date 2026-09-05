# Menggunakan pustaka Study bersama

**Cabang Fitur:** work

## Materi pembelajaran berbasis kapabilitas

Modul kini memasang paket konten bahasa Inggris deklaratifnya secara atomik melalui kapabilitas `study:library` yang disediakan host. API, penyimpanan, halaman, dan entri navigasi pustaka yang rangkap telah dihapus demi rendering host berbasis skema.

## Gambar bendera Inggris

Ikon modul kini menggunakan representasi SVG bendera Inggris yang dapat diskalakan sebagai pengganti tanda huruf Cognis generik.

## Mempertahankan bahasa yang dipilih

Kapabilitas bahasa kini menyediakan `languageCode: "en"` melalui deskriptor bahasa Study kanonis. Cognis PR #215 menyimpan kode tersebut pada tombol subnavigasi Study yang dibuat dan membawa pilihan melalui state router, sehingga URL modul tetap bersih tanpa kueri bahasa.

## Kontrak paket bahasa berversi

Paket bahasa Inggris kini memiliki namespace `en`, menerbitkan metadata skema terlokalisasi dan peran semantik lapisan, menggunakan versi skema serta paket baru yang tetap, dan mengiklankan identitas paket tervalidasi melalui kapabilitas bahasa sesuai Cognis PR #214.

## Paket Study khusus data

Permukaan alfabet, kelas, navigasi, CLI, API, dan gaya milik modul telah dihapus. Cognis kini menemukan dan merender paket bahasa Inggris secara generik dari deskriptor paket tetap, skema semantik, dan metadata terlokalisasi yang dipublikasikan. Hanya bundel bahasa yang tetap didaftarkan secara statis.

## Dokumentasi dan kontrak

Manifes kini mewajibkan `study:library`, versi modul menjadi 1.2.19, dan dokumentasi terlokalisasi mengarahkan pengguna ke pustaka Study bersama.

## Commit

- [Dasar implementasi](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/7783399)
