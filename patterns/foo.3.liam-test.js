(function(){
    'use strict';
    var won = false;
    var gameBoard = {
        numSquares: 30,
        prepareSquares: function(squareToPrepare, squareToCompare1, squareToCompare2){
            var i, j, k;
            for (i=0; i<squareToPrepare.maxNumSquares; i++){
                for (j=0; j<squareToCompare1.maxNumSquares; j++){
                    for (k=0; k<squareToCompare2.maxNumSquares; k++){
                        do {
                            var rand = Math.floor((Math.random() * this.numSquares)+1);
                        } while (squareToCompare1.squareArray[j] === rand || squareToCompare2.squareArray[k] === rand);
                    }
                }
                squareToPrepare.squareArray[i] = rand;
            }
        },
        checkSquare: function(player, forwardSquare, backSquare, missSquare){
            var i, j;
            for (i=0; i<forwardSquare.maxNumSquares; i++){ //Only need 1 for loop while forward and backward squares have the same size
                for (j=0; j<missSquare.maxNumSquares;j++) {
                    if (player.playerPos === backSquare.squareArray[i]) {
                        return 'back';
                    }
                    else if (player.playerPos === forwardSquare.squareArray[i]) {
                        return 'forward';
                    }
                    else if (player.playerPos === missSquare.squareArray[j]) {
                            return 'missTurn';
                        }
                }
            }
            return 'stay';
        }
    };

    var Square = function(squareType, numberOfSquares){
        this.squareType = squareType;
        this.maxNumSquares = numberOfSquares;
        this.squareArray = [];
    };

    var Player = function(){
        var me = this;
        this.playerPos = 1;
        this.playerMissTurn = false;
        this.rollDice = function(){
            return Math.floor((Math.random()*6)+1);
        };
        this.updatePlayer = function(){
            console.log("Player " + playerTurn + "s turn!");
            var diceRoll = me.rollDice();
            console.log("Player " + playerTurn + " has rolled: " + diceRoll);
            me.playerPos += diceRoll;
            console.log("Player " + playerTurn + " is now on square: " + me.playerPos);
            if(gameBoard.checkSquare(me, forwardSquares, backwardSquares, missTurnSquares) === 'back'){
                me.playerPos -= 2;
                console.log("Oh no! Looks like you're moving back 2 spaces to square: " + me.playerPos);
            }
            else if(gameBoard.checkSquare(me, forwardSquares, backwardSquares, missTurnSquares) === 'forward'){
                me.playerPos += 2;
                console.log("Hooray! Looks like you moved 2 spaces forward to square: " + me.playerPos);
            }
            else if(gameBoard.checkSquare(me, forwardSquares, backwardSquares, missTurnSquares) === 'missTurn'){
                    console.log("Oh no! Looks like you're missing a turn!");
                    me.playerMissTurn = true;
                    me.playerMissedTurn = false;
                }
                else{
                    console.log("You avoided bonus spaces this time");
                }
        }
    };

    var missTurnSquares = new Square("miss turn", 3);
    var forwardSquares = new Square("forward", 5);
    var backwardSquares = new Square("backward", 5);

    var player1 = new Player();
    var player2 = new Player();
    var playerTurn = 1;


    gameBoard.prepareSquares(missTurnSquares, forwardSquares, backwardSquares);
    gameBoard.prepareSquares(forwardSquares, backwardSquares, missTurnSquares);
    gameBoard.prepareSquares(backwardSquares, forwardSquares, missTurnSquares);

    while (!won){
        if(playerTurn === 1){
            if(!player1.playerMissTurn){
                player1.updatePlayer();
            }
            playerTurn = 2;
            if (player2.playerMissTurn === true){
                playerTurn = 1;
                player2.playerMissTurn = false;
            }
        }
        else{
            if(!player2.playerMissTurn){
                player2.updatePlayer();
            }
            playerTurn = 1;
            if (player1.playerMissTurn === true){
                playerTurn = 2;
                player1.playerMissTurn = false;
            }
        }

        if(player1.playerPos >= gameBoard.numSquares){
            console.log("Player 1 wins!");
            won = true;
        }
        else if(player2.playerPos >= gameBoard.numSquares){
            console.log("Player 2 wins!");
            won = true;
        }
    }

    console.log("");
    console.log("NEW GAME!");
    console.log("");
})();