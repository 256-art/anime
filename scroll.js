// scroll.js

window.addEventListener("scroll", () => {
  const search = document.getElementById("search-box").value.trim();
  if (search.length > 0) return; // jangan auto-load saat pencarian aktif

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadMoreFilms();
  }
});