"use strict";

const igorLista = [
  "Igor",
  "Jevremović",
  2023,
  "Predavač",
  ["Marko", "Ivan", "Stjepan"],
];

console.table(igorLista);
console.log(igorLista[3]);

/* Kod listi nemamo baš opciju zapisati stvari sa pripadajućim ključevima, jer ključevi su redni brojevi člana liste.
Zato možemo koristiti objekte. Njih definiramo vitičastim zagradama (tzv. object literal sintaksa). Za pozivanje određene vrijednosti
iz objekta možemo koristiti naše ključeve. Raspored članova objekta funkcionira po principu abecede jer i nije bitno za razliku od liste
kako ćemo pozivati vrijednosti po lokaciji u objektu kada ih pozivamo po ključu. */

const igor = {
  firstName: "Igor",
  lastName: "Jevremović",
  godina: 2023,
  zanimanje: "Predavač",
  prijatelji: ["Marko", "Ivan", "Stjepan"],
};

console.table(igor);

/* Ako želimo dohvatiti određenu vrijednost kod objekta, to ćemo napraviti putem ključa, ne pomoću rednog broja člana kao kod liste. */

// To možemo napraviti pomoću dot notacije
console.log(igor.godina);

// Ali možemo i pomoću bracket notacije
console.log(igor["godina"]);

// izmjena postojeće vrijednosti u objektu putem ključa
igor.godina = 2024;
console.table(igor);

// dodavanje nove vrijednosti u objektu (kreiranje i ključa i vrijednosti)
igor.lokacija = "Hrvatska";
console.table(igor);

igor.prijatelji.push("Ljutko");
console.table(igor);

/* "Praktični primjeri" bracket notacije */

const nameKey = "Name";

console.log(igor["first" + nameKey]);
console.log(igor["last" + nameKey]);

const upitnik = prompt(
  "Što vas zanima? Izaberi između firstName, lastName, godine, zanimanje ili prijatelji"
);

console.log(igor[upitnik]);

if (igor[upitnik]) {
  console.log(igor[upitnik]);
} else {
  console.log("Krivi upis!");
}
