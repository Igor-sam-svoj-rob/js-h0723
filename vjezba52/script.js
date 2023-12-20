"use strict";

function updateKlik() {
  let klikovi = {};
  let button;

  function reportKlikovi(klik) {
    button = klik.id;
    klikovi[button] = klikovi[button] + 1 || 1;
    console.log(klikovi);
  }
  return reportKlikovi;
}

const report = updateKlik();

document.querySelectorAll(".klikovi").forEach((x) => {
  x.addEventListener("click", (event) => {
    report(event.target);
  });
});
