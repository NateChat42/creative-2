function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


document.getElementById("abilitySubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("abilityInput").value;
    if (value === "")
        return;
    console.log(value);
    const url = "https://pokeapi.co/api/v2/ability/" + value;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let ability = "";
            ability += '<div>';
            ability += '<h4>' + capitalizeFirstLetter(json.name) + "</h4>";
            ability += '<h6>' + json.effect_entries[1].effect + '</h6>';
            ability += '</div>';
            ability += '<h4>Check out some other abilities!</h4>';
            document.getElementById("abilityResults").innerHTML = ability;
        });

    const url2 = "https://pokeapi.co/api/v2/ability?limit=40";
    fetch(url2)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let ability = "";
            ability += '<div>';
            for (let i = 0; i < json.results.length; i++) {
                ability += '<p class="ability">';
                ability += json.results[i].name;
                ability += '</p>';
            }
            ability += '</div>';
            document.getElementById("abilityColumn1").innerHTML = ability;
        });

    const url3 = "https://pokeapi.co/api/v2/ability?limit=40&offset=40";
    fetch(url3)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let ability = "";
            ability += '<div>';
            for (let i = 0; i < json.results.length; i++) {
                ability += '<p class="ability">';
                ability += json.results[i].name;
                ability += '</p>';
            }
            ability += '</div>';
            document.getElementById("abilityColumn2").innerHTML = ability;
        });

    const url4 = "https://pokeapi.co/api/v2/ability?limit=40&offset=80";
    fetch(url4)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let ability = "";
            ability += '<div>';
            for (let i = 0; i < json.results.length; i++) {
                ability += '<p class="ability">';
                ability += json.results[i].name;
                ability += '</p>';
            }
            ability += '</div>';
            document.getElementById("abilityColumn3").innerHTML = ability;
        });

    const url5 = "https://pokeapi.co/api/v2/ability?limit=40&offset=120";
    fetch(url5)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let ability = "";
            ability += '<div>';
            for (let i = 0; i < json.results.length; i++) {
                ability += '<p class="ability">';
                ability += json.results[i].name;
                ability += '</p>';
            }
            ability += '</div>';
            document.getElementById("abilityColumn4").innerHTML = ability;
        });

    const url6 = "https://pokeapi.co/api/v2/ability?limit=40&offset=160";
    fetch(url6)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let ability = "";
            ability += '<div>';
            for (let i = 0; i < json.results.length; i++) {
                ability += '<p class="ability">';
                ability += json.results[i].name;
                ability += '</p>';
            }
            ability += '</div>';
            document.getElementById("abilityColumn5").innerHTML = ability;
        });
});