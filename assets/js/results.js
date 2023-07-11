console.log(window.localStorage);
var resultSection = document.querySelector(".result");
var initialsForm = document.querySelector("#initials-form");
var scoreEl = document.createElement('h2');
scoreEl.textContent = window.localStorage.score;

resultSection.append(scoreEl);

function handleFormSubmit(event) {
    var initialsSubmit = document.querySelector("#initials-submit").value;
    localStorage.setItem("initials", initialsSubmit);
    console.log(typeof initialsSubmit);
    if (initialsSubmit === '' || initialsSubmit.length > 3) {
        console.log("nothing in string");
        alert('Please enter your initials (up to 3 characters).', 'danger')
    } else {
        window.location.href = "./scores.html";
    }
    event.preventDefault();
}

// Taken straight from the bootstrap website with minor changes https://getbootstrap.com/docs/5.1/components/alerts/
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

// if (alertTrigger) {
//   alertTrigger.addEventListener('click', function () {
//     alert('Please enter your initials (up to 3 characters).', 'danger')
//   })
// }
// End of copied code

console.log(initialsForm);
initialsForm.addEventListener('submit', handleFormSubmit);
