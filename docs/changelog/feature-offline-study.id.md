# Belajar Offline

**Cabang Fitur:** feature-offline-study

## Mode Offline

Study menyimpan snapshot JSON ringan dengan batas ukuran di tab saat ini: skema, data karakter/kartu yang diizinkan, lokasi, ID yang telah dilihat, favorit, dan dek yang pernah dibuka. Skema bahasa mengaktifkannya melalui `metadata.offline: { cache: "lightweight" }`. Cache Library menampung paling banyak 16 MB dan 100 pembacaan; cache baca lain paling banyak 4 MB dan 100 pembacaan. Byte audio, respons kamus, kredensial, dan dokumen terautentikasi tidak disimpan secara permanen.

Pratinjau Explore memakai data cache yang telah diotorisasi. Menggambar dan latihan kartu bekerja secara lokal. Penyelesaian, ulasan, ID yang dilihat, dan status akhir favorit diantrekan; progres, XP, dan hadiah menjadi resmi setelah konfirmasi server. Audio serta permintaan kamus/ElevenLabs berhenti. Penyuntingan, penghapusan, dan berbagi memerlukan koneksi. Hanya konten yang pernah dimuat dalam batas cache yang tersedia.

Study privat memerlukan sesi akun yang sama, pernah diverifikasi, dan belum kedaluwarsa di tab yang sama. Muat ulang dan kunjungan pertama tetap mengikuti kontrak offline khusus halaman publik. Perubahan akun/sesi, preferensi, siklus hidup modul, dan pelepasan penyedia membatalkan snapshot privat. Pencabutan akses server tidak dapat diketahui saat terputus. Pemulihan memakai penjaga perubahan yang belum disimpan lalu memuat ulang otorisasi server.

## Antrean dan Persetujuan

Host menyediakan `offline:outbox`, `offline:state`, dan `offline:accessPolicy` melalui ctx. Komponen mendaftarkan pengirim selama masa hidup penyedia dan ID operasi stabil melalui `offline:enqueue`; `offline:flush` mengotorisasi dan mengirim. Antrean permanen per akun dibatasi 1.000 catatan dan 1 MB selama tujuh hari, tanpa token. ID serta waktu asli dipertahankan; kegagalan sementara dicoba ulang, catatan yang dikonfirmasi atau ditolak permanen dihapus. Penolakan menampilkan peringatan terlokalisasi. Keluar menghapus antrean akun; pergantian akun tidak mengirim data akun lain. Menonaktifkan Mode Offline menghentikan catatan baru. Antrean lama tetap dapat dikirim saat online.

Pemulihan memperbarui penyedia dan menjalankan `authenticate-session` sebelum tahap akhir `afterSession` mengirim aktivitas. Penyedia wajib mendeklarasikan `offlineAccessGuard` dalam katalog server. Persyaratan yang tidak diketahui atau persetujuan yang belum ada memblokir akses offline. Terms of Service menyimpan versi dokumen terakhir yang diambil dan persetujuan terkonfirmasi server per akun. Versi baru yang belum disetujui langsung memblokir pembacaan, navigasi, dan catatan offline serta pengiriman sampai persetujuan online berhasil. Persetujuan offline tidak tersedia. Snapshot privat tetap di tab; hanya antrean terbatas dan snapshot dokumen hukum bertahan setelah muat ulang.

## Komit

- [3af85bf](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3af85bf8defd0334fda4f75589618375fa9d6799)
- [6ead1c5](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/6ead1c5d81c882f580c97b65f0d03f75bc05eff2)
- [d936a0e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d936a0ec4d4f40b2151a17a869e2800f0b7b78f1)
