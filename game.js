var colors = ["red", "yellow", "blue", "green"];
var userchosenpattern = [];
var gamepattern = [];
var i = 0;
var level = 0;
var started = false;
$(document).keypress(function(e) {

  if (!started) {
    setTimeout(function(){
      nextseq();
    },200);

    started = true;
  }
});

function verify(input) {
  if (gamepattern[input] === userchosenpattern[input]) {

    console.log("success");
    if (gamepattern.length === userchosenpattern.length) {
      setTimeout(function() {
        nextseq();
        userchosenpattern = [];
      }, 1000);
    }

  }
  else{
    var audio = new Audio('sounds/wrong.mp3');
    audio.play();

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

  $("h1").html("Game Over, Press Any Key to Restart");
    restart();


  }
}
function restart() {
  started = false;
    gamepattern=[];
  userchosenpattern =[];
    level = 0;

}

function nextseq() {

  var random = Math.random();
  random = Math.floor(random * 4);
  var randomchosencolor = colors[random];
  console.log(randomchosencolor);
  gamepattern.push(randomchosencolor);
  playsound(randomchosencolor);
  animategen(randomchosencolor);

  level++;
  $("#level-title").html("level  " + level);
}

function animategen(c) {
  $("#" + c).fadeOut(100).fadeIn(100);
}

function animatepress(c) {
  $("#" + c).addClass("pressed");
  setTimeout(function() {
    $("#" + c).removeClass("pressed");
  }, 100);
}

function playsound(c) {


  if (c === "green") {
    var audio1 = new Audio('sounds/green.mp3');
    audio1.play();
  } else if (c === "yellow") {
    var audio2 = new Audio('sounds/yellow.mp3');
    audio2.play();
  } else if (c === "red") {
    var audio3 = new Audio('sounds/red.mp3');
    audio3.play();
  } else if (c === "blue") {
    var audio4 = new Audio('sounds/blue.mp3');
    audio4.play();
  }

}

$(".btn").click(function() {

  var userchosencolor = $(this).attr("id");

  userchosenpattern.push(userchosencolor);
  console.log(userchosenpattern);
  animatepress(userchosencolor);
  playsound(userchosencolor);
  var x = userchosenpattern.length - 1;
  verify(x);
});
