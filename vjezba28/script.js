"use strict";

/* Event listener - addEventListener postavljamo na određeni element i na njega postavljamo 2 parametra:
1. event na koji želimo da ovaj event listener "okine" funkciju
2. funkcija koja će se onda pokrenut kada se dogodi tražena akcija.
*/

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", function () {
  alert("Event listener ovdje...");
});

// kao arrow funkciju

clearBtn.addEventListener("click", () => {
  console.log("Hello world!");
});

// kao callback funkcija
function pocisti() {
  console.log("callback console log");
}

clearBtn.addEventListener("click", pocisti);

// definirajte callback funkciju koja će pobrisati sve zadatke i definirajte addEventListener na clearBtn koja će pokrenuti
//na klik tu callback funkciju

function brisanjeZadatka() {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li");
  ul.remove(li);
}

function brisanjeZadatka2() {
  const zadaci = document.querySelectorAll("li");

  zadaci.forEach((zadatak) => {
    zadatak.remove();
  });
}

clearBtn.addEventListener("click", brisanjeZadatka);

// MOUSE EVENTS

const naslov = document.querySelector("h1");

/* naslov.addEventListener("dblclick", () => console.log("dupli klik")); */ // dupli klik mišem
/* naslov.addEventListener("mousedown", () => console.log("klik")); */ // stisni i drži klik miša (i lijevi i desni klik)
/* naslov.addEventListener("mouseup", () => console.log("out")); */ // funkcija se vrti tek nakon što pustim klik miša
/* naslov.addEventListener("wheel", () => console.log("kotačić")); */ // funkcija se vrti na kotačić miša
/* naslov.addEventListener("mouseover", () => console.log("mouseover")); */ // funkcija se vrti na "hover-in" miša
/* naslov.addEventListener("mouseout", () => console.log("mouseout")); */ // funkcija se vrti na "hover-out" miša

// POINTER EVENTS

const pointerEvent = (event) => {
  /* console.log(event); */
  // vidjet ćemo listu svih pointer evenata koji su nam dostupni
  /* console.log(event.target); */
  // dati će nam element koji smo kliknuli
  /* console.log(event.type); */
  // dat vrstu eventa koji je aktiviran
  /* console.log(event.clientX); */
  // dat će nam vrijednost po horizontali relativno prema prozoru
  /* console.log(event.clientY); */
  // dat će nam vrijednost po vertikali relativno prema prozoru
  /* console.log(event.offsetX); */
  // dat će nam vrijednost po horizontali relativno prema elementu
  /* console.log(event.offsetY); */
  // dat će nam vrijednost po vertikali relativno prema elementu
  /* console.log(event.pageX); */
  // dat će nam vrijednost po horizontali relativno prema stranici
  /* console.log(event.pageY); */
  // dat će nam vrijednost po vertikali relativno prema stranici
  /* console.log(event.screenX); */
  // dat će nam vrijednost po horizontali relativno prema ekranu monitora
  /* console.log(event.screenY); */
  // dat će nam vrijednost po vertikali relativno prema ekranu monitora
};

naslov.addEventListener("click", pointerEvent);

/* PreventDefault metoda - spriječava defaultno ponašanje određenog HTML elementa, najčešće ga koristimo da spriječimo refresh stranice
prilikom klika na gumb. */

const gumb = document.querySelector("a");

gumb.addEventListener("drag", (e) => {
  e.preventDefault();

  const naslov = document.querySelector("h1");
  naslov.textContent = `X ${e.offsetX} > ${e.offsetY}`;
});

// KEYBOARD EVENTS

const inputKey = document.querySelector("#zadatak-input");

//keypress će se pokrenuti čim stisnemo bilo koju tipku
/* inputKey.addEventListener("keypress", () => {
  console.log("keypress");
}); */

//keyup će se pokrenuti kada stisnete pa maknete prst sa bilo koje tipke
/* inputKey.addEventListener("keyup", () => {
  console.log("keyup");
}); */

// keydown se aktivira čim stisnete tipku
/* inputKey.addEventListener("keydown", () => {
  console.log("keydown");
});
 */

/* Pomoću event pointera možemo koristeći metodu key na event pointeru definirati što želimo da se dogodi prilikom stiskanja točno određene
tipke na tipkovnici. A sa repeat metodom možemo provjeriti da li je korisnik "sjeo" na tipku i također u tom trenutku definirati događaj. */
/* inputKey.addEventListener("keydown", (e) => {
  if (e.key === "e") {
    console.log("Stisnuo si slovo e....");
  }

  if (e.repeat) {
    alert(`pusti tipku ${e.key}`);
  }
}); */

// INPUT EVENTS - koristimo inputKey i naslov varijable od prijašnjih primjera...
/* input je event koji će raditi slično kao i keydown, ali ga je bolje koristiti kada se radi sa input poljima. Možemo koristiti i change
ali to je realno stariji selektor i ima širu upotrebu. Još bitno za znati, ako recimo npr. imamo checkbox taj dio forme možemo provjeriti
umjesto sa e.target.value sa e.target.checked što će vam naravno dati true/false vrijednost (da li je označeno ili nije) */

inputKey.addEventListener("input", (e) => {
  console.log(e.target.value);
  naslov.textContent = e.target.value;
});

// provjerava jesmo li kliknuli na određeno polje (u ovom slučaju input polje)
inputKey.addEventListener("focus", () => {
  console.log("Input polje je u fokusu");
});
// provjerava jesmo li kliknuli van određenog polja (u ovom slučaju input polja)
inputKey.addEventListener("blur", () => {
  console.log("Kliknuli ste van input polja");
});
