/* Zadatak 1 

Lista imena (do 5 komada), neka jedno ime bude vaše ime. napravite for petlju
koja će za vaše ime ispisati "Ime je super" dok će ostala imena samo ispisat. */

const listaImena = ["Ivan", "Marko", "Igor", "Marija", "Josip"];

for (let i = 0; i < listaImena.length; i++) {
  if (listaImena[i] === "Igor") {
    console.log("Ime je super");
    continue;
  }
  console.log(listaImena[i]);
}

/* Zadatak 2

Petlja u petlji vježba. Napravi petlju koja će se ispisati 4 puta. Unutar te petlje
složi podpetlju koja se bude izvrtila 6 puta. Prva petlja može ispisati brojeve 1-4.
Druga petlja neka ispiše 5-10 brojeve... */

for (let i = 0; i <= 4; i++) {
  console.log(i);
  for (let j = 5; j <= 11; j++) {
    console.log(j);
  }
}

/* Zadatak 3

Iz postojeće liste objekata koristeći neku od metoda listi izvadite limuzine u novu listu.
Bonus zadatak : kako bi napisali funkciju koja će isfiltrirati aute proizvedene između 2016 i 2020?  */

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2014 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2015 },
  { ime: "BMW", kategorija: "coupe", godinaProizvodnje: 2010 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2011 },
  { ime: "Peugeot", kategorija: "limuzina", godinaProizvodnje: 2018 },
  { ime: "Range Rover", kategorija: "jeep", godinaProizvodnje: 2017 },
];

const limuzine = auti.filter((auti) => auti.kategorija === "limuzina");
console.log(limuzine);

const raspon = auti.filter(
  (auti) => auti.godinaProizvodnje > 2016 && auti.godinaProizvodnje < 2020
);

console.log(raspon);

/*Zadatak 4
 
Imamo 2 liste, listu računa i listu napojnica. 
Trebamo koristeći funkciju i for petlju u toj funkciji napraviti izračun sume.
I onda koristeći tu funkciju napraviti izračun sume za svaku listu.

Rezultat trebamo zapisati u nove liste.

hint 1 : članove obje liste u funkciju ubacite putem pripadajućih parametara.
hint 2 : Postavite početno stanje izračuna  na 0 i tu listu sa sumom vratite u returnu te funkcije.
 */

let racuni = [200, 150, 120, 167];
let napojnice = [20, 15, 12, 16];

const suma = (lista) => {
  let x = 0;
  const total = [];
  for (const broj of lista) {
    x = x + broj;
  }
  total.push(x);
  return total;
};

const sumaRacuna = suma(racuni);
const sumaNapojnice = suma(napojnice);

console.log(sumaRacuna, sumaNapojnice);
