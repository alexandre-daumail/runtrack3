'use strict';

/* Créez un button ayant comme id “button”. Créez une balise <p> ayant 
comme id “compteur” et contenant “0”. Ce contenu doit évoluer 
proportionnellement au nombre d'événements click reçu par le bouton. 
Vous ne devez pas utiliser “onclick()” dans votre html. La fonction 
permettant d’effectuer la modification doit s'appeler “addone()”
 */

var button = document.querySelector('#button');

button.addEventListener('click', function addone(){

    var compteur = document.querySelector('#compteur');

    //stocker la conversion de string to int dans $valeur_compteur
    var valeur_compteur = parseInt(compteur.innerHTML);

    //incrémenter $valeur_compteur
    valeur_compteur++;

    // set #compteur à la nouvelle valeur établie précédemment
    compteur.innerHTML = valeur_compteur;
})
