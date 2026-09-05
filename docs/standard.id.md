# Modul Cognis English

Modul Cognis English menyediakan pengalaman belajar bahasa Inggris untuk gateway Cognis Study sebagai paket konten khusus data yang deklaratif dan berversi.

## Contoh Penggunaan

- Buka `/study/library` untuk menjelajahi konten bahasa Inggris melalui pustaka Study bersama yang digerakkan oleh skema.
- Gunakan kapabilitas `study:library` yang disediakan host untuk mengakses paket konten berversi dalam namespace `en` dengan metadata skema terlokalisasi dan peran semantik lapisan.
- Gunakan kapabilitas `study:language:en` untuk memperoleh deskriptor kanonis dengan `languageCode: "en"` bagi tombol subnavigasi Study yang dibuat.

## Spesifikasi Teknis

Modul ini merupakan ekstensi Cognis eksternal yang hanya-baca. UUID permanennya mengidentifikasi modul di seluruh rilis, sedangkan entri `requires` mendeklarasikan gateway Study berdasarkan UUID.

### Kontrak Integrasi

- `bootstrap.js` adalah satu-satunya entrypoint integrasi platform.
- `ctx` yang diberikan adalah satu-satunya bus lintas komponen untuk registrasi kapabilitas, alur, dan sumber daya bahasa.
- Impor runtime selalu relatif terhadap repositori dan tidak pernah mengakses internal Cognis atau komponen lain.
- Registrasi tercakup dapat dihapus saat modul dinonaktifkan atau dicopot.

- Hook penghapusan instalasi mencatat pembersihan siklus hidup; modul ini tidak memiliki konfigurasi tersimpan atau konten milik pengguna karena set data pembelajarannya berupa berkas paket hanya-baca.

### Keamanan

- Pustaka host memvalidasi namespace paket, versi semantik, lisensi, jalur aman, skema terlokalisasi, bidang bertipe, dan seluruh graf rekaman sebelum penulisan atomik.
- Kegagalan penyerapan dikirim ke logger host dengan metadata terstruktur yang aman.

### Proses Rilis

- Selaraskan versi dalam `manifest.json`, `package.json`, dan `package-lock.json`, serta jangan pernah mengubah UUID modul.
- Jalankan `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest`, dan `git diff --check` sebelum melakukan commit rilis.
- Buat ulang `manifest.files` setelah perubahan terakhir pada berkas distribusi agar setiap jalur relatif repositori dan hash SHA-256 tetap dapat diverifikasi.
