"use strict";

/* EVENT BUBBLING - događa se kada imate nestano više HTML elemenata koji se preklapaju, događa se da se pokrenu svi
eventi koje smo definirali putem eventlistera. Stoga možemo sa stopPropagation metodom spriječiti takvo ponašanje. */

const gumb = document.querySelector(".btn");
const div = document.querySelector(".form-control:nth-child(2)");
const forma = document.querySelector("#zadatak-forma");

gumb.addEventListener("click", (e) => {
  alert("gumb je kliknut");
  e.stopPropagation();
});

div.addEventListener("click", () => {
  alert("div je kliknut");
});

forma.addEventListener("click", () => {
  alert("forma je kliknuta");
});

const lista = document.getElementById("zadatak-list");

lista.addEventListener("click", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.remove();
  }
});

lista.addEventListener("mouseover", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "#ff0000";
  }
});

lista.addEventListener("mouseout", (e) => {
  if (e.target.className === "pojedinacni-zadatak") {
    e.target.style.color = "initial";
  }
});
