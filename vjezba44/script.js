"use strict";

const obecanje = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ ime: "Ivan", prezime: "Ivić" });
  }, 300);
});

obecanje.then((data) => console.log(data));

async function dohvatiObecanje() {
  const data = await obecanje;
  console.log(data);
}

dohvatiObecanje();

/* Async/await metoda je idejno nastala kako bi naše asinkorne metode "izgledale" sinkrono i kako bi bile pisane kao sikroni kod. 
Prvo definiramo asinkronu funkciju koja će u response spremiti (sa prefixom await) podatke sa API-a. Nakon toga će podatke koje dobije
opet sa prefixom await pretvoriti putem json metode u objekt..
*/

async function dohvatiUsera() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

dohvatiUsera();

/* function dohvatiUsera1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

dohvatiUsera1(); */

const dohvatiPost = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

dohvatiPost();
