"use strict";

const prijatelj1 = "Ivan";
const prijatelj2 = "Marko";
const prijatelj3 = "Josip";

const listaPrijatelja = ["Ivan", "Marko", "Josip"];

const listaBrojeva = new Array(4, 5, 6);

console.log(listaPrijatelja);
console.log(listaBrojeva);

// kada želimo određenog člana liste, onda ga upišemo u [] zagrade
console.log(listaPrijatelja[0]);
console.log(listaPrijatelja[1]);
console.log(listaPrijatelja[2]);

// kada želimo znati koliko članova liste imamo, onda upišemo .length iza liste
console.log(listaPrijatelja.length);

// kada želimo npr. saznati vrijednost zadnjeg člana liste, možemo iskoristiti onda taj length i složiti izračun na slijedeći način:
console.log(listaPrijatelja[listaPrijatelja.length - 1]);

listaPrijatelja[2] = "Jura";

console.log(listaPrijatelja);

/* Vrijednost const se ne može mijenjati na tzv. primitivnim varijablama, ali lista nije primitivna varijabla pa možemo mijenjati
vrijednosti članova liste. Ne možemo redefinirati listu (definirati novu listu sa istom deklaracijom varijable) */

listaPrijatelja.unshift("Stjepan"); // metoda za dodavanje novog člana liste na početak liste
listaPrijatelja.push("Filip"); // metoda za dodavanje novog člana liste na kraj liste
listaPrijatelja.shift(); // metoda za micanje prvog člana liste iz liste
listaPrijatelja.pop(); // metoda za micanje zadnjeg člana liste iz liste
listaPrijatelja.reverse(); // metoda za izmjenu slijeda liste

console.log(listaPrijatelja);

// Metode za brojevne liste

const brojevi = [1996, 2003, 1967, 2012, 2018];

let y;

y = brojevi.includes(1996); // metoda za provjeru da li u listi postoji određena vrijednost (true/false)
y = brojevi.indexOf(1996); // metoda za provjeru na kojem mjestu u listi se nalazi određena vrijednost (number)
y = brojevi.slice(2); // metoda kojom ćemo prilikom spremanja liste u novu listu iz postojeće maknuti određene članove liste
y = brojevi.slice(1, 3); // način kako ostaviti samo članove od/do
y = brojevi.splice(2, 4); // metoda kojom postojeću listu dijelimo na 2 liste (mijenjamo i postojeću listu)

console.log(y, typeof y);
console.log(brojevi);

if (listaPrijatelja.includes("Jura")) {
  console.log("Imate prijatelja po imenu Jura");
}

// Načini spajanja listi

let x;

const voce = ["jabuke", "kruške", "šljive"];
const bobice = ["borovnica", "kupina", "malina"];

// Ovako možemo dodati listu unutar druge liste
/* voce.push(bobice);

console.log(voce);

// način kako dohvatiti člana podliste
console.log(voce[3][0]); */

x = voce.concat(bobice);
console.log(x);

const brojevi1 = [1, 2, 3];

/* Spread operator služi za ekspandiranje listi/objekata/stringova u jednu varijablu,
u biti ćemo ga koristiti za spajanje objekata ali i listi u novi objekt. */
const noviBrojevi1 = [...brojevi1, 4, 5, 6];
console.log(noviBrojevi1);

const noviBrojevi2 = [7, 8, 9];

x = [...noviBrojevi1, ...noviBrojevi2, 10, 11, 12];
console.log(x);

const arr = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
const flet = arr.flat(); // metoda za uklanjanje podlisti, tj. slaganje svih podlisti u listu istog top ranga
console.log(flet);

// Statične metode za liste

// provjera da li je nešto lista

let xx = Array.isArray(voce);
console.log(xx);

// slaganje liste od pojedinačnih članova od stringa

xx = Array.from("1234");
console.log(xx);

// slaganje liste od varijabli

const a = 1;
const b = 2;
const c = 3;

xx = Array.of(a, b, c);
console.log(xx);
