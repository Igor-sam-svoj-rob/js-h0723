/* Postoje 3 vrste varijabli: var, const i let. Ovako se deklariraju i dodjeljuje im se vrijednost. */

var a = 5;
const b = 6;
let c = 7;

/* Var deklaracija dozvoljava redefiniranje same deklaracije i vrijednosti */

var x = 10;
var x = 11;

/* Const deklaracije ne dozvoljava redefiniranje same deklaracije niti vrijednosti */

const y = 12;
//const y = 13;

//y = 14;

/* Let deklaracija ne dozvoljava redefiniranje same deklaracije ali dozvoljava izmjenu vrijednosti */

let z = 14;
//let z = 15;
console.log(z);
z = 16;
console.log(z);

/* Vrste podataka koje možemo dodijeliti varijablama */

const broj = 7; // brojevni podatak
const string = "Hello World"; // string podatak (niz slova)
const bolean = true; // Boolean vrijednost može biti samo true ili false
let nedefinirano; // undefined varijavbla koje nema definiranu vrijednost
// Postoji još i null koji je prazna vrijednost, ali je definirana
console.log(broj, string, bolean, nedefinirano);

/* Ime varijable ne može početi sa brojem, ali ime varijable može sadržavati broj, slova, donju crtu i znak dolara.
Ne smije biti razmaka u imenu i ne smijete koristiti rezervirane JavaScript riječi. */

let javascriptJeZabavan = true;

console.log(typeof javascriptJeZabavan);
console.log(typeof 6);
console.log(typeof "ovo je string");
console.log(typeof true);
console.log(typeof nedefinirano);
console.log(typeof null);

javascriptJeZabavan = "let varijabla je postala string";

console.log(typeof javascriptJeZabavan, javascriptJeZabavan);

/* Matematički operatori */

const Andrija = 2023 - 2001;
console.log(Andrija);

const trenutnaGodina = 2023;
const godinaRodjenja = 1999;

const Ivan = trenutnaGodina - godinaRodjenja;
console.log(Ivan);

console.log(Andrija * 2, Ivan / 10, Andrija ** 2);

const ime = "Mario";
const prezime = "Marić";

/* String literal - više o tome niže u dokumentu */
console.log(ime + " " + prezime);

/* Zgodni shortcuti u matematičkim operacijama */

let g = 10 + 5;
g = g + 10;
g += 10; // isto kao da sam napisao g = g + 10
g -= 10; // isto kao da sam napisao g = g - 10
g *= 2;
g++; // uvećavanje za 1
g--; // umanjivanje za 1
console.log(g);

/* Usporedni operatori */

console.log(Ivan > Andrija); //Postoje >, <, >=, <=, ==, ===
console.log(Ivan >= 18);

/* Možemo istovremeno definirati 2 varijable */
let prva, druga;

/* Možemo im istovremeno dodijeliti istu vrijednost */
prva = druga = 25 - 10 - 5;

console.log(prva, druga);

const prosjek = (Ivan + Andrija) / 2;
console.log(prosjek);

/* String literal */

const predavac = "Igor";
const ustanova = "Algebra";
const godina = 2023;

let stringLiteral =
  "Ja sam " +
  predavac +
  " i radim za ustanovu koja se zove " +
  ustanova +
  " u godini " +
  godina;

console.log(stringLiteral);

/* Template literal  - backtickovi - desni Alt + broj 7 (ALT GR + 7)*/

let templateLiteral = `Ja sam ${predavac} i radim za ustanovu koja se zove ${ustanova} u godini ${godina}`;
console.log(templateLiteral);

console.log(templateLiteral.length); // length je property kojim možete provjeriti broj mjesta koji su zauzeti

/* Matematičke metode sa brojevima i varijablama */

let i;

// korijen
i = Math.sqrt(16);

// absolutna vrijednost
i = Math.abs(-5);

// zaokruživanje
i = Math.round(5.5);

// prisilno zaokruživanje na gore
i = Math.ceil(5.1);

// prisilno zaokruživanje na dolje
i = Math.floor(5.9);

// uklanjanje decimalne vrijednosti
i = Math.trunc(4.4);

// min broj iz niza brojeva
i = Math.min(6, 5, 8, 2);

// max broj iz niza brojeva
i = Math.max(6, 5, 8, 2);

i = Math.random();

i = Math.random() * 10 + 1;

// random broj između 1 i 10

i = Math.trunc(Math.random() * 10 + 1);
i = Math.floor(Math.random() * 10 + 1);

console.log(i);
