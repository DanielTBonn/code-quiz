console.log(window.localStorage);
var bodySelector = document.querySelector("body");
var scoreEl = document.createElement('h1');
scoreEl.textContent = "hi";

bodySelector.append(window.localStorage.score);