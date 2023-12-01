"use strict";

// idemo zamijeniti postojeće elemente koristeći replace metodu

function zamijeniZadatak(tekst) {
  // spremili smo prvi element liste u varijablu zadatak
  const zadatak = document.querySelector("li:first-child");

  // kreirali novi list item i dodali mu sadržaj
  const li = document.createElement("li");
  li.innerText = tekst;

  // na kraju smo sa replaceWith metodom zamijenili prvi element liste sa kreiranim list itemom unutar funkcije
  zadatak.replaceWith(li);
}

zamijeniZadatak("Zamijenili smo prvi zadatak");

// pristup sa outerHTML metodom - mijenja cijeli HTML element sa novim HTML elementom

function zamijeniZadatak2(tekst) {
  const zadatak = document.querySelector("li:last-child");
  zadatak.outerHTML = `<li>${tekst}</li>`;
}

zamijeniZadatak2("Zamijenili smo i ovaj zadatak");

// Probajte koristeći forEach petlju zamijeni sve elemente u listi

function zamijeniSve() {
  const lista = document.querySelectorAll("li");
  lista.forEach((zadatak) => {
    zadatak.outerHTML = "<li>Zamijenili smo sve zadatke</li>";
  });
}

zamijeniSve();

// pristup sa innerHTML metodom - ne mijenja HTML element nego samo mijenja njegov string
function zamijeniDrugi() {
  const lista = document.querySelectorAll("li");
  lista.forEach((zadatak, index) => {
    if (index === 1) {
      zadatak.innerHTML = "Zamijenili smo drugog člana liste";
    } else if (index === 2) {
      zadatak.innerHTML = "Zamijenili smo i ovog člana liste";
    }
  });
}

zamijeniDrugi();

// brisanje elemenata remove metodom

function ukloniButton() {
  document.querySelector("#clear").remove();
}

ukloniButton();

// pobrisati prvog člana liste sa removeChild metodom

function ukloniZadatak() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-child");

  ul.removeChild(li);
}

ukloniZadatak();
