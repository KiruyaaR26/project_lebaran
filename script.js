const openingOverlay = document.getElementById('opening-overlay');
const btnBuka = document.getElementById('btn-buka');

btnBuka.addEventListener('click', () => {
    // 1. Hilangkan overlay
    openingOverlay.classList.add('fade-out');

    // 2. Putar audio secara otomatis saat web terbuka
    // Karena user sudah berinteraksi (klik tombol buka), browser akan mengizinkan audio putar
    if (typeof putarAudio === "function") {
        putarAudio();
    }
});

// --- 1. Countdown ---
const targetDate = new Date("March 30, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (diff < 0) return;

    document.getElementById('days').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('mins').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
}, 1000);

// --- 2. Kontrol Audio Ganda (3 Menit) ---
const audioTakbir = document.getElementById('audioTakbir');
const audioBedug = document.getElementById('audioBedug');
const musicBtn = document.getElementById('musicBtn');

let isPlaying = false;
let timer3Menit;

function putarAudio() {
    audioTakbir.currentTime = 0;
    audioBedug.currentTime = 0;
    audioTakbir.play();
    audioBedug.play();
    
    musicBtn.innerText = "⏸ Matikan Musik";
    isPlaying = true;

    // Restart otomatis setelah 3 menit (180.000 ms)
    timer3Menit = setTimeout(() => {
        putarAudio(); 
    }, 180000); 
}

function hentikanAudio() {
    audioTakbir.pause();
    audioBedug.pause();
    musicBtn.innerText = "🎵 Putar Takbir & Bedug";
    isPlaying = false;
    clearTimeout(timer3Menit);
}

musicBtn.addEventListener('click', () => {
    if (!isPlaying) {
        putarAudio();
    } else {
        hentikanAudio();
    }
});

// --- 3. Kembang Api Otomatis ---
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawFireworks() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 75%)`;
    ctx.beginPath();
    ctx.arc(x, y, 1.2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(6, 33, 11, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
setInterval(drawFireworks, 150);