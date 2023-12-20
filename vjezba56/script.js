"use strict";

/* Getters and Setters

Getters nam služe da dohvatimo svojstvo iz klase
Setters nam služe da promijenimo svojstvo iz klase (mijenjajući svojstvo iz klase van klase)
*/

// Getters - definiramo ih tako da postavimo get ključnu riječ ispred metode (get metode)
// Setters - definiramo ih tako da postavimo set ključnu riječ ispred metode (set metode)
// Statične metode - možete ih gledati kao pomoćne funkcije, za provjeru određenih vrijednosti - definiramo ih sa static ključnom riječi...

class User {
  constructor(id, ime, prezime) {
    this.id = id;
    this.ime = ime;
    this.prezime = prezime;
  }

  get punoIme() {
    return `${this.ime} ${this.prezime}`;
  }

  set punoIme(input) {
    const razdvojiListu = input.split(" ");
    console.log(razdvojiListu);
    this.ime = razdvojiListu[0];
    this.prezime = razdvojiListu[1];
  }

  static provjera(x, y) {
    return x.ime === y.ime && x.prezime === y.prezime;
  }
}

const user1 = new User(1, "Davor", "Horvat");
console.log(user1);
console.log(user1.punoIme);
user1.punoIme = "Ivan Ivić";
console.log(user1);
const user2 = new User(2, "Davor", "Horvat");
console.log(user1, user2);

console.log(User.provjera(user1, user2));
