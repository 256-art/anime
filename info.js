// info.js

const popup = document.getElementById("popup");
    const countContainer = document.getElementById("count");

    let validCount = 0;
    allFilms.forEach(film => {
      if (film.judul && film.link) {
        validCount++;
      }
    });

    function togglePopup() {
      popup.style.display = "block";

      setTimeout(() => {
        popup.style.display = "none";
      }, 3000);
    }