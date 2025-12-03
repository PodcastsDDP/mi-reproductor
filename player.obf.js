document.addEventListener("DOMContentLoaded", () => {

  // ======= Insertar CSS dinámicamente =======
  const style = document.createElement('style');
  style.textContent = `
  #togglePlaylist {
      padding: 6px 10px;
      background: #1f3a49;   /* color original */
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
  `;
  document.head.appendChild(style);

  // ======= Elementos del reproductor =======
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

  // ======= Lista de audios =======
  const playlist = [
    {
      title: "Hola, Durazno",
      description: "Dos noticias en formato Podcast",
      duration: "2:00",
      audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/HolaDurazno2-3-diciembre.mp3"
    },
    {
      title: "Navidad a Cielo Abierto",
      description: "Otros datos de la conferencia de prensa",
      duration: "16:00",
      audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/Acieloabiertoconferencia.mp3"
    },
    {
      title: "Éxitos en Español",
      description: "Selección de canciones populares",
      duration: "11:00",
      audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/Latinas1.mp3"
    },
    {
      title: "Llamadas de Primavera",
      description: "Entregaron premio a vecina. Podcast con Fernando Salvador Báez",
      duration: "0:58",
      audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/3diciembre2b.mp3"
    }
  ];

  // ======= Renderizar playlist =======
  function renderPlaylist() {
    playlistBox.innerHTML = "";
    playlist.forEach((track, index) => {
      const item = document.createElement("div");
      item.className = "playItem " + (index === currentTrackIndex ? "active" : "");
      item.innerHTML = `
        <h4>${track.title}</h4>
        <p>${track.description}</p>
        <small>${track.duration}</small>
      `;
      item.onclick = () => playTrack(index);
      playlistBox.appendChild(item);
    });
  }

  // ======= Reproducir pista =======
  function playTrack(index) {
    currentTrackIndex = index;
    const track = playlist[index];
    audioPlayer.src = track.audio;
    audioPlayer.play().then(() => {
      isPlaying = true;
      playIcon.classList.replace("fa-play", "fa-pause");
      playBtn.classList.add("playing");
      nowPlaying.textContent = track.title;
      renderPlaylist();
    }).catch(err => console.error("Error al reproducir:", err));
  }

  // ======= Botón play/pause =======
  playBtn.onclick = () => {
    if (!audioPlayer.src) {
      playTrack(0);
    } else if (isPlaying) {
      audioPlayer.pause();
      playIcon.classList.replace("fa-pause", "fa-play");
      playBtn.classList.remove("playing");
      isPlaying = false;
    } else {
      audioPlayer.play();
      playIcon.classList.replace("fa-play", "fa-pause");
      playBtn.classList.add("playing");
      isPlaying = true;
    }
  };

  // ======= Siguiente / Anterior =======
  nextBtn.onclick = () => playTrack((currentTrackIndex + 1) % playlist.length);
  prevBtn.onclick = () => playTrack((currentTrackIndex - 1 + playlist.length) % playlist.length);

  // ======= Barra de progreso =======
  audioPlayer.ontimeupdate = () => {
    if (audioPlayer.duration) {
      const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
      progress.style.width = pct + "%";
      currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
      durationEl.textContent = formatTime(audioPlayer.duration);
    }
  };

  progressBar.onclick = e => {
    const x = e.offsetX / progressBar.offsetWidth;
    audioPlayer.currentTime = x * audioPlayer.duration;
  };

  function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  }

  // ======= Volumen =======
  volumeSlider.oninput = () => { audioPlayer.volume = volumeSlider.value / 100; };

  // ======= Toggle playlist =======
  togglePlaylist.onclick = () => {
    playlistBox.style.display = playlistBox.style.display === "block" ? "none" : "block";
  };

  // ======= Init =======
  renderPlaylist();
});


