var timerEl = document.querySelector(".countdown");
var btnClick = document.querySelector(".card");
var timeLeft = 20;
var currentScore = 0;

var i = 0;
var quiz = [];

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
  },
  question3: {
    questionText: "This is the third question",
    answers: [
      {answer: "This answer is untrue", value: false},
      {answer: "This answer is untrue", value: false},
      {answer: "This answer is untrue", value: false},
      {answer: "This is true answer", value: true}
    ]
  },
  question4: {
    questionText: "This is the fourth question",
    answers: [
      {answer: "This is true answer", value: true},
      {answer: "This answer is untrue", value: false},
      {answer: "This answer is untrue", value: false},
      {answer: "This answer is untrue", value: false}
    ]
  },
  question5: {
    questionText: "This is the fifth question",
    answers: [
      {answer: "This answer is untrue", value: false},
      {answer: "This answer is untrue", value: false},
      {answer: "This answer is untrue", value: false},
      {answer: "This is true answer", value: true}
    ]
  }
}

for (item in quizSheet) {
  quiz.push(quizSheet[item]);
} 

// Decrements timer (will use for wrong answers)
btnClick.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  var index = Number(event.target.getAttribute("data-number"));
  var correct = quiz[i].answers[index].value;
  if (isButton) {
    console.log(correct);
    if (!correct) {
      timeLeft = timeLeft - 15;
    } else {
      currentScore = score(currentScore, correct);
    }
    console.log(currentScore);
    console.log(calculateScore(currentScore,quiz.length));


    if (timeLeft > 0 && i < quiz.length - 1){
      i++;
      displayQuestion(quiz[i]);
    } else {
      i++;
    }

    if (i > quiz.length - 1) {
      createLocalStorage();
      window.location.href = "./results.html"
    }
  }
});

function displayQuestion(question) {
  var changeQuestion = document.querySelector(".question-content");
  changeQuestion.textContent = question.questionText;
  
  for (let i = 1; i < 5; i++) {
    var btnnum = ".btn"
    btnnum += i;
    var changeText = document.querySelector(btnnum);
    changeText.textContent = question.answers[i - 1].answer;
    changeText.setAttribute("data-number", i - 1);
  }
}

function countdown() {
  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft + ' seconds remanining';
    timeLeft--;
    if ((timeLeft < 0) || (i > quiz.length - 1)) {
      // End Quiz Here
      createLocalStorage();
      console.log(localStorage);
      timerEl.textContent = 0 + ' seconds remanining';
      clearInterval(timeInterval);
      window.location.href = "./results.html"
    }
  }, 1000);
}

function score(currentScore, correct) {
  if (correct) {
    return currentScore + 1;
  }
}

function calculateScore(currentScore, quizLength) {
  return Math.floor((currentScore / quizLength) * 100);
}

countdown();
displayQuestion(quiz[0]);


// example that will later turn into the scores for the user
function createLocalStorage() {
  if (!localStorage.getItem("score")) {
    populateStorage();
  } else {
    // localStorage.clear("score");
    populateStorage();
    // setStyles();
  }
}

function populateStorage() {
  localStorage.setItem("score", calculateScore(currentScore, quiz.length));

  // setStyles();
}

console.log(localStorage);

// function setStyles() {
//   const btnInnerHtml = localStorage.getItem("btn1");
// }


