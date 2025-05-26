// cari.js

document.getElementById("search-box").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  if (!window.allFilms) return;

  const filtered = allFilms
    .filter(film => film.judul.toLowerCase().includes(query))
    .slice(0, 20);

  renderFilms(filtered, true);
});