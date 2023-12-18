"use strict";

function kreirajPost({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: "abc1230",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

kreirajPost({ title: "Moj post", body: "Lorem ipsum" });
