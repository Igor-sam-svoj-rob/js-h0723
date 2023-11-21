"use strict";

/* IIFE = Immediately Invoked Function Expression - funkcija koja će se odmah izvršiti nakon što se definira, nije ju potrebno pozivati.
Sintaksa je malo drugačija. Funkciju postavljamo u okrugle zagrade, a unutar funkcije normalno pišemo kod kao što smo to radili i sa 
ostalim funkcijama. Ali na kraju dodajemo praznu zagradu koja u biti služi za prosljeđivanje parametara. */

(function (pozdrav) {
  const user = "Igor";
  console.log(user);
  const ifi = () => console.log(`Ovo je ${pozdrav} iz IFI funkcije`);
  ifi();
})("pozdrav");
