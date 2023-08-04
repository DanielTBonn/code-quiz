// keeps track of important document variables on the page and displays test score
var resultSection = document.querySelector(".result");
var initialsForm = document.querySelector("#initials-form");
var scoreEl = document.createElement('h2');
scoreEl.textContent = "Score: " + window.localStorage.score;
scoreEl.setAttribute("class", " my-5 text-center")

resultSection.append(scoreEl);

// takes user input and stores it in local storage
function handleFormSubmit(event) {
    var initialsSubmit = document.querySelector("#initials-submit").value;
    localStorage.setItem("initials", initialsSubmit);
    
    var alertEl = document.querySelector(".alert");
    if (alertEl) {
      alertEl.remove();
    }

    if (initialsSubmit === '' || initialsSubmit.length > 3) {
        alert('Please enter your initials (up to 3 characters).', 'danger')
    } else {
        window.location.href = "./scores.html";
    }

    event.preventDefault();
}

// creates an alert message if user input is invalid
// Taken straight from the bootstrap website with minor changes https://getbootstrap.com/docs/5.1/components/alerts/
var alertPlaceholder = document.getElementById('liveAlertPlaceholder');

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}
// End of copied code

// applys the eventListener to the initailsForm variable
initialsForm.addEventListener('submit', handleFormSubmit);
