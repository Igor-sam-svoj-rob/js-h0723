"use strict";

/* Svaki objekt u JS ima ugrađeno svojstvo koje se naziva njegovim prototipom. Prototip je sam po sebi objekt, tako da će i on imati svoje
prototipove i tako će činiti nekakav lanac prototipova. Lanac završava kada dođemo do razine prototipa koji ima null vrijednost za vlastiti
prototip nastavak... */

const user1 = {
  ime: "Marko",
};

console.log(user1);
console.log(user1.__proto__);

console.log(user1.__proto__ === Object.prototype);

/* Idemo malo još pogledati constructor funkcije */

/* function korisnik(ime) {
  this.ime = ime;
  this.login = function () {
    console.log(`${this.ime} se logirao`);
  };
}

const user2 = new korisnik("Stjepan");
const user3 = new korisnik("Matija");

user2.login();
user3.login(); */

/* Nije poželjno da prilikom kreiranja novog objekta pomoću ove constructor funkcije kreiramo na svakom objektu istu metodu. Idemo
ovu metodu izvući van i od nje napraviti prototip metodu na objektu. Ne preporuča za vrijednost prototipa dodavati primitivne vrijednosti */

function korisnik(ime) {
  this.ime = ime;
}

korisnik.prototype.login = function () {
  console.log(`${this.ime} se logirao`);
};

const user2 = new korisnik("Stjepan");
const user3 = new korisnik("Matija");

user2.login();
user3.login();
