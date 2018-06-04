var activeCharacter = "";
var playing = false;
var confirm = "";    
var activeCharacterID = "";
var activeEnemy = "";

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
    hitpoints: 8,
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
            selectOpponent();
        }
        else if (playing = true && activeEnemy) {
            $("#yes-btn").remove();
            $("#no-btn").remove();
            $(activeEnemyID).animate({ height: "250px" });
            $(activeEnemyID).animate({ width: "250px" });
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
    else if (activeEnemy) {
        $("#instruction-text").text("Time to battle!");
    }
};

//functions that handle the initial picking of the characters and asks the player to confirm who they selected
$("#char-1-button").on("click", function () {
    if (!playing) {
        activeCharacter = this.value;
        activeCharacterID = "#char-1-button";
        pickChar(activeCharacterID);
        console.log(activeEnemy)
    }
    else if (playing && !activeEnemy) {
        activeEnemy = this.value;
        activeEnemyID = "#char-1-button";
        pickChar(activeEnemyID);
        console.log(activeEnemy);
    }
});

$("#char-2-button").on("click", function () {
    if (!activeCharacter) {
        activeCharacter = this.value;
        activeCharacterID = "#char-2-button";
        pickChar(activeCharacterID);
    }
    else if (playing && !activeEnemy) {
        activeEnemy = this.value;
        activeEnemyID = "#char-2-button";
        pickChar(activeEnemyID);
        console.log(activeEnemy);
    }
});

$("#char-3-button").on("click", function () {
    if (!activeCharacter) {
        activeCharacter = this.value;
        activeCharacterID = "#char-3-button";
        pickChar(activeCharacterID);
    }
    else if (playing && !activeEnemy) {
        activeEnemy = this.value;
        activeEnemyID = "#char-3-button";
        pickChar(activeEnemyID);
        console.log(activeEnemy);
    }
})

$("#char-4-button").on("click", function () {
    if (!activeCharacter) {
        activeCharacter = this.value;
        activeCharacterID = "#char-4-button";
        pickChar(activeCharacterID);
    }
    else if (playing && !activeEnemy) {
        activeEnemy = this.value;
        activeEnemyID = "#char-4-button";
        pickChar(activeEnemyID);
        console.log(activeEnemy);
    }
})



