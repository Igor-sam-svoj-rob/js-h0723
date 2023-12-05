"use strict";

// hoistamo globalne varijable
const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// Funkcije

// Funkcija za dodavanje novih zadataka
const dodajZadatak = (e) => {
  e.preventDefault();
  // provjera da li je korisnik ostavio prazno input polje prije submita
  if (zadatakInput.value === "") {
    alert("Molimo Vas unesite podatak");
    return;
  }
  // kreiramo list item i njegov sadržaj
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));

  // kreiramo button i dodajemo klase na njega
  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  // kreiramo ikonicu i dodajemo klase na nju
  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  delGumb.appendChild(ikona);
  li.appendChild(delGumb);

  // kada smo kreirali element dodajemo ga na listu zadataka
  listaZadataka.appendChild(li);
  provjeriListu();
  // reset input polja na prazni string
  zadatakInput.value = "";
};

// Funkcija za brisanje pojedinačnog zadatka
const obrisiZadatak = (e) => {
  /* If provjerom ćemo provjeriti da li smo kliknuli na ikonicu, jer
    samo ikonici parentElement ima klasu ukloni-zadatak (button) i u tom
    slučaju ćeš proći po DOM stablu i 2 * parentElementom chainom
    doći do list itema i ukloniti ga. */
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    e.target.parentElement.parentElement.remove();
  }
  provjeriListu();
};

// Funkcija za brisanje svih zadataka
const obrisiZadatke = () => {
  listaZadataka.innerHTML = "";
  provjeriListu();
};

//Filter zadataka
const filtrirajZadatke = (e) => {
  const zadaci = document.querySelectorAll("li");
  const tekst = e.target.value.toLowerCase();

  zadaci.forEach((zadatak) => {
    const imeZadatka = zadatak.firstChild.textContent.toLowerCase();
    if (imeZadatka.indexOf(tekst) != -1) {
      zadatak.style.display = "flex";
    } else {
      zadatak.style.display = "none";
    }
  });
};

// Funkcija za prikaz "filter" i "Briši sve" polja
const provjeriListu = () => {
  const zadaci = document.querySelectorAll("li");

  if (zadaci.length === 0) {
    filter.style.display = "none";
    brisiSve.style.display = "none";
  } else {
    filter.style.display = "block";
    brisiSve.style.display = "block";
  }
};

//Event listeneri
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
filter.addEventListener("input", filtrirajZadatke);

provjeriListu();
