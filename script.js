$(function() {
var timer = 60;
var questions = [{

    question: "Which is not a javascript element?",
    answers: ['variables','functions','tuple','conditional'],
    correctAnswer: "tuple"
},
{
    question: "What is my name?",
    answers: ['Mike', "Jason","John",'Steven'],
    correctAnswer: "Jason"
}]

// This function loops through the array of questions and answers
function qNa() {
    
    var $questionContainer = $('<div>')
    $questionContainer.text(questions[0].question)
    $(".main-section").append($questionContainer)

    for (i=0; i<questions[0].answers.length; i++) {
    var $answers = $("<button id=answer-" + i+1 + " >")
    $answers.text(questions[0].answers[i])
    $(".main-section").append($answers)
    }

    $("#answer-" + i+1).on("click", function() {
        let answer1 = $("#answer-" + i+1)
        console.log(answer1);
            if (answer1 === questions[0].correctAnswer) {
                alert("Correct!");
} else {
    alert("Wrong!");
}
    })
}


// Start Quiz
$(".start").on("click", function() {
    $(".start-section").hide();
    $(".timer").text("Time Remaining: " + timer);
    var countDown = setInterval(function() {
        timer--;
        if (timer === 0) {
            clearInterval(countDown);
        }
        $(".timer").text("Time Remaining: " + timer);
    }, 1000);

    qNa();
})



}) // End Ready