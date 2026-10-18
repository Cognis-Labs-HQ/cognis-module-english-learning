# Pembaruan Belajar Bahasa Inggris

**Cabang Fitur:** feature-replace-library-with-new-capability

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

Paket kini memakai skema dan paket konten versi 14. Hanya lapisan karakter alfabet yang menetapkan `minimal: true`; komposit, definisi, kata, partikel, dan kalimat sengaja mempertahankan kartu standar. Kisi huruf kecil memakai ID tampilan numerik yang stabil, alternatif huruf kapital secara eksplisit mendeklarasikan identitas varian dan induk spasial, dan lapisan kata, partikel, serta kalimat memakai definisi tampilan terlokalisasi yang wajib. Komposisi digraf tetap terpisah dari definisi; nilai awal metadata wajib dan identitas stabil mempertahankan perilaku host terkini.

## Permukaan peramban terisolasi

Modul kini hanya menyajikan bundel lokal melalui namespace statis modul dan tidak lagi memasang hook pada alur bootstrap platform global. Ingesti data dan kapabilitas bahasa publik tetap sama sehingga paket khusus data ini tidak ikut membentuk atau mengganggu navigasi host dan menu pengguna.

## Komposisi kalimat lengkap

Label kalimat kini diselesaikan sepenuhnya dari rujukan unit leksikal dan partikel yang berurutan tanpa celah sesuai validasi paket konten Cognis terbaru. Tanda titik terakhir disimpan sebagai partikel tanda baca dengan definisi terlokalisasinya sendiri sehingga kalimat bawaan tidak lagi memuat teks yang tidak tertaut.

## Alfabet mudah dibaca dan bunyi yang diperluas

Alfabet kini dirender sebagai bagan seimbang tujuh kolom dan empat baris dengan ruang kosong eksplisit di akhir. Setiap rekaman huruf kapital dan kecil memuat nama huruf serta fonem IPA umum, dan konten menambahkan `ph`, `wh`, `ng`, serta `ck` ke kumpulan digraf yang ada. Relasi varian kini mengikuti kontrak penempatan dinamis berbatas terbaru milik host, bukan petunjuk arah yang telah dihapus, sehingga data presentasi usang tidak ikut menyebabkan kegagalan runtime Pustaka yang dilaporkan.

## Relasi anak spasial eksplisit

Skema versi 14 memisahkan identitas bentuk alternatif dari hierarki visual sesuai kontrak host terbaru. Relasi huruf kapital ke huruf kecil kini mendeklarasikan `variant: true` dan `child: true`: yang pertama mengklasifikasikan rekaman huruf kapital sebagai ejaan alternatif, sedangkan hanya yang kedua mengizinkan kartu terbuka di sekitar induk huruf kecil yang sebenarnya.

## Privilege namespace host eksplisit

Cognis PR #220 membatasi modul tanpa privilege agar hanya mendaftar di bawah ID modulnya sendiri. Karena modul bahasa ini harus menerbitkan kapabilitas yang ditentukan host `study:language:en`, manifesnya kini secara eksplisit menetapkan `privileged: true`. Permintaan ini didokumentasikan secara terbatas: perilaku runtime tetap hanya mencakup ingesti paket konten, deskriptor bahasa, dan pemaparan lokal milik modul, tanpa rute host atau hook alur yang sensitif terhadap keamanan.

## Definisi kosakata kontekstual

Rekaman kosakata kini mendemonstrasikan prioritas definisi PR #196 melalui kata satu huruf `a`. Makna terlokalisasinya menjelaskan artikel tak tentu dan sengaja berbeda dari definisi huruf pada kartu alfabet sumber. Setiap kartu kosakata bawaan mempertahankan maknanya sendiri dalam empat bahasa ketika konsep leksikalnya berbeda; host hanya boleh memakai definisi sumber jika entri leksikal tidak menyediakan makna sendiri, dan navigasi yang tidak terkait menghapus fallback tersebut.

## Kontrak paket eksternal resmi

Skema versi 14 mengadopsi batas paket eksternal Cognis PR #226. Manifes konten menandai rekaman penyedia sebagai terlindungi dan membawa metadata katalog kompatibel JSON yang tervalidasi; metadata skema juga menerbitkan identitas penyedia yang stabil. Bootstrap kini mengambil kapabilitas `study:library` yang tersedia selama siklus hidup, mewajibkan `inspectContentPack` dan `ingestContentPack`, menjalankan inspeksi tanpa mutasi terlebih dahulu, lalu meminta ingesti atomik. Semua bidang tetap memakai jenis bawaan yang tervalidasi sehingga tidak memerlukan celah validasi khusus.

## Semantik penulisan dan relasi eksplisit

