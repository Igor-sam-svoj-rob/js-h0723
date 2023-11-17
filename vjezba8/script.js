const dan = prompt("Koji je danas dan?");

switch (dan) {
  case "ponedjeljak": // u ovom caseu će se uspoređivati unos (ono što je došlo kroz varijablu dan) sa caseom. dan === "ponedjeljak".
    console.log("Danas je ponedjeljak");
    console.log("Tek je tjedan počeo.");
    break; // kada ne bi bilo breaka izvođenje bi se nastavilo sa idućim caseom.

  case "utorak":
    console.log("Utorak je, još je daleko vikend.");
    break;

  case "srijeda":
    console.log("srijeda je dan za plac...");
    break;

  case "cetvrtak":
    console.log("Mali petak je...");
    break;

  case "petak":
    console.log("petak je..!");
    break;

  case "subota":
  case "nedjelja":
    console.log("vikend je!");
    break;

  default:
    console.log("Niste unijeli dan u tjednu");
}
