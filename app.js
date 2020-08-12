const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
}

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
    storage.addFilmToStorage(newFilm);
    ui.displayMessages("Film eklendi", "success");
    ui.clearInput(titleElement, urlElement, directorElement);
  }

  e.preventDefault();
}
