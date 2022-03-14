'use strict';

function sommenombrespremiers(a, b) {

    // check if number is equal to 1
    if (a > 1 && b > 1) {

        for (let i = 2; i < a; i++) {

            if (a % i == 0) {

                break;

            } else {
                for (let j = 2; j < a; j++) {

                    if (b % j == 0) {

                        break;
                        
                    } else {

                        console.log(a + b);
                        break;
                    }
                }

            }

        }

    } else {

        console.log('false');
        
    }

}

sommenombrespremiers(15,22);