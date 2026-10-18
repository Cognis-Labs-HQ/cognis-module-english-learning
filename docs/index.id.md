# Belajar Bahasa Inggris

Belajar Bahasa Inggris menyediakan graf pembelajaran berversi, pengayaan kamus Inggris, panduan huruf cetak asli dan sepuluh dek awal. Cognis mengelola antarmuka belajar serta seluruh data pengguna.

## Contoh Penggunaan

- Jelajahi `/study/en/alphabet`, `/study/en/letter-combinations`, `/study/en/vocabulary` dan `/study/en/sentences`.
- Cari dengan Kamus Gratis di navigasi Study. Hasil kosakata terpilih mengisi penyusun kartu milik host.
- Buka dek Alfabet Inggris, Kata Inggris Pertama, Verba Inggris Sehari-hari dan Kalimat Inggris Pertama di `/study/flashcards`. Cognis mengelola belajar, favorit dan berbagi.

## Spesifikasi Teknis

### Kontrak Penyedia dan Siklus Hidup

UUID tetap modul adalah `b1adc29f-9d54-5785-9bea-2ce76f1981e4`; UUID gateway Study yang diperlukan adalah `338b9237-a2c8-5bcf-9437-bccc9abd9a27`. Bootstrap memerlukan `ctx.capabilities.require("study:library:provider")` dengan metode `ingestContentPack`, `registerLookupProvider` dan `deleteContentPack` yang berfungsi. Penyedia tulisan dan kamus didaftarkan, `data/` dimuat, lalu `study:language:en` dan kontribusi alur `bootstrap-platform` yang dapat dilepas diterbitkan. Deskriptor menyertakan `code`, `languageCode`, versi modul, paket dan `starterDecks`.

Rute khusus administrator `GET`, `PUT`, dan `DELETE /api/v1/modules/study-language-en/config` tetap tersedia saat modul dinonaktifkan. GET membaca `voiceId` tersimpan; PUT memvalidasi dan menyimpannya di `module_study_language_en_config`, tetap bertahan setelah server dimulai ulang atau modul diaktifkan kembali. DELETE hanya menghapus konfigurasi tersebut. Ketiganya mengembalikan HTTP 200 dengan pembungkus data JSON; penghapusan konfigurasi tidak menghapus konten pembelajaran. Pendaftaran penyedia dilepas saat modul dinonaktifkan atau aktivasi gagal. Penghapusan modul mempertahankan konten kecuali `deleteContent: true` meminta operasi transaksional `deleteContentPack` milik host. Kegagalan diteruskan dengan log terstruktur yang aman.

### Graf Konten

Paket konten menyediakan huruf kecil dan besar, kombinasi ejaan, kosakata, struktur kalimat, dan definisi terlokalisasi. Definisi memakai awalan host `studyenglish:definitions`; teks marketplace memakai `module.study.language.en.*`. Metadata modul dan konten tercantum pada manifes masing-masing.

Referensi ejaan dan kalimat berurutan menunjuk ke rekaman nyata. Kartu infleksi tersembunyi menjadi sasaran literal validasi kalimat; formulir interaktif memakai 37 paradigma deklaratif verba, kopula dan adjektiva, termasuk bentuk tidak beraturan dan IPA. IPA adalah notasi bunyi, bukan referensi ke huruf yang tidak sesuai. Awal kalimat kapital mempertahankan teks asli. Partikel negasi, preposisi, konjungsi dan tanda baca tidak dapat diedit. Hubungan definisi dibatasi sepuluh.

Kontrak formulir menetapkan bidang tulisan, karusel huruf untuk kosakata, karusel kata/partikel untuk kalimat dan karusel struktur kalimat. Host mengelola validasi, resolusi UUID, spasi, impor, batas dan notifikasi. Alfabet mempertahankan tujuh kolom dengan huruf kapital sebagai anak huruf kecil. Hanya huruf atomik memakai pratinjau minimal.

### Panduan Tulisan dan Media

Setiap huruf dan gabungan memiliki panduan cetak JSON asli yang dinormalisasi, dengan goresan berurutan, waktu dan kelompok per karakter. Penyedia mengembalikan salinan pola paket tanpa permintaan jarak jauh. Panduan pengantar ini tidak menetapkan gaya tulisan tangan wajib.

### Batas Kamus

