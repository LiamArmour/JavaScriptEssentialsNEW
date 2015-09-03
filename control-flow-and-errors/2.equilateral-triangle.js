'use strict';

function equilateralTriangle(numRows){
    var stars = '';
    var spaces = '';
    for(var i = 0 ; i < numRows; i++){
        spaces = '';
        for(var j = numRows -1-i; j > 0; j--) {
            spaces += ' ';
        }
        stars += '*';
        stars += stars.length > 1 ? '*' : '';
        console.log(spaces+stars);
    }
}
equilateralTriangle(15);