/* Zadatak 1

provjeri ITM (Indeks tjelesne mase) Marka i Josipa i utvrdi čiji je veći.
Neka piše Markov koeficijent mase je veći od Josipovog koeficijenta mase ili Josipov koeficijent mase je veći od Markovog koeficijenta mase.
Koristite test podatke iz prvog zadatka, if else pristup i template string za console.log.
*/

const masaMarko = 78;
const visinaMarko = 1.69;
const masaJosip = 92;
const visinaJosip = 1.95;

const itmMarko = masaMarko / visinaMarko ** 2;
const itmJosip = masaJosip / visinaJosip ** 2;

console.log(itmMarko, itmJosip);

if (itmMarko > itmJosip) {
  console.log(
    `Markov ITM od ${itmMarko} je veći od Josipovog ITM-a od ${itmJosip}`
  );
} else if (itmJosip < itmMarko) {
  console.log(
    `Josipov ITM od ${itmJosip} je veći od Markovog ITM-a od ${itmMarko}`
  );
} else {
  console.log(
    `Markov ITM od ${itmMarko} jednak je Josipovom ITM-u od ${itmJosip}`
  );
}

/* Zadatak 2

Logical operators zadatak - zamislimo da želimo živjeti u zemlji u kojoj se priča engleski, koja ima manje od 50 m stanovnika i koja nije otok.

Utvrdi da li Hrvatska ispunjava te uvjete i ako da ispiši : "Zemlja u kojoj želite živjeti je Hrvatska". Ako ne, onda ispiši : 
"Hrvatska nije za vas.".

Koristite logičke operatore i if else petlju za rješenje zadatka. */

const engleski = true;
const manjeOd50M = true;
const nijeOtok = true;
const hrvatska = false;

const zelje = hrvatska && engleski && nijeOtok && manjeOd50M;

if (zelje) {
  console.log("Zemlja u kojoj želite živjeti je Hrvatska");
} else {
  console.log("Hrvatska nije ta zemlja.");
}

/*
"fun" dio :D

Predvidi rezultat ovih operacija bez unošenja u VSC ili konzolu (pa provjeri):

"9" - "5"
"19" - "13" + "17"
"19" - "13" + 17
"123" < 57
5 + 6 + "4" + 9 - 4 - 2 */

let x;

x = 5 + 6 + "4" + 9 - 4 - 2;
console.log(x, typeof x);
