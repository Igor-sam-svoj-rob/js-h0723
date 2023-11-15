if (true) {
  console.log("Ova tvrdnja je istinita i ispisat će se.");
}

if (false) {
  console.log("Ova tvrdnja je neistinita i neće se ispisati");
}

/* if će se ispisati ako je upit true, a else ako je false. */

const godina = 19;
const punoljetan = godina >= 18;

if (punoljetan) {
  console.log("Punoljetan si, možeš voziti.");
}

// skraćeni oblik pisanja istog upita.

if (godina >= 18) {
  console.log("Punoljetan si, možeš voziti.");
}

const godinaManja = 15;

if (godinaManja >= 18) {
  console.log("Punoljetan si, možeš voziti.");
} else {
  const godineDoVozacke = 18 - godinaManja;
  console.log(
    `Nisi punoljetan, ne možeš voziti. Moći češ voziti za ${godineDoVozacke} godina/e`
  );
}

//------------------------------------------------------------------------------------------

/* let i const su block scoped varijable što znači da su ograničene na upotrebu unutar bloka (objektne varijable).
Ako ju definiramo unutar IF-ELSE blokova one neće biti dostupne van tih blokova. Ali kada bi koristili var unutar
bloka umjesto const i let za definiranje varijable, onda bi te varijable bile dostupne van bloka, jer var nije
ograničen blokovima. */

const godRodjenja = 1983;

/* if (godRodjenja >= 2000) {
  let stoljece = 20;
  console.log(stoljece);
} else {
  let stoljece = 21;
  console.log(stoljece);
} */

// Ispravan način pisanja ovog gornjeg primjera

let stoljece;

if (godRodjenja >= 2000) {
  stoljece = 20;
} else {
  stoljece = 21;
}

console.log(stoljece);

/* Vježba if-else */

const hrvatska = 3.8e6;

/* 
definirajte varijablu "prosjek" i pomoću if-else petlje provjerite imamo li više od 5 m stanovnika, ako imamo 
definirajte "prosjek" sa rečenicom "Hrvatska ima (izračun kolko iznad prosjeka) stanovnika iznad prosjeka", a ako nemamo
definirajte "prosjek" sa rečenicom "Hrvatska ima (izračun kolko ispod prosjeka) stanovnika ispod prosjeka". I na kraju
"prosjek" ispišite u konzoli.
*/

let prosjek;

if (hrvatska >= 5e6) {
  prosjek = `Hrvatska ima ${hrvatska - 5e6} stanovnika iznad prosjeka`;
} else {
  prosjek = `Hrvatska ima ${5e6 - hrvatska} stanovnika ispod prosjeka`;
}

console.log(prosjek);
