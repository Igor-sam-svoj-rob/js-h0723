"use strict";

// Callback funkcijski primjer

/* const imena = [
  { ime: "Ivan", prezime: "Horvat" },
  { ime: "Marko", prezime: "Jurić" },
];

const kreirajIme = (ime, cb) => {
  setTimeout(() => {
    imena.push(ime);
    cb();
  }, 300);
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((osoba) => {
      const paragraf = document.createElement("p");
      paragraf.innerHTML = `<strong>${osoba.ime} ${osoba.prezime}</strong>`;
      document.querySelector("#imena").appendChild(paragraf);
    });
  }, 200);
};

kreirajIme({ ime: "Maja", prezime: "Majić" }, getImena); */

//-------------------------------------------------------------------------------------------------

// Promise pristup

const imena = [
  { ime: "Ivan", prezime: "Horvat" },
  { ime: "Marko", prezime: "Jurić" },
];

const kreirajIme = (ime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let greska = false;
      if (!greska) {
        imena.push(ime);
        resolve();
      } else {
        reject("Nešto je pošlo po krivu");
      }
    }, 300);
  });
};

const getImena = () => {
  setTimeout(() => {
    imena.forEach((osoba) => {
      const paragraf = document.createElement("p");
      paragraf.innerHTML = `<strong>${osoba.ime} ${osoba.prezime}</strong>`;
      document.querySelector("#imena").appendChild(paragraf);
    });
  }, 200);
};

const pokaziError = (error) => {
  const paragraf = document.createElement("p");
  paragraf.innerHTML = `<strong>${error}</strong>`;
  document.querySelector("#imena").appendChild(paragraf);
};

kreirajIme({ ime: "Maja", prezime: "Majić" }).then(getImena).catch(pokaziError);

//----------------------------------------------------------------------------------------------

// Promise chaining

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let greska = false;

    if (!greska) {
      resolve({ ime: "Marko", prezime: "Markić" });
    } else {
      reject("Nešto je pošlo po krivu");
    }
  }, 200);
});

promise
  .then((osoba) => {
    console.log(osoba);
    return osoba.ime;
  })
  .then((ime) => {
    console.log(ime);
    return ime.length;
  })
  .then((duzina) => {
    console.log(duzina);
  })
  .catch((greska) => {
    console.log(greska);
  });
