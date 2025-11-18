document.addEventListener("DOMContentLoaded", function() {

    // --- LOGIKA MODAL POP-OUT ---
    const welcomeModal = document.getElementById("welcomeModal");
    const closeButton = document.querySelector(".close-button");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    // Fungsi untuk menutup modal
    function closeModal() {
        welcomeModal.style.display = "none";
    }

    // Tampilkan modal saat halaman pertama kali dimuat
    // (Anda bisa tambahkan kondisi jika ingin modal hanya muncul sekali per sesi)
    welcomeModal.style.display = "flex"; // Langsung tampilkan modal

    // Ketika pengguna mengklik (x), tutup modal
    closeButton.addEventListener("click", closeModal);

    // Ketika pengguna mengklik tombol "Mulai Jelajah", tutup modal
    modalCloseBtn.addEventListener("click", closeModal);

    // Ketika pengguna mengklik di luar konten modal, tutup modal
    window.addEventListener("click", function(event) {
        if (event.target == welcomeModal) {
            closeModal();
        }
    });

    // --- LOGIKA ANIMASI FADE-IN SAAT SCROLL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // Opsional: hapus 'show' jika elemen keluar dari viewport
                // entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.15 // Animasi akan berjalan saat 15% elemen terlihat
    });

    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach((el) => observer.observe(el));

});