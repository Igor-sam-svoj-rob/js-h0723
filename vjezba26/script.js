"use strict";

// kreiranje novog HTML elementa
const noviZadatak = document.createElement("div");

// dodavanje klase na taj element
noviZadatak.className = "novi-element";

// dodavanje ID-a na taj element
noviZadatak.id = "id-novog-elementa";

// dodavanje atributa na taj element
noviZadatak.setAttribute("naslov", "ovo je naslov novog zadatka");

// dodavanje HTML sadržaja unutar tog elementa
noviZadatak.innerHTML = "Ja sam novi sadržaj, <mark>novi zadatak</mark>";

/* document.querySelector("#zadatak-list").appendChild(noviZadatak); */

//----------------------------------------------------------------------

/* Idemo ubaciti novi zadatak da izgleda identično kao postojeći. */

// brži način

const kreirajZadatak = (zadatak) => {
  let li = document.createElement("li");
  li.className = "pojedinacni-zadatak";

  li.innerHTML = `${zadatak}
    <button class="ukloni-zadatak btn-link">
     <i class="fa-solid fa-xmark"></i>
    </button>`;

  document.querySelector(".zadatak").appendChild(li);
};

kreirajZadatak("Kupi novine");

// duži ali detaljniji način gdje ćemo kreirati sve elemente i onda ih pravilno posložiti

const kreirajZadatak2 = (zadatak) => {
  const li = document.createElement("li");
  li.className = "pojedinacni-zadatak";
  li.innerText = zadatak;

  const button = document.createElement("button");
  button.className = "ukloni-zadatak btn-link";

  const i = document.createElement("i");
  i.className = "fa-solid fa-xmark";

  button.appendChild(i);
  li.appendChild(button);

  document.querySelector(".zadatak").appendChild(li);
};

kreirajZadatak2("Kupi sličice");
