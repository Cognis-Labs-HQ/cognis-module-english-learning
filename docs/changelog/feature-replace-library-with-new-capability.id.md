# Penyelarasan Penyedia Inggris

**Cabang Fitur:** feature-replace-library-with-new-capability

## Sertakan rekaman pelafalan awal

Kartu awal yang diucapkan menyertakan MP3 yang dibuat offline dan dideduplikasi, beserta atribusi suara. Kalimat tetap memutar unsur penyusunnya secara berurutan.

## Daftarkan pengambilan audio terkelola

Kedua modul Study memakai kontrak penyedia audio yang sama dan dapat dilepas, serta mengambil rekaman bawaan dengan pembacaan lokal terbatas. Host memiliki otorisasi, kebijakan cache, dan pemutaran komposit.

## Target paket dan panduan pengembang

Rilis 1.3.8 — Validasi paket memastikan titik masuk, ikon, banner, dan tangkapan layar berupa file reguler di dalam checkout, termasuk setelah resolusi jalur. Dokumentasi menjelaskan kontrak publik dan merujuk manifes untuk metadata rilis; changelog mempertahankan asal-usul rilis.

## Graf pembelajaran diperluas

635 rekaman tervalidasi meliputi 123 kata terlihat, 45 kalimat, panduan tulisan, 37 paradigma transformasi akurat dan empat dek awal. Ruang nama dan ID sumber dipertahankan; bentuk tersembunyi dan awal kalimat kapital membentuk dependensi lengkap.

## Kontrak penyedia Cognis terkini

Kapabilitas penyedia terbatas wajib tersedia. Pendaftaran dilepas saat gagal atau nonaktif; permintaan penghapusan konten dilakukan melalui host. Alur, cache, izin, kartu kilas dan berbagi tetap tanggung jawab host.

## Pengayaan pencarian dan tulisan

Kamus Gratis menyediakan makna dan IPA terbatas, mempertahankan atribusi dan menautkan huruf. Panduan JSON asli mencakup 52 huruf dan 17 gabungan tanpa aset biner. URL TTS paket tidak sah dihapus; audio menjadi opsional.

## Validasi dan dokumentasi

Pengujian mandiri memeriksa siklus hidup, kegagalan/batas kamus, graf, infleksi dan dek. Pemeriksaan keterbacaan menjaga baris kosong. Standar, panduan kamus, README dan sumber bahasa diselaraskan dalam empat bahasa. Modul 1.3.0 membawa paket 15.0.0/skema 15.

## Dek Awal Diperluas

Bahasa Inggris menyediakan tujuh dek awal. Huruf kapital, gabungan ejaan dan adjektiva sehari-hari melengkapi empat dek lama. Kunci stabil, nama lokal dan urutan alfabet lengkap divalidasi.

## Perbaikan Konten dan Kontrak

Revisi skema 16 menghapus pilihan adjektiva ganda. Modul 1.3.1 dan paket 16.0.0 mempertahankan identitas data. Instruksi menetapkan ctx sebagai tulang punggung aplikasi; Cognis memiliki alur tindakan, data pengguna dan cache kamus.

## Halaman Bahasa Bersama

Pilihan bahasa membuka halaman Jelajahi milik Cognis meskipun penyedia konten tidak mendeklarasikan halaman anak. Pergantian bahasa mempertahankan peran tulisan, kosakata atau kalimat yang setara; Flashcards, Library dan Permintaan mempertahankan konteks halaman bersama. Inggris mendeklarasikan alfabet, gabungan huruf, kosakata dan kalimat melalui slug sendiri. Pemuatan favorit yang dibatalkan melepaskan pemasangan tanpa pesan kegagalan yang menyesatkan.

## Alfabet, tata bahasa, dan jumlah nomina

Skema 17 dan paket konten 17.0.0 memisahkan nama huruf dari rincian IPA opsional `letter_sounds` tanpa sel alfabet pengisi. Tanda baca memiliki karusel tersendiri. Dua puluh dua struktur klausa dan wacana tambahan menyediakan makna terlokalisasi dan pelafalan. Tiga puluh tiga keluarga nomina terhitung mengaktifkan transformasi jamak Cognis melalui `optInTag: plural`, termasuk perubahan ejaan dan bacaan. Nomina massa tidak termasuk. Bentuk diturunkan dari kartu dasar tanpa entri duplikat. Versi modul: 1.3.3.

## Standar kontributor templat

