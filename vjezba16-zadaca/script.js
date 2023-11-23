"use strict";

/* Zadatak 1

Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10,
Kina 3441 i USA 332. Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače
i onda ih i ispišite, na način da definirate dvije funkcije, prvu koja će računati postotak
i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - zemlja i populacija.
Nakon toga ispišite sve 3 vrijednosti koristeći rečenicu:
`${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta` */

const postotakSvijeta = function (populacijaNacije) {
  return (populacijaNacije / 10000) * 100;
};

const opisNacije = function (zemlja, populacija) {
  const postotak = postotakSvijeta(populacija);
  console.log(postotak);
  console.log(
    `${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta`
  );
};

opisNacije("Hrvatska", 10);
opisNacije("Kina", 3441);
opisNacije("USA", 332);

/* Zadatak 2

Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi funkciju koja će računati napojnicu.

Napravite Listu koja će koristiti testne podatke dolje.

Napravite listu napojnice koja će sadržavati vrijednosti napojnice za svaki račun, vrijednosti koje ste
dobili koristeći funkciju za izračun napojnica.

Napravi listu sa ukupnim iznosima, znači račun + napojnica (total).

Tip : svaka lista treba vrijednosti na svakom polju i svaka vrijednost može biti return vrijednost funkcije.
Ne možete samo nazvati funkciju sa vrijednostima liste. Stoga ne spremajte vrijednosti napojnice u posebne
varijable prvo nego direktno u novu listu

testni podaci:

račun 125
račun 555
račun 44 */

const napojnica = function (racun) {
  return racun > 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;
};

const racuni = [125, 555, 44];

const napojnice = [
  napojnica(racuni[0]),
  napojnica(racuni[1]),
  napojnica(racuni[2]),
];

const total = [
  racuni[0] + napojnice[0],
  racuni[1] + napojnice[1],
  racuni[2] + napojnice[2],
];

console.log(napojnice, total);
