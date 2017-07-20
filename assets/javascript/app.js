var one = {
    question:"John",
    answerChoices:["Doe","100","blue","red"]
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


$("#gameStart").click(function(){



     $("#title").replaceWith('<h1>' + one.question + ' </h1>');

      $("#answer1").html('<button class="btn">' + one.answerChoices[0] + '</button>');

      $("#answer2").html('<button class="btn">' + one.answerChoices[1] + '</button>');

      $("#answer3").html('<button class="btn">' + one.answerChoices[2] + '</button>');

      $("#answer4").html('<button class="btn">' + one.answerChoices[3] + '</button>');

      $(".btn-lg").hide();

      var userGuess = 1
      $("#answer1").click(function(){
        userGuess = 1
  });

      if (userGuess === 1){
        alert("You got it!");
      } else {
        alert("Wrong!");
      }

});
