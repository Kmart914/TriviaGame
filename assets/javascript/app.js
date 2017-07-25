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

    highlightActive();
    console.log('questionId: ' + data[index].id);

  }

  function highlightActive(){
    $(".list-group-item").click(function() {
      var txt = $(this).text();
      $(".list-group-item").removeClass('active');
      $(this).addClass('active');
      checkAnswer(txt);

    });

  }
  function checkAnswer(choice){
    if(choice !== data[index].answer) {
      index++;
      totalWrong++;
    } else {
      index++;
      totalCorrect++;
    }
    console.log('right: ' + totalCorrect, 'wrong: ' + totalWrong);
    console.log(index);
    // get the next question
      getQuestion();
      endGame();

  }

  function endGame(){
    if(data[index].id === 10 && totalWrong > totalCorrect) {
      $("#display").html('<div id="choices" class="list-group-item-disabled"><h1>' + "You Lose!" +'</h1></div>');
      $("#display").append('<div id="choices" class="list-group-item-disabled"><h3>' + "Total Correct: " + totalCorrect +'</h3></div>');
      $("#display").append('<div id="choices" class="list-group-item-disabled"><h3>' + "Total Wrong: " + totalWrong +'</h3></div>');
      $("#quiz").html('<iframe src="https://giphy.com/embed/hPPx8yk3Bmqys" width="480" height="435" style="position:relative; left: 30%; frameBorder="0" class="giphy-embed" allowFullScreen></iframe>');
    } else if  (data[index].id === 10 && totalWrong < totalCorrect) {
      $("#display").html('<div id="choices" class="list-group-item-disabled"><h1>' + "You Win!" +'</h1></div>');
      $("#display").append('<div id="choices" class="list-group-item-disabled"><h3>' + "Total Correct: " + totalCorrect +'</h3></div>');
      $("#display").append('<div id="choices" class="list-group-item-disabled"><h3>' + "Total Wrong: " + totalWrong +'</h3></div>');
      $("#quiz").html('<iframe src="https://giphy.com/embed/vggLJGHF1dgTC" width="480" height="319" style="position:relative; left: 30%; frameBorder="0" class="giphy-embed" allowFullScreen></iframe>');
    } else if (data[index].id === 10 && totalWrong === totalCorrect){
      $("#display").html('<div id="choices" class="list-group-item-disabled"><h1>' + "Good Job...." +'</h1></div>');

  }
  // console.log("Lose")

  }

  // actions
    $("#gameStart").on('click', function() {
       start();
    })


  });
