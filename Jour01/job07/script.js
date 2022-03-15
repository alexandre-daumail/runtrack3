'use strict';

/* Créez une fonction “jourtravaille” qui prend en paramètre une date au
format Date. Si la date correspond à un jour férié de l’année 2020, la
fonction affiche “Le $jour $mois $année est un jour férié”. Si elle
correspond à un samedi ou un dimanche, alors le message affiché est
“Non, $jour $mois $année est un week-end”, sinon afficher “Oui, $jour
$mois $année est un jour travaillé”.
ex : “Oui, 9 mars 2020 est un jour travaillé”.
$jour correspond au numéro du jour, $mois au mois et $année à l’année. */

function jourtravaille(date) {

    var date_choisie = new Date (date);

    const ferie = ["2020-01-01", "2020-04-13", "2020-05-01", "2020-05-08", "2020-05-21", "2020-06-01", "2020-07-14", "2020-08-15", "2020-11-01", "2020-11-11", "2020-12-25"];
    
     const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    
    let month = months[date_choisie.getMonth()];  
    
    if (ferie.includes(date) == true){

        console.log("Le " + date_choisie.getDate() + " " + month + " " + date_choisie.getFullYear() + " est un jour férié.");      

    } else if (date_choisie.getDay() == 6 || date_choisie.getDay() == 0) {

        console.log("Non, le " + date_choisie.getDate() + " " + month + " " + date_choisie.getFullYear() + " est un week-end.");
    } else {

        console.log("Oui, " + date_choisie.getDate() + " " + month + " " + date_choisie.getFullYear() + " est un jour travaillé.");
    }

}


jourtravaille("2022-04-13");