# Kamus Inggris

Modul Inggris mendaftarkan Kamus Gratis melalui `study:library:provider`; Cognis mengelola antarmuka pencarian dan cache.

## Contoh Penggunaan

Cari kata Inggris di navigasi Study atau penyusun kosakata. Cognis menggabungkan pelafalan dan makna dengan komposisi sama. API mencari kata persis, bukan saran teks lengkap kabur atau terjemahan kalimat.

## Spesifikasi Teknis

Hanya skema `english`, bahasa `en` dan lapisan `words` didukung. Alamat layanan: `https://api.dictionaryapi.dev/api/v2/entries/en/`. Kueri maksimal 100 karakter dengan huruf Inggris, spasi internal, apostrof atau tanda hubung. Waktu maksimal 15 detik; pengalihan ditolak. JSON melebihi satu juta karakter atau rekaman rusak menghasilkan kesalahan aman.

Makna mengikuti urutan penyedia; entri kosong dan duplikat dibuang, maksimal sepuluh. Pelafalan IPA unik dibatasi sepuluh. IPA utama asli tetap pertama agar aturan pelafalan transformasi cocok. Tag kelas kata mempertahankan paradigma lokal; verba asing tidak mendapat infleksi buatan. Ejaan lengkap yang hanya terdiri dari huruf menyelesaikan ID alfabet paket.

404 menghasilkan kecocokan paket nyata atau hasil kosong. Kegagalan jaringan, server dan penguraian dicatat secara aman dan diteruskan ke Cognis. Indeks konten yang gagal dapat dicoba ulang. Modul tidak menyimpan atau menjadwalkan hasil kueri; Cognis menangani pemeriksaan satu jam, publikasi perubahan dua belas jam dan hasil persisten.

Definisi eksternal tetap Inggris; lokalisasi host dapat menerjemahkan. `dictionary_data` tersembunyi memuat alamat layanan, lisensi dan sumber Wiktionary yang diizinkan, bukan respons mentah lengkap. Hasil dapat memiliki kewajiban CC BY-SA 3.0 dan atribusi Wiktionary; pertahankan saat menggunakan ulang definisi. Beberapa kelas kata bisa muncul pada ejaan sama. Layanan tidak menyediakan paradigma infleksi otoritatif.

## Kontrol Belajar Tersimpan

Katalog referensi bawaan bernama Open English WordNet. Rekaman khusus mencakup seluruh 32 bentuk jamak nomina bawaan. Pemutaran bentuk terpilih mencari setiap varian melalui label dan bacaan utamanya; bentuk yang tidak tersedia tidak diganti dengan rekaman dasar.
