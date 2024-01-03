const changeCaption = new Event("changeCaption");

/* tambahkan sebuah event listener untuk custom event dan event listener pada button melalui method addEventListener() ketika tombol tersebut ditekan. */
window.addEventListener("load", function () {
  const tombol = this.document.getElementById("tombol");

  tombol.addEventListener("changeCaption", customEventHandler);
  tombol.addEventListener("click", function () {
    tombol.dispatchEvent(changeCaption);
  });
});

// mendeklarasikan function customEventHandler dijalankan ketika event changeCaption terjadi.
function customEventHandler(ev) {
  console.log("Event " + ev.type + " telah dijalankan");
  const caption = document.getElementById("caption");
  caption.innerText = "Anda telah membangkitkan custom event";
}

/* 2. Memanggil function dispatchEvent() untuk trigger custom event yang telah dideklarasikan 
dan dipasangkan */
