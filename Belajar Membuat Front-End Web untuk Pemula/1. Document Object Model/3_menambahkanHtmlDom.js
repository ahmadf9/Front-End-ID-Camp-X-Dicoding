// Menambahkan Elemen HTML ke DOM

/* Append Child
 * Fungsinya adalah menambahkan atau menyisipkan sebuah child elemen ke bagian akhir dari sebuah elemen.
 */
const newElement = document.createElement("li");
newElement.innerText = "Selamat menikmati!";
const daftar = document.getElementById("daftar");

// menggunakan method appendChild() pada variabel daftar
daftar.appendChild(newElement);

/* Insert Before
 * memberikan kemampuan untuk menyisipkan elemen sebelum child elemen tertentu dalam parent element.
 * Method ini menerima dua buah parameter, yaitu (1) elemen baru yang ingin disisipkan dan
 * (2) child element yang akan dijadikan patokan diletakkannya elemen baru.
 */
const elementAwal = document.createElement("li");
elementAwal.innerText = "Hidupkan kompor.";
const itemAwal = document.getElementById("awal");

daftar.insertBefore(elementAwal, itemAwal);
