/* Memanipulasi Atribut Melalui setAttribute */

// Memanipulasi elemen HTML yang kita tangkap melalui DOM
// Akses DOM melalui browser

// Menyesuaikan ukuran gambar yang terlalu kecil.
const gambar = document.getElementById("gambar");

gambar.setAttribute("width", 300);
gambar.setAttribute("height", 215);

// Menonaktifkan button ke-4 (Play (Coming Soon)).
const buttons = document.querySelectorAll(".buttons");

// mengambil tombol "Play (Coming Soon)" melalui indexing!
const PlayButton = buttons[3];

const PlayButtonElement = PlayButton.children[0];

// memanggil method setAttribute() pada elemen button yang dituju. Disini kita akan mengubah type dari tombol yang ber-caption "Play (Coming Soon)" menjadi tombol submit.
PlayButtonElement.setAttribute("type", "submit");
