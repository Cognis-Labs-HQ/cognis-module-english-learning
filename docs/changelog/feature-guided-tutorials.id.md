# Tutorial terpandu

**Feature Branch:** feature-guided-tutorials

Study memisahkan panduan navigasi umum dari konten bahasa. Panduan bahasa yang diikuti menggantikan Explore umum dan menjelaskan detail kartu, menggambar, dan pembuatan kartu melalui cabang bersyarat serta masa hidup terlingkup.

## Spesifikasi Teknis

Rute Explore dan Flashcards diselesaikan melalui kapabilitas publik Study `study:tutorialTargets`. Modul bahasa hanya menyumbangkan data bahasa dan alur; Cognis tetap mengelola rute, pendaftaran bahasa, cache dan antarmuka belajar. Bahasa Inggris dan Jepang memakai implementasi penyedia yang sama. Konten dalam cache dapat dijelaskan saat offline. Target yang hilang setelah navigasi mengikuti kebijakan host.

Modul mendaftarkan alur dan teks terjemahannya melalui ctx. Host mengelola katalog, petunjuk, panah, sorotan, kendali papan ketik dan penunjuk, navigasi SPA dengan pemeriksaan akses, serta aksesibilitas. Menutup tutorial, berpindah halaman di luar alur, kehilangan akses atau menonaktifkan modul mengakhiri sesi. Kegagalan pemasangan penyedia membatalkan pendaftarannya.

Pengujian penyedia memeriksa kontrak publik, keempat terjemahan, aturan ketersediaan, pembersihan saat gagal, dan penolakan versi host yang tidak didukung.

## Kunjungan Awal Terikat Halaman

Host mengelola petunjuk, panah, sorotan, aksesibilitas, dan menu aksi mengambang bersama. Sesi pertama selalu menyediakan Berikutnya, tanpa Batal atau Lewati. Pemutaran ulang menyediakan Batal dengan `btn-cancel`. Penyelesaian disimpan di browser per akun. Navigasi, hilangnya akses, atau pelepasan penyedia mengakhiri sesi; pemasangan gagal membatalkan registrasi.

## Kunci Terjemahan Modul

Kunci terjemahan tutorial memakai ID modul manifes lengkap beserta tanda hubungnya sebagai satu segmen ruang nama.

## Petunjuk Yang Berguna

Langkah tutorial berfokus pada kontrol dan tugas yang tersedia, tanpa pernyataan yang tidak relevan tentang izin atau tindakan yang tidak dilakukan panduan.

## Tentukan isyarat Berikutnya per langkah

Setiap langkah tutorial kini menetapkan `highlightNext` secara eksplisit: penjelasan yang memerlukan Berikutnya atau Selesai mengaktifkannya, sedangkan latihan berbasis interaksi atau penantian menonaktifkannya. Pengurangan gerakan mempertahankan garis tepi statis.

Setiap komponen antarmuka wajib dicakup tutorial. Panduan kontribusi mengharuskan alur tugas yang berfokus pada pengguna dan peninjauan tutorial setiap kali fitur atau perilaku antarmuka berubah.

## Wilayah tutorial yang terlihat

Wilayah tutorial dan isyarat Berikutnya ditetapkan secara eksplisit.

## Antrean menu mengambang bersama

Menu mengikuti antrean host bersama dan masa hidup komponen.

## Kontrol pemulihan yang didokumentasikan

Tampilan target hilang menyediakan Berikutnya dan Mulai Ulang Tutorial; pemutaran ulang juga menyediakan Batal.

## Panduan tutorial terarah

Tutorial menjelaskan kontrol terlihat yang berbeda sesuai urutan UI. Petunjuk bersama mencakup penemuan tampilan aktif, contoh stabil, keadaan kosong, cabang bersyarat, dan pembersihan siklus hidup. Kontrol pemutaran ulang serta dokumentasi pengurangan gerakan sesuai host bersama.

## Panduan Terarah

Panduan bahasa hanya tersedia setelah pendaftaran eksplisit di pengaturan Belajar. Pengantar pendaftaran yang berulang dihapus; panduan dimulai dengan Jelajahi lalu alat latihan.

## Katalog Terjemahan yang Konsisten

Kunci terjemahan menggunakan kata huruf kecil yang dipisahkan titik pada metadata modul dan tutorial. Entri katalog mempertahankan nilai terjemahan asli dan mengikuti indentasi XML di sekitarnya. Pemeriksaan namespace yang ketat menolak tanda hubung dan garis bawah pada kunci terjemahan. ID modul, UUID, kapabilitas, dan identitas penyelesaian tutorial tetap sama.

## Komit

- [e1d021b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e1d021bff42813deefaf1996c9254fa4c1989197)
- [2634251](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/26342513e70ae51ab235ab276c73515857836e54)
- [69ea9e2](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/69ea9e2bad4a19dd701fd3de40ea037b3222822b)
- [ba6400e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ba6400eec803d69d53b7099dd34161ca98738b0a)
- [6e6f062](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/6e6f0625fa5598da1c6c6237c75f6ecd197b7609)
- [b696b59](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b696b59c123632458fe2f16e0e2b1e538fd3b44a)
- [32bcc67e7](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/32bcc67e7fe737b105b6d0c4ab57e2f1112b432e)
- [8d9b332c8](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8d9b332c89fb831abbcd5ccd422b80c4e840cb28)
- [ea8ce9a75](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ea8ce9a75f71f2d84b97e8e353201f0af903cc13)
- [bec37c8cb](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/bec37c8cb4e85661718924719185ebee5d40acc5)
- [af629cc](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/af629ccb89300d61a381c3f0948dc8b495c9f52e)