Kamus Gratis hanya mencari kosakata Inggris melalui `https://api.dictionaryapi.dev/api/v2/entries/en/<word>`. Penyedia berversi dan berbasis bidang mendukung pencarian, bukan terjemahan kalimat atau panduan tulisan. Masukan dibatasi, alamat layanan tetap, pengalihan ditolak, waktu permintaan maksimal 15 detik dan respons divalidasi serta dibatasi. Pelafalan dan makna duplikat dihapus tanpa mengubah urutan sumber; maksimal sepuluh definisi dan pelafalan dikembalikan. Atribusi sumber/lisensi tersimpan di `dictionary_data` yang tersembunyi. Makna eksternal tetap Inggris sampai fasilitas lokalisasi host melengkapi bahasa lain. Rincian tersedia dalam dokumentasi kamus.

Rekaman asli mempertahankan IPA utama dan tag paradigma terkurasi. Ejaan baru yang hanya berisi huruf ditautkan ke alfabet paket; verba tidak dikenal tidak mendapat bentuk tebakan. Respons 404 memakai kecocokan asli bila tersedia; respons gagal atau rusak menghasilkan kesalahan aman. Cognis core mengelola cache kueri persisten, pemeriksaan setelah satu jam dan publikasi perubahan setelah dua belas jam. Modul hanya menyimpan indeks konten tetap, tanpa cache respons kamus atau pengatur waktu.

### Pengemasan dan Validasi

Hak istimewa diperlukan untuk ruang nama bahasa milik host, bukan untuk melewati izin Study. Impor runtime tetap dalam repositori, pengujian memakai tiruan kontrak publik lokal. Keempat bahasa dan varian dokumentasi dikemas bersama. Konten serta panduan asli berlisensi AGPL-3.0-or-later; atribusi kamus eksternal dipisahkan.

Jalankan `npm install`, `npm run manifest:hashes`, `npm test`, `npm run lint`, `npm run check:manifest` dan `git diff --check`. Perbarui hash setelah perubahan terakhir pada berkas paket. Catatan perubahan tidak masuk inventaris paket.

## Dek Awal Diperluas

Bahasa Inggris menyediakan sepuluh dek awal. Huruf kapital, gabungan ejaan dan adjektiva sehari-hari melengkapi empat dek lama. Kunci stabil, nama lokal dan urutan alfabet lengkap divalidasi.

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

Paket konten berada di `data/library/` dan dek awal di `data/starter-decks.json`. Penyedia berada di `api/dictionary/` serta `api/strokes/`; pemuatan deterministis dan pembacaan respons terbatas byte berada di `api/reuse/`. Pengujian lintas lapisan berada di `tests/` dan pengujian API di `api/tests/`. Manifest menetapkan `api/routes/config/index.js` sebagai `disabledApi`, yang mendaftarkan rute konfigurasi GET, PUT, dan DELETE khusus administrator ketika modul dinonaktifkan, tanpa memuat konten atau mengaktifkan penyedia. Pengenal alur yang dipublikasikan tetap stabil.

## Jaga ketepatan jenis kata dan bentuk jamak

Kamus Gratis mengembalikan saran terpisah per jenis kata dengan definisi, tag, dan paradigma terkurasi yang sesuai saja. Kueri dengan apostrof atau tanda hubung ditolak karena graf alfabet saat ini tidak dapat merepresentasikan ejaannya. Respons dibatasi satu juta byte saat dialirkan dan langsung dibatalkan jika terlalu besar. Pengenal alur publik `study-language-en:bootstrap-registration` tetap dipertahankan. Pembentukan jamak berlaku pada `book` tunggal, bukan `books` yang sudah jamak; `houses` memakai `/haʊzɪz/`. Sepuluh dek awal terlokalisasi didokumentasikan.

## Ucapan dan rekaman

Paket menyertakan rekaman WAV terverifikasi untuk setiap kartu terkurasi yang bersuara, karakter, partikel, serta seluruh transformasi skema yang dapat dicapai, termasuk bentuk jamak dan rantai perubahan verba. `gJx1vCzNCD1EQHT212Ls` adalah suara yang ditetapkan untuk bahasa ini. `data/audio/recordings.json` mencatat permintaan, suara, model, pengaturan, jalur transformasi, dan checksum; kredensial serta alat pembuatan tidak disertakan.

