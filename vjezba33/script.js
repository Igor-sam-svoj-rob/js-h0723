"use strict";

/* JSON (Javascript Object Notation) - standardni format razmjene poadataka temeljen na objektnoj sintaksi JS.
API (Application Programming Interface) - Aplikacijsko programsko sučelje nam omogućuje komunikaciju sa serverom ili drugim računalima. */

const post = {
  id: 1,
  naslov: "prvi post",
  sadrzaj: "Ovo je sadržaj posta",
  autor: "Igor",
};

// sa JSON.stringify metodom možemo prebacivati podatke iz objekta u string
const jsonFile = JSON.stringify(post);
console.log(jsonFile, typeof jsonFile);

// sa JSON.parse metodom možemo prebacivati podatke iz JSON (string) u objekt

const objektFile = JSON.parse(jsonFile);
console.log(objektFile);
console.log(objektFile.id);

// Idemo napisati prvu asinkronu funkciju koristeći setTimeout. setTimeout prvo definira funkciju a onda timer delay za izvođenje te funkcije

// anonimna setTimeout funkcija
setTimeout(() => {
  console.log("Pozz iz TimeOuta");
}, 0);

console.log("pozz izvan setTimeouta");

// callback funkcija

/* setTimeout(promijeniTekst, 5000); */

function promijeniTekst() {
  document.getElementById("naslov").textContent = "Pozz iz callback funkcije";
}

// ---------------------------------------------------------------------------------------

// imenovana callback funkcija
const promjena = setTimeout(promijeniTekst, 5000);

document.getElementById("stop").addEventListener("click", () => {
  clearTimeout(promjena);
  console.log("Zaustavili smo izvođenje setTimeouta...");
});

//-----------------------------------------------------------------------------------------

// setInterval - izvršava se dok god ga ne prekinemo...

const clgCallback = () => {
  console.log("ispis");
};

const interval = setInterval(clgCallback, 1000);

document.getElementById("stop1").addEventListener("click", () => {
  clearInterval(interval);
  console.log("Zaustavili smo izvođenje setIntervala...");
});

// -- PRIMJER --

let intervalBoja;

const promijeniBoju = () => {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

document.getElementById("pokreni").addEventListener("click", () => {
  if (!intervalBoja) {
    intervalBoja = setInterval(promijeniBoju, 1000);
  }
});

document.getElementById("stop1").addEventListener("click", () => {
  clearInterval(intervalBoja);
  intervalBoja = undefined;
});
