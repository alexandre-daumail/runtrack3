'use strict';

/* Créez une fonction “tri” qui prend en paramètres un tableau de nombres
nommé “numbers” et une variable “order” qui contient “asc” ou “desc”. A
l’aide d’un algorithme développé par vos soins, cette fonction
doit trier le tableau dans l’ordre ascendant ou décroissant, selon le
paramètre passé, puis retourner le tableau. */

function tri(numbers, order) {
    
    if (order == "asc"){

        for (let i = 0; i < numbers.length; i++){

            for (let j = 0; j < numbers.length; j++) {

                if (numbers[j] < numbers[j-1]){
    
                    let memoire = numbers[j-1];
                    numbers[j-1] = numbers[j];
                    numbers[j] = memoire;
                }   

            }
            
        }

    } else if (order == "desc") {

        for (let i = 0; i < numbers.length; i++){

            for (let j = 0; j < numbers.length; j++) {

                if (numbers[j] < numbers[j+1]){
    
                    let memoire = numbers[j+1];
                    numbers[j+1] = numbers[j];
                    numbers[j] = memoire;
                }   
                             
            }
            
        }

    }
}

let numbers = [6,1,5,3];

tri(numbers, "desc");

console.log(numbers);

document.getElementById("demo").innerHTML = numbers;