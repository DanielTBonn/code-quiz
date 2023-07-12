var timerEl = document.querySelector(".countdown");
var btnClick = document.querySelector(".card");
var timeLeft = 75;
var currentScore = 0;

var i = 0;
var quiz = [];

const quizSheet = {
  question1: {
    questionText: "JavaScript is a(n): ",
    answers: [
      {answer: "Object oriented programming language.", value: true},
      {answer: "Manual for brewing different coffees.", value: false},
      {answer: "A screenplay for Starbuck's rise to power.", value: false},
      {answer: "None of the above.", value: false}
    ]
  },
  question2: {
    questionText: "HTML stands for: ",
    answers: [
      {answer: "Historical Training Manuscript Ledgers", value: false},
      {answer: "HyperText Markup Language", value: true},
      {answer: "Healthy Tasty Mango Lattes", value: false},
      {answer: "None of the above", value: false}
    ]
  },
  question3: {
    questionText: "Which of the following do NOT prefix a variable assignment?",
    answers: [
      {answer: "const", value: false},
      {answer: "var", value: false},
      {answer: "let", value: false},
      {answer: "assign", value: true}
    ]
  },
  question4: {
    questionText: "Bootstrap helps web developers: ",
    answers: [
      {answer: "Develop frontend quickly with prebuilt features.", value: true},
      {answer: "A leather brace cowboys often use.", value: false},
      {answer: "A way to jerry-rig machines together.", value: false},
      {answer: "None of the above.", value: false}
    ]
  },
  question5: {
    questionText: "Do you think this assignment should get a 100?",
    answers: [
      {answer: "No", value: false},
      {answer: "Maybe", value: false},
      {answer: "Not sure", value: false},
      {answer: "Yes", value: true}
    ]
  }
}

for (item in quizSheet) {
  quiz.push(quizSheet[item]);
} 

btnClick.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  var index = Number(event.target.getAttribute("data-number"));
  var correct = quiz[i].answers[index].value;
  
  if (isButton) {

    if (!correct) {
      timeLeft = timeLeft - 15;
    } else {
      currentScore = score(currentScore, correct);
    }

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
      createLocalStorage();
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

function createLocalStorage() {
  if (!localStorage.getItem("score")) {
    populateStorage();
  } else {
    populateStorage();
  }
}

function populateStorage() {
  localStorage.setItem("score", calculateScore(currentScore, quiz.length));
}