"use strict";

function covjek(ime) {
  const x = ime;
  function pozdrav() {
    console.log(`Pozz ja sam ${x}`);
  }

  function kakoSi() {
    console.log(`Kako se osjeća ${x}?`);
  }

  return { pozdrav, kakoSi };
}

const osoba1 = covjek("Ivan");
const osoba2 = covjek("Ivana");

osoba1.pozdrav();
osoba2.kakoSi();

//-------------------------------------------------------------------

let x = 1;

function roditelj() {
  let y = 2;
  console.log(x);
  console.log(y);

  function dijete() {
    console.log((x += 2));
    console.log((y += 4));
  }
  return dijete;
}

const z = roditelj();
z();
z();
z();
z();
z();
z();
z();
z();
console.log(x);
