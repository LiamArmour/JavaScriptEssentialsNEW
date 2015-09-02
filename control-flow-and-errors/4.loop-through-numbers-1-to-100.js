'use strict';
for(var loop= 1; loop<=100; loop++){
    if (loop%3===0 && loop%5!=0){
        console.log("Java");
    }
    else if(loop%5===0 && loop%3!=0){
        console.log("Script");
    }
    else if(loop%3===0 && loop%5===0){
        console.log("JavaScript");
    }
    else{
        console.log(loop);
    }
}