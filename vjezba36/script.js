"use strict";

const jokeBtn = document.getElementById("vic-btn");
const jokeDiv = document.getElementById("vic");

const generateJoke = () => {
  const xhr = new XMLHttpRequest();
  const metoda = "GET";
  const url = "https://api.chucknorris.io/jokes/random";

  xhr.open(metoda, url);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeDiv.innerHTML = JSON.parse(this.response).value;
      } else {
        jokeDiv.innerHTML = "Nema viceva za tebe";
      }
    }
  };

  xhr.send();
};

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
