"use strict";

let osoba1 = {
  ime: "Igor",
};

let osoba2 = osoba1;

console.log(osoba1, osoba2);

osoba2.ime = "Ivan";

console.log(osoba1, osoba2);

/* Izrada kopije objekta na način da spremimo novo mjesto u heapu. Ako su podaci višeslojeviti ovaj pristup će samo od primitivnih vrijednosti
napraviti duboku kopiju, ali s obzirom da imamo listu (objekt) unutar postojećeg objekta kojeg kopiramo ta lista će opet biti samo 
referentna stavka za poziciju u heapu.
*/

const igor = {
  ime: "Igor",
  prezime: "Jevremović",
  prijatelji: ["Marko", "Lucija", "Stjepan"],
};

console.log(igor);

const ivan = {
  ...igor,
  ime: "Ivan",
  prezime: "Ivanić",
};

console.log(ivan);
console.log(igor);

igor.prijatelji.shift();
console.log(igor);
console.log(ivan);

/* Duboka kopija kompletnih objekta koristeći structuredClone metodu. */

const stariObjekt = {
  a: 1,
  b: 2,
  c: { b: 2 },
};

const noviObjekt = structuredClone(stariObjekt);
console.log(stariObjekt, noviObjekt);

stariObjekt.c.b = 4;
stariObjekt.a = 4;
stariObjekt.b = 4;

console.log(stariObjekt, noviObjekt);

// Objektne metode

const osoba = {
  ime: "Davor",
  prezime: "Horvat",
  godina: 40,
  prijatelji: ["Marko", "Lucija", "Stjepan"],
  vozackaDozvola: true,
  mirovina() {
    this.godDoMirovine = 65 - this.godina;
    return this.godDoMirovine;
  },
  zadatak() {
    return `${this.ime} je ${this.mirovina()} godina do mirovine i ${
      this.vozackaDozvola ? "može" : "ne može"
    } voziti.`;
  },
  login() {
    console.log(this.ime, "je logiran");
  },
  logout() {
    console.log(this.ime, "se odlogirao");
  },
};

console.log(osoba);

/* console.log(osoba.mirovina(50));
console.log(osoba["mirovina"](55));

console.log(osoba); */
/* console.log(osoba.mirovina()); */

/* osoba.mirovina(); */

console.log(osoba.zadatak());
console.log(osoba.godDoMirovine);
