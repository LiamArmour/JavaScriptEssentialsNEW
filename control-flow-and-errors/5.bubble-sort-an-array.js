'use strict';

var myArray = [];
function genArray(numValues, range){
    var anArray = [];
    for( var i = 0; i < numValues; i++) {
        anArray.push(Math.round(Math.random()*range));
    }
    return anArray;
}
function bubbleSort(array, numCalls){
    console.log('called bubbleSort '+numCalls+' times.');
    var big = 0;
    var small = 0;
    var swapped = false;
    for(var i = 0; i < array.length; i++) {
        if( (i+1) === array.length ){
            continue;
        }
        if( array[i] < array[i+1] ) {
            big = array[i+1];
            small = array[i];
            console.log('swapping ' + big + ' with ' + small);
            array[i] = big;
            array[i+1] = small;
            swapped = true;
        }
    }
    if(swapped) {
        numCalls += 1;
        console.log(array);
        bubbleSort(array, numCalls);
    }
    else {
        console.log('final array = '+array);
        return array;
    }
}

myArray = genArray(10, 100);
console.log(myArray);
bubbleSort(myArray, 1);