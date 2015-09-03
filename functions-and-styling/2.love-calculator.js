'use strict'
var calculation = function(boyName, girlName) {
    var foo = (boyName.length + girlName.length)-(Math.random()*6);
    var result = foo * 42;

    if(result > 100) {
        console.log(boyName + " loves " + girlName + " 100%")
    }
    else {
        console.log(boyName + " loves " + girlName  +  result + "%")
    }
}

calculation("Liam", "Lau");