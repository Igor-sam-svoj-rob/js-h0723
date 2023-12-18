import { kosarica, dodajProizvode } from "./cart.js";
/* import * as cart from "./cart.js"; */

("use script");

console.log(kosarica);

dodajProizvode("pašteta", 4);
dodajProizvode("mlijeko", 2);
dodajProizvode("kruh", 1);

console.log(kosarica);
