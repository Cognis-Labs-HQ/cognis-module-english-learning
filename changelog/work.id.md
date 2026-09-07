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

## Definisi kamus yang dapat diselesaikan

Skema kini mendeklarasikan kontrak pelokalan definisi Pustaka dan relasi alfabet-ke-definisi yang eksplisit serta wajib. Setiap huruf bawaan tertaut ke definisi dengan kunci string yang dapat diselesaikan dalam setiap bundel bahasa modul, sementara rekaman kontennya menyimpan teks terlokalisasi yang sama.

## Skema Pustaka terbaru

Paket ini mengikuti skema Pustaka Study terbaru: data alfabet menyediakan daftar pelafalan dan audio jarak jauh, kosakata ditautkan ke ejaan berurutan dan definisi terlokalisasi, serta urutan kalimat membedakan kata leksikal dari partikel tata bahasa. Tidak ada media biner yang dikemas.

## Kompatibilitas host terbaru

Paket kini memakai skema dan paket konten versi 9. Huruf kecil membentuk kisi dasar tetap dan setiap alternatif huruf kapital mendeklarasikan penanda varian yang diwajibkan host sebelum selalu terbuka di sisi kanan. Digraf umum tetap menjadi unit tulisan majemuk dengan relasi komposisi dan definisi berlabel terpisah; nilai awal metadata wajib dan identitas stabil mempertahankan perilaku host terkini.

## Dokumentasi dan kontrak

Manifes mewajibkan `study:library`, mengikuti kontrak aktivasi atomik milik host terkini, dan menerbitkan modul versi 1.2.26.

## Commit

- [Dasar implementasi](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b844bdd)
