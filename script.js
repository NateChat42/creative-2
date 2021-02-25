document.getElementById("pokemonSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("pokemonInput").value;
    if (value === "")
      return;
    console.log(value);
    const url = "https://pokeapi.co/api/v2/pokemon/" + value;
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "";
      results += '<h2>Pokemon #' + json.id + ": "+ json.species.name +"</h2>"
      results += '<img src=' + json.sprites.front_default + '>';
    //   for (let i=0; i < json.length; i++) {
	// results += '<img class="icon" src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
    //   }
      
    //   results += "<p>"
    //   for (let i=0; i < json.weather.length; i++) {
	// results += '<h2> Description: ' + json.weather[i].description + '</h2>'
    
	// if (i !== json.weather.length - 1)
	//   results += ", "
    //   }
    //   results += "</p>";
      document.getElementById("pokemonResults").innerHTML = results;
      });
    //   weeklyForecast = "<h1>Weekly Forecast</h1>";
    //   document.getElementById("abilityForecast").innerHTML = weeklyForecast;
    //   const url2 = "https://pokeapi.co/api/v2/" + value;
    //   fetch(url2)
    //     .then(function(response) {
    //       return response.json();
    //     }).then(function(json) {
    //         let forecast = "";
    //         for (let i=0; i < json.list.length; i++) {
    //       forecast += '<div class="forecast">';
          
    //       forecast += '</div>'
    //         }
    //         document.getElementById("abilityResults").innerHTML = forecast;
    //     });
  });