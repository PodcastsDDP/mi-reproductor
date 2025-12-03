<!-- Importamos FontAwesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>

<style>

/* ==================== BARRA FIJA INFERIOR ==================== */

#radioPlayer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #1f3a49;
    backdrop-filter: blur(10px);
    padding: 10px 18px;
    z-index: 9999;
    border-top: 3px solid #ffcc00;
    box-shadow: 0 -5px 20px rgba(0,0,0,0.5);
    font-family: 'Segoe UI', sans-serif;
}

#playerContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    max-width: 1200px;
    margin: auto;
}

/* ================= LOGO ON ANIMADO ================= */

#onLogo {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #ffcc00, #ff9900);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #000;
    font-size: 0.85rem;
    animation: pulse 2s infinite;
    box-shadow: 0 0 10px rgba(255,204,0,0.7);
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(255,204,0,0.7); }
    70% { box-shadow: 0 0 0 12px rgba(255,204,0,0); }
    100% { box-shadow: 0 0 0 0 rgba(255,204,0,0); }
}

/* ===================== PLAY - NEXT - PREV ====================== */

.controlBtn {
    background: none;
    border: none;
    color: #ffcc00;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 6px;
    border-radius: 50%;
    transition: 0.3s;
}

.controlBtn:hover {
    background: rgba(255,204,0,0.2);
}

#playBtn {
    width: 45px;
    height: 45px;
    background: #ffcc00;
    border-radius: 50%;
    border: none;
    color: #000;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(255,204,0,0.6);
}

#playBtn:hover {
    transform: scale(1.1);
    background: #ffdd44;
}

#playBtn.playing {
    background: #ff4444 !important;
    color: #fff;
}

/* ===================== BARRA DE PROGRESO ====================== */

#progressContainer {
    flex: 1;
    min-width: 180px;
}

#progressBar {
    width: 100%;
    height: 4px;
    background: rgba(255,255,255,0.3);
    border-radius: 2px;
    cursor: pointer;
    overflow: hidden;
}

#progress {
    height: 100%;
    width: 0%;
    background: #ffcc00;
    transition: width 0.15s linear;
}

.timeRow {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: #fff;
    opacity: .8;
    margin-top: 4px;
}

/* ===================== INFO DEL TEMA ====================== */

#nowPlaying {
    font-size: 0.85rem;
    max-width: 240px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0.85;
}

/* ===================== EQUUALIZADOR ====================== */

.equalizer {
    display: flex;
    align-items: flex-end;
    gap: 2px;
    height: 22px;
}

.eqBar {
    width: 3px;
    background: #ffcc00;
    border-radius: 2px;
    animation: equalizer 1.4s ease infinite alternate;
}

.eqBar:nth-child(2){ animation-delay: 0.15s; }
.eqBar:nth-child(3){ animation-delay: 0.3s; }
.eqBar:nth-child(4){ animation-delay: 0.45s; }
.eqBar:nth-child(5){ animation-delay: 0.6s; }

@keyframes equalizer {
    0% { height: 4px; }
    100% { height: 22px; }
}

/* ===================== VOLUMEN ====================== */

#volumeWrap {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #ffcc00;
}

#volumeSlider {
    width: 80px;
}

/* ===================== BOTÓN LISTA ====================== */

#togglePlaylist {
    padding: 6px 10px;
    background: ff4444;
    border: 1px solid #ffcc00;
    color: #ffcc00;
    border-radius: 6px;
    cursor: pointer;
    transition: .3s;
}

#togglePlaylist:hover {
    background: #ffcc00;
    color: #000;
}

/* ===================== PLAYLIST DESPLEGABLE ====================== */

#playlistBox {
    position: fixed;
    bottom: 65px;
    right: 0;
    width: 280px;
    background: #1f3a49;
    backdrop-filter: blur(10px);
    border-left: 3px solid #ffcc00;
    border-top: 3px solid #ffcc00;
    padding: 15px;
    color: #fff;
    display: none;
    z-index: 9999;
    max-height: 70vh;
    overflow-y: auto;
}

.playItem {
    padding: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    cursor: pointer;
    transition: .3s;
}

.playItem:hover {
    background: rgba(255,204,0,0.2);
}

.playItem.active {
    background: rgba(255,204,0,0.25);
    border-left: 3px solid #ffcc00;
}

.playItem h4 {
    color: #ffcc00;
    margin-bottom: 4px;
}

.playItem p {
    font-size: 0.8rem;
    opacity: 0.8;
}

/* ===================== RESPONSIVE ====================== */

@media(max-width: 700px){
    #playerContent{
        flex-wrap: wrap;
        gap: 8px;
    }
}


/* === FIX REAL: limitar el ancho de la barra en móviles === */
@media (max-width: 600px) {

    .progress-container {
        max-width: 100% !important;
        width: 100% !important;
        padding: 0 5px !important;
        box-sizing: border-box !important;
    }

    .progress-bar {
        max-width: 100% !important;
        width: 100% !important;
    }

    .player-container {
        overflow-x: hidden !important;
    }

    .now-playing {
        max-width: 100% !important;
    }
}


</style>


<!-- ==================== HTML DEL REPRODUCTOR ==================== -->

