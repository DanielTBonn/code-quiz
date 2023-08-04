// variables that will keep track of items we recently added to localStorage and the place we will put past results
var initials = localStorage.getItem("initials");
var scores = localStorage.getItem("score");
var ulEl = document.querySelector("#history");

// retrieves localStorage and returns it as an array
function getStorage() { 
    var items = [];

    if (localStorage.items) {
        items = JSON.parse(localStorage.items);
    } 
    return items;
}

// checks to see if initials and scores are not null, then appends them to items and sorts them from highest to lowest before setting them in localStorage
function addStorage(items, initials, scores) {
    if (initials === 'null' || scores === 'null') {
        return;
    }

    items.push([scores, initials]);
    items = bblSort(items);
    items.reverse();

    if (items.length > 10) {
        items = items.slice(0,10);
    }

    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("initials", null);
    localStorage.setItem("score", null);
}

// displays previous results to the page
function createScores(items) {
    for (let i = 0; i < items.length; i++) {
        var listEl = document.createElement("li");
        listEl.textContent = items[i][1] + " - " + items[i][0];
        listEl.setAttribute("class", "list-group-item");
        ulEl.append(listEl);
    }
}

// sorting function placing scores highest to lowest
function bblSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (Number(arr[j][0]) >= Number(arr[j + 1][0])) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

// variable to retrieve localStorage and runs the functions of the page
items = getStorage();
addStorage(items, initials, scores);
createScores(items);

// button that clears previous test scores
var clearBtn = document.querySelector(".local-clear");
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = "./index.html";
});


