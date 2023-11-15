/* falsy vrijednosti : 0, prazan string, undefined, null, NaN - vrijednosti koje nisu netočne, ali će postati kada se pretvore u 
Boolean vrijednost. */

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean({}));

/* Ovo nećete raditi u praksi, Boolean vrijednosti se definiraju implicitno, a ne eksplicitno kao ovdje, to uvijek odrađuje JS prisilom. */

const novac = 0;

if (novac) {
  console.log("Imaš novaca.");
} else {
  console.log("Nemaš novaca");
}

/* vrijednost varijable novac je falsy vrijednost pa će JS automatski pretvoriti tu vrijednost u Boolean vrijednost i zato ćemo dobiti else
 dio petlje. */

let x;

if (x) {
  console.log("imamo x");
} else {
  console.log("nemamo x");
}

const godina = 18;

if (godina === 18) {
  console.log("dobili smo jednake brojeve");
} else {
  console.log("ovo nije isti broj");
}

/* Loose provjera će usporediti vrijednosti koje se nalaze sa lijeve i desne strane i ako prepozna da su jednake, zaključit će da je to
točno i ispisat će se if dio petlje (točni dio) */
if ("18" == 18) {
  console.log("dobili smo jednake brojeve");
} else {
  console.log("nismo dobili jednake brojeve");
}

/* Strict provjera će usporediti vrijednosti ali i tip podatka koji se nalaze sa lijeve i desne strane i ako su oboje identični,
zaključit će da je to točno i ispisati if dio petlje (točni dio), a ako nisu po jednom od ta 2 kriterija, ispisati će se else dio petlje */
if ("18" === 18) {
  console.log("dobili smo jednake brojeve");
} else {
  console.log("nismo dobili jednake brojeve");
}

// Primjer

const broj = Number(prompt("Koji ti je najdraži broj?"));
console.log(broj, typeof broj);

if (broj === 23) {
  console.log("broj 23 je baš super");
} else if (broj === 7) {
  console.log("broj 7 je isto super");
} else if (broj === 2) {
  console.log("broj 2 je također dobar");
} else {
  console.log("Niste upisali dobar broj");
}
