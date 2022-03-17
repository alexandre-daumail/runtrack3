'use strict';

var img = ["img/arc1.png", "img/arc2.png", "img/arc3.png", "img/arc4.png", "img/arc5.png", "img/arc6.png",]

$(document).ready( event => {

    for (let index = 0; index < img.length; index++) {
        $('#melangees').prepend('<img />');
        console.log(img[index]);
        $('img').attr('src', img[index]);        
    }
})