Rilis resmi 14.1.0 mengembangkan versi kompatibilitas skema 14 di tempat, mengikuti migrasi paket pada implementasi referensi bahasa Jepang. Setiap rekaman kini memiliki kelas konten netral-penyedia; definisi disembunyikan, kalimat bersifat komposit, dan partikel secara eksplisit tidak dapat disunting. Relasi ejaan serta urutan yang sesungguhnya mendeklarasikan `composition`, sedangkan tautan definisi dan varian tidak memiliki peran resolver agar navigasi balik tetap terpadu tanpa mencemari judul tersusun. Skema bidang kini menyediakan kontrol penulisan terlokalisasi dan kontrak berkas audio khusus bahasa Inggris tanpa mengaktifkan editor milik modul.

## Ketersediaan kapabilitas saat pengaktifan

Modul kini mengikuti referensi bahasa Jepang yang berfungsi dengan mendeklarasikan dan mengambil kapabilitas `study:library` yang tersedia selama siklus hidup. Permukaan `study:library:provider` yang diterbitkan terpisah tidak dijamin tersedia saat prapemeriksaan dependensi modul eksternal, sehingga pengaktifan gagal dengan HTTP 409 sebelum bootstrap berjalan. Inspeksi hanya-baca dan ingesti atomik tetap berurutan melalui layanan Pustaka internal; perilaku validasi tidak berubah dan pengaktifan tidak lagi bergantung pada kapabilitas yang diterbitkan belakangan.

## Dokumentasi dan kontrak

Manifes mewajibkan `study:library`, mengikuti kontrak aktivasi atomik milik host terkini, dan menerbitkan modul versi 1.2.37.

## Struktur catatan perubahan distandardisasi

Konvensi Cognis untuk catatan perubahan lokal per pull request telah ditambahkan, beserta pemeriksaan otomatis untuk kesetaraan bahasa, detail entri, metadata cabang, dan asal komit.

## Instruksi AI disinkronkan

Panduan Copilot khusus repositori telah ditambahkan dan diselaraskan dengan instruksi agen untuk seluruh modul agar kontribusi berbantuan AI mengikuti aturan yang sama.

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

## Kontrol Belajar Tersimpan

Katalog referensi bawaan bernama Open English WordNet. Rekaman khusus mencakup seluruh 32 bentuk jamak nomina bawaan. Pemutaran bentuk terpilih mencari setiap varian melalui label dan bacaan utamanya; bentuk yang tidak tersedia tidak diganti dengan rekaman dasar.

## Gambar Referensi

Menambahkan kolom daftar gambar opsional, unggahan privat, dan galeri detail. Kedua modul bahasa menyertakan foto referensi berlisensi dan menyediakan kolom yang sama pada setiap lapisan.

## Rekaman Kalimat Langsung

Kalimat bawaan memakai rekaman kalimat utuh yang dibuat langsung sebelum audio komposit. Kalimat baru atau yang belum direkam memakai komposisi host dengan PCM penyusun berurutan dan transformasi terpilih; varian yang hilang tidak diganti bentuk dasarnya. Rekaman mencakup paket terkurasi, bukan seluruh entri kamus atau semua kemungkinan kalimat buatan pengguna. Menyertakan 45 rekaman kalimat baru dengan suara `gJx1vCzNCD1EQHT212Ls`. Bahasa Jepang membuat ulang 124 klip kana dan mengirim kana/kanji, bukan romaji. Permintaan menyimpan model stabil, kecepatan, kemiripan, seed, serta asal suara yang terdokumentasi.

## Foto Referensi Kosakata

63 kartu kosakata terkurasi kini memiliki foto referensi bawaan (55 berkas gambar). Cakupan meliputi semua nomina konkret serta tindakan dan sifat yang jelas secara visual; tata bahasa, pronomina, dan konsep abstrak tidak diberi gambar pengisi yang menyesatkan. Homofon Jepang seperti 花/鼻, 橋/箸, 雨/飴, dan 紙/髪/神 memakai referensi berbeda. Gambar dimuat secara lokal melalui galeri detail kartu dan pratinjau gambar penuh yang sudah ada. Judul sumber, pembuat, lisensi Creative Commons/domain publik per gambar, serta checksum dicatat dalam [katalog gambar](../../data/library/assets/images/catalog.json) dan [kredit foto](../../data/library/assets/images/LICENSE.md). Gambar kartu khusus pengguna tetap dilindungi host saat penyedia dimuat ulang.

## Ilustrasi Kosakata

