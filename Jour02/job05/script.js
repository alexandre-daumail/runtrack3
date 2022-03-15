'use strict';

var footer = document.querySelector('footer');

var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', (event) => {

    var progress = (document.documentElement.scrollTop / height) * 100;

    footer.style.width = progress + "%";

    if (progress <= 35 ){

        footer.style.background = "blue";

    }

    else if (progress > 35  && progress <= 70 ) {

        footer.style.background = "yellow";

    }

    else if (progress > 70  && progress <= 100 ) {

        footer.style.background = "green";

    }
    
})