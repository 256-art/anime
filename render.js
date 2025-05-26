// render.js

const filmContainer = document.getElementById("film-container");
let allFilms = [];
let currentIndex = 0;
const chunkSize = 10;

function truncateTitle(title, maxLength = 24) {
  return title.length > maxLength ? title.slice(0, maxLength - 3) + "..." : title;
}

function renderFilms(data, clear = false) {
  if (clear) {
    filmContainer.innerHTML = "";
    currentIndex = 0;
  }

  data.forEach(film => {
    const card = document.createElement("div");
    card.className = "deskripsi-film";
    card.innerHTML = `
      <div class="deskripsi">
        <div class="judul" data-full="${film.judul}" title="${film.judul}">
          ${truncateTitle(film.judul)}
        </div>
        <div class="sampul">
          <img src="${film.img}" alt="${film.judul}" />
        </div>
        <div class="links">
          <div class="link-container">
            <a href="${film.link}" target="_blank"><button>Download</button></a>
          </div>
        </div>
      </div>
    `;
    filmContainer.appendChild(card);
  });
}

function loadMoreFilms() {
  if (currentIndex >= allFilms.length) return;

  const nextChunk = allFilms.slice(currentIndex, currentIndex + chunkSize);
  renderFilms(nextChunk);
  currentIndex += chunkSize;
}


fetch("data.json")
  .then(res => res.json())
  .then(data => {
    allFilms = data;
    document.getElementById("count").textContent = `±${data.length} anime tersedia`;
    loadMoreFilms();
  })
  .catch(err => {
    console.error("Gagal memuat", err);
    document.getElementById("count").textContent = "Gagal memuat data";
  });