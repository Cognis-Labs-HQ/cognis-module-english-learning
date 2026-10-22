# Bentuk Belajar yang Dihasilkan

**Cabang Fitur:** feature-generated-transformations

## Hasilkan Bentuk dari Kartu Dasar

Keluarga gramatikal bahasa Inggris kini menghasilkan bentuk jamak, verba, adjektiva, adverbia cara, dan tingkat adverbia dari kartu dasar dengan flag eksplisit. Ejaan tidak beraturan dan IPA yang ditinjau tetap menjadi pengecualian aturan. Referensi kalimat menyimpan ID dasar dan jalur transformasi, termasuk “running”, “ran”, “want to run”, dan “wanted to run”. Infleksi yang disimpan mandiri dihapus.

## Pertahankan Rekaman dan Latihan Menulis

Rekaman bawaan mempertahankan suara yang ditentukan dan audio tepat setiap penyusun kalimat. Klip tambahan mencakup bentuk berantai dan adverbia baru. Pengujian cakupan mewajibkan media yang sesuai untuk setiap aturan aktif dan jalur pilihan. Ejaan turunan tetap kompatibel dengan resolver pola goresan host.

## Tampilkan semua kelas kata

Filter penjelajahan Kelas Kata kini opsional tanpa nomina sebagai nilai bawaan, sehingga verba, pronomina, adjektiva, dan kata lain dalam kalimat tetap dapat ditemukan. Penyuntingan kartu tetap mewajibkan nilai Kelas Kata.

## Pastikan kosakata kalimat tetap dapat ditemukan

Carousel struktur kalimat secara eksplisit mendeklarasikan `excludeFromBrowse: false` agar kata leksikalnya juga muncul dalam Kosakata. Carousel khusus tanda baca tetap dikecualikan. Pengujian mencakup semua referensi kosakata kalimat, alias pelafalan tersembunyi, dan cakupan filter opsional.

## Kurasi tag untuk pembelajaran

Pil kartu bahasa Inggris menampilkan metadata bermakna yang dilokalisasi, bukan tag transformasi dan bentuk internal. Pilihan kelas kata serta filter memakai label terlokalisasi dan urutan penyedia. Filter opsional mulai tanpa pilihan, termasuk ketika hanya ada satu nilai; tag yang ditulis dan transformasi yang dihasilkan tetap dipertahankan.

## Profil kesulitan generik

Kedua modul Study memakai bidang kanonis `difficulty_level`. Normalisasi dan uji kontrak yang identik membaca `data/library/difficulty.json`; label, urutan pilihan, pemetaan tag sumber, nilai dasar, serta persyaratan transformasi merupakan data. Bahasa Jepang menampilkan JLPT N5–N1; bahasa Inggris memakai kategori pemula/menengah/lanjutan yang sudah ada. Nilai tidak dikenal tetap tidak terklasifikasi. Host memberi peringkat pada bidang yang dideklarasikan tanpa aturan khusus bahasa atau nama bidang alternatif.

## Komit

- [58369ddb](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/58369ddb55a1b12162a37567e3027f4b1cf6b83c)
- [8aecdc0a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8aecdc0a5c0f0d2315b2947a5315fb3545a8c20b)
- [d26a0f0c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d26a0f0cdbdbf56720cc244bdf2f44cfeb7452bc)
- [a4f284f7](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a4f284f71438edf5c3e6b67fc1018cdcdf4782d1)
- [ae9407b6](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ae9407b684ff6ca0083f7a8b502243f600487c88)

Referensi implementasi: [`fb16ed21797dafcafea82cddb2d0870a88b31c40`](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/fb16ed21797dafcafea82cddb2d0870a88b31c40).
