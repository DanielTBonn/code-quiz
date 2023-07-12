var initials = localStorage.getItem("initials");
var scores = localStorage.getItem("score");
var ulEl = document.querySelector("#history");

function getStorage() { 
    var items = [];

    if (localStorage.items) {
        items = JSON.parse(localStorage.items);
    } 
    return items;
}

function addStorage(items, intials, scores) {
    if (initials === 'null' || scores === 'null') {
        return;
    }

    items.push([initials, scores]);
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("initials", null);
    localStorage.setItem("score", null);
}

function createScores(items) {
    for (let i = 0; i < items.length; i++) {
        var listEl = document.createElement("li");
        listEl.textContent = items[i][0] + " - " + items[i][1];
        listEl.setAttribute("class", "list-group-item");
        ulEl.append(listEl);
    }
}

items = getStorage();
addStorage(items, initials, scores);
createScores(items);

var clearBtn = document.querySelector(".local-clear");
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = "./index.html";
})





