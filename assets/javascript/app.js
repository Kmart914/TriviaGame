$(document).ready(function() {

// Object conatin questions, answers, and boolean to compare the user choice to the correct answer.
var data = [
    {
      id: 1,
      question:"What belongs to you but others use it more than you do?",
      answerChoices:["Your Pencil","Your Money","Your Name","Your Car"],
      answer: "Your Name",

  },
  {
      id: 2,
      question:"What has a Heart but no other organs?",
      answerChoices:["A Duck","A Lizard","A Deck of Cards","AI"],
      answer: "A Deck of Cards",
  },
  {
    id: 3,
      question:"The more you take, the more you leave behind. What am I?",
      answerChoices:["Food","Footsteps","Money","Water"],
      answer: "Footsteps",

  },
  {
    id: 4,
      question:" Imagine you're in a dark room that is perfectly empty with nothing in it. There are no windows or doors. What is the easiest way to escape?",
      answerChoices:["Stop Imagining You Are In That Room","Die","Wait","Dig A Hole With Your Bare Hands"],
      answer: "Stop Imagining You Are In That Room"
  },
  {
    id: 5,
      question:"If you look you cannot see me. And if you see me you cannot see anything else. I can make anything you want happen, but later everything goes back to normal. What am I?",
      answerChoices:["Air","Nothing","Imagination","Clouds"],
      answer: "Imagination"

  },
  {
    id: 6,

      question:"(This is fairly easy, but it'll have an impact on your final result!) If there are 100000000 bricks on a plane, and one falls off, how many are left?",
      answerChoices:["99999999","100000000","11","9999999"],
      answer: "1"

  },
  {
    id: 7,

      question:"What walks on four legs in the morning, two in the afternoon and three in the evening?",
      answerChoices:["A robot with special programming", "A monkey who gets his leg cut off, grows them back, then loses them again ","A Human","Someone who is demented"],
      answer: "A Human"

  },
  {
    id: 8,
      question:"A woman is walking, then suddenly dies in the middle of the street. How",
      answerChoices:[" She was run over by a car","She was hit with a brick","She was shot","She was poisoned"],
      answer: "A Brick"
  },
  {
    id: 9,

      question:"A man is going to a party. Along the way he meets a man with seven wives. Each of the wives as seven bags. Each of the bags have seven cats. Each of the cats has seven kittens. Each of the kittens has seven toys. How many people are going to the party?",
      answerChoices:["16,807","9","1","0"],
      answer: "1"


  },
  {
    id: 10,
    question:"Adriana's mom had four kids: Marta, Anna, Justina...",
    answerChoices:["Annabell","Chloe","Adriana","Cleopatra"],
    answer: "Adrianna"

  }
]

var correctGif = ['<iframe src="https://giphy.com/embed/vggLJGHF1dgTC" width="480" height="319" style="position:relative; left: 30%; frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',]

var wrongGif = ['<iframe src="https://giphy.com/embed/hPPx8yk3Bmqys" width="480" height="435" style="position:relative; left: 30%; frameBorder="0" class="giphy-embed" allowFullScreen></iframe>',]

var totalCorrect = 0;
var totalWrong = 0;
var index = 0;

// Function to pull the first question at game start.
function questionSelect(showQuestion){
  $("#title").html('<h2>' + questions[showQuestion].question + '</h2>')
  $("#gameZone").append('<button class="btn answers" id="answer1">' + questions[showQuestion].answerChoices[0] + '</button>');
  $("#gameZone").append('<button class="btn answers" id="answer2">' + questions[showQuestion].answerChoices[1] + '</button>');
  $("#gameZone").append('<button class="btn answers" id="answer3">' + questions[showQuestion].answerChoices[2] + '</button>');
  $("#gameZone").append('<button class="btn answers" id="answer4">' + questions[showQuestion].answerChoices[3] + '</button>');

  console.log(showQuestion);
}


//Game start function
function start(){
  // remove button and render the question once game starts.
  $('#display').empty();
  getQuestion();
}
function getQuestion() {
  var question = data[index].question;
  var choices = data[index].answerChoices;
  $('.list-group').empty();
  // add question to jumbotron
  $("#display").html('<div id="choices" class="list-group-item-disabled"><h1>' + question +'</h1></div>');
  for(var i = 0; i < data[index].answerChoices.length; i++) {
    $('.list-group').append('<a href="#" class="list-group-item text-center"><p class="lead">' + data[index].answerChoices[i] + '</p></a>');
    }



//Hide all of the stuff from the page after they select an answer so we can inject the next question in.
//function hideThisStuff(){
//  $('#nextQuestion').hide();
//  $('#gif').hide();
//  $(".correct").hide();
//  $(".wrong").hide();



//}

//If they get the answer correct this will run.
function correct(){
  totalCorrect++;
  $("#title").replaceWith('<h2>' + "You Got It!" + '</h2>')
  $('#gameZone').replaceWith(correctGif[0]);
//$("#nextQuestion").html('<button class="btn">' + "Next Question" + '</button>');


}
//If they get the answer wrong this will run.
function wrong(){
  totalWrong++;
  $("#title").replaceWith('<h2>' + "Nope!" + '</h2>')
  $('#gameZone').replaceWith(wrongGif[0]);
//  $("#nextQuestion").html('<button class="btn">' + "Next Question" + '</button>');


}
//Function to show their current score after they select an answer.
function score(){
  $("#quiz").append('<h2>' + "Total Correct: " + totalCorrect + '</h2>')
  $("#quiz").append('<h2>' + "Total Wrong: " + totalWrong + '</h2>')
}

//Start game.
start();

//Setting the value of each answer to a letter that we can tie back to the booleans.
$('#quiz').on('click', function() {
 console.log($(this));
 if(this.id === "answer1"){
   var guess = 'A';
} else if(this.id === 'answer2') {
 	var guess = 'B';
} else if (this.id === 'answer3') {
 	var guess = 'C';
} else if (this.id === 'answer4') {
 	var guess = 'D';
}
console.log(guess)

//This will look for the
if((guess === 'A') && (questions[index].answer[0] === true)){
  correct();
  score();
} else if((guess ==='B') && (questions[index].answer[1] === true)){
  correct();
  score();
} else if((guess ==='C') && (questions[index].answer[2] === true)){
  correct();
  score();
} else if((guess ==='D') && (questions[index].answer[3] === true)){
  correct();
  score();
} else {
  wrong();
  score();

}

index++

if(index < questions.length){
  nextQuestion();
}
console.log('index' + index);
console.log(totalWrong);
console.log(totalCorrect);

 });



 });
