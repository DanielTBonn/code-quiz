console.log(window.localStorage);
var resultSection = document.querySelector(".result");
var initialsForm = document.querySelector("#initials-form");
var scoreEl = document.createElement('h2');
scoreEl.textContent = window.localStorage.score;

resultSection.append(scoreEl);

function handleFormSubmit(event) {
    var initialsSubmit = document.querySelector("#initials-submit").value;
    localStorage.setItem("initials", initialsSubmit);
    if (localStorage.getItem('initials') === '') {
        console.log("nothing in string");
    } else {
        window.location.href = "./scores.html";
    }
    event.preventDefault();
}

console.log(initialsForm);
initialsForm.addEventListener('submit', handleFormSubmit);
