//button colors
var buttonColors = ["red", "blue", "green", "yellow"];

//pattern game
var gamePattern = [];
// user pattern
var userChosenPattern = [];

$(".btn").click(function () {

    var userChosenColour = $(this).attr("id");
    userChosenPattern.push(userChosenColour);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userChosenPattern.length-1);
});

//check ans
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userChosenPattern[currentLevel])
   { console.log("yes");
   if(gamePattern.length === userChosenPattern.length)
   {
    setTimeout(function (){
        nextSequence();
    }, 1000);
   }

}
else{
    var audio = new Audio('./sounds/wrong.mp3');
    audio.play();

    gameOver();
    console.log("no");
    startOver();
}

function gameOver() {
    $("body").addClass("game-over");

    setTimeout(function () {
        $("body").removeClass("game-over");

    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    
}


}
function startOver(){
    level=0;
    gamePattern=[];
    start=false;
}


var start= false;
var level=0;
//keyboard press
$(document).keydown(function(){
    if( ! start){
        var newText="level "+level;
        $("#level-title").text(newText);
        nextSequence();
        start=true;
    }
});

//random num generator
function nextSequence() {
    userChosenPattern=[];
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    //animation
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(randomChosenColour);
   
    var newText="level "+level;
        $("#level-title").text(newText);
}

//sound
function playsound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
//blinking pattern
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");

    }, 100);
}

