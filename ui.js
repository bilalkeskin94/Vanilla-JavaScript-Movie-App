class UI {
  constructor() {}
  addFilmToUI(newFilm) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
      <tr>
      <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
      <td>${newFilm.title}</td>
      <td>${newFilm.director}</td>
      <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
      </tr>
      `;
  }
  clearInput(e1, e2, e3) {
    e1.value = "";
    e2.value = "";
    e3.value = "";
  }
  displayMessages(message, type) {
    const cardBody = document.querySelectorAll(".card-body")[0];
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 1000);
  }
  loadAllFilms(films) {
    const filmList = document.getElementById("films");
    films.forEach((film) => {
      filmList.innerHTML += `
      <tr>
      <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
      <td>${film.title}</td>
      <td>${film.director}</td>
      <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
      </tr>
      `;
    });
  }
  deleteFilmFromUI(element) {
    element.parentElement.parentElement.remove();
  }
  clearAllFilmsFromUI() {
    const filmList = document.getElementById("films");
    // films.innerHTML = "";
    while (filmList.firstElementChild !== null) {
      filmList.firstElementChild.remove();
    }
  }
}
