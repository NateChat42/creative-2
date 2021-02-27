function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

document.getElementById("typeSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("typeInput").value;
    if (value === "")
        return;
    console.log(value);
    const url = "https://pokeapi.co/api/v2/type/" + value;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let type = "";
            type += '<div>';
            type += '<h4>Type: ' + capitalizeFirstLetter(json.name) + "</h4>";
            type += '<p>Takes 2x damage from: ';
            if (json.damage_relations.double_damage_from.length < 1) {
                type += "<h6><h6>None</h6></h6>"
            } else {
                for (let i = 0; i < json.damage_relations.double_damage_from.length; i++) {
                    type += "<h6>" + capitalizeFirstLetter(json.damage_relations.double_damage_from[i].name) + "</h6>";
                }
            }
            type += "</p>";

            type += '<p>Takes 1/2x damage from: ';
            if (json.damage_relations.half_damage_from.length < 1) {
                type += "<h6>None</h6>"
            } else {
                for (let i = 0; i < json.damage_relations.half_damage_from.length; i++) {
                    type += "<h6>" + capitalizeFirstLetter(json.damage_relations.half_damage_from[i].name) + "</h6>";
                }
            }
            type += "</p>";

            type += '<p>Takes 0x damage from: ';;
            if (json.damage_relations.no_damage_from.length < 1) {
                type += "<h6>None</h6>"
            } else {
                for (let i = 0; i < json.damage_relations.no_damage_from.length; i++) {
                    type += "<h6>" + capitalizeFirstLetter(json.damage_relations.no_damage_from[i].name) + "</h6>";
                }
            }
            type += '</p>';

            type += '<p>Deals 2x damage to: ';;
            if (json.damage_relations.double_damage_to.length < 1) {
                type += "<h6>None</h6>"
            } else {
                for (let i = 0; i < json.damage_relations.double_damage_to.length; i++) {
                    type += "<h6>" + capitalizeFirstLetter(json.damage_relations.double_damage_to[i].name) + "</h6>";
                }
            }
            type += '</p>';

            type += '<p>Deals 1/2x damage to: ';;
            if (json.damage_relations.half_damage_to.length < 1) {
                type += "<h6>None</h6>"
            } else {
                for (let i = 0; i < json.damage_relations.half_damage_to.length; i++) {
                    type += "<h6>" + capitalizeFirstLetter(json.damage_relations.half_damage_to[i].name) + "</h6>";
                }
            }
            type += '</p>';

            type += '<p>Deals 0x damage to: ';;
            if (json.damage_relations.no_damage_to.length < 1) {
                type += "<h6>None</h6>"
            } else {
                for (let i = 0; i < json.damage_relations.no_damage_to.length; i++) {
                    type += "<h6>" + capitalizeFirstLetter(json.damage_relations.no_damage_to[i].name) + "</h6>";
                }
            }
            type += '</p>';

            type += '</div>';
            document.getElementById("typeResults").innerHTML = type;
        });
    const url2 = "https://pokeapi.co/api/v2/type";
    fetch(url2)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            let type = "";
            type += '<div>';
            type += '<h4>Check out another type!</h4>';
            for (let i = 0; i < json.results.length - 2; i++) {
                type += '<h6>';
                type += capitalizeFirstLetter(json.results[i].name);
                type += '</h6>';
            }
            type += '</div>';
            document.getElementById("typeList").innerHTML = type;
        });
});