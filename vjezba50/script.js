"use strict";

/* Napravit ćemo funkciju unutar funkcije i za return vanjske funkcije ćemo definirati unutarnju funkciju ali ju nećemo pokrenuti.
Također kod unutarnje funkcije ćemo zaprimati parametar i za return ćemo imati mnozenje. Vanjsku funkciju ćemo odvrititi i njen return će
se zapisati u varijablu mnozenje. Na ovaj način ćemo zapisati instrukcije iz unutarnje funkcije u varijabli mnozenje. Sada možemo prilikom
pokretanja funkcije mnozenje ubaciti parametar i izvrtiti unutarnju funkciju... */

function vanjskaFunkcija() {
  function unutarnjaFunkcija(broj) {
    return broj * 2;
  }
  return unutarnjaFunkcija;
}

const mnozenje = vanjskaFunkcija();
console.log(mnozenje);
const rezultat = mnozenje(2);
console.log(rezultat);

//-----------------------------------------------------------------------------------
/* Ovisno o tome gdje smo definirali našu funkciju odlučujemo koje varijable su dostupne kada pozovete funkciju.
Koristeći closure ova varijabla brojac i njena vrijednost će biti zapisane u definiciji varijable i vrijednost ove varijable broja će
ostati memorirana u toj definiciji te funkcije. Možete to gledati kao da naša funkcija ima malu cache memoriju unutar koje je zapisan
taj podatak... Prednost svega je da imate neku memoriranu vrijednost u funkciji koja se ne može mijenjati iz globalnog scopea i toj 
varijabli i njenoj vrijednost se može pristupiti samo putem tog "sučelja" */
function vanjskaFunkcija2() {
  let brojac = 0;
  function suma() {
    brojac++;
    console.log(brojac);
  }
  return suma;
}

const brojacVanjskaFunkcija = vanjskaFunkcija2();
console.log(brojacVanjskaFunkcija);
brojacVanjskaFunkcija();
brojacVanjskaFunkcija();
brojacVanjskaFunkcija();
brojacVanjskaFunkcija();
brojacVanjskaFunkcija();

//-----------------------------------------------------------------------------------
// Idemo napraviti još jedan primjer...

let vanjskiBroj = 8;

function vanjski() {
  const unutarnjiBroj = 5;
  return vanjskiBroj + unutarnjiBroj;
}

console.log(vanjski());

vanjskiBroj = 10;
console.log(vanjski());

// Idemo ovo napraviti sa 2 funkcije

function dodajVanjska(vanjskiBroj) {
  function dodajUnutarnja(unutarnjiBroj) {
    return vanjskiBroj + unutarnjiBroj;
  }
  return dodajUnutarnja;
}

/* console.dir(dodajVanjska(5)); */

const dodaj4 = dodajVanjska(4);
const dodaj5 = dodajVanjska(5);

console.log(dodaj4(6));
console.log(dodaj5(10));
