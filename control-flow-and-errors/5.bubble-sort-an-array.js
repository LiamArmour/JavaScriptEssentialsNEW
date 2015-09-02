'use strict';

function generateArray(numberOfValues, range) {
    var array = [];
    for (var numValues = 0 ; numValues < numberOfValues ; numValues++){
        array.push(Math.round(Math.random()*range));
    }
    console.log(array);
    return array;
}

function bubbleSort(array) {
    var big,
        small;
    var swapped = false;

    for(var arrayCount = 0 ; arrayCount < array.length ; arrayCount++){
        if((arrayCount+1) === array.length){
            //continue;
            console.log("cont");
        }
        if(array[arrayCount] < array[arrayCount+1]) {
            big = array[arrayCount+1];
            small = array[arrayCount];
            console.log("swapping " + big + " with " + small);
            array[arrayCount] = big;
            array[arrayCount+1] = small;
            swapped = true;
        }
    }
    if(swapped) {
        bubbleSort(array);
    }else{
        console.log("Final array " + array);
        return array;
    }
}

var liamArray = generateArray(10, 50);
console.log("last " + liamArray);
console.log(bubbleSort(liamArray));