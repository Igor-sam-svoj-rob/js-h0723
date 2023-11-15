const inputGodina = "2000";

const x = inputGodina + 18;

console.log(typeof x);

/* type conversion */

// 1 metoda izmjene stringa u broj
let conversionGodina = Number(inputGodina);

//2 metoda izmjene stringa u broj
conversionGodina = parseInt(inputGodina);

//3 metoda izmjene stringa u broj
conversionGodina = +inputGodina;

// metoda za promjenu broja u string

conversionGodina = String(inputGodina);

console.log(typeof conversionGodina);

let decBroj = "20.5";

decBroj = parseFloat(decBroj);
console.log(decBroj);

// Ako pretvarate decimalni broj iz stringa u broj, parseInt će zaokružiti taj broj na nižu vrijednost.
decBroj = parseInt(decBroj);

console.log(decBroj);

console.log(Number("Igor"));
console.log(Number(true));
console.log(Number(false));
console.log(String(true));

/* Type coercion (prisilna promjena) */

// Kad god se broj nađe ovako sa string literal načinom pisanja, on će prisilom postati string.
console.log("Ja sam " + 5 + " broj");

//Ovako bi to "školskije" bilo definirano.
console.log("Ja sam " + String(5) + " broj");

//ovo funkcionira jer oduzimanje u ovoj varijanti kada se unutar stringova nalaze brojevi, prepoznaje da su to brojevi i odrađuje mat. radnju.
console.log("23" - "10" - 5);
console.log("23" * "2");
console.log("24" / 2);

console.log(23 + "10" + 5);

console.log(5 + true);
// u ovoj varijanti će biti prikazano 6 jer se true smatra brojem 1 kada se prisilno prebaci u broj
console.log(5 + false);
// u ovoj varijanti će biti prikazano 5 jer se false smatra brojem 0 kada se prisilno prebaci u broj
console.log(5 + undefined);
// Dobit ćemo NaN jer ne znamo koji je ovo broj

let n = "1" + 1;

n = n - 1;

console.log(n);

let m = 2 + 3 + 4 + "5";
console.log(m, typeof m);
