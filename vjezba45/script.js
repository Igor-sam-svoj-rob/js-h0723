"use script";

/* Kod .then metode smo koristili resolve/reject, catch da bi uhvatili errore... Kod Async/Await pristupa
koristimo try/catch */

/* function dupliraj(broj) {
  if (isNaN(broj)) {
    throw new Error(`${broj} nije broj`);
  }
  return broj * 2;
}

try {
  const y = dupliraj("string");
  console.log(y);
} catch (error) {
  console.log(error);
} */

/* Idemo probati složiti konkretan primjer */

const url = "https://jsonplaceholder.typicode.com/users";
let imena = [];
const useri = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.map((user) => user.name);
  } catch (error) {
    console.error(error);
    return [];
  }
};

/* useri(); */

/* (async () => {
  await useri();
  console.log(imena);
})(); */

const listaImena = async () => {
  imena = await useri();
  console.log(imena);
};

listaImena();

// Primjer sa errorima - .then metoda

/* const btn = document.querySelector("button");

const dohvatiUsere = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) {
        console.log("Ne možemo dohvatiti podatke");
        return;
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

btn.addEventListener("click", dohvatiUsere); */

// Idemo ovo napraviti sa Async/Await metodom

const btn = document.querySelector("button");
const noviUser = {
  name: "Igor",
  email: "example@mail.com",
};

const dohvatiUsere = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noviUser),
    });
    const data = await res.json();
    if (!res.ok) {
      console.log("Ne možemo dohvatiti podatke");
      return;
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", dohvatiUsere);
