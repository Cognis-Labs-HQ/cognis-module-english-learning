# Modul Cognis English

Modul Cognis English menyediakan pengalaman belajar bahasa Inggris untuk gateway Cognis Study sebagai paket konten khusus data yang deklaratif dan berversi.

## Contoh Penggunaan

- Buka `/study/library` untuk menjelajahi konten bahasa Inggris melalui pustaka Study bersama yang digerakkan oleh skema.
- Gunakan kapabilitas `study:library` yang disediakan host untuk mengakses paket konten berversi dalam namespace `en` dengan metadata skema terlokalisasi, peran semantik lapisan, dan relasi definisi yang didukung string milik modul.
- Gunakan kapabilitas `study:language:en` untuk memperoleh deskriptor kanonis dengan `languageCode: "en"` bagi tombol subnavigasi Study yang dibuat.

## Spesifikasi Teknis

Modul ini merupakan ekstensi Cognis eksternal yang hanya-baca. UUID permanennya mengidentifikasi modul di seluruh rilis, sedangkan entri `requires` mendeklarasikan gateway Study berdasarkan UUID.

### Kontrak Integrasi

- `bootstrap.js` adalah satu-satunya entrypoint integrasi platform.
- Eksposur peramban dibatasi pada `ui/languages`; modul khusus data ini tidak menyumbangkan ekstensi UI host maupun hook tahap bootstrap platform.
- `ctx` yang diberikan adalah satu-satunya bus lintas komponen untuk registrasi kapabilitas, alur, dan sumber daya bahasa.
- Impor runtime selalu relatif terhadap repositori dan tidak pernah mengakses internal Cognis atau komponen lain.
- Registrasi tercakup dapat dihapus saat modul dinonaktifkan atau dicopot.

- Hook penghapusan instalasi mencatat pembersihan siklus hidup; modul ini tidak memiliki konfigurasi tersimpan atau konten milik pengguna karena set data pembelajarannya berupa berkas paket hanya-baca.

### Model data Study terkini

Skema versi 12 memodelkan entri alfabet sebagai unit tulisan atomik dengan daftar pelafalan dan rujukan audio HTTPS. Kata ditautkan ke ejaan huruf yang berurutan dan definisi terlokalisasi, partikel tata bahasa dimodelkan tersendiri, dan kalimat disusun dari rujukan kata serta partikel yang berurutan. Audio tetap berada di luar paket sehingga modul tidak menyertakan media biner. Digraf umum juga dimodelkan sebagai unit tulisan majemuk dengan rujukan komposisi berbasis resolver yang terpisah dari rujukan definisi terlokalisasinya. Alfabet menerbitkan kisi tetap dan filter metadata wajib mendeklarasikan tag awalnya. Kartu huruf kecil dalam kisi dialamatkan melalui ID tampilan numerik yang stabil, dan setiap alternatif huruf kapital memakai relasi varian eksplisit ke induk huruf kecilnya. Kartu kata, partikel, dan kalimat mengutamakan definisi terlokalisasi wajib daripada label rekaman internal. Hanya lapisan karakter alfabet yang meminta kartu minimal, sehingga entrinya menampilkan label utama ringkas sementara komposit dan semua lapisan tingkat lebih tinggi mempertahankan tampilan lengkap. Label kalimat harus dapat direkonstruksi tepat setelah normalisasi spasi dari rujukan unit leksikal dan partikel yang berurutan tanpa celah; karena itu, tanda titik bawaan merupakan partikel tanda baca eksplisit, bukan teks label yang tidak tertaut. Alfabet memakai tujuh kolom dan dua ruang kosong eksplisit di akhir untuk membentuk empat baris yang seimbang. Rekaman huruf memuat nama huruf dan fonem IPA umum, sedangkan tujuh digraf bawaan mencakup `ch`, `sh`, `th`, `ph`, `wh`, `ng`, dan `ck`. Relasi varian tidak lagi menentukan arah; host saat ini memilih posisi tersedia yang berbatas secara dinamis.

### Kebijakan kegagalan bootstrap

Ingesti konten dan kapabilitas `study:language:en` merupakan seluruh perilaku runtime modul. Host terkini menjalankan impor konten secara atomik dan mengembalikan modul ke keadaan nonaktif setelah kegagalan bootstrap yang tersisa, sehingga modul mengikuti kebijakan milik host tersebut tanpa pengecualian manifes.

### Keamanan

- Pustaka host memvalidasi namespace paket, versi semantik, lisensi, jalur aman, skema terlokalisasi, bidang bertipe, dan seluruh graf rekaman sebelum penulisan atomik.
- Kegagalan penyerapan dikirim ke logger host dengan metadata terstruktur yang aman.

### Proses Rilis

- Selaraskan versi dalam `manifest.json`, `package.json`, dan `package-lock.json`, serta jangan pernah mengubah UUID modul.
- Jalankan `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest`, dan `git diff --check` sebelum melakukan commit rilis.
- Buat ulang `manifest.files` setelah perubahan terakhir pada berkas distribusi agar setiap jalur relatif repositori dan hash SHA-256 tetap dapat diverifikasi.
