"use strict";

// FOREACH metoda

/* forEach metoda prolazi listu član po član (svaki član ulazi kao parametaar funkcije) i na njemu radi određene izmjene. Može adaptirati
listu i spremiti izmjenjene članove liste u novu listu koju složimo za input tih adaptiranih članova. */

let brojevi = [10, 20, 30, 40, 50];

brojevi.forEach(function (pojedinacni_clan_liste, redno_mjesto_u_listi, lista) {
  console.log(pojedinacni_clan_liste, redno_mjesto_u_listi);
  console.log(lista);
});

// ista stvar sa arrow funkcijom

brojevi.forEach((vrijednost, index, lista) => {
  console.log(`${index} - ${vrijednost} i cijela lista ${lista}`);
});

// konkretan primjer

const useri = [
  {
    ime: "Ivan",
    prezime: "Ivić",
    godine: 50,
  },
  {
    ime: "Marko",
    prezime: "Markić",
    godine: 44,
  },
  {
    ime: "Josip",
    prezime: "Josipović",
    godine: 30,
  },
];

useri.forEach((user) => {
  console.log(user);
  console.log(user.godine);
});

// FILTER metoda

/* Filter za razliku od forEach metode vraća određenu vrijednost. Ta vrijednost je kopija dijela liste filtrirana na način da uključuje
u tu novu listu samo one elemente koji zadovolje tražene parametre filtera. */

// kako izvući riječi koje imaju više od 6 slova
const rijeci = ["prozor", "autocesta", "apartman", "lopata", "zvrk", "sok"];

const rezultat = rijeci.filter((rijec) => {
  return rijec.length > 6;
});

console.log(rezultat);

//kako izvući parne brojeve
brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parniBrojevi = brojevi.filter((broj) => {
  return broj % 2 === 0; // % je modulo operator koji u ovom slučaju radi provjeru postoji li ostatak kada se podatak podijeli sa zadanim brijem
});

console.log(parniBrojevi);

// Isti primjer sa forEach metodom

const parniBrojevi2 = [];

brojevi.forEach((broj) => {
  if (broj % 2 === 0) {
    parniBrojevi2.push(broj);
  }
});

console.log(parniBrojevi2);

// MAP metoda

const lista = [
  { proizvod: "Bicikl", cijena: 1500 },
  { proizvod: "Frižider", cijena: 2500 },
  { proizvod: "Auto", cijena: 45000 },
  { proizvod: "Motor", cijena: 7500 },
  { proizvod: "Tipkovnica", cijena: 100 },
];

const listaProizvoda = lista.map((objekt) => {
  return objekt.proizvod;
});

console.log(listaProizvoda);

// FIND metoda - nađi određenog člana liste i spremi ga u novu varijablu

const findLista = lista.find((e) => {
  return e.proizvod === "Auto";
});

console.log(findLista);

// SOME metoda - recimo da želimo saznati ima li koji proizvod cijenu manju od 150. Funkcionira kao "ili" provjera

const cijenaManjaOd150 = lista.some((e) => {
  return e.cijena <= 150;
});

console.log(cijenaManjaOd150);

// EVERY metoda - funkcionira isto kao i SOME metoda ali radi i provjeru

const cijenaManjaOd350 = lista.every((e) => {
  return e.cijena <= 350;
});

console.log(cijenaManjaOd350);

// INCLUDES metoda - zgodna je za brojevne liste. Kada nabrzinu želimo saznati sadrži li određena lista određenu vrijednost

console.log(brojevi);

const includesDva = brojevi.includes(2);

console.log(includesDva);
