"use strict";

/* Zadatak 1

Recimo da imamo 7900 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca
dolazi iz Središnje hrvatske - nazovimo const brojLovaca1 (3840 lovaca), 
koliko iz Istre (brojLovaca2 = 500 lovaca) i koliko iz Dalmacije (brojLovaca3 = 1440 lovaca) */

const brojLovaca = (postotak) => {
  const izracun = (postotak / 7900) * 100;
  return izracun;
};

const brojLovaca1 = brojLovaca(3840);
const brojLovaca2 = brojLovaca(500);
const brojLovaca3 = brojLovaca(1440);

console.log(brojLovaca1, brojLovaca2, brojLovaca3);

/* Zadatak 2

Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10,
Kina 3441 i USA 332. Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače
i onda ih i ispišite, na način da definirate dvije funkcije, prvu koja će računati postotak
i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - zemlja i populacija.
Nakon toga ispišite sve 3 vrijednosti koristeći rečenicu:
`${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta`* */

/* Zadatak 3

Imamo 2 tima, koji su igrali međusobno 6 puta. 
Želimo izračunati prosjek golova u svih 6 utakmica za svaku ekipu koristeći arrow funkciju. 
Tim pobjeđuje jedino ako ima duplo više golova od drugog tima u odnosu prosječnih golova.
Napravite arrow funkciju kako bi napravili kalkulaciju prosjeka. 
Napravite funkciju koja uzima prosjek ekipa i ispisuje pobjednika u konzoli skupa 
sa ispisom prosjeka golova obje ekipe npr. Real je u prosjeku zabio 4 gola, a Barcelona 1.
Možete iskoristi if-else petlju kako bi složili ispis.

primjer 1: 
Barca : 2, 3, 1, 3, 4, 7
Real : 1, 4, 1, 5, 0, 5
primjer 2: 
1, 2, 1, 1, 3, 5
Real : 1, 1, 3, 0, 2, 4

hint: kako bi provjerili da li je jedan tim pobijedio drugi sa barem duplo bodova, 
možete napraviti provjeru koristeći formulu A >= B * 2. Primjenite to na prosječni rezultat */

const calcAverage = (a, b, c, d, e, f) => (a + b + c + d + e + f) / 6;

const scoreBarca = calcAverage(2, 3, 1, 3, 4, 7);
const scoreReal = calcAverage(1, 4, 1, 5, 0, 5);

console.log(scoreBarca, scoreReal);

const checkWinner = function (prosjekBarca, prosjekReal) {
  if (prosjekBarca >= prosjekReal * 2) {
    console.log(`Barcelona je pobijedila ${prosjekBarca} : ${prosjekReal}`);
  } else if (prosjekReal >= prosjekBarca * 2) {
    console.log(`Real je pobijedio ${prosjekReal} : ${prosjekBarca}`);
  } else {
    console.log("Nema pobjednika");
  }
};

checkWinner(scoreBarca, scoreReal);
checkWinner(6, 3);
checkWinner(2, 7);
