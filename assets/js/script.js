var timerEl = document.querySelector(".countdown");
var btnClick = document.querySelector(".btn");
var timeLeft = 75;

// Decrements timer (will use for wrong answers)
// Need to fix error where only the first .btn class is chosen
btnClick.addEventListener("click", () => {
    timeLeft = timeLeft - 5;
});

const quizSheet = {
  question1: {
    questionText: "This is the first question",
    answers: [
      {answer: "This is the first answer", value: true},
      {answer: "This is the second answer", value: false},
      {answer: "This is the third answer", value: false},
      {answer: "This is the fourth answer", value: false}
      ]
  },
  question2: {
    questionText: "This is the second question",
    answers: [
      {answer: "This answer is untrue", value: false},
      {answer: "This is true answer", value: true},
      {answer: "This answer is untrue", value: false},
      {answer: "This answer is untrue", value: false}
      ]
  }
}

function displayQuestion(question) {
  var changeQuestion = document.querySelector(".question-content");
  changeQuestion.textContent = quizSheet.question1.questionText;
  for (let i = 1; i < 5; i++) {
    var btnnum = ".btn"
    btnnum += i;
    var changeText = document.querySelector(btnnum);
    changeText.textContent = quizSheet.question1.answers[i - 1].answer;
  }
}

displayQuestion("hi");

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