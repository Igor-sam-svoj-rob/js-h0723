"use script";

console.log("ispiši tekst iz carta");

export let kosarica = [];

export const dodajProizvode = function (proizvod, kolicina) {
  kosarica.push(proizvod, kolicina);
  console.log(`${kolicina} ${proizvod} je dodan u košaricu`);
};
