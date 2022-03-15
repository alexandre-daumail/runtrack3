//Permet d'afficher les erreurs 
'use strict';

/* Déclarez une fonction “bisextile” qui prend en paramètre une variable
“année”. Si l’année est bisextile, la fonction retourne true, sinon elle
retourne false. */

function bisextile(année) {
    var année;

    if (année % 4 == 0 || année % 100 != 0 || année % 400 == 0) {
        return true;    
    } else {
        return false;
    }

}

console.log(bisextile(2024));