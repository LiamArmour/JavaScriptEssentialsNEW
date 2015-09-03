'use strict'
//fuel calculator for MPG

var distance = 200, MPG = 37;

var calculation = function(distanceTravel, milesPerGallon) {
    return distance / MPG;
}

console.log(calculation(distance, MPG) + " Gallons of petrol is needed to drive " + distance + " miles at " + MPG + "MPG");