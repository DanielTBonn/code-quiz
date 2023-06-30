var timerEl = document.querySelector(".countdown");
var btnClick = document.querySelector(".btn");
var timeLeft = 5;

// Decrements timer (will use for wrong answers)
btnClick.addEventListener("click", () => {
    timeLeft = timeLeft - 5;
});

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