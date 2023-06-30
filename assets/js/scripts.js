var timerEl = document.querySelector(".countdown");

function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {

      timerEl.textContent = timeLeft + ' seconds remanining';
      timeLeft--;
      if (timeLeft === 0) {
        clearInterval(timeInterval);
      }
    }, 1000);
  }

countdown();