Selaraskan AGENTS.md dengan templat modul eksternal sambil mempertahankan aturan domain. Gunakan lokasi catatan rilis kanonis dan pertahankan konten historis serta identitas modul permanen.

## Struktur standar dan integrasi milik modul

Sinkronkan panduan templat, jalur rute domain, dokumentasi integrasi terjemahan, pemeriksaan struktur, dan hash paket akhir. Pertahankan URL publik dan identitas modul. Kontribusi browser mengikuti kontrak siklus hidup host masing-masing.

## Merek belajar dan ilustrasi

Namai ulang modul menjadi Belajar Bahasa Inggris dan sediakan ikon serta banner PNG yang serasi, dengan ilustrasi penting di area tengah yang aman dari pemotongan Marketplace. Perbarui nama terjemahan dan dokumentasi integrasi sambil mempertahankan UUID modul, kode bahasa, nama paket dan identitas konten.

## Deskripsi Marketplace yang konsisten

Gunakan ringkasan tindakan singkat dan deskripsi fitur konkret pada metadata Marketplace dengan makna terjemahan yang selaras.

## Wajibkan kalimat dengan beberapa kata

Kartu kalimat memerlukan sedikitnya dua referensi kata melalui skema Library. Sapaan awal menjadi “Hello, my friend!” dengan tautan komposisi yang sesuai dan definisi terlokalisasi. IPA tetap menjadi format pelafalan yang tepat; Library host menampilkan simbolnya dengan tipografi yang mudah dibaca.

## Wajibkan kunci bahasa tanpa teks pengganti literal

Instruksi AI melarang teks bahasa Inggris yang ditanam langsung untuk pengguna dalam setiap alur. Nilai yang tidak tersedia dalam bahasa pilihan dapat menggunakan kunci yang sama dari sumber daya XML bahasa Inggris. Nilai pengganti bahasa Inggris yang hilang atau kosong harus menimbulkan kegagalan eksplisit, bukan menampilkan teks Inggris literal, kunci mentah, atau teks kosong. Kesalahan terjemahan yang hilang tidak boleh disembunyikan.

## Jaga keterwakilan makna kamus

Kamus Gratis mengembalikan saran terpisah per jenis kata dengan definisi, tag, dan paradigma terkurasi yang sesuai saja. Kueri dengan apostrof atau tanda hubung ditolak karena graf alfabet saat ini tidak dapat merepresentasikan ejaannya.

## Batasi respons kamus saat dialirkan

Respons dibatasi satu juta byte saat dialirkan dan langsung dibatalkan jika terlalu besar.

## Pertahankan tahap bootstrap publik

Pengenal alur publik `study-language-en:bootstrap-registration` tetap dipertahankan.

## Perbaiki transformasi jamak nomina

Pembentukan jamak berlaku pada `book` tunggal, bukan `books` yang sudah jamak; `houses` memakai `/haʊzɪz/`.

## Dokumentasikan tujuh dek awal

Tujuh dek awal terlokalisasi didokumentasikan.

## Struktur modul Study

Paket konten berada di `data/library/`: manifes, skema, dan berkas kontennya membentuk satu batas impor dan penghapusan. Dek awal tetap di `data/starter-decks.json`. Penyedia runtime berada di `api/dictionary/` dan `api/strokes/`; pemuatan deterministik serta dekode respons dengan batas byte berada di `api/reuse/`. Pengujian konten dan siklus hidup lintas lapisan berada di `tests/`, sedangkan pengujian penyedia, transportasi, dan API berada di `api/tests/`. Manifes mendeklarasikan `api/routes/config/index.js` sebagai `disabledApi`; titik masuk itu hanya mendaftarkan rute DELETE konfigurasi khusus administrator tanpa mengimpor konten atau mengaktifkan penyedia. Pengenal alur yang telah dipublikasikan tetap stabil.

## Audio kamus dan cache host

Jika pelafalan yang diminta tidak tersedia dalam paket, English Study mengambil kata dari English Dictionary API dan mengunduh MP3 yang cocok dari endpoint media pelafalannya. Bacaan IPA pilihan harus cocok; pelafalan lain tidak pernah dipakai sebagai pengganti. Hanya media HTTPS pada `api.dictionaryapi.dev` yang diterima, pengalihan ditolak, pencarian dan unduhan berbagi satu tenggat, dan kedua respons dibatasi ukuran byte saat streaming. Rekaman yang tidak tersedia tetap menghasilkan kesalahan eksplisit. Layanan suara Google tidak digunakan.

