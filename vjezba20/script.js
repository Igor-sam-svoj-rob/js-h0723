"use strict";

console.log("gol 1 ⚽");
console.log("gol 2 ⚽");
console.log("gol 3 ⚽");
console.log("gol 4 ⚽");
console.log("gol 5 ⚽");
console.log("gol 6 ⚽");
console.log("gol 7 ⚽");
console.log("gol 8 ⚽");
console.log("gol 9 ⚽");
console.log("gol 10 ⚽");

/* Prvi način je rekurzija iliti ponavljanje izvođenja dok se određeni ovjet ne ispuni. Prvo definiramo uvjet kada se rekurzija završava,
a onda definiramo operaciju koja će samu sebe pozivati iznova dok se uvjet ne ispuni i onda će završiti izvođenje. */

function golovi(gol) {
  //1. uvjet
  if (gol > 10) return;
  //2. rekurzivna operacija
  else console.log(`gol ${gol} ⚽`);
  //pozivanje ponovno funkcije u iduću iteraciju
  return golovi(gol + 1);
}

golovi(1);
