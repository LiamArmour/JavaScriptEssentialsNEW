'use strict'
//finding the hypotenuse length
var perplength = 8;
var base = 4;
var oppositeLength= 11;
var angle = 73;
var hypoth = ((perplength*perplength) + (base*base));
var hypotenuse = Math.sin(angle)*oppositeLength;

console.log("The Hypotenuse length is: " + Math.round(Math.sqrt(hypoth)));
console.log("The Hypotenuse length is: " + hypotenuse + " radians");