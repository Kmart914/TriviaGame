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

$("#button").click(function(){

     $("#title").replaceWith('<h1>' + one.question + ' </h1>');

      $("#answers").append('<h3>' + one.answerChoices[0] + ' </h3>');

      $("#answers").append('<h3>' + one.answerChoices[1] + ' </h3>');

      $("#answers").append('<h3>' + one.answerChoices[2] + ' </h3>');

      $("#answers").append('<h3>' + one.answerChoices[3] + ' </h3>');

      $(".btn").html("<p>" + 'Submit' + "</p>")

   console.log(one);
});
