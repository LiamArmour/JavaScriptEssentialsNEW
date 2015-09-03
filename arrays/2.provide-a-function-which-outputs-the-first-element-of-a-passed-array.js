'use strict';
function returnFirstElement(array, endOfArray) {
    var values;
    if(endOfArray !== undefined){
        values = array.slice(0,endOfArray);
        return values;
    }
    else {
        return array[0];
    }
}

var cars = ["Saab", "Volvo", "BMW"];
console.log(returnFirstElement(cars));
console.log(returnFirstElement(cars, 3));