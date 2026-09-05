# Modul Cognis English

Modul Cognis English menyediakan pengalaman belajar bahasa Inggris yang dapat dipasang untuk gateway Cognis Study, termasuk data alfabet, pustaka pembelajaran hanya-baca, dan titik masuk kelas.

## Contoh Penggunaan

- Buka `/study/alphabet?language=en` untuk mempelajari 26 huruf alfabet bahasa Inggris.
- Buka `/study/library?language=en` untuk meninjau data bahasa Inggris di pustaka Study bersama.
- Buka `/study/en-classroom?language=en` untuk memulai sesi kelas bahasa Inggris melalui Study.
- Gunakan kapabilitas `study:library` yang disediakan host untuk mengakses paket konten bahasa Inggris yang telah diserap.
- Gunakan kapabilitas `study:language:en` untuk mengintegrasikan deskriptor bahasa tanpa mengimpor internal modul.

## Spesifikasi Teknis

Modul ini merupakan ekstensi Cognis eksternal yang hanya-baca. UUID permanennya mengidentifikasi modul di seluruh rilis, sedangkan entri `requires` mendeklarasikan gateway Study berdasarkan UUID.

### Kontrak Integrasi

- `bootstrap.js` adalah satu-satunya entrypoint integrasi platform.
- `ctx` yang diberikan adalah satu-satunya bus lintas komponen untuk rute, registrasi UI, kapabilitas, dan hook alur.
- Impor runtime selalu relatif terhadap repositori dan tidak pernah mengakses internal Cognis atau komponen lain.
- Registrasi tercakup dapat dihapus saat modul dinonaktifkan atau dicopot.

- Hook penghapusan instalasi mencatat pembersihan siklus hidup; modul ini tidak memiliki konfigurasi tersimpan atau konten milik pengguna karena set data pembelajarannya berupa berkas paket hanya-baca.

### Keamanan

- Endpoint pustaka mengautentikasi permintaan sebelum membaca data.
- Nama lapisan dibatasi oleh daftar izin, dan jalur kumpulan data ditetapkan oleh penyimpanan modul.
- Respons API menggunakan kesalahan publik yang stabil tanpa mengungkapkan detail implementasi.
- Kegagalan inisialisasi dikirim ke logger host dengan metadata terstruktur yang aman.

### Proses Rilis

- Selaraskan versi dalam `manifest.json`, `package.json`, dan `package-lock.json`, serta jangan pernah mengubah UUID modul.
- Jalankan `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest`, dan `git diff --check` sebelum melakukan commit rilis.
- Buat ulang `manifest.files` setelah perubahan terakhir pada berkas distribusi agar setiap jalur relatif repositori dan hash SHA-256 tetap dapat diverifikasi.
