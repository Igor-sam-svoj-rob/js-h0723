"use strict";

console.log("gol 1 ⚽");
console.log("gol 2 ⚽");
console.log("gol 3 ⚽");
console.log("gol 4 ⚽");
console.log("gol 5 ⚽");
console.log("gol 6 ⚽");
console.log("gol 7 ⚽");
console.log("gol 8 ⚽");
console.log("gol 9 ⚽");
console.log("gol 10 ⚽");

/* Prvi način je rekurzija iliti ponavljanje izvođenja dok se određeni ovjet ne ispuni. Prvo definiramo uvjet kada se rekurzija završava,
a onda definiramo operaciju koja će samu sebe pozivati iznova dok se uvjet ne ispuni i onda će završiti izvođenje. */

function golovi(gol) {
  //1. uvjet
  if (gol > 10) return;
  //2. rekurzivna operacija
  else console.log(`gol ${gol} ⚽`);
  //pozivanje ponovno funkcije u iduću iteraciju
  return golovi(gol + 1);
}

golovi(1);

// FOR PETLJA

for (let ponavljanje = 1; ponavljanje <= 10; ponavljanje++) {
  console.log(`gol ${ponavljanje} ⚽`);
}

// stara varijacija for petlje

const predmeti = ["stol", "stolica", "stoljnjak", "vaza"];

for (let i = 0; i < predmeti.length; i++) {
  console.log(predmeti[i]);
}

/* Novi način korištenja. Of metoda koja je malo elegantnija. Na ovaj način definiramo da je predmet jedan član liste predmeti i
da nam prolazi listu predmeta redom od prvog do zadnjeg. Ovaj pristup se koristi kada trebate for petlju kod listi. */

for (const predmet of predmeti) {
  console.log(predmet);
}

const korisnici = [{ ime: "Ivan" }, { ime: "Josip" }, { ime: "Marko" }];
for (const korisnik of korisnici) {
  console.log(korisnik.ime);
}

const algebra = "Algebra";

for (const slovo of algebra) {
  console.log(slovo);
}

// ista of metoda kod objekata

const brojevi = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

for (const vrijednostBroja of Object.values(brojevi)) {
  console.log(vrijednostBroja);
}

/* Za prolazak kroz objekt imamo drugu metodu. Ne of nego in loop metodu. Ona funkcionira na način da prvo izbacuje po glavnoj
varijabli ključ (ako je objekt onda ključ, ako je lista onda redni broj listnog člana). */

for (const broj in brojevi) {
  console.log(broj);
}

const boje = ["crvena", "plava", "žuta"];
for (const boja in boje) {
  console.log(boje[boja]);
}

/* ------------------------------------------------------------------------------------------ */

/* Recimo da iz postojeće liste želimo izvući podatke o tome kakve vrste podataka imamo u toj listi.
Napravit ćemo praznu listu i složiti petlju koja će proći postojeću listu i spremati tipove podataka u novu listu. */
const user1 = [
  "Ivan",
  "Ivić",
  2023 - 1997,
  "Soboslikar",
  ["Marko", "Josip", "Marija"],
];

const types = [];

for (let i = 0; i < user1.length; i++) {
  types[i] = typeof user1[i];
}

console.log(types);

// Ugniježđena for petlja

for (let i = 1; i <= 3; i++) {
  console.log(`broj ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
