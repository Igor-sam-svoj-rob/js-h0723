"use strict";

/* console.log(document.body.innerHTML); */ // innerHTML će dohvatiti unutarnji HTML elementa kojeg smo targetirali

/* console.log(document.body.innerText);  */ // innerText dohvatiti unutarnji tekst tog elementa

/* Ova priča nije samo read-only, mi možemo i mijenjati prikaz DOM-a na ovaj način */

/* document.body.innerHTML = "<h1>Hello World</h1>"; */

// SELEKTORI

// getElementById - dohvaća elemente po ID-u

const header = document.getElementById("header");
/* header.innerHTML = "<h1>Hello World</h1>"; */

/* document.getElementById("header").innerHTML = "<h1>Hello World</h1>"; */

/* Često ćemo raditi izmjene i na CSS-u s time da naredbe za CSS ako imaju 2 riječi onda ju ne možemo pisati kao kod CSS-a nego na JS način
, točnije spojeno sa drugom riječi koja onda počinje velikim slovom... */
const naslov = document.getElementById("naslov");

naslov.style.color = "#ff0000";
naslov.style.backgroundColor = "#eee";
naslov.style.padding = "2rem";
naslov.style.borderRadius = "5px";

/* QuerySelector - s njim možemo odabrati što god hoćemo po atributu. Jedino što je kod njega specifično, ako
selektiramo nešto čega ima na više mjesta na stranici on će selektirati prvog člana na kojeg naleti u HTML-u... */

console.log(document.querySelector("h1"));
console.log(document.querySelector("#naslov"));
console.log(document.querySelector(".form-control"));
console.log(document.querySelector('input[type="text"]'));

// QuerySelectorAll - selektirati sve instance pozvanog elementa i od njih kreira listu.

const lista = document.querySelectorAll("ul li");
console.log(lista);
console.log(lista[2]);
console.log(lista[2].innerHTML);
console.log(lista[2].innerText);

// lista.style.color = "red"; - ovo ne možemo napraviti!

lista.forEach((clan_liste, kljuc) => {
  clan_liste.style.color = "red";

  if (kljuc === 1) {
    clan_liste.remove();
  }

  if (kljuc === 2) {
    clan_liste.innerHTML = `Kupi novine <mark>Ovaj dio je ubačen kao HTML</mark>`;
  }
});

// GetElementByClassName - selektor koji poziva elemente po klasi

const dijete = document.getElementsByClassName("dijete");
console.log(dijete);
console.log(dijete[2].innerText);

// Kako i na koje sve načine možemo manipulirati pomoću svojstva na metodama...

let podaci;

const roditelj = document.querySelector(".roditelj");

podaci = roditelj.children;
podaci = roditelj.children[0].innerHTML;
podaci = roditelj.children[0].innerText;
podaci = roditelj.children[0].className;
podaci = roditelj.children[0].nodeName;

roditelj.children[0].innerText = "Promijenio sam ovaj tekst";
console.log(podaci);
