let currentSlide = 0;

function autoMoveCarousel() {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.project-card').length;

    currentSlide = (currentSlide + 1) % totalSlides;

    const percentage = -currentSlide * 100 / totalSlides;
    carousel.style.transform = `translateX(${percentage}%)`;
}

setInterval(autoMoveCarousel, 3000); // Change slide every 3 seconds

// Ambil modal
var modal = document.getElementById("schoolModal");

// Fungsi untuk membuka modal
function openModal(title, description) {
    document.getElementById("schoolTitle").innerText = title;
    document.getElementById("schoolDescription").innerText = description;
    modal.style.display = "block"; // Tampilkan modal
}

// Ambil elemen span yang digunakan untuk menutup modal
var span = document.getElementsByClassName("close")[0];

// Ketika pengguna mengklik span (x), tutup modal
span.onclick = function() {
    modal.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
