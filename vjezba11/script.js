"use strict";

/* Funkcije možemo laički objasniti kao stroj u kojeg ubacimo komponente i dobijemo novi proizvod.
Ovo ispod je deklariranje funkcije. */

function logger() {
  console.log("Hello World!");
}

// ovo ispod je calling / running / invoking / executing / iliti na hrvatskom pokretanje funkcije
logger();
logger();
logger();
logger();
logger();

// -----------------------------------------------------------------------------------------------

/* Prilikom deklariranja funkcije postavili smo kao parametre jabuke i narance. Parametri nam služe kao prijelazne vrijednosti koje
ulaze u funkciju putem vrijednosti koje smo definirali kada smo pokrenuli funkciju. */
function nutriBullet(jabuke, narance) {
  console.log(jabuke, narance);
  const sok = `Sok smo napravili od ${jabuke} komada jabuke i od ${narance} komada naranče.`;
  return sok; // return završava izvođenje funkcije i zapisuje vrijednost koju funkcija vraća.
  console.log("Ovo se neće ispisati"); // ovo se naravno neće ispisati jer dolazi nakon returna.
}

/* Vrijednosti 5, 1 su parametri funkcije koji tek sada dobivaju konrektnu vrijednost. Kada bi imali još jednu funkciju sa istim parametrima,
to ne bi bio problem, jer se funkcija drugačije zove, pa samim time ne može doći do konflikta što se koriste ista imena za parametre. */
nutriBullet(5, 1);

// deklariranje funkcije, tj. zapisivanje rezultata returna u varijablu.

const sokOdJabuke = nutriBullet(5, 0);
const sokOdNarance = nutriBullet(0, 5);
console.log(sokOdJabuke, sokOdNarance);

// ------------------------------------------------------------------------------------------------

/* Arrow funkcije  - je i dalje izraz funkcije kao i ova, međutim možemo ju brže i čišće napisati. Još jedan zgodan detalj, arrow funkcije
se događaju implicitno za razliku od normalne funkcije koja se mora pisati eksplicitno (kod arrow funkcije ne moramo pisati return). */

const godRodjenja = function (godina) {
  return 2023 - godina;
};

const godRodjenja2 = (godina) => 2023 - godina;

const Jura = godRodjenja(2000);
const Pavle = godRodjenja2(2001);

console.log(Jura, Pavle);

const godineDoMirovine = (godina, ime) => {
  const starost = 2023 - godina;
  const mirovina = 65 - starost;
  if (mirovina > 0) {
    console.log(`${ime} će se umiroviti za ${mirovina} godina`);
    return mirovina;
  } else {
    return;
  }
};

console.log(godineDoMirovine(2000, "Igor"));

// ----------------------------------------------------------------------------------------------------

/* Lokalno možemo definirati varijablu koju smo već globalno zadali, jer su varijable unutar funkcije ograničene sa samom funkcijom
i nisu nam dostupne van funkcije (ovo vrijedi za const, let i var). Međutim ako smo varijablu već globalno definirali, ona će nam biti
dostupna unutar funkcije i možemo upotrijebiti njenu vrijednost, ali ako postoji unutar funkcije identična varijabla sa drugom
vrijednosti, ta (lokalna) varijabla će imati prednost i funkcija će koristiti njenu vrijednost. */
const x = 100;

function lokalna() {
  const y = 50;
  const x = 30;
  var z = 40;
  console.log(x, y);
}

lokalna();

function komadiVoca(voce) {
  return voce * 4;
}

function nutriBulletPrimjer(jabuke, kruske) {
  const komadiJabuke = komadiVoca(jabuke);
  const komadiKruske = komadiVoca(kruske);

  const sok = `Sok od ${komadiJabuke} dijelova jabuke i ${komadiKruske} dijelova kruške.`;
  return sok;
}

console.log(nutriBulletPrimjer(2, 3));
