var timerEl = document.querySelector(".countdown");
var btnClick = document.querySelector(".btn");
var timeLeft = 75;

// Decrements timer (will use for wrong answers)
// Need to fix error where only the first .btn class is chosen
btnClick.addEventListener("click", () => {
    timeLeft = timeLeft - 5;
});

const quizSheet = {
  question: "This is the first question",
  answers: {
    answer1: {answer: "This is the first answer", value: true},
    answer2: {answer: "This is the second answer", value: false},
    answer3: {answer: "This is the third answer", value: false},
    answer4: {answer: "This is the fourth answer", value: false},
  }
}
console.log(quizSheet.answers.answer1);

function countdown() {
  var timeInterval = setInterval(function () {

    timerEl.textContent = timeLeft + ' seconds remanining';
    timeLeft--;
    
    if (timeLeft <= 0) {
      // End Quiz Here
      timerEl.textContent = 0 + ' seconds remanining';
      clearInterval(timeInterval);
    }
  }, 1000);
}

countdown();