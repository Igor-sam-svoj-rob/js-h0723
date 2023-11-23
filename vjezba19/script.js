"use strict";

/* Klase u JS su sintaktička zamjena za prototip objektno-nasljeđivačkog modela koji se upotrijebljava u JS.
Drugim riječima one nisu klase kao u drugim programskim jezicima, ali je krajnji rezultat isti. Njihova ideja je da budu predložak
za izradu objekata. Taj predložak može imati predefinirane vrijednosti ali također pruža mogućnost unosa vrijednosti prilikom 
kreiranja objekta putem parametara. */

// primjer funkcije koja kreira objekte
/* function auto(vrsta, model, godina) {
  this.vrsta = vrsta;
  this.model = model;
  this.godina = godina;
}

const auto1 = new auto("BMW", "M5", 2013);
const auto2 = new auto("Merces", "CLK", 2015);
console.log(auto1, auto2); */

class Auto {
  constructor(vrsta, model, godina) {
    this.vrsta = vrsta;
    this.model = model;
    this.godina = godina;
  }
}
const auto1 = new Auto("BMW", "M5", 2013);
const auto2 = new Auto("Merces", "CLK", 2015);
console.log(auto1, auto2);

class User {
  constructor(ime, prezime, godina) {
    this.ime = ime;
    this.prezime = prezime;
    this.godina = godina;
    this.provjera = false;
  }
  logiran() {
    this.provjera = true;
    console.log(this.ime, "se logirao");
    return this;
  }
  odlogiran() {
    this.provjera = false;
    console.log(this.ime, "se odlogirao");
    return this;
  }
}

const user1 = new User("Igor", "Jevremović", 40);
const user2 = new User("Ivan", "Ivić", 50);
const user3 = new User("Marija", "Marić", 20);

/* console.log(user1, user2, user3); */

/* user1.logiran();
user2.logiran();
user1.odlogiran(); */

/* Method chaining */

user3.logiran().odlogiran().logiran();
