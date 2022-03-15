'use strict';

/* Lorsque l’on clique sur #button, affiche le contenu de #citation dans la console web. La fonction de récupération et d’affichage doit se nommer “citation()”. */

// instancie l'objet 'button' à partir de l'élément du DOM ayant pour id 'button' 
var button = document.querySelector('#button');

// Affiche le texte contenu dans l'élément 'citation' dans la console web
function citation() {

    var article = document.querySelector('#citation');

    console.log(article.innerHTML);

}

// Lorsque l'utilisateur clique sur le bouton 'button', la fonction 'citation' se lance. citation() est donc un callback car elle en argument d'une autre fonction (ici, la méthode addEvenListener)
button.addEventListener('click', citation);


