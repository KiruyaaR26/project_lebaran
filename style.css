/* --- DASAR & BACKGROUND --- */
body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: radial-gradient(circle at center, #1b5e20 0%, #06210b 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; /* Membuat card tepat di tengah layar */
    overflow-x: hidden;
    position: relative;
}

#fireworks {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 1;
}

/* --- ANIMASI BULAN SABIT MULUS --- */
.moon-container {
    position: absolute;
    top: 3%; /* Sedikit lebih ke atas agar tidak tertutup card */
    right: 5%;
    width: 55px;
    height: 55px;
    animation: rotateMoon 30s linear infinite;
    z-index: 2;
}

.moon {
    width: 100%;
    height: 100%;
    background: #ffd700;
    border-radius: 50%;
    mask: radial-gradient(circle at 70% 30%, transparent 55%, black 56%);
    -webkit-mask: radial-gradient(circle at 70% 30%, transparent 55%, black 56%);
    filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.8));
}

@keyframes rotateMoon { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* --- KARTU UCAPAN (RESPONSIF & BERJARAK) --- */
.card {
    background: rgba(255, 255, 255, 0.96);
    /* Memberi jarak isi teks ke tepi card */
    padding: 25px 20px; 
    border-radius: 25px;
    text-align: center;
    box-shadow: 0 15px 40px rgba(0,0,0,0.6);
    z-index: 10;
    /* Memberi jarak card ke tepi layar HP (Kiri & Kanan) */
    width: 82%; 
    max-width: 350px;
    border: 2px solid #ffd700;
    position: relative;
    backdrop-filter: blur(10px);
    /* Memberi jarak card ke tepi layar atas & bawah agar tidak nempel */
    margin: 60px 20px; 
}

/* --- FOTO KELUARGA MELAYANG --- */
.family-photo-container {
    width: 125px;
    height: 125px;
    margin: -85px auto 15px auto;
    border-radius: 50%;
    border: 5px solid #ffd700;
    overflow: hidden;
    background: white;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.family-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* --- TOMBOL MUSIK --- */
.music-control {
    background: linear-gradient(45deg, #ffd700, #ffae00);
    color: #1b5e20;
    padding: 8px 20px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    font-size: 11px;
    display: inline-block;
    margin-bottom: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* --- TEKS --- */
h1 { color: #1b5e20; margin: 5px 0; font-size: 1.5rem; }
.divider { height: 1.5px; background: linear-gradient(to right, transparent, #ffd700, transparent); margin: 15px 0; }
.message { font-style: italic; color: #333; font-size: 0.85rem; line-height: 1.6; }
.family-name h3 { font-family: 'Sacramento', cursive; font-size: 2rem; color: #1b5e20; margin: 5px 0; }

/* --- COUNTDOWN --- */
#countdown { display: flex; justify-content: center; gap: 8px; margin-top: 10px; }
.time-box { background: #1b5e20; color: white; padding: 7px; border-radius: 10px; min-width: 45px; }
.time-box span { font-size: 1rem; font-weight: bold; }
.time-box p { font-size: 0.6rem; margin: 0; }

/* --- OPENING OVERLAY --- */
#opening-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(135deg, #06210b 0%, #1b5e20 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    text-align: center;
    color: #ffd700;
    transition: 0.8s ease;
}

.btn-buka {
    margin-top: 25px;
    padding: 12px 35px;
    background: #ffd700;
    color: #1b5e20;
    border-radius: 50px;
    border: none;
    font-weight: bold;
    cursor: pointer;
}

.fade-out { opacity: 0; visibility: hidden; }

/* --- BINTANG --- */
.stars-container::after {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 2px; height: 2px;
    box-shadow: 
        15vw 10vh #fff, 85vw 20vh #fff, 40vw 80vh #fff, 10vw 50vh #fff, 
        65vw 90vh #fff, 90vw 50vh #fff, 30vw 30vh #fff, 70vw 10vh #fff;
    animation: twinkle 4s infinite;
}
@keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