Setiap kartu kosakata bawaan kini memiliki ilustrasi tersendiri yang dihasilkan dengan gaya pensil warna dan cat air (160 kartu). Benda konkret, tindakan, dan adegan kontekstual untuk konsep abstrak ditampilkan melalui galeri detail kartu dan popup gambar yang sudah ada. Foto sumber lama telah diganti. [Katalog gambar](../../data/library/assets/images/catalog.json) mencatat sumber pembuatan, gaya, asal potongan, checksum, dan pemetaan kartu; [lisensi gambar](../../data/library/assets/images/LICENSE.md) menjelaskan karya bawaan. Gambar dimuat secara lokal, dan host mempertahankan gambar khusus pengguna saat penyedia dimuat ulang.

## Kosakata Rumah Tangga

Lima belas nomina sehari-hari mencakup furnitur, pakaian, benda, dan makanan, dilengkapi makna dalam empat bahasa, tautan pelafalan, rekaman khusus, serta dek Benda Sehari-hari. Nomina bahasa Inggris yang dapat dihitung menyertakan transformasi jamak dengan rekaman, termasuk fish yang tidak berubah; rice tetap nomina tak terhitung. Ejaan Jepang untuk pemula menautkan bacaan lengkap ke kana atomik, termasuk tanda vokal panjang ー dalam テーブル dan コート.

## Kosakata Makanan dan Tubuh

Tambahkan 32 nomina berilustrasi: enam belas makanan dan enam belas istilah tubuh, dengan makna dalam empat bahasa serta dek Makanan dan Tubuh terpisah. Bahasa Inggris menyertakan 25 transformasi jumlah dengan rekaman, termasuk feet, teeth, potatoes, dan mouths dengan konsonan bersuara; makna nomina tak terhitung seperti daging ayam, daging sapi, mentega, dan kulit tidak memiliki keluarga jamak. Bahasa Jepang mempertahankan jalur lengkap ke kana atomik, memisahkan makna kaki dan tungkai dari あし menjadi definisi tersendiri, serta memakai kembali rekaman asli jika masukan pelafalannya identik. Empat kalimat contoh yang ditulis secara individual per bahasa memiliki rekaman neural langsung yang diprioritaskan di atas rekaman gabungan dari klip unsur yang persis sama. Semua ilustrasi disertakan secara lokal dengan gaya seni yang telah ditetapkan untuk masing-masing bahasa.

## Perbaikan tinjauan dan inventaris rekaman

Metadata rekaman memakai manifes ringkas dan inventaris dengan checksum untuk karakter, kosakata, transformasi, kalimat, dan komposisi kalimat. Audio, asal suara/permintaan, dan prioritas pencarian tetap sama. Impor referensi membaca bahasa paket; pembersihan mencoba seluruh registrasi meskipun ada kegagalan. Kegagalan kamus membatalkan isi respons dan pemuatan referensi dapat dicoba lagi. Dokumentasi menjelaskan konfigurasi dan gambar yang dihasilkan.

## Normalisasi katalog eksplisit dan inventaris komposisi kalimat

Pembaca katalog menerima kebijakan normalisasi dari penyedia bahasa: NFC untuk Inggris, NFKC untuk Jepang. Kode pencarian bersama tidak lagi bercabang menurut bahasa tertentu. Inventaris komposisi kalimat bernama `sentence-compositions`; setiap entri menjelaskan rekaman paket nyata yang disusun dari klip penyusunnya secara berurutan. Rekaman kalimat neural langsung tetap terpisah dan diutamakan saat diputar.

## Label ilustrasi terlokalisasi dan nama aset netral

Nama berkas dan ID ilustrasi memakai digest SHA-256, sedangkan pengenal lembar sumber memakai digest sumber. Metadata katalog menyediakan label Jerman, Inggris, Indonesia, dan Jepang dari makna kartu yang sudah ditulis. Label tampilan terpisah dari pengenal penyimpanan netral. Data gambar dan identitas kartu tetap sama; revisi konten memperbarui semua referensi gambar paket.

## Penggunaan

Pindahkan sintesis ElevenLabs ke modul terpisah yang dapat dikonfigurasi. Study memakai suara opsional per bahasa untuk kartu global tersimpan, sedangkan kartu pribadi dan kelas menerima unggahan terbatas dan rekaman mikrofon. Pertahankan komposisi kalimat berkelanjutan sebagai cadangan dari rekaman penyusun yang tersedia. Administrator dapat membuat ulang audio global saat mengedit.

## Perbaiki aktivasi Study

Naikkan versi paket konten Inggris dan Jepang saat menghapus rekaman bawaan. Selesaikan rekonsiliasi modul lain sebelum melaporkan aktivasi gagal agar rute persetujuan tetap memiliki alur terdaftar.

## Buat ulang seluruh rekaman

