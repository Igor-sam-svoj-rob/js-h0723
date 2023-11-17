const imaVozacku = true;
const dobarVid = false;

console.log(imaVozacku && dobarVid); // ovo je kao "i" operator, piše se sa && znakovima. And operator će dati true samo kada su svi true.
console.log(imaVozacku || dobarVid); // ovo je kao "ili" operator, piše se sa || znakovima. Or operator će dati false samo kada su svi false.
console.log(!imaVozacku); // okrenite true u false vrijednost ili false u true sa uskličnikom.

const mozeVoziti = imaVozacku && dobarVid;
console.log(mozeVoziti);

if (mozeVoziti) {
  console.log("Osoba može voziti");
} else {
  console.log("Osoba ne može voziti");
}

const umoran = true;

console.log(imaVozacku && !umoran);

console.log(imaVozacku || dobarVid || !umoran);

/* Nullish coalesing operator - nulti operator spajanja - logički operator.
Operator koji će vratiti operand sa desne strane ako je sa lijeve strane operand null ili undefined. Inače će vratiti lijevog
operanda (za razliku od truthy i falsy koji će vratiti i za 0 i prazan string).
*/

let nullish;

nullish = 10 ?? 20;
nullish = "lijeva" ?? "desna";
nullish = "" ?? "desna";
nullish = undefined ?? "desna";
nullish = false ?? "desna";

console.log(nullish);

/* And operator (&&) će vratiti prvu falsy vrijednost ili zadnju truthy vrijednost.*/

let x;

x = 10 && 20;
x = 10 && 20 && 30;
x = 10 && 0 && 30 && null;
x = 10 && "" && true;

console.log(x, typeof x);

/* Primjer kad je ovo korisno. */

let y = [];

/* console.log(y[0]); */

y.length > 0 && console.log(y[0]); // ovako se neće ništa ispisati jer je provjera dala false value i clg se neće ispisati.

y = [1, 2];

y.length > 0 && console.log(y[0]); // sada kada imamo 2 člana liste prva vrijednost je točna pa će se ispisati clg.

/* Or operator (||) će vratiti prvu truthy vrijednost ili ako su sve falsy, vratit će zadnju vrijednost. */

let z;

z = 10 || 20;
z = 0 || 10 || 20;
z = 0 || null || "" || undefined;

console.log(z, typeof z);
