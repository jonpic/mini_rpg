var activeCharacter = "";
var playing = false;
var confirm = "";    
var activeCharacterID = "";
var activeCharacterOBJ = ""
var activeEnemy = "";
var activeEnemyOBJ = "";
var defeatedEnemies = [];
var charSelected = false;

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
        if (!charSelected) {
            $("#yes-btn").remove();
            $("#no-btn").remove();
            $(activeCharacterID).animate({ height: "300px" });
            $(activeCharacterID).animate({ width: "300px" });
            $(activeCharacterID).attr("value", "active-character");
            charSelected = true;
            selectOpponent();
        }
        else if (charSelected) {
            $("#yes-btn").remove();
            $("#no-btn").remove();
            $(activeEnemyID).animate({ height: "250px" });
            $(activeEnemyID).animate({ width: "250px" });
            $(activeEnemyID).attr("value", "active-enemy");
            playing = true;
            beginGame();
        }

    });
    $("#no-btn").on("click", function (){
        if  (!charSelected) {
            activeCharacter = "";
            $("#yes-btn").remove();
            $("#no-btn").remove();
            $("#instruction-text").text("Select a character");
            
        }
        else if (charSelected) {
            activeEnemy = "";
            $("#yes-btn").remove();
            $("#no-btn").remove();
            $("#instruction-text").text("Select an opponent");
        };
    
    })
};



var selectOpponent = function() {
    if (charSelected) {
        $("#instruction-text").text("Select an opponent")
    }
};

var beginGame = function () {
    
    if (activeCharacterOBJ.hitPoints > 0 && activeEnemyOBJ.hitPoints > 0 && playing) {
        $("#instruction-text").text("Time to battle!");
        console.log(activeEnemyOBJ);
        attacker();
    }
    else if (activeCharacterOBJ.hitPoints > 0 && activeEnemyOBJ.hitPoints < 1) {
        console.log("the enemy is dead");
        $(activeEnemyID).animate({ height: "200px" });
        $(activeEnemyID).animate({ width: "200px" });
        $("#instruction-text").text("You defeated " + activeEnemy);
        playing = false;
        activeEnemy="";
        activeEnemyOBJ="";
        anotherEnemy();
    }
    else if (activeCharacterOBJ.hitPoints < 1) {
        $("#instruction-text").text("You are dead");
        playing = false;
    };
};

var attacker = function() {
    $(".char-select-button").on("click", function() {
        if (this.value === "active-enemy" && playing === true) {
            activeEnemyOBJ.hitPoints -= activeCharacterOBJ.attack;
            console.log(activeEnemyOBJ.hitPoints);
            beginGame();
    
        }
        else if (this.value === "active-character" && playing === true) {
            console.log("don't attack yourself");
            beginGame();
        }
        else {
            console.log("not working")
            beginGame();
        };
    });
};

var anotherEnemy = function() {
    $("#instruction-text").text("Select a new enemy");
}

//functions that handle the initial picking of the characters and asks the player to confirm who they selected
$("#char-1-button").on("click", function () {
    if (!activeCharacter) {
        activeCharacter = this.value;
        activeCharacterID = "#char-1-button";
        activeCharacterOBJ = char1;
        pickChar();
        console.log(activeEnemy)
    }
    else if (charSelected && !activeEnemy && char1.hitPoints > 0) {
        activeEnemy = this.value;
        activeEnemyID = "#char-1-button";
        activeEnemyOBJ = char1;
        pickChar();
        console.log(activeEnemy);
    }
    else if (charSelected && !activeEnemy && char1.hitPoints < 1) {
        $("#instruction-text").text("Please select a new opponenet")
    }
});

$("#char-2-button").on("click", function () {
    if (!activeCharacter) {
        activeCharacter = this.value;
        activeCharacterID = "#char-2-button";
        activeCharacterOBJ = char2;
        pickChar(activeCharacterID);
    }
    else if (charSelected && !activeEnemy && char2.hitPoints > 0) {
        activeEnemy = this.value;
        activeEnemyID = "#char-2-button";
        activeEnemyOBJ = char2;
        pickChar(activeEnemyID);
        console.log(activeEnemy);
        
    }
    else if (charSelected && !activeEnemy && char2.hitPoints < 1) {
        $("#instruction-text").text("Please select a new opponenet")
    }
});

$("#char-3-button").on("click", function () {
    if (!activeCharacter) {
        activeCharacter = this.value;
        activeCharacterID = "#char-3-button";
        activeCharacterOBJ = char3;
        pickChar(activeCharacterID);
    }
    else if (charSelected && !activeEnemy && char3.hitPoints > 0) {
        activeEnemy = this.value;
        activeEnemyID = "#char-3-button";
        activeEnemyOBJ = char3;
        pickChar(activeEnemyID);
        console.log(activeEnemy);
    }
    else if (charSelected && !activeEnemy && char3.hitPoints < 1) {
        $("#instruction-text").text("Please select a new opponenet")
    }
})

$("#char-4-button").on("click", function () {
    if (!activeCharacter) {
        activeCharacter = this.value;
        activeCharacterID = "#char-4-button";
        activeCharacterOBJ = char4;
        pickChar(activeCharacterID);
    }
    else if (charSelected && !activeEnemy && char4.hitPoints > 0) {
        activeEnemy = this.value;
        activeEnemyID = "#char-4-button";
        activeEnemyOBJ = char4;
        pickChar(activeEnemyID);
        console.log(activeEnemy);
    }
    else if (charSelected && !activeEnemy && char4.hitPoints < 1) {
        $("#instruction-text").text("Please select a new opponenet")
    }
})



