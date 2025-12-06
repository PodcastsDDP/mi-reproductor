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
      title: "Informativo Digital",
      description: "Dos noticias de interés general",
      duration: "Sarampión - Retirados Policiales",
      audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/6diciembrePodcast2.mp3"
    },
    {
      title: "Una noticia",
      description: "“Vacunación este sábabado",
      duration: "Horarios y centros habilitados - Sarampión",
      audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/6diciembresarampion.mp3"
    },
    {
      title: "La otra información",
      description: "Retirados Policiales en Asamblea",
      duration: "Destacan tres temas",
      audio: "https://duraznodigitalpremium.com/wp-content/uploads/2025/12/6diciembreretiradospoliciales.mp3"
    },
    {
      title: "Pura energía",
      description: "Éxitos para activar",
      duration: "Dalma-Sugo-Américo-Britos-Leiva y más.",
      audio: "https://archive.org/download/latinas-2-192/Latinas2-192.mp3"
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










