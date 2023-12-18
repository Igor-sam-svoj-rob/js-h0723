"use strict";

const cardTemplate = document.querySelector("template");
const cardContainer = document.querySelector(".user-cards");
const searchInput = document.querySelector("#search");

let users = [];

searchInput.addEventListener("input", function (e) {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const vidljiv =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("sakrij", !vidljiv);
  });
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = cardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector(".header");
      const body = card.querySelector(".body");
      header.textContent = user.name;
      body.textContent = user.email;
      cardContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  });
