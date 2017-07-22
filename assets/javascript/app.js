$(document).ready(function() {

var questions = [

  {
    question:"John",
    answerChoices:["Doe","100","blue","red"],
    answer:[true, false, false, false]
},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]
},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]

},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]

},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]

},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]

},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]

},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]

},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]

},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]

},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]

},
{
    question:"John",
    answerChoices:["Doe","100","blue","red"]

}
]


var totalCorrect = 0;
var totalWrong = 0;



function questionSelect(showQuestion){
  $("#title").html('<h2>' + questions[showQuestion].question + '</h2>')
  $("#answer1").html('<button class="btn">' + questions[showQuestion].answerChoices[0] + '</button>');
  $("#answer2").html('<button class="btn">' + questions[showQuestion].answerChoices[1] + '</button>');
  $("#answer3").html('<button class="btn">' + questions[showQuestion].answerChoices[2] + '</button>');
  $("#answer4").html('<button class="btn">' + questions[showQuestion].answerChoices[3] + '</button>');

  console.log(showQuestion);
}



function start(){

  $('#gameStart').on('click', function() {
      index = 0
  		$(this).hide();
      questionSelect(index);
  		//countdownTimer.start();
  	});
}

function nextQuestion(){
  $('#nextQuestion').on('click', function() {
    $(this).hide();
    questionSelect(index);
  });
}

function correct(){
  totalCorrect++;
  $("#title").replaceWith('<h2>' + "You Got It!" + '</h2>')
  $('#gif').append('<iframe src="https://giphy.com/embed/vggLJGHF1dgTC" width="480" height="319" style="position:relative; left: 30%; frameBorder="0" class="giphy-embed" allowFullScreen></iframe>');
  $(".answers").hide();
  $("#nextQuestion").html('<button class="btn">' + "Next Question" + '</button>');


}

function wrong(){
  totalWrong++;
  $("#title").replaceWith('<h2>' + "Nope!" + '</h2>')
  $('#gif').append('<iframe src="https://giphy.com/embed/hPPx8yk3Bmqys" width="480" height="435" style="position:relative; left: 30%; frameBorder="0" class="giphy-embed" allowFullScreen></iframe>')
  $(".answers").hide();
  $("#nextQuestion").html('<button class="btn">' + "Next Question" + '</button>');


}

function score(){
  $(".correct").html('<h2>' + "Total Correct: " + totalCorrect + '</h2>')
  $(".wrong").html('<h2>' + "Total Wrong: " + totalWrong + '</h2>')
}

start();

$('.answers').on('click', function() {
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

if((guess === 'A') && (questions[index].answer[0] === true)){
  correct();
  score();
  nextQuestion();
} else {
  wrong();
  score();
  nextQuestion();

}
console.log(totalWrong);
console.log(totalCorrect);

 });



 });
