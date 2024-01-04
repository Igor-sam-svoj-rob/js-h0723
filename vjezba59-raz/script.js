fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
