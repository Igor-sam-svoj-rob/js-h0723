"use strict";

/* Fetch je moderan pristup HTTP requestovima. Za razliku od njih, fetch je sam po sebi promise. On je metoda
koju imamo u window objectu. */

const url = "https://jsonplaceholder.typicode.com/todos/1";

function dohvatiPodatke() {
  const odgovor = fetch(url)
    .then((odgovor) => odgovor.json())
    .then((data) => (document.querySelector("h1").textContent = data.title));
}

dohvatiPodatke();

/* Ajmo vidjeti kako izvući podatke iz lokalnog json filea. S obzirom da će fetch vratiti promise, možemo odmah
pozvati nakon fetcha .then metodu, gdje se u prvom .thenu nalazi response. S obzirom da se u responsu nalazi JSON format
moramo ga pretvoriti u objekt. S obzirom na korištenje arrow funkcije implicitno je definiran return na kraju .thena. */

fetch("./filmovi.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

const url2 = "https://jsonplaceholder.typicode.com/todos";

fetch(url2)
  .then((response) => response.json())
  .then((data) => console.log(data));