Cognis mengelola cache rekaman, bukan modul. Setelah otorisasi, cache Files privatnya memakai ulang rekaman yang berhasil untuk kartu lain dan setelah mulai ulang. Permintaan pemutaran bersamaan berbagi pengambilan dan penyimpanan. Kunci mencakup identitas penyedia, revisi, bahasa, peran, label, dan bacaan; bacaan atau revisi penyedia yang berubah diselesaikan secara terpisah. Permintaan atau penulisan yang gagal dapat dicoba lagi. Modul menghubungi kamus hanya jika pemutaran diminta dan cache tidak tersedia.

## Komposisi dengan jeda dan penggantian manual

Rekaman awal memakai model neural multibahasa Kokoro secara offline dengan suara Inggris `bf_emma` dan Jepang `jf_alpha`. Klip memakai 128 kbps, jeda awal 200 ms, jeda akhir 180 ms, normalisasi puncak terbatas, dan ucapan lebih lambat. Atribusi model dan lisensi Apache disimpan di `data/audio/VOICE-LICENSE.txt`; inventaris mencatat suara dan pengolahannya.

Kartu kalimat memiliki bidang audio opsional. Pada pemutaran pertama, Cognis mengotorisasi setiap unsur, memilih hanya kelompok pelafalan pertama, menerapkan transformasi yang dipilih, dan membuat satu WAV berkelanjutan dengan jeda awal serta jeda kata, koma, dan akhir kalimat. Rekaman disimpan secara privat; byte unsur, perubahan bacaan, transformasi, dan jeda menentukan identitasnya. Mekanisme ini berlaku sesuai kebutuhan untuk kartu baru maupun yang sudah ada. Mengunggah audio di penyusun biasa langsung menggantikan pemutaran hasil komposisi. Menghapus berkas eksplisit mengaktifkan komposisi otomatis lagi. Penyedia memasok klip kata; Cognis mengelola komposisi dan kebijakan cache.

## Cakupan inventaris referensi

Katalog referensi Jepang memuat seluruh 13.108 karakter dari salinan resmi KANJIDIC2 yang dipaketkan. Katalog Inggris memuat seluruh 135.969 entri leksikal Open English WordNet dengan 127.311 kunci ternormalisasi. Keduanya adalah penyedia kamus terpisah yang dimuat sesuai kebutuhan, bukan 149.077 kartu awal yang langsung diimpor. Pilih Kamus Referensi dalam pencarian Study untuk mengimpor entri yang didukung melalui validasi graf biasa. Rekaman tanpa makna atau bacaan yang dapat digunakan tetap tidak diketahui; pelafalan, terjemahan, dan diagram goresan tidak dibuat-buat. Inventaris ini bukan seluruh Han Unicode dan bukan daftar semua kemungkinan kata bahasa Inggris.

Bacaan Kanji diurutkan berdasarkan bukti umum JMdict dan penanda frekuensi yang tersedia, termasuk bentuk okurigana; tautan kelompok dan audio awal mengikuti urutan yang sama. Audio Kanji selalu memakai pelafalan pertama yang ditulis. Kartu kata Inggris yang ada memiliki satu IPA; entri referensi mempertahankan urutan sumber dalam ragam Britania pilihan sebelum ragam lain. Frekuensi pelafalan bergantung pada konteks dan sumber tidak menyediakan peringkat universal untuk setiap bacaan.

## Rekaman bacaan utuh untuk referensi

Bahasa Jepang juga menyertakan 2.913 klip neural bacaan utuh dalam bank berkas terbatas di `data/audio/reference/`. Bersama rekaman awal, klip ini mencakup bacaan utama seluruh 12.356 karakter sumber yang memiliki bacaan; 752 karakter lainnya tidak diberi audio yang dibuat-buat. Indeks memilih bacaan pertama yang ditulis serta memeriksa batas berkas dan pembatalan. Buat rencana dengan `python3 scripts/reference-audio.py plan --work <directory>`, proses inventarisnya dengan skrip sintesis, lalu gunakan `pack` untuk menulis bank terbatas.

