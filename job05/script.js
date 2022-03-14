'use strict';

/* Job 05
Créez une fonction “afficherjourssemaines”. Cette fonction ne prend pas de
paramètre. Créez un tableau de strings “jourssemaines” qui contient
l’ensemble des jours de la semaine, du Lundi au Dimanche. Ensuite à
l’aide d’une boucle for (for!), affichez un par un ces jours. */

function afficherjourssemaines() {
    var jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    for (let index = 0; index < jourssemaines.length; index++) {
        console.log(jourssemaines[index])
    }

}

afficherjourssemaines();        