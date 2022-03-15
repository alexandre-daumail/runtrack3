'use strict';

/* Créez une balise button ayant comme id “button”. Lorsque l’on clique 
dessus, un <article> contenant le texte suivant est ajouté au contenu de la 
page : “L'important n'est pas la chute, mais l'atterrissage.”. Si on clique à 
nouveau sur ce bouton, l’article disparaît. L’apparition / Disparition doivent 
être gérées dans une fonction nommée “showhide()”. */

document.addEventListener('DOMContentLoaded', function loaded() {

    var button = document.querySelector('#button');

    function showhide() {
        
        document.querySelector("article").classList.toggle("hidden");
    }

    button.addEventListener('click', showhide);

})
