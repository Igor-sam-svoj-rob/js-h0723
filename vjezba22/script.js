"use strict";

const godine = [1989, 2005, 1999, 2001];
const dob = [];

for (let i = 0; i < godine.length; i++) {
  /* dob[i] = 2023 - godine[i]; */ // jedna metoda
  dob.push(2023 - godine[i]); // push metoda
}

console.log(dob);

// continue i break, krenimo sa break loopom
/* Break će zaustaviti izvođenje iteracije kada se ispuni određeni uvjet */

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("STOP");
    break;
  }
  console.log(i);
}

/* Continue će u trenutku kada se ispuni uvjet odraditi ono što je napisano i nastavit će sa prvim idućim članom liste */
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("Umjesto 10, ispiši deset");
    continue;
  }
  console.log(i);
}

// Konkretni primjer

const user = [
  "Ivan",
  "Ivić",
  2023 - 2000,
  "Soboslikar",
  ["Marko", "Josip", "Marija"],
];

/* Break će ispisati sve redom dok ne dođe do broja, onda će kompletno zaustaviti izvođenje for petlje i neće ništa ispisati nakon što naleti
na broj */
for (let i = 0; i < user.length; i++) {
  if (typeof user[i] === "number") break;
  console.log(user[i], typeof user[i]);
}

for (let i = 0; i < user.length; i++) {
  if (typeof user[i] !== "string") continue;
  console.log(user[i], typeof user[i]);
}

// ajmo proći for petljom od zadnjeg prema prvom članu liste i ispisati ih u konzoli

for (let i = user.length - 1; i >= 0; i--) {
  console.log(user[i]);
}

// WHILE PETLJA

for (let i = 1; i <= 10; i++) {
  console.log(`ispis ${i}`);
}

let x = 1;
while (x <= 10) {
  console.log(`ispis ${x}`);
  x++;
}

let kocka = Math.floor(Math.random() * 6 + 1);

while (kocka !== 6) {
  console.log(`Dobio si ${kocka}`);
  kocka = Math.floor(Math.random() * 6 + 1);
  if (kocka === 6) {
    console.log(`Dobio si ${kocka}`);
  }
}
