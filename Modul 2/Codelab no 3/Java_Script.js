const inputNama = document.getElementById('nama');
const inputEmail = document.getElementById('email');
const inputAlamat = document.getElementById('alamat');
const daftarButton = document.querySelector(".Daftar")

function pendaftaran() {
    const nama = inputNama.value.trim();
    const email = inputEmail.value.trim();
    const alamat = inputAlamat.value.trim();

    if(nama || email || alamat) {
        alert("Pendaftaran berhasil!!!\nNama: " + nama + "\nEmail: " + email + "\nAlamat: " + alamat);
        return true;
    }else {
        alert("Isi semua kolom yang ada!!!");
        return false;
    }
}

daftarButton.addEventListener("click", pendaftaran);