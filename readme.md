# WORDLE BREAKER

Coding iseng-iseng berhadiah hehe. dibuat pake NodeJS

## Instalasi

Install NodeJS, lalu clone repository ini dan jalankan di komputer kamyu.


## Penggunaan
`node words.js JUMLAH_HURUF CLUE EXCLUDE`\
contoh\
`node words.js 5 2a,3d bejklmptu`

5 = Jumlah huruf 5 buah\
2a,3d = huruf ke-2 A, huruf ke-3 D\
bejklmptu = Kata tidak mengandung huruf B,E,J,K,LM,P,T,U\
\
hasilnya
```
[
  'cadai', 'cadar', 'cadas', 'dadah',
  'dadar', 'dadih', 'gadai', 'gadis',
  'gadon', 'hadas', 'hadir', 'hadis',
  'nadir', 'radah', 'radai', 'radar',
  'radas', 'radif', 'radin', 'radio',
  'radis', 'radon', 'sadah', 'sadai',
  'sadar', 'sadin', 'sadir', 'sadis',
  'wadah', 'zadah'
]
```
Ulangi terus commandnya dengan `clue` dan `exclude` baru hingga word list yang tersisa menjadi sedikit.

## Bahasa lain?
Bisa. ya bisa, ubah aja sesukamu. download wordlist lalu simpan filenya di folder yang sama dengan `words.js`, buat perubahan di baris 3 pada file `words.js`

## Wordlist
[Putra Pandu Adikara](http://hikaruyuuki.lecture.ub.ac.id/kamus-kata-dasar-dan-stopword-list-bahasa-indonesia/comment-page-1/?unapproved=3851&moderation-hash=8d6ffabcef6d43fc4a9f3e52b1c771b5#comment-3851)