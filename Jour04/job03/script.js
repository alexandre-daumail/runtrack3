/*

Lorsque l’on clique sur “filtrer”, le script doit à l’aide de Fetch, récupérer le contenu du fichier et lister les éléments répondant aux critères sélectionnés en les affichant sur une page 
HTML. 

*/


document.addEventListener("DOMContentLoaded", () => {

    var select = document.querySelector('select');
    let filtre = document.querySelector('[type=button]');

    var pokemonType = [];

    //permet d'afficher autant de balises "option" qu'il y a de types de pokemon dans le json
    async function fetchPokemon () {
        const response = await fetch('pokemon.json')
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
          }
        const pokemons = await response.json()
        return pokemons;
    }


        //teste si le fetch fonctionne puis retourne la promesse "response"
        .then(response => {

            if (!response.ok) {

                throw new Error("HTTP error, status = " + response.status);

            }

            return response.json();
        })

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

        // à partir de l'array pokemonType, crée différents éléments "option"
        .then(event => {

            for (const type of pokemonType) {

                option = document.createElement('option');

                option.value = type;

                option.innerHTML = type;

                select.appendChild(option);

            }

        })

    /*         .catch(function (error) {
    
                var p = document.createElement('p');
    
                p.appendChild(
    
                    document.createTextNode('Error: ' + error.message)
    
                );
    
                document.body.insertBefore(p, select);
    
            })
     */
    //création du tableau présentant les pokemon
    filtre.addEventListener('click', (event) => {

        if (document.querySelector('table') == undefined) {

            let table = document.createElement('table');
            let thead = document.createElement('thead');
            var tbody = document.createElement('tbody');

            table.appendChild(thead);
            table.appendChild(tbody);

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
            heading_4.innerHTML = "Stats Pkmn";

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

                        row_2.appendChild(row_2_data_1);
                        row_2.appendChild(row_2_data_2);
                        row_2.appendChild(row_2_data_3);
                        tbody.appendChild(row_2);

                    }

                }
            })

/*             .catch(function (error) {

                var p = document.createElement('p');
    
                p.appendChild(
    
                    document.createTextNode('Error: ' + error.message)
    
                );
    
                document.body.insertBefore(p, select);
    
            })         
 */            })


})
