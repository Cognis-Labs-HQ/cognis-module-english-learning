# Belajar Bahasa Inggris

Belajar Bahasa Inggris menyediakan graf pembelajaran berversi, pengayaan kamus Inggris, panduan huruf cetak asli dan tujuh dek awal. Cognis mengelola antarmuka belajar serta seluruh data pengguna.

## Contoh Penggunaan

- Jelajahi `/study/en/alphabet`, `/study/en/letter-combinations`, `/study/en/vocabulary` dan `/study/en/sentences`.
- Cari dengan Kamus Gratis di navigasi Study. Hasil kosakata terpilih mengisi penyusun kartu milik host.
- Buka dek Alfabet Inggris, Kata Inggris Pertama, Verba Inggris Sehari-hari dan Kalimat Inggris Pertama di `/study/flashcards`. Cognis mengelola belajar, favorit dan berbagi.

## Spesifikasi Teknis

### Kontrak Penyedia dan Siklus Hidup

UUID tetap modul adalah `b1adc29f-9d54-5785-9bea-2ce76f1981e4`; UUID gateway Study yang diperlukan adalah `338b9237-a2c8-5bcf-9437-bccc9abd9a27`. Bootstrap memerlukan `ctx.capabilities.require("study:library:provider")` dengan metode `ingestContentPack`, `registerLookupProvider` dan `deleteContentPack` yang berfungsi. Penyedia tulisan dan kamus didaftarkan, `data/` dimuat, lalu `study:language:en` dan kontribusi alur `bootstrap-platform` yang dapat dilepas diterbitkan. Deskriptor menyertakan `code`, `languageCode`, versi modul, paket dan `starterDecks`.

Pendaftaran pencarian dilepas saat dinonaktifkan atau aktivasi gagal. Host mengelola rute, direktori statis, kapabilitas dan kait sesuai lingkup modul. `DELETE /api/v1/modules/study-language-en/config` khusus administrator mengembalikan 204 dan tetap tersedia saat modul nonaktif; modul tidak menyimpan konfigurasi. Saat dihapus, `deleteContent: false` mempertahankan paket, sedangkan `true` memanggil `deleteContentPack` melalui penyedia yang tersedia pada siklus hidup. Cognis mengelola penghapusan berantai transaksional dan notifikasi. Kegagalan diteruskan dengan log terstruktur yang aman.

### Graf Konten

Paket konten menyediakan huruf kecil dan besar, kombinasi ejaan, kosakata, struktur kalimat, dan definisi terlokalisasi. Definisi memakai awalan host `studyenglish:definitions`; teks marketplace memakai `module.study.language.en.*`. Metadata modul dan konten tercantum pada manifes masing-masing.

Referensi ejaan dan kalimat berurutan menunjuk ke rekaman nyata. Kartu infleksi tersembunyi menjadi sasaran literal validasi kalimat; formulir interaktif memakai 37 paradigma deklaratif verba, kopula dan adjektiva, termasuk bentuk tidak beraturan dan IPA. IPA adalah notasi bunyi, bukan referensi ke huruf yang tidak sesuai. Awal kalimat kapital mempertahankan teks asli. Partikel negasi, preposisi, konjungsi dan tanda baca tidak dapat diedit. Hubungan definisi dibatasi sepuluh.

Kontrak formulir menetapkan bidang tulisan, karusel huruf untuk kosakata, karusel kata/partikel untuk kalimat dan karusel struktur kalimat. Host mengelola validasi, resolusi UUID, spasi, impor, batas dan notifikasi. Alfabet mempertahankan tujuh kolom dengan huruf kapital sebagai anak huruf kecil. Hanya huruf atomik memakai pratinjau minimal.

### Panduan Tulisan dan Media

