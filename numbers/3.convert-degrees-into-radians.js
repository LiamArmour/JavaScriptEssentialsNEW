'use strict'
var convertRadius =0;
var convertDegrees=function(value){
    convertRadius=((Math.PI/180) * value);
}
convertDegrees(345);
console.log(convertRadius);