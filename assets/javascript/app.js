$(document).ready(function() {

var one = {
    question:"John",
    answerChoices:["Doe","100","blue","red"],
    answer:[true, false, false, false]
};

var two = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var three = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var four = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var five = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var six = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var seven = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var eight = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var nine = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var ten = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var eleven = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var twelve = {
    Audio:"John",
    answerChoices:["Doe","100","blue","red"]

};

var questions = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve];

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

function correct(){
  totalCorrect++;
  $("title").html("You Got It! ")
  $('#gif').append(<div style="width:100%;height:0;padding-bottom:67%;position:relative;"><iframe src="https://giphy.com/embed/vggLJGHF1dgTC" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/celebrate-wall-david-hasselhoff-vggLJGHF1dgTC">via GIPHY</a></p>)
}

function wrong(){
  totalWrong++;
  $("title").html("You Got It! ")
  $('#gif').append(<div style="width:100%;height:0;padding-bottom:91%;position:relative;"><iframe src="https://giphy.com/embed/hPPx8yk3Bmqys" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/request-donald-wrong-hPPx8yk3Bmqys">via GIPHY</a></p>)
}

start();


 });