Setiap huruf dan gabungan memiliki panduan cetak JSON asli yang dinormalisasi, dengan goresan berurutan, waktu dan kelompok per karakter. Penyedia mengembalikan salinan pola paket tanpa permintaan jarak jauh. Panduan pengantar ini tidak menetapkan gaya tulisan tangan wajib. Berkas audio bawaan dijelaskan di bawah; URL TTS eksternal bukan aset paket.

### Batas Kamus

Kamus Gratis hanya mencari kosakata Inggris melalui `https://api.dictionaryapi.dev/api/v2/entries/en/<word>`. Penyedia berversi dan berbasis bidang mendukung pencarian, bukan terjemahan kalimat atau panduan tulisan. Masukan dibatasi, alamat layanan tetap, pengalihan ditolak, waktu permintaan maksimal 15 detik dan respons divalidasi serta dibatasi. Pelafalan dan makna duplikat dihapus tanpa mengubah urutan sumber; maksimal sepuluh definisi dan pelafalan dikembalikan. Atribusi sumber/lisensi tersimpan di `dictionary_data` yang tersembunyi. Makna eksternal tetap Inggris sampai fasilitas lokalisasi host melengkapi bahasa lain. Rincian tersedia dalam dokumentasi kamus.

Rekaman asli mempertahankan IPA utama dan tag paradigma terkurasi. Ejaan baru yang hanya berisi huruf ditautkan ke alfabet paket; verba tidak dikenal tidak mendapat bentuk tebakan. Respons 404 memakai kecocokan asli bila tersedia; respons gagal atau rusak menghasilkan kesalahan aman. Cognis core mengelola cache kueri persisten, pemeriksaan setelah satu jam dan publikasi perubahan setelah dua belas jam. Modul hanya menyimpan indeks konten tetap, tanpa cache respons kamus atau pengatur waktu.

### Pengemasan dan Validasi

Hak istimewa diperlukan untuk ruang nama bahasa milik host, bukan untuk melewati izin Study. Impor runtime tetap dalam repositori, pengujian memakai tiruan kontrak publik lokal. Keempat bahasa dan varian dokumentasi dikemas bersama. Konten serta panduan asli berlisensi AGPL-3.0-or-later; atribusi kamus eksternal dipisahkan.

Jalankan `npm install`, `npm run manifest:hashes`, `npm test`, `npm run lint`, `npm run check:manifest` dan `git diff --check`. Perbarui hash setelah perubahan terakhir pada berkas paket. Catatan perubahan tidak masuk inventaris paket.

## Dek Awal Diperluas

Bahasa Inggris menyediakan tujuh dek awal. Huruf kapital, gabungan ejaan dan adjektiva sehari-hari melengkapi empat dek lama. Kunci stabil, nama lokal dan urutan alfabet lengkap divalidasi.

Skema menyediakan satu pilihan filter kata sifat dan mempertahankan identitas konten yang stabil. ctx adalah tulang punggung aplikasi; Cognis memiliki alur tindakan, data pengguna, dan cache kamus.

## Halaman Bahasa Bersama

Pilihan bahasa membuka halaman Jelajahi milik Cognis meskipun penyedia konten tidak mendeklarasikan halaman anak. Pergantian bahasa mempertahankan peran tulisan, kosakata atau kalimat yang setara; Flashcards, Library dan Permintaan mempertahankan konteks halaman bersama. Inggris mendeklarasikan alfabet, gabungan huruf, kosakata dan kalimat melalui slug sendiri. Pemuatan favorit yang dibatalkan melepaskan pemasangan tanpa pesan kegagalan yang menyesatkan.

## Alfabet, tata bahasa, dan jumlah nomina

Alfabet memisahkan nama huruf dari detail IPA opsional `letter_sounds` tanpa sel pengisi. Tanda baca memiliki carousel penyusunan kalimat sendiri. Struktur klausa dan wacana menyertakan makna serta pelafalan terlokalisasi. Keluarga nomina terhitung yang ditinjau memilih transformasi jamak Cognis melalui `optInTag: plural`, termasuk perubahan ejaan dan pelafalan. Nomina massa tidak termasuk; bentuk diturunkan dari kartu dasar, bukan entri duplikat.