Kalimat memakai sampel PCM yang persis sama dengan rekaman kata dan partikel penyusunnya secara berurutan, termasuk transformasi yang dipilih. Karena itu, suara dan pelafalan dalam berkas kalimat sama dengan pemutaran tiap kata. Kalimat baru memakai komposisi host; varian yang rekamannya tidak tersedia tidak boleh diganti dengan pelafalan bentuk dasar. Rekaman mencakup paket terkurasi, bukan semua entri kamus yang dimuat sesuai kebutuhan atau seluruh kalimat buatan pengguna.

Bootstrap mendaftarkan penyedia yang dapat dilepas melalui `study:audio:provider.registerProvider`. Kartu dan varian bawaan berfungsi tanpa ElevenLabs terpasang atau dikonfigurasi. Rekaman leksikal yang belum tersedia dapat memakai kapabilitas opsional `elevenlabs-tts:synthesis` yang sudah diatur; suara bawaan permintaan adalah suara bahasa yang ditetapkan, dengan penggantian suara administrator untuk sintesis baru. Kalimat baru tidak meminta sintesis kalimat utuh secara terpisah. Cognis mengelola otorisasi kartu global, cache, unggahan manual, serta kebijakan komposisi pribadi dan kelas. Hanya pelafalan utama yang dipilih.

Berkas memakai PCM mono 24 kHz 16 bit dengan puncak terbatas dan keluaran yang dipastikan tidak hening. Permintaan memakai model tetap per bahasa, kecepatan 0,9, kemiripan 0,85, serta gaya 0; stabilitasnya 0,75 untuk bahasa Inggris dan 0,9 untuk bahasa Jepang. Nilai seed disimpan per permintaan; keluaran hening yang ditolak dicatat dan dicoba ulang tanpa mengganti suara. Bahasa Inggris memakai tag fonem IPA yang ditulis dalam data. Manifes konten menyatakan direktori aset paket dan menaikkan versi paket untuk instalasi.

Setiap lapisan menyediakan bidang gambar referensi opsional di editor dan tampilan detail host. Kosakata menggunakan ilustrasi asli buatan AI dengan gaya pensil warna dan cat air yang dibuat melalui pembuatan gambar OpenAI; tidak ada foto pihak ketiga. `data/library/assets/images/catalog.json` mencatat asal pembuatan dan potongan, pemetaan kartu, serta checksum; `data/library/assets/images/LICENSE.md` menjelaskan lisensi karya. Administrator dapat mengunggah gambar referensi tambahan melalui Cognis.

## Inventaris Rekaman

`data/audio/recordings.json` merupakan manifest ringkas berisi bahasa, suara, model, pengaturan pemrosesan bersama, jumlah total, dan jalur inventaris dengan pemeriksaan integritas. Berkas dalam `data/audio/inventories/` memisahkan karakter, kosakata, transformasi, kalimat langsung, dan rekaman gabungan pengganti. Setiap berkas berada di bawah 800 baris dan mempertahankan permintaan persis, asal suara tiap klip, jalur transformasi, serta checksum audio. Bootstrap memverifikasi checksum dan jumlah setiap inventaris sebelum mendaftarkan pemutaran; byte rekaman dan prioritas pencarian tidak berubah.

## Normalisasi katalog eksplisit dan inventaris komposisi kalimat

Pembaca katalog menerima kebijakan normalisasi dari penyedia bahasa: NFC untuk Inggris, NFKC untuk Jepang. Kode pencarian bersama tidak lagi bercabang menurut bahasa tertentu. Inventaris komposisi kalimat bernama `sentence-compositions`; setiap entri menjelaskan rekaman paket nyata yang disusun dari klip penyusunnya secara berurutan. Rekaman kalimat neural langsung tetap terpisah dan diutamakan saat diputar.

## Label ilustrasi terlokalisasi dan nama aset netral

Nama berkas dan ID ilustrasi memakai digest SHA-256, sedangkan pengenal lembar sumber memakai digest sumber. Metadata katalog menyediakan label Jerman, Inggris, Indonesia, dan Jepang dari makna kartu yang sudah ditulis. Label tampilan terpisah dari pengenal penyimpanan netral. Data gambar dan identitas kartu tetap sama; revisi konten memperbarui semua referensi gambar paket.