Seluruh 331 rekaman dalam paket kini memakai suara ElevenLabs yang dikonfigurasi untuk bahasa ini. Bacaan yang ditulis, identitas kartu, jeda awal, dan komposisi kalimat berirama tetap dipertahankan. Alat pembuatan menggunakan kredensial lingkungan, cache respons API yang dapat dilanjutkan, dan penggantian berkas atomik; paket tidak berisi kredensial. Inventaris, atribusi, revisi konten, dan hash integritas mencerminkan rekaman baru.

## Tinjauan Akhir dan Akses Bahasa Nonaktif

Pencopotan menghapus konfigurasi suara tanpa bergantung pada retensi konten. Penonaktifan menghapus rute modul, UI statis, dan registrasi penyedia; konfigurasi bertahan saat dinonaktifkan atau dimulai ulang dan hanya dilayani ketika aktif. Cognis membatasi skema, kartu, dan media tersimpan menurut penyedia bahasa aktif serta memulihkan akses saat diaktifkan kembali. Hasil referensi menggabungkan identitas sumber setara sambil mempertahankan rekaman sumber, urutan bacaan, dan makna. Kalimat paket mengutamakan PCM komposisi persis dari klip penyusun, sebelum rekaman langsung yang disimpan terpisah. Permintaan suara memvalidasi teks bahasa ternormalisasi dengan batas panjang; KanjiVG membatalkan isi respons gagal dan menerima tanda vokal panjang.

## Komit

- [209951a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/209951a165f6935eb242b265f01f2de568ba0b1d)
- [8048575](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/80485757bae9c748a47691b2369673c467ebde6d)
- [c92c612](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/c92c6123e086f7a1cdccca8b258044e0c2deefcf)
- [4212bab](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4212babec6746044c254c6b38f466d79be0202c6)
- [796ce05](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/796ce057c656b30ae7a5a5fe013e1e4f1678daf8)
- [808c1a7](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/808c1a7269c7a0e149dde37411107d5fc23636a8)
- [eb8095f](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/eb8095fe6f6e13dd5ad2e09540ac0d6ff8f9a183)
- [101385b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/101385bbe449519ef00798a2bf6f8c0322d26a6f)
- [a97d873](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a97d8736fc474d6e1a24efeeb807b27f49c66441)
- [3020bb3](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3020bb32ed67ae87ac188a2635d76df652378bb2)
- [30f117c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/30f117c4549a670ed7b63f2dbc478080f28873a2)
- [21a0c59](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/21a0c590906a9185fe75f7e565d6f86db8fe1b5c)
- [a53cb1b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a53cb1bf905620bd7ad1183285cee1be2ced8823)
- [8d5d822](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8d5d82247993f5fd8759d33d923a818722c36075)
- [d63f5ac](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d63f5ac5ca942f59965c6ac517a6151db9fbb727)
- [e017112](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e017112787f2903824214ee731dbdfb9e55eb916)
- [0284e55](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/0284e55ff120336df0c3ee54df9ed41df94ef1fa)
- [9ee99c9](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/9ee99c9854cbd2409ecc32921a04741a87c929e2)
- [d376277](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d376277ad28a779f25e66b0b625bea17e86302f1)
- [52d26dd](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/52d26ddbf52d2610823de8236eaca96589ba8f14)
- [de24655](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/de2465556e5827c262321c94a6a28b15fbb379c9)
- [779be5b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/779be5b2842b5600d05c87fa4e78d0e010ca971e)
- [67870fc](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/67870fcd764378f0ee8d27a29dcc51a493bd877f)
- [1c31c7c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/1c31c7cb63c6d377a1059e1206b928cc4716068c)
- [3dfd7f1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3dfd7f1e52402dbc876c5011c75c066cb0f1c1d9)
- [1ae45ef](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/1ae45efa393bd95002a2622e9d871a66fa1eab12)
- [f79d59e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/f79d59e97f4bcad73be1ba89090b0e1370d2e7e5)
- [f446d6c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/f446d6c46cda70e1075185883126c2f65cb5af40)
- [b21877e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b21877e5e193c54e89de4e0458fd3d2055f41cf5)
- [5579d8c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/5579d8ced788d25f09c459de54cfd4d7f58c56de)
- [b9c5743](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b9c57434a537e646516cbf3657a0d5b645773d86)
- [2c2e676](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/2c2e6762e43ea9351ba0a22879a9cc3b32087bbb)
- [c27ce4e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/c27ce4eb7e3b7197044d37656a8906a394df0935)
- [af0ee61](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/af0ee61ea40640ece10fc7c9754769000bf6df5a)
- [87be13f](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/87be13f6b19b64c15d6866e62c10cfcd39040124)
- [4b95cc1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4b95cc17b5bd2dbba73f38f1d90298a5bb682a2b)
