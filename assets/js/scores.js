console.log(window.localStorage);
var bodySelector = document.querySelector("body");
var scoreEl = document.createElement('h1');
scoreEl.textContent = window.localStorage.score;

bodySelector.append(scoreEl);