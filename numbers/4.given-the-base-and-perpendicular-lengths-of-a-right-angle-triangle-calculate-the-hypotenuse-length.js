'use strict'
var hypotenuseLength=0;
var findhypotenuseLength=function(valueOne,valueTwo){
    hypotenuseLength=Math.sqrt(((valueOne * valueOne)+(valueTwo * valueTwo)));
}
findhypotenuseLength(3,4);
console.log(hypotenuseLength);