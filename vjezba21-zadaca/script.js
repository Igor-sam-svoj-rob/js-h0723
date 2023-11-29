"use strict";

/* Zadatak 1

Imamo listu album i jedan objekt u toj listi. Napravi novi objekt i dodaj ga na u listu kao drugog
člana liste (ali isto kao objekt) */

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
];

const noviAlbum = {
  umjetnik: "Bob Marley",
  naslov: "Live!",
  godina: 1975,
  format: ["8T", "LP"],
};

album.push(noviAlbum);

/* Zadatak 2

Idemo opet do Marka i Josipa i njihovog ITM-a.
Ovaj put idemo koristiti objekte kako bi implementirali kalkulacije.
Zapamtite ITM = masa/visina ** 2

Za svakog od njih, kreiraj objekt sa vrijednostima : ime, težina, visina.
Kreiraj calcITM metodu na svakom objektu koja će izračunati ITM (ista metoda na oba).

Spremi ITM izračun u vrijednost objekta i vrati ga iz metode (return) ime

logiraj u konzolu tko ima viši ITM, skupa sa imenom i ITM vrijednosti

NPR: Josipov ITM (28.3) je veći od Markovog (23.9)!

Test data: 
Marko : 78 kg i 1.69 cm
Josip : 92 kg i 1.95 cm */

const marko = {
  ime: "Marko",
  tezina: 78,
  visina: 1.69,
  calcITM() {
    this.itm = this.tezina / this.visina ** 2;
    return this.itm;
  },
};

const josip = {
  ime: "Josip",
  tezina: 92,
  visina: 1.95,
  calcITM() {
    this.itm = this.tezina / this.visina ** 2;
    return this.itm;
  },
};

marko.calcITM();
josip.calcITM();

console.log(marko.itm, josip.itm);

if (marko.itm > josip.itm) {
  console.log(
    `${marko.ime}-ov ITM od ${marko.itm} veći je od ${josip.ime}-ovog ITM-a od ${josip.itm}`
  );
} else if (josip.itm > marko.itm) {
  console.log(
    `${josip.ime}-ov ITM od ${josip.itm} veći je od ${marko.ime}-ovog od ${marko.itm}`
  );
} else {
  console.log(`${marko.ime}-ov ITM je jednak ${josip.ime}-ovom ITMu.`);
}
