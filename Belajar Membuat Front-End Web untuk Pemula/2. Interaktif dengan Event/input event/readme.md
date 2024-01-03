\* Event onInput
dijalankan setiap kali kita menulis atau menghapus apa pun pada sebuah field input yang memiliki event listener tersebut. Kita menggunakan method addEventListener(), maka versi string event onInput untuk dimasukkan ke parameter pertama method tersebut adalah “input”.

\*Event onFocus
akan dijalankan ketika melakukan klik di sebuah elemen input. Kita akan mencoba untuk menampilkan tulisan berupa notifikasi jumlah karakter yang masih diperbolehkan. Harus menambahkan sebuah event handler pada elemen input yang menerima penulisan nama panggilan untuk event onFocus.

\* Event onBlur
akan dijalankan ketika pada kondisi yang terbalik dengan event onFocus, yakni jika kita“pergi” dari elemen yang memiliki event handler untuk event onFocus. Apa maksud dari “pergi”? Maksudnya adalah kita tidak lagi berinteraksi secara langsung dengan elemen tersebut seperti kita telah melakukan klik pada elemen lain.

\* Event onChange
Event onChange memiliki perilaku yang mirip dengan onInput, yaitu event yang terjadi jika terdapat perubahan nilai. event onChange akan terjadi jika elemen input mengalami perubahan nilai dan menjadi blur (user tidak focus pada elemen tersebut). Sederhananya, event onChange seakan-akan merupakan gabungan dari event onInput dan onBlur. \*

\* Event onCopy
Event onCopy tergolong dalam kelompok clipboard events. Event ini terjadi jika kita melakukan operasi pada clipboard seperti copy, cut, dan paste.
Event onCopy sebagai operasi copy

\* Event onPaste
Event ini akan terjadi ketika melakukan operasi paste pada elemen yang sudah kita beri event listener untuk event onPaste.
