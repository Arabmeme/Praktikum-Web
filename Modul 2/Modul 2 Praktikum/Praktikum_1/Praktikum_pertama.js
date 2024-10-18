let expression = ''; // Variabel untuk menyimpan ekspresi matematika

// Fungsi untuk menambahkan angka atau operator ke dalam ekspresi
function pushBtn(value) {
    expression += value; // Menambah nilai ke variabel ekspresi
    document.getElementById('display').value = expression; // Menampilkan ekspresi di layar
}

// Fungsi untuk menghitung hasil dari ekspresi
function calculate() {
    try {
        // Ganti simbol '^' dengan operator pangkat '**' di JavaScript
        let result = eval(expression.replace('^', '**'));
        document.getElementById('display').value = result; // Tampilkan hasil
        expression = result; // Menyimpan hasil untuk perhitungan lebih lanjut
    } catch (error) {
        document.getElementById('display').value = 'Error'; // Menampilkan pesan error jika ada kesalahan
    }
}

// Fungsi untuk membersihkan layar (clear all)
function clearAll() {
    expression = ''; // Reset ekspresi
    document.getElementById('display').value = ''; // Kosongkan tampilan
}
