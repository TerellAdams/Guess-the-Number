var correctAnswer = Math.ceil(Math.random() * 10);

$(".check").click(function() {
    var guess = $(".number").val();
    if (guess < correctAnswer) {
      answerTooLow();
    } else if (guess > correctAnswer) {
        answerTooHigh();
    } else {
        answerJustRight();
    }
});

function answerTooLow(){
        $(".message").text("Too low!");
        $(".message").css("color", "blue");
}
function answerTooHigh(){
        $(".message").text("Too high!");
        $(".message").css("color", "red");
}
function answerJustRight(){
        $(".message").text("Just right.");
        $(".message").css("color", "darkgreen");
}