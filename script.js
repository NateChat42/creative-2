function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

document.getElementById("pokemonSubmit").addEventListener("click", function (event) {
  event.preventDefault();
  const value = document.getElementById("pokemonInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://pokeapi.co/api/v2/pokemon/" + value;
  fetch(url)
    .then(function (response) {
      return response.json();
    }).then(function (json) {
      let results = "";
      results += '<h2>Pokemon #' + json.id + ": " + capitalizeFirstLetter(json.species.name) + "</h2>";
      results += 'Regular Sprite: '
      results += '<img src=' + json.sprites.front_default + '>';
      results += 'Shiny Sprite: '
      results += '<img src=' + json.sprites.front_shiny + '>';
      if (json.types.length === 1) {
        results += '<h4>Type:</h4>';
      } else {
        results += '<h4>Types:</h4>';
      }
      for (i = 0; i < json.types.length; i++) {
        results += '<p>' + capitalizeFirstLetter(json.types[i].type.name) + '</p>';
      }
      if (json.abilities.length === 1) {
        results += '<h4>Ability:</h4>';
      } else {
        results += '<h4>Abilities:</h4>';
      }
      for (i = 0; i < json.abilities.length; i++) {
        results += '<p>' + capitalizeFirstLetter(json.abilities[i].ability.name) + '</p>';
      }
      results += '<h4>' + "Base Stats: " + '</h4>';
      for (i = 0; i < json.stats.length; i++) {
        results += '<p>' + json.stats[i].stat.name + ': ' + json.stats[i].base_stat + '</p>';
      }
      document.getElementById("pokemonResults").innerHTML = results;
    });
  // abilityResults = "<h1>Weekly Forecast</h1>";
  // document.getElementById("abilityResults").innerHTML = abilityResults;
});

function getAbilities() {
  const url2 = "https://pokeapi.co/api/v2/ability?limit=100";
  fetch(url2)
    .then(function (response) {
      return response.json();
    }).then(function (json) {
      let ability = "";
      ability += '<div class="ability">';
      for (let i = 0; i < json.results.length; i++) {
        ability += json.results[i].name
      }
      ability += '</div>';
      document.getElementById("abilityResults").innerHTML = ability;
    });
}
getAbilities;