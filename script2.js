function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const url = "https://pokeapi.co/api/v2/ability?limit=100";
fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        let ability = "";
        ability += '<div>';
        for (let i = 0; i < json.results.length; i++) {
            ability += '<p class="ability">';
            ability += capitalizeFirstLetter(json.results[i].name);
            ability += '</p>';
        }
        ability += '</div>';
        document.getElementById("abilityColumn1").innerHTML = ability;
    });

const url2 = "https://pokeapi.co/api/v2/ability?limit=100&offset=100";
fetch(url2)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        let ability = "";
        ability += '<div>';
        for (let i = 0; i < json.results.length; i++) {
            ability += '<p  class="ability">';
            ability += capitalizeFirstLetter(json.results[i].name);
            ability += '</p>';
        }
        ability += '</div>';
        document.getElementById("abilityColumn2").innerHTML = ability;
    });