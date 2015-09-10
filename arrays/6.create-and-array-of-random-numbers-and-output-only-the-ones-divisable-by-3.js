'use strict';

var arrayOfNumbers = [1,2,3,4,5,6,7,8,9];

function divisableByThree(array) {
    var values = []
    for(var i = 0; i< array.length; i++) {
        if (array[i] % 3 === 0) {
            values.push(array[i]);
        }
    }
    return values;
}

console.log(divisableByThree(arrayOfNumbers));