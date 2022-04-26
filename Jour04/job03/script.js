'use strict';

document.addEventListener("DOMContentLoaded", event => {

    var button = document.getElementById("button");

    button.addEventListener("click", event => {
        
        //Fetch the users.php, which echoes a user database getter in JSON format.
        fetch('pokemon.json')
            .then((response) => response.json())
            .then((response) => {

                    let tbody = document.querySelector('tbody')

                    //Reset the table body before updating the content
                    tbody.innerHTML = ""

                    response.forEach ( element => {

                            let tr = document.createElement('tr')

                            tbody.appendChild(tr)
                            
                            Object.keys(element).forEach(key => {

                                let td = document.createElement('td')

                                tr.appendChild(td)

                                td.append(element[key])
                                
                            });
                    })
        })

    })

})