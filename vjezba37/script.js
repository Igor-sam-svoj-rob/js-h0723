"use strict";

/* Promise (Obećanje) je objekt koji će rezultirati jednom vrijednosti koja može biti ili rješena ili nerješena(odbačena). Sastoji se od 
egzekutor funkcije koja mora napraviti provjeru resolve(uspješno) i reject(neuspješno). Nakon toga imamo metode : then metodu koja dobiva
podatke kada se dogodi resolve i catch koji će onda odlučiti što će se dogoditi ako dobijemo reject... */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async zadatak je dovršen");
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log("promise je dovršen...");
});

console.log("Pozz iz globalnog scopea");

// -------------------------------------------------------------------------------------------

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let greska = false;

    if (!greska) {
      resolve({ ime: "Ivan", dob: 35 });
    } else {
      reject("Nešto je pošlo po krivu...");
    }
  }, 300);
});

getUser
  .then((osoba) => console.log(`${osoba.ime} ima ${osoba.dob} godina`))
  .catch((error) => console.log(error))
  .finally(() =>
    console.log("Obećanje ludom radovanje, ja se ispisao svejedno...")
  );
