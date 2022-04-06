'use strict';


$(document).ready( event => {

    // my stack to compare to test
    var myTab = []
    
    var melanger = $("button");

    // Mélanger les images dans la div "melangees"
    melanger.on('click', event => {

        $("h1").text("Cliquez sur les images pour les ranger dans le bon ordre");

        myTab = []

        //Récupération du nombre d'images dans la div "rangees"
        var nbImgRangees = $("#rangees > img").length;

        //Initialisation des variables qui vont entrer en compte dans l'algorythme Fisher-Yats
        var imgRangees = $("#rangees > img"), k, temp;

        // Algo Fisher-Yats 
        while(--nbImgRangees > 0){

            k = Math.floor(Math.random() * (nbImgRangees + 1));

            temp = imgRangees[k];
            imgRangees[k] = imgRangees[nbImgRangees];
            imgRangees[nbImgRangees] = temp;
            
        }

        // place them in the the #melangees div
        imgRangees.detach().appendTo('#melangees')
    })

    // now the idea is, if u click pics on the right sequence
    // it will rebuild the picture correctly. To be able to check
    // identify the order we will use the alt of img to select them
    // if the order is equal to our check array you win
    // otherwise it will reorder randomly the pics in the sub
    // div container (#rangees)

        // my test array for win
        var checkArray = [1,2,3,4,5,6]

    // winning test function
    function test (myTab,longueur,checkArray){

        if (longueur === 6) {

            for (let i = 0; i < 6; i++){
                
                if (myTab[i] === checkArray[i]){
                    
                    $('h1').text("🏆🏆🏆 Vous avez gagné 🏆🏆🏆")

                    var end = true;
                    
                } else {

                    $('h1').text("😞😞😞 Vous avez perdu 😞😞😞")

                    var end = true;

                }
            }

            if (end) {
                myTab = []
            }
        }
    }

    // my imgs as vars
    var $image1 = $("img[alt='1']")
    var $image2 = $("img[alt='2']")
    var $image3 = $("img[alt='3']")
    var $image4 = $("img[alt='4']")
    var $image5 = $("img[alt='5']")
    var $image6 = $("img[alt='6']")


    // if u click on the picture reorder them in the div below
    $image1.on('click', function () {
        $image1.detach().appendTo('#rangees')
        myTab.push(1)
        test(myTab,myTab.length,checkArray)
    })
    $image2.on('click', function () {
        $image2.detach().appendTo('#rangees')
        myTab.push(2)
        test(myTab,myTab.length,checkArray)
    })
    $image3.on('click', function () {
        $image3.detach().appendTo('#rangees')
        myTab.push(3)
        test(myTab,myTab.length,checkArray)
    })
    $image4.on('click', function () {
        $image4.detach().appendTo('#rangees')
        myTab.push(4)
        test(myTab,myTab.length,checkArray)
    })
    $image5.on('click', function () {
        $image5.detach().appendTo('#rangees')
        myTab.push(5)
        test(myTab,myTab.length,checkArray)
    })
    $image6.on('click', function () {
        $image6.detach().appendTo('#rangees')
        myTab.push(6)
        test(myTab,myTab.length,checkArray)
    })

})

