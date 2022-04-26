/*

Lorsque l’on clique sur “filtrer”, le script doit à l’aide de Fetch, récupérer le contenu du fichier pkemon.json et lister les éléments répondant aux critères sélectionnés en les affichant sur une page 
HTML. 

*/

document.addEventListener("DOMContentLoaded", () => {

    var select = document.querySelector('select');

    var pokemonType = [];

    //permet d'afficher autant de balises "option" qu'il y a de types de pokemon dans le json
    (async function fetchPokemonType() {

        const response = await fetch('pokemon.json')

        if (!response.ok) {

            throw new Error("HTTP error, status = " + response.status);

        }

        const pokemons = await response.json()

        return pokemons;

        //raccourci pour que la fonction se lance tout de suite après avoir été définie
    })()

        //insérer les types de pokemon dans un array
        .then(data => {

            for (pokemons of data) {

                for (type of pokemons.type) {

                    if (!pokemonType.includes(type)) {

                        pokemonType.push(type);

                    }
                }
            }

        })

        // à partir de l'array pokemonType, crée différents éléments "option" dans la balise <select> du formulaire
        .then(event => {

            for (const type of pokemonType) {

                option = document.createElement('option');

                option.value = type;

                option.innerHTML = type;

                select.appendChild(option);

            }

        })

    let button = document.querySelector('[type=button]');

    //création du tableau présentant les pokemon
    button.addEventListener('click', (event) => {

        if (document.querySelector('table') == undefined) {

            let table = document.createElement('table');
            let thead = document.createElement('thead');

            table.appendChild(thead);

            document.querySelector('body').appendChild(table);

            //création du contenu thead
            let row_1 = document.createElement('tr');

            let heading_1 = document.createElement('th');
            heading_1.innerHTML = "ID Pkmn";

            let heading_2 = document.createElement('th');
            heading_2.innerHTML = "Nom Pkmn";

            let heading_3 = document.createElement('th');
            heading_3.innerHTML = "Type Pkmn";

            let heading_4 = document.createElement('th');
            heading_4.innerHTML = "Base Stats";

            row_1.appendChild(heading_1);
            row_1.appendChild(heading_2);
            row_1.appendChild(heading_3);
            row_1.appendChild(heading_4);
            thead.appendChild(row_1);

        }

        fetch('pokemon.json')

            .then(response => {

                if (!response.ok) {

                    throw new Error("HTTP error, status = " + response.status);

                }

                return response.json();
            })

            .then(data => {

                //création des éléments thead et tbody
                for (pokemon of data) {

                    if (pokemon.id == id.value) {

                        let row_2 = document.createElement('tr');

                        let row_2_data_1 = document.createElement('td');
                        row_2_data_1.innerHTML = id.value;

                        let row_2_data_2 = document.createElement('td');
                        row_2_data_2.innerHTML = pokemon['name']['french'];

                        let row_2_data_3 = document.createElement('td');
                        row_2_data_3.innerHTML = pokemon["type"];

                        let row_2_data_4 = document.createElement('td');

                        const baseStats = pokemon["base"]
                        row_2_data_4.innerHTML = JSON.stringify(baseStats);

                        row_2.appendChild(row_2_data_1);
                        row_2.appendChild(row_2_data_2);
                        row_2.appendChild(row_2_data_3);
                        row_2.appendChild(row_2_data_4);
                        tbody.appendChild(row_2);

                    }

                }
            })

    })


})
