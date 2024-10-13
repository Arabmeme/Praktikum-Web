// Fungsi untuk melakukan penjumlahan
function eksekusi() {
    let bil1 = document.getElementById('bilangan_pertama').value;
    let bil2 = document.getElementById('bilangan_kedua').value;

    // Mengonversi input menjadi angka
    let hasil = parseFloat(bil1) + parseFloat(bil2);

    // Mengecek apakah input valid
    if (isNaN(hasil)) {
        document.getElementById('hasil').innerText = "Input tidak valid!";
    } else {
        document.getElementById('hasil').innerText = "Hasil: " + hasil;
    }
}

// Fungsi untuk me-reset input dan hasil
function reset() {
    document.getElementById('bilangan_pertama').value = '';
    document.getElementById('bilangan_kedua').value = '';
    document.getElementById('hasil').innerText = '';
}