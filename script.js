window.onload = () => {
    const openingOverlay = document.getElementById('opening-overlay');
    const btnBuka = document.getElementById('btn-buka');
    const audioTakbir = document.getElementById('audioTakbir');
    const audioBedug = document.getElementById('audioBedug');
    const musicBtn = document.getElementById('musicBtn');

    let isPlaying = false;
    let audioTimer;

    // --- Tombol Buka Pesan ---
    if (btnBuka) {
        btnBuka.addEventListener('click', () => {
            openingOverlay.classList.add('fade-out');
            putarSemua();
        });
    }

    // --- Kontrol Audio ---
    function putarSemua() {
        audioTakbir.currentTime = 0;
        audioBedug.currentTime = 0;
        audioTakbir.play();
        audioBedug.play();
        isPlaying = true;
        musicBtn.innerText = "⏸ Matikan Musik";

        // Loop Manual 3 Menit
        audioTimer = setTimeout(() => {
            putarSemua();
        }, 180000);
    }

    function hentikanSemua() {
        audioTakbir.pause();
        audioBedug.pause();
        isPlaying = false;
        musicBtn.innerText = "🎵 Putar Takbir & Bedug";
        clearTimeout(audioTimer);
    }

    musicBtn.addEventListener('click', () => {
        if (!isPlaying) putarSemua();
        else hentikanSemua();
    });

    // --- Audio Mati Saat Keluar Browser/Tab ---
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            hentikanSemua();
        }
    });

    // --- Hitung Mundur ---
    const target = new Date("March 30, 2026 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const d = target - now;
        if (d < 0) return;
        document.getElementById('days').innerText = Math.floor(d / (1000 * 60 * 60 * 24));
        document.getElementById('hours').innerText = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById('mins').innerText = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    }, 1000);

    // --- Kembang Api ---
    const cvs = document.getElementById('fireworks');
    const ctx = cvs.getContext('2d');
    cvs.width = window.innerWidth; cvs.height = window.innerHeight;
    function draw() {
        ctx.fillStyle = 'rgba(6, 33, 11, 0.1)';
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 70%)`;
        ctx.beginPath();
        ctx.arc(Math.random() * cvs.width, Math.random() * cvs.height, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
    setInterval(draw, 150);
};