### Struktur kontributor dan kepemilikan host

Mulai modul baru dari [cognis-module-template](https://github.com/Cognis-Labs-HQ/cognis-module-template); repositori ini mengikuti revisi panduan yang dicatat dalam `AGENTS.md`. `bootstrap.js` mengatur siklus hidup, `api/index.js` menghubungkan dependensi ctx, `api/routes/<domain>/index.js` menangani HTTP, dan `api/reuse/` berisi kode server yang dipakai ulang. Fitur browser berada di `ui/`, gaya di `ui/styles/`, templat bersama di `ui/templates/`, dan dokumentasi terjemahan di `docs/index.<locale>.md`. Riwayat rilis berada di `docs/changelog/` dan dikecualikan dari hash paket. Bagian opsional yang tidak didukung tidak dibuat.

Gunakan kapabilitas ctx publik dan alur yang dideklarasikan; jangan mengimpor bagian internal Cognis atau modul lain. Penyedia kapabilitas dan navigasi dasbor mengekspor `mountProvider(scopedUiCtx)` dan mengembalikan fungsi pembersihan sumber daya miliknya. Impor tidak boleh mendaftarkan perilaku modul. Host menghapus kapabilitas, kait alur, listener, dan status penyedia saat dinonaktifkan, lalu memasang kembali penyedia yang tersimpan saat diaktifkan ulang. Pabrik pengaturan, administrasi, dan penyedia deskriptor footer autentikasi mengikuti kontrak host masing-masing. Uji kontrak dengan pengganti mandiri, jalankan pemeriksaan struktur, perbarui hash setelah perubahan paket terakhir, lalu jalankan lint, pengujian, dan validasi manifes sebelum publikasi.

Validasi paket memastikan titik masuk, ikon, banner, dan tangkapan layar berupa file reguler di dalam checkout, termasuk setelah resolusi jalur. Dokumentasi menjelaskan kontrak publik dan merujuk manifes untuk metadata rilis; changelog mempertahankan asal-usul rilis.

Kartu kalimat memerlukan sedikitnya dua referensi kata melalui skema Library. Sapaan awal menjadi “Hello, my friend!” dengan tautan komposisi yang sesuai dan definisi terlokalisasi. IPA tetap menjadi format pelafalan yang tepat; Library host menampilkan simbolnya dengan tipografi yang mudah dibaca.

## Struktur modul Study

Paket konten berada di `data/library/`: manifes, skema, dan berkas kontennya membentuk satu batas impor dan penghapusan. Dek awal tetap di `data/starter-decks.json`. Penyedia runtime berada di `api/dictionary/` dan `api/strokes/`; pemuatan deterministik serta dekode respons dengan batas byte berada di `api/reuse/`. Pengujian konten dan siklus hidup lintas lapisan berada di `tests/`, sedangkan pengujian penyedia, transportasi, dan API berada di `api/tests/`. Manifes mendeklarasikan `api/routes/config/index.js` sebagai `disabledApi`; titik masuk itu hanya mendaftarkan rute DELETE konfigurasi khusus administrator tanpa mengimpor konten atau mengaktifkan penyedia. Pengenal alur yang telah dipublikasikan tetap stabil.

## Jaga ketepatan jenis kata dan bentuk jamak

Kamus Gratis mengembalikan saran terpisah per jenis kata dengan definisi, tag, dan paradigma terkurasi yang sesuai saja. Kueri dengan apostrof atau tanda hubung ditolak karena graf alfabet saat ini tidak dapat merepresentasikan ejaannya. Respons dibatasi satu juta byte saat dialirkan dan langsung dibatalkan jika terlalu besar. Pengenal alur publik `study-language-en:bootstrap-registration` tetap dipertahankan. Pembentukan jamak berlaku pada `book` tunggal, bukan `books` yang sudah jamak; `houses` memakai `/haʊzɪz/`. Tujuh dek awal terlokalisasi didokumentasikan.

## Audio pelafalan

Kartu awal yang diucapkan menyertakan MP3 hasil sintesis di `data/library/assets/audio/`; teks ucapan identik memakai satu berkas bersama. Bahasa Inggris memakai Piper secara offline dengan suara berdasarkan dataset LJ Speech domain publik. Bahasa Jepang memakai Open JTalk secara offline dengan HTS Voice Mei, dengan atribusi kepada tim proyek MMDAgent dan Nagoya Institute of Technology di bawah CC BY. Pemberitahuan suara dan inventaris rekaman berada di `data/audio/`. Tanda baca tidak dibunyikan dan kalimat tidak memiliki rekaman sintesis: Cognis memutar audio unsur penyusunnya secara berurutan.

Perbarui inventaris dengan `node scripts/generate-audio.mjs`. Untuk sintesis lokal, instal alat opsional dari `scripts/audio-requirements.txt`, sediakan FFmpeg, lalu jalankan `python3 scripts/synthesize-audio.py`; bahasa Inggris juga memerlukan `--english-model` yang menunjuk model Piper LJSpeech. Sinkronkan atribusi suara, metadata paket, dan hash berkas.

## Kontrak penyedia audio

Bootstrap memerlukan `study:audio:provider` dan mendaftarkan penyedia audio yang dapat dilepas bersama penyedia kamus dan goresan. Penyedia mencocokkan rekaman bawaan berdasarkan label ucapan dan bacaan pilihan, dengan pembacaan berkas terbatas serta kesalahan eksplisit bila audio tidak tersedia. Pelepasan membatalkan pengambilan yang tertunda. Cognis mengotorisasi akses kartu, menurunkan teks transformasi dari skema, dan menyimpan rekaman secara privat melalui Files tanpa mengubah bidang yang ditulis. Alur `study:library:audio` menjalankan otorisasi, validasi, dan resolusi; `study:audio:fetch` memvalidasi serta mengambil byte penyedia. Audio kalimat tetap memutar unsur penyusunnya secara berurutan.

Audio baru diambil ketika pelajar meminta pemutaran. Membuka kartu saja tidak membuat permintaan audio. Kegagalan pemutaran memakai toast terlokalisasi host dan log terstruktur. Unsur kalimat mempertahankan deskriptor transformasi terpilih; endpoint audio terautentikasi menurunkan bentuk ucapan dari skema, bukan menerima teks tampilan sembarang. Rekaman awal kombinasi huruf Inggris disintesis dari fonem IPA yang ditulis, sedangkan rekaman alfabet mengucapkan nama huruf.

## Audio kamus dan cache host

Jika pelafalan yang diminta tidak tersedia dalam paket, English Study mengambil kata dari English Dictionary API dan mengunduh MP3 yang cocok dari endpoint media pelafalannya. Bacaan IPA pilihan harus cocok; pelafalan lain tidak pernah dipakai sebagai pengganti. Hanya media HTTPS pada `api.dictionaryapi.dev` yang diterima, pengalihan ditolak, pencarian dan unduhan berbagi satu tenggat, dan kedua respons dibatasi ukuran byte saat streaming. Rekaman yang tidak tersedia tetap menghasilkan kesalahan eksplisit. Layanan suara Google tidak digunakan.

Cognis mengelola cache rekaman, bukan modul. Setelah otorisasi, cache Files privatnya memakai ulang rekaman yang berhasil untuk kartu lain dan setelah mulai ulang. Permintaan pemutaran bersamaan berbagi pengambilan dan penyimpanan. Kunci mencakup identitas penyedia, revisi, bahasa, peran, label, dan bacaan; bacaan atau revisi penyedia yang berubah diselesaikan secara terpisah. Permintaan atau penulisan yang gagal dapat dicoba lagi. Modul menghubungi kamus hanya jika pemutaran diminta dan cache tidak tersedia.
