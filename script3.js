function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const url = "https://pokeapi.co/api/v2/type";
fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        let type = "";
        type += '<div>';
        for (let i = 0; i < json.results.length; i++) {
            type += '<h5>';
            type += capitalizeFirstLetter(json.results[i].name);
            type += '</h5>';
        }
        type += '</div>';
        document.getElementById("typeResults").innerHTML = type;
    });