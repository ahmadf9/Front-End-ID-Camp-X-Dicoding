const storageKey = "STORAGE_KEY";
const submitAction = document.getElementById('form-data-user');

// Fungsionalitas memeriksa fitur web storage didukung oleh browser dgn fungsi checkForStorage().
function checkForStorage() {
    return typeof (Storage) !== 'undefined';
}

// Fungsi putUserList() berguna untuk membuat item storage.
function putUserList(data) {
    if (checkForStorage()) {
        let userData = [];
        if (localStorage.getItem(storageKey) !== null) {
            userData = JSON.parse(localStorage.getItem(storageKey));
        }

        userData.unshift(data);
        if (userData.length > 5) {
            userData.pop();
        }

        localStorage.setItem(storageKey, JSON.stringify(userData));
    }
}

// getUserList() berguna untuk mendapatkan semua data pada item storage yang berisi data user yang sudah di-input.
function getUserList() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(storageKey)) || [];
    } else {
        return [];
    }
}

// renderUserList fungsi untuk merender data user pada tabel HTML.
function renderUserList() {
    const userData = getUserList;
    const userList = document.querySelector('#user-list-detail');

    userList.innerHTML = '';
    for (let user of userData) {
        let row = document.createElement('tr');
        row.innerHTML = '<td>' + user.nama + '</td>';
        row.innerHTML = '<td>' + user.umur + '</td>';
        row.innerHTML = '<td>' + user.domisili + '</td>';

        userList.appendChild(row);
    }
}

// Menambah event listener ke tombol submit untuk mengambil semua data yang sudah di-input ke semua field di form.
submitAction.addEventListener('submit', function (event) {
    const inputNama = document.getElementById('nama').value;
    const inputUmur = document.getElementById('umur').value;
    const inputDomisili = document.getElementById('domisili').value;
    const newUserData = {
        nama: inputNama,
        umur: inputUmur,
        domisili: inputDomisili,
    }

    putUserList(newUserData);
    renderUserList();
});

// menambahkan event listener ke objek window untuk event "load".
window.addEventListener('load', function () {
    if (checkForStorage) {
        if (localStorage.getItem(storageKey) !== null) {
            renderUserList();
        }
    } else {
        alert('Browser yang Anda gunakan tidak mendukung Web Storage');
    }
});