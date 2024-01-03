/* 1. Event handler dari event onload. */
// memunculkan sebuah dialog box alert
function welcome() {
    alert("Sim salabim muncullah elemen-elemen HTML");
    const contents = document.querySelector(".contents");
    contents.removeAttribute("hidden");
}

/* 2. Membuat event handler onclick */
function increment() {
    document.getElementById("count").innerText++;

    // fitur kejutan ketika tombol ditekan hingga 7 kali
    if (document.getElementById("count").innerText == 7) {
        const hiddenMessage = document.createElement("h4");
        hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";

        const image = document.createElement("img");
        image.setAttribute("src", "https://i.ibb.co/0V49VRZ/catto.jpg");

        const contents = document.querySelector(".contents");
        contents.appendChild(hiddenMessage).appendChild(image);
    }
}

// elemen.{nama_event} = namaFunction();
// event handler pada elemen button
// document.getElementById("incrementButton").onclick = increment;
// document.body.onload = welcome;

/* 4. Menerapkan event handler menggunakan function addEventListener. 
* Kelebihannya adalah kita bisa menambahkan satu atau lebih fungsi sebagai event handler. */
// menulis kode menggunakan addEventListener di sini
window.addEventListener("load", welcome);
document.getElementById("incrementButton").addEventListener("click", increment);

