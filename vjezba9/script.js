/* 
5 + 6 je npr. expression jer će proizvesti određenu vrijednost
2000 je isto expression
true && false je isto expression
if else, switch direktno ne proizvode vrijednost, nisu expressioni nego statementi. Oni su sekvence akcija, a tek onda te akcije mogu dati
vrijednost.
*/

const godine = 23;
let punoljetan2;

if (godine >= 18) {
  console.log("možeš polagat vozački");
  punoljetan2 = "možeš polagati vozački";
} else {
  console.log("ne možeš polagat vozački");
  punoljetan2 = "ne možeš polagati vozački";
}

/* Ternary operator (trojni operator) - drugačiji način pisanja if else upita, način pisanja u jednoj liniji.
Možete zamisliti da je ? isto što i "if" tj. da je to uvjet koji se mora ispuniti. Nakon tog upita prva stvar koja dolazi je
kod koji će se izvrtiti ako je upit istinit, a ono što dolazi nakon dvotočke će se izvrtiti ako je upit neistinit. */

godine >= 18
  ? console.log("možeš polagati vozački")
  : console.log("ne možeš polagati vozački");

const punoljetan =
  godine >= 18 ? "možeš polagati vozački" : "ne možeš polagati vozački";
console.log(punoljetan);

/* Za razliku od if else petlje koja je deklaracija, ternary operator daje vrijednost stoga ga možemo ubaciti u template literal. */

console.log(`Imaš li više od 18 godina? ${godine >= 18 ? "imam" : "nemam"}`);

/* Još jedan primjer... */

const auth = true;

// if else pristup

let redirect;

if (auth) {
  alert("Autorizacija je prošla!");
  redirect = "/dashboard";
} else {
  alert("Autorizacija nije prošla!");
  redirect = "/login";
}

console.log(redirect);

// ternary operator pristup

const redirect2 = auth
  ? (alert("Autorizacija je prošla!"), "/dashboard")
  : (alert("Autorizacija nije prošla!"), "/login");

/* Za kraj imamo situaciju gdje ćemo složiti još provjeru kao u prošlom primjeru da li je nešto true i ako ne želimo ništa napraviti ako je
false sa lijeve strane. */

auth && console.log("Autorizacija je prošla");
