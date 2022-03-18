/*
Lorsque l’on clique sur “filtrer”, le script doit à l’aide de Fetch, récupérer le contenu du fichier et lister les éléments répondant aux critères sélectionnés en les affichant sur une page 
HTML. */


document.addEventListener("DOMContentLoaded", () => {
    
    const select = document.querySelector('select');
    
    var pokemonType = [];

    //permet d'afficher autant de balises "option" qu'il y a de types de pokemon dans le json
    fetch('pokemon.json')

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

                for (types of pokemons.type) {

                    if (!pokemonType.includes(types)){

                        pokemonType.push(types);

                    }
                }  
            }
        })

        .then( event => {

            for (const type of pokemonType) {
                
                option = document.createElement ('option');

                option.value = type;

                option.innerHTML = type;

                select.appendChild(option);
        
            }

        })

        .catch(function(error) {

            var p = document.createElement('p');

            p.appendChild(

                document.createTextNode('Error: ' + error.message)

            );

            document.body.insertBefore(p, select);
            
        })
        //spread operator: (...)
        //set
})
