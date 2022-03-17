
'use strict';

document.getElementById("button").addEventListener("click", function() {
  getText('expression.txt');
});

async function getText(file) {

    let x = await fetch(file);
    let y = await x.text();
    document.querySelector('p').innerHTML = y;

}