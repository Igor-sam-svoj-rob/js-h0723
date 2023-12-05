/* Zadatak 1 

U HTML-u kreirajte div element sa id-em "info" (<div id="info"></div>). Spremite taj id u JS varijablu info. 
Nakon toga prođite kroz listu objekata nekom od metoda listi izvucite name i age i ispišite ih u
nekom div ili p elementu unutar div-a sa id-em "info".

Imate listu objekata: */

let data = [
  {
    name: "Marko",
    age: "30",
  },
  {
    name: "Luka",
    age: "32",
  },
  {
    name: "Ivan",
    age: "24",
  },
  {
    name: "Stjepan",
    age: "33",
  },
  {
    name: "Domagoj",
    age: "22",
  },
  {
    name: "Kristijan",
    age: "25",
  },
];

const info = document.querySelector("#info");

const lista = data.map((clan) => {
  return `<div>${clan.name} ima ${clan.age} godina</div>`;
});

console.log(lista);

info.innerHTML = lista.join("");

/* Zadatak 2

Kreiraj element u HTML-u (<div id="circle">Click</div>). Nakon toga kreiraj varijablu u koju ćeš spremiti taj div. 
Potom složi eventListener funkciju koja će na klik promijeniti neku stilizaciju elementa (koju god smislite).

Možeš upotrijebiti ovaj CSS:

 */

const circle = document.querySelector("#circle");

circle.addEventListener("click", () => {
  circle.style.background = "red";
});

/* Zadatak 3

Kreiraj button unutar HTML-a <button>Klikni me</button>. Kreiraj JS skriptu koja će na klik buttona mijenjati boje pozadine HTML body-a 
iz liste boja: */

const gumb = document.querySelector("button");

let index = 0;

const promijeniBoju = () => {
  const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];

  document.body.style.background = boje[index++];

  if (index > boje.length - 1) {
    index = 0;
  }
};

gumb.addEventListener("click", promijeniBoju);
