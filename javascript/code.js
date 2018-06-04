var activeCharacter = "";
var playing = false;
var confirm = "";    
var activeCharacterID = "";
var activeCharacterOBJ = ""
var activeEnemy = "";
var activeEnemyOBJ = "";

var char1 = {
    hitPoints: 10,
    attack: 5,
    counterAttack: 1,
};

var char2 = {
    hitPoints: 9,
    attack: 4,
    counterAttack: 1,
};

var char3 = {
    hitPoints: 8,
    attack: 3,
    counterAttack: 1,
}

var char4 = {
    hitPoints: 7,
    attack: 2,
    counterAttack: 1,
}

//function that handles the selection of characters and animates the growth of the players selected character
var pickChar = function() {
    $("#instruction-text").text("Are you sure?")
    $("#yes-no").append("<button type='button' class='btn-primary mr-3' id='yes-btn' value='yes';>Yes</button>");
    $("#yes-no").append("<button type='button' class='btn-primary ml-3' id='no-btn' value='no'>No</button>");
    $("#yes-btn").on("click", function (characterPicked){
        if (playing = true && !activeEnemy) {
            $("#yes-btn").remove();
            $("#no-btn").remove();
            $(activeCharacterID).animate({ height: "300px" });
            $(activeCharacterID).animate({ width: "300px" });
            $(activeCharacterID).attr("value", "active-character");
            selectOpponent();
        }
        else if (playing = true && activeEnemy) {
            $("#yes-btn").remove();
            $("#no-btn").remove();
            $(activeEnemyID).animate({ height: "250px" });
            $(activeEnemyID).animate({ width: "250px" });
            $(activeEnemyID).attr("value", "active-enemy");
            beginGame();
        }

    });
    $("#no-btn").on("click", function (){
        if (!playing) {
        activeCharacter = "";
        $("#yes-btn").remove();
        $("#no-btn").remove();
        $("#instruction-text").text("Select a character");
        console.log(activeEnemy)
        }
        else if (playing) {
            activeEnemy = "";
            $("#yes-btn").remove();
            $("#no-btn").remove();
            $("#instruction-text").text("Select an opponent");
            console.log(activeEnemy);
        };
    
    })
};



var selectOpponent = function() {
    if (!activeEnemy) {
        $("#instruction-text").text("Select an opponent")
    }
};

var beginGame = function () {
    $("#instruction-text").text("Time to battle!");
    if (activeCharacterOBJ.hitPoints > 0 && activeEnemyOBJ.hitPoints > 0) {
        console.log("you made it here")
        attacker();
    }
    else if (activeCharacterOBJ.hitPoints > 0 && activeEnemyOBJ.hitPoints < 1) {
        $("#instruction-text").text("You have defeated your opponent");
    }
    else if (activeCharacterOBJ.hitPoints < 1) {
        $("#instruction-text").text("You are dead");
    };
};

var attacker = function() {
    $(".char-select-button").on("click", function() {
        if (this.value === "active-enemy") {
            activeEnemyOBJ.hitPoints -= activeCharacterOBJ.attack;
            console.log(activeCharacterOBJ.hitPoints);
            console.log(activeCharacterOBJ.attack);
            console.log(activeCharacterOBJ.counterAttack);
            console.log(activeCharacterOBJ['hitPoints']);
            console.log(activeEnemyOBJ);
            console.log(activeEnemyOBJ.hitPoints);
            beginGame();
        }
        else if (this.value === "active-character") {
            console.log("don't attack yourself");
            beginGame();
        }
        else {
            console.log("not working")
            beginGame();
        };
    });
};

//functions that handle the initial picking of the characters and asks the player to confirm who they selected
$("#char-1-button").on("click", function () {
    if (!playing) {
        activeCharacter = this.value;
        activeCharacterID = "#char-1-button";
        activeCharacterOBJ = char1;
        pickChar(activeCharacterID);
        console.log(activeEnemy)
    }
    else if (playing && !activeEnemy) {
        activeEnemy = this.value;
        activeEnemyID = "#char-1-button";
        activeEnemyOBJ = char1;
        pickChar(activeEnemyID);
        console.log(activeEnemy);
    }
});

$("#char-2-button").on("click", function () {
    if (!activeCharacter) {
        activeCharacter = this.value;
        activeCharacterID = "#char-2-button";
        activeCharacterOBJ = char2;
        pickChar(activeCharacterID);
    }
    else if (playing && !activeEnemy) {
        activeEnemy = this.value;
        activeEnemyID = "#char-2-button";
        activeEnemyOBJ = char2;
        pickChar(activeEnemyID);
        console.log(activeEnemy);
    }
});

$("#char-3-button").on("click", function () {
    if (!activeCharacter) {
        activeCharacter = this.value;
        activeCharacterID = "#char-3-button";
        activeCharacterOBJ = char3;
        pickChar(activeCharacterID);
    }
    else if (playing && !activeEnemy) {
        activeEnemy = this.value;
        activeEnemyID = "#char-3-button";
        activeEnemyOBJ = char3;
        pickChar(activeEnemyID);
        console.log(activeEnemy);
    }
})

$("#char-4-button").on("click", function () {
    if (!activeCharacter) {
        activeCharacter = this.value;
        activeCharacterID = "#char-4-button";
        activeCharacterOBJ = char4;
        pickChar(activeCharacterID);
    }
    else if (playing && !activeEnemy) {
        activeEnemy = this.value;
        activeEnemyID = "#char-4-button";
        activeEnemyOBJ = char4;
        pickChar(activeEnemyID);
        console.log(activeEnemy);
    }
})



