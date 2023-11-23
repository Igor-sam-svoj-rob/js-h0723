"use strict";

const objekt1 = { a: 1, b: 2 };
const objekt2 = { c: 3, d: 4 };

const objekt3 = { ...objekt1, ...objekt2 };

console.log(objekt3);

// Assign metoda za kreiranje novog objekta i ubacivanje vrijednosti drugih objekata u novi objekt
const objekt4 = Object.assign({}, objekt1, objekt2);

console.log(objekt4);

const todos = [
  { id: 1, zadatak: "Kupi kruh" },
  { id: 2, zadatak: "Kupi mlijeko" },
  { id: 3, zadatak: "Prošeći psa" },
];

console.log(todos[1].zadatak);
console.log(todos[1].id);

let x;
// ako želite listu ključeva iz objekta koji se nalazi u listi pozvat će te to putem Object.keys metode
x = Object.keys(todos[0]);
x = Object.keys(todos[0]).length;

// ako želite listu vrijednosti iz objekta koji se nalazi u listi pozvat će te to putem Object.values metode
x = Object.values(todos[0]);

// ako želite provjeriti da li imate određenu vrijednost unutar objekta pozvat će te to putem hasOwnProperty metode
x = todos[0].hasOwnProperty("id");

console.log(x);

// kada imate varijable koje želite ubaciti u objekt i ako su imena tih varijabli jednaka ključevima u objektu, možete to ovako napisati

const ime = "Igor";
const prezime = "Jevremović";
const godine = 40;

const osoba = {
  ime,
  prezime,
  godine,
};

console.log(osoba);

// Dekonstruiranje liste

const brojevi = [1, 2, 3, 4, 5, 6];

const [broj1, , broj3, ...ostatakListe] = brojevi;

console.log(broj1, broj3, ostatakListe, brojevi);

// Dekonstruiranje objekta

const todo = {
  id: 1,
  zadatak: "Kupi mlijeko",
  adresa: {
    ulica: "Trg Davora Horvata",
    grad: "Zagreb",
  },
};

// Jednostavan način zapisivanja vrijednosti objekta u varijablu
/* const zadatak1 = todo.zadatak;
console.log(zadatak1); */

// Zapisivanje više vrijednosti objekta u identične varijable
/* const { id, zadatak, adresa } = todo;
console.log(id, zadatak, adresa); */

// Zapisivanje više vrijednosti objekta u drugačije imenovane varijable
const {
  id: todoId,
  zadatak: todoZadatak,
  adresa: { ulica: todoUlica },
  adresa: { grad: todoGrad },
} = todo;
console.log(todoId, todoZadatak, todoUlica, todoGrad);
