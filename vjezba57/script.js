"use strict";

class Zivotinja {
  constructor(ime) {
    this.ime = ime;
  }

  kljun() {
    console.log("Ima crni kljun");
  }
}

/* Idemo napraviti novu klasu koja će biti detaljnije orijentirana i opisivat će samo ptice */

class Ptica extends Zivotinja {
  constructor(ime) {
    super(ime);
  }

  kljun() {
    console.log("Ima žuti kljun");
  }
}
const ptica1 = new Zivotinja("Svraka");
ptica1.kljun();
const ptica2 = new Ptica("Papiga");
ptica2.kljun();
