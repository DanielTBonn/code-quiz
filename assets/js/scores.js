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

function addStorage(items, initials, scores) {
    if (initials === 'null' || scores === 'null') {
        return;
    }

    items.push([scores, initials]);
    items = bblSort(items);
    items.reverse();
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("initials", null);
    localStorage.setItem("score", null);
}

function createScores(items) {
    for (let i = 0; i < items.length; i++) {
        var listEl = document.createElement("li");
        listEl.textContent = items[i][1] + " - " + items[i][0];
        listEl.setAttribute("class", "list-group-item");
        ulEl.append(listEl);
    }
}

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

items = getStorage();
addStorage(items, initials, scores);
createScores(items);

var clearBtn = document.querySelector(".local-clear");
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = "./index.html";
})


