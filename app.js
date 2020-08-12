const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");
const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", () => {
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
  });
}
secondCardBody.addEventListener("click", deleteFilm);
clear.addEventListener("click", clearAllFilms);

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;
  if (title === "" || director === "" || url === "") {
    ui.displayMessages("Tüm alanları doldurun", "danger");
  } else {
    //Yeni Film
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm); //UI film ekleme
    storage.addFilmToStorage(newFilm); //Storage film eklme
    ui.displayMessages("Film eklendi", "success");
    ui.clearInput(titleElement, urlElement, directorElement);
  }
  e.preventDefault();
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    ui.displayMessages("Silme işlemi başarılı", "success");
  }
}
function clearAllFilms() {
  if (confirm("Emin misiniz?")) {
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
  }
}
