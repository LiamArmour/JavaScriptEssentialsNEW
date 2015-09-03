(function() {
    'use strict';
    var diceSides = 12, i;
    var statistics = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    var roll6SidedDie = function (diceSides) {
        return Math.floor((Math.random() * diceSides) + 1);
    };

    for (i = 0; i < 10000; i++) {
        var diceRoll = roll6SidedDie(diceSides);
        statistics[diceRoll]++;
        console.log("Rolled a " + diceSides + " sided die, result is: " + diceRoll);
    }

    console.log(statistics);
})();