Alat pemeringkat Jepang menerima `--dictionary <JMdict.gz> --kanji-dictionary <KANJIDIC2.xml.gz> --output <priorities.json>` serta opsi `--content-root data/library/content`. Alat mengutamakan bacaan leksikal mandiri yang umum, mengurutkan bacaan lain dari penyelarasan kata terverifikasi berbobot frekuensi, dan mempertahankan pilihan kartu tunggal yang ditinjau dalam `data/audio/primary-readings.json`. Penyuarakan dan geminasi dipetakan kembali ke bacaan sumber kanonis. Bacaan kun, on, dan nama tetap tersedia; hanya bacaan pertama yang dipilih menentukan pemutaran dan identitas cache. Penanda frekuensi membantu pengurutan dan bukan ukuran frekuensi pelafalan universal.

## Integrasi ucapan opsional

ElevenLabs dinyatakan sebagai dependensi modul opsional. Instalasi dapat menawarkannya untuk sintesis ucapan, tetapi Study serta audio manual dan komposit tetap tersedia tanpanya.

## Terbitkan ucapan tanpa hak istimewa

Terbitkan `elevenlabs-tts:synthesis` di namespace milik modul dan hapus penanda hak istimewa. Study Inggris dan Jepang menemukan kapabilitas ini melalui ctx dengan dependensi modul opsional yang ada. Jembatan Study menerima pengambil kapabilitas langsung dari pemanggil sehingga penonaktifan, pengaktifan kembali, dan suara yang diatur tetap berfungsi.

## Pertahankan ucapan opsional

Kapabilitas yang diterbitkan melaporkan kesiapan langsung melalui `configured`. Study mengaktifkan ucapan otomatis hanya setelah kunci API dan suara bawaan disimpan. Jika ElevenLabs tidak terpasang, dinonaktifkan, atau belum diatur, pendaftaran bahasa tetap berhasil dan audio unggahan serta komposisi cadangan tetap tersedia tanpa meminta sintesis.

## Perbaiki instalasi tanpa media bawaan

Hapus deklarasi direktori aset yang tidak digunakan dari paket konten khusus data dan tingkatkan versinya. Validasi jalur paket melalui instalasi sementara yang hanya berisi berkas terkemas agar aktivasi tidak bergantung pada direktori lokal kosong.

## Kirim rekaman suara yang konsisten

Rekaman dengan suara khusus bahasa disertakan untuk semua kartu terkurasi yang bersuara serta varian jamak atau verba/adverbia yang dapat dicapai. WAV kalimat memakai PCM penyusun yang sama persis sesuai urutan dan transformasi terpilih. Asal suara, model, permintaan, checksum, dan pemeriksaan keheningan dicatat tanpa menyertakan kredensial.

## Komit

- [c92c6123](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/c92c6123e086f7a1cdccca8b258044e0c2deefcf)
- [4212babe](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4212babec6746044c254c6b38f466d79be0202c6)
- [796ce057](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/796ce057c656b30ae7a5a5fe013e1e4f1678daf8)
- [808c1a72](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/808c1a7269c7a0e149dde37411107d5fc23636a8)
- [eb8095fe](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/eb8095fe6f6e13dd5ad2e09540ac0d6ff8f9a183)
- [101385bb](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/101385bbe449519ef00798a2bf6f8c0322d26a6f)
- [209951a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/209951a165f6935eb242b265f01f2de568ba0b1d)
- [a97d873](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a97d8736fc474d6e1a24efeeb807b27f49c66441)
- [3020bb3](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3020bb32ed67ae87ac188a2635d76df652378bb2)
- [30f117c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/30f117c4549a670ed7b63f2dbc478080f28873a2)
- [21a0c59](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/21a0c590906a9185fe75f7e565d6f86db8fe1b5c)
- [a53cb1b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a53cb1bf905620bd7ad1183285cee1be2ced8823)
- [8d5d822](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8d5d82247993f5fd8759d33d923a818722c36075)
- [d63f5ac5](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d63f5ac5ca942f59965c6ac517a6151db9fbb727)
- [e0171127](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e017112787f2903824214ee731dbdfb9e55eb916)
- [0284e55f](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/0284e55ff120336df0c3ee54df9ed41df94ef1fa)
- [9ee99c98](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/9ee99c9854cbd2409ecc32921a04741a87c929e2)
- [d376277](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d376277ad28a779f25e66b0b625bea17e86302f1)
- [52d26dd](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/52d26ddbf52d2610823de8236eaca96589ba8f14)
- [de24655](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/de2465556e5827c262321c94a6a28b15fbb379c9)
- [779be5b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/779be5b2842b5600d05c87fa4e78d0e010ca971e)
