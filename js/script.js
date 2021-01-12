// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
let userChoice="";
let computerChoice="";
let result="";
let number=0;
//GLOBAL VARIABLES
/* global $ */
$('#shoot').click(function(){
  userChoice = $("input").val();
    $('#userChoice').html(userChoice);
  number = Math.random();
  console.log(number);
  if (number > 0.666) {
     computerChoice= "rock";
       $(".text").text("Rock");
  } else if (number > 0.333) {
    computerChoice="paper";
        $(".text").text("Paper");
  }  else {
    computerChoice="scissors";
        $(".text").text("Scissors");
    }
  $("#computerChoice").html(computerChoice);
  if (userChoice === 'rock' && computerChoice === 'paper'){
    $(".result").html('paper');
  } 
  
});






