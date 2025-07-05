// Menunggu seluruh halaman HTML dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', function() {

    // Cari elemen berdasarkan ID-nya
    const revealButton = document.getElementById('reveal-button');
    const hackedSection = document.getElementById('hacked-section');
    const explanationSection = document.getElementById('explanation-section');

    // Tambahkan 'event listener' untuk mendeteksi klik pada tombol
    revealButton.addEventListener('click', function() {
        // Sembunyikan bagian "hacked"
        hackedSection.style.display = 'none';
        
        // Tampilkan bagian penjelasan
        explanationSection.style.display = 'block';
    });

});