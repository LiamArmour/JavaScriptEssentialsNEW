'use strict';
var rollDice = function(sides) {
    this.sides = sides || 6;
}
rollDice.prototype.roll = function() {
    return Math.floor((Math.random()*this.sides)+1);
}
var die = new rollDice();

console.log(die.roll());