<div id="radioPlayer">
    <div id="playerContent">

        <div id="onLogo">ON</div>

        <button class="controlBtn" id="prevBtn"><i class="fas fa-step-backward"></i></button>

        <button id="playBtn"><i class="fas fa-play"></i></button>

        <button class="controlBtn" id="nextBtn"><i class="fas fa-step-forward"></i></button>

        <div id="progressContainer">
            <div id="progressBar"><div id="progress"></div></div>
            <div class="timeRow">
                <span id="currentTime">0:00</span>
                <span id="duration">0:00</span>
            </div>
        </div>

        <div id="nowPlaying">Elegí un Audio...</div>

        <div class="equalizer">
            <div class="eqBar"></div>
            <div class="eqBar"></div>
            <div class="eqBar"></div>
            <div class="eqBar"></div>
            <div class="eqBar"></div>
        </div>

        <div id="volumeWrap">
            <i class="fas fa-volume-up"></i>
            <input type="range" id="volumeSlider" min="0" max="100" value="80" />
        </div>

        <button id="togglePlaylist">Lista</button>

    </div>
</div>

<!-- ============ PLAYLIST DESPLEGABLE ============ -->
<div id="playlistBox"></div>



<!-- ====================== SCRIPT ====================== -->

<script>
document.addEventListener("DOMContentLoaded",()=>{

    const playBtn = document.getElementById("playBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const playIcon = playBtn.querySelector("i");
    const playlistBox = document.getElementById("playlistBox");
    const togglePlaylist = document.getElementById("togglePlaylist");

    const progress = document.getElementById("progress");
    const progressBar = document.getElementById("progressBar");
    const currentTimeEl = document.getElementById("currentTime");
    const durationEl = document.getElementById("duration");
    const nowPlaying = document.getElementById("nowPlaying");
    const volumeSlider = document.getElementById("volumeSlider");

    let isPlaying = false;
    let currentTrackIndex = 0;

    const audioPlayer = new Audio();

    const playlist = [
        {
            title: "Hola, Durazno",
            description: "Dos noticias en formato Podcast",
            duration: "2 minutos y segundos",
            audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/HolaDurazno2-3-diciembre.mp3"
        },
        {
            title: "Navidad a Cielo Abierto en Durazno",
            description: "Otros datos de la conferencia de prensa",
            duration: "16 minutos",
            audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/Acieloabiertoconferencia.mp3"
        },
        {
            title: "Éxitos en Español",
            description: "Selección de canciones populares",
            duration: "11 minutos",
            audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/Latinas1.mp3?_=2"
        },
        {
            title: "Llamadas de Primavera",
            description: "Entregaron premio a vecina. Podcast con Fernando Salvador Báez",
            duration: "58 segundos",
            audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/3diciembre2b.mp3?"
        }
    ];

    /* ---------------- GENERAR PLAYLIST ---------------- */
    function renderPlaylist(){
        playlistBox.innerHTML = "";
        playlist.forEach((track, index)=>{
            const item = document.createElement("div");
            item.className = "playItem "+(index===currentTrackIndex?"active":"");
            item.innerHTML=`
                <h4>${track.title}</h4>
                <p>${track.description}</p>
                <small>${track.duration}</small>
            `;
            item.onclick = ()=> playTrack(index);
            playlistBox.appendChild(item);
        });
    }

    /* ---------------- REPRODUCIR ---------------- */
    function playTrack(index){
        currentTrackIndex = index;
        const track = playlist[index];

        audioPlayer.src = track.audio;
        audioPlayer.play().then(()=>{
            isPlaying = true;
            playIcon.classList.replace("fa-play","fa-pause");
            playBtn.classList.add("playing");
            nowPlaying.textContent = track.title;
            renderPlaylist();
        });
    }

    /* ---------------- BOTÓN PLAY ---------------- */
    playBtn.onclick = ()=>{
        if(!audioPlayer.src){
            playTrack(0);
        } else {
            if(isPlaying){
                audioPlayer.pause();
                playIcon.classList.replace("fa-pause","fa-play");
                playBtn.classList.remove("playing");
                isPlaying=false;
            } else{
                audioPlayer.play();
                playIcon.classList.replace("fa-play","fa-pause");
                playBtn.classList.add("playing");
                isPlaying=true;
            }
        }
    };

    /* ---------------- SIGUIENTE / ANTERIOR ---------------- */
    nextBtn.onclick = ()=>{
        currentTrackIndex = (currentTrackIndex+1)%playlist.length;
        playTrack(currentTrackIndex);
    };
    prevBtn.onclick = ()=>{
        currentTrackIndex = (currentTrackIndex-1+playlist.length)%playlist.length;
        playTrack(currentTrackIndex);
    };

    /* ---------------- PROGRESO ---------------- */
    audioPlayer.ontimeupdate = ()=>{
        if(audioPlayer.duration){
            const pct = (audioPlayer.currentTime/audioPlayer.duration)*100;
            progress.style.width = pct+"%";
            currentTimeEl.textContent = format(audioPlayer.currentTime);
            durationEl.textContent = format(audioPlayer.duration);
        }
    };

    progressBar.onclick = e=>{
        const x = e.offsetX / progressBar.offsetWidth;
        audioPlayer.currentTime = x * audioPlayer.duration;
    };

    function format(s){
        const m = Math.floor(s/60);
        const sec = Math.floor(s%60).toString().padStart(2,"0");
        return `${m}:${sec}`;
    }

    /* ---------------- VOLUMEN ---------------- */
    volumeSlider.oninput = ()=>{
        audioPlayer.volume = volumeSlider.value/100;
    };

    /* ---------------- PLAYLIST DESPLEGABLE ---------------- */
    togglePlaylist.onclick = ()=>{
        playlistBox.style.display =
            playlistBox.style.display==="block" ? "none":"block";
    };

    /* Init */
    renderPlaylist();
});

</script>
