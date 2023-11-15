/* Zadatak 1

Kreiraj 3 varijable koristeći const, let i var i inicijaliziraj ih sa string vrijednostima.
Nakon toga ih ispiši u konzoli.
Opcionalno : kreiraj Boolean vrijednost i napravi varijablu čija vrijednost je undefined. */

const jedan = "Jedan";
let dva = "Dva";
var tri = "Tri";

console.log(jedan, dva, tri);

const cetri = true;
let pet;

console.log(cetri, pet);

/* Zadatak 2

Kreiraj varijablu populacija i inicijaliziraj ju sa brojem građana Hrvatske.
Nakon toga kreiraj novu varijablu u koju ćeš spremiti rezultat matematičke operacije dijeljenja broja građana sa 2.
Nakon toga ćeš uvećat broj stanovnika za 1.
Nakon toga kreirati varijablu sa brojem stanovnika Slovenije i napraviti provjeru tko ima više stanovnika. */

const populacija = 3.8e6;
let polovicaStanovnistva = populacija / 2;
console.log(polovicaStanovnistva);
polovicaStanovnistva++;
console.log(polovicaStanovnistva);
const slovenija = 2.2e6;
console.log(populacija > slovenija);

/* Zadatak 3

Izračunaj ITM (Indeks tjelesne mase) Marka i Josipa, ispiši ih i provjeri boolean vrijednost true/false da li je Markov ItM veći od Josipovog.

  računa se tako da se masa dijeli sa visinom na kvadrat (formula je itm = masa/visina ** 2)

  test podaci 1 Marko je težak 78 kg i visok 1.69, Josip 92 kg i 1.95
  test podaci 2 Marko je težak 95 kg i visok 1.88,  Josip 85 kg i 1.76 */

const masaMarko = 78;
const visinaMarko = 1.69;

const masaJosip = 92;
const visinaJosip = 1.95;

const itmMarko = masaMarko / visinaMarko ** 2;
const itmJosip = masaJosip / visinaJosip ** 2;

console.log(itmMarko > itmJosip);

/* Zadatak 4

Kreiraj 3 varijable koje će sadržavati ime države, kontinenta i njene populacije i onda ispiši u konzoli koristeći template literale rečenicu
koja uključuje te 3 varijable. */

const zemlja = "Hrvatska";
const kontinent = "Europa";
const stanovnistvo = 3.8e6;

console.log(
  `${zemlja} se nalazi na kontinentu ${kontinent} i ima ${stanovnistvo} stanovnika.`
);

/* Zadatak 5

Napravi 2 varijable (1 sa random brojem 1-100, druga 1-50).
Napravi varijable koje će sadržavati sumu i razliku te 2 varijable.
Zapiši putem template literala u varijable suma i razlika. */

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 50 + 1);

const suma = a + b;
const razlika = a - b;

console.log(`Suma je ${suma}, a razlika je ${razlika}`);
