var timerEl = document.querySelector(".countdown");
var btnClick = document.querySelector(".card");
var timeLeft = 75;

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
  }
}

for (item in quizSheet) {
  quiz.push(quizSheet[item]);
} 

// Decrements timer (will use for wrong answers)
// Need to fix error where only the first .btn class is chosen
btnClick.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  console.log(quiz[i].answers[0].value);
  if (isButton) {
    console.log("Truuuuuue");
    
    if (null) {
      timeLeft = timeLeft - 5;
    }

    if (timeLeft > 0 && i < quiz.length - 1){
      i++;
      displayQuestion(quiz[i]);
    }
  }
});

for (item in quizSheet) {
  console.log(item);
  console.log(typeof item);
  console.log(quizSheet[item].questionText);
}

function displayQuestion(question) {
  var changeQuestion = document.querySelector(".question-content");
  changeQuestion.textContent = question.questionText;
  
  for (let i = 1; i < 5; i++) {
    var btnnum = ".btn"
    btnnum += i;
    var changeText = document.querySelector(btnnum);
    changeText.textContent = question.answers[i - 1].answer;
    changeText.setAttribute("data-number") === (i - 1);
  }
}

function questionLoop() {
  
  for (const question in quizSheet) {
    console.log(question);
    console.log(typeof question);
    console.log(quizSheet[question].questionText);
  }
}


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
displayQuestion(quiz[0]);



// example that will later turn into the scores for the user
// if (!localStorage.getItem("bgcolor")) {
//   populateStorage();
// } else {
//   setStyles();
// }

// function populateStorage() {
//   localStorage.setItem("btn1", document.querySelector(".btn1").innerHTML);

//   setStyles();
// }

// console.log(localStorage);

// function setStyles() {
//   const btnInnerHtml = localStorage.getItem("btn1");
// }


