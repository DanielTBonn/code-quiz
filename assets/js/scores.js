var initials = localStorage.getItem("initials");
var scores = localStorage.getItem("score");
var ulEl = document.querySelector("#history");


console.log(initials, scores);
console.log(localStorage.getItem("items"));

function getStorage() { 
    
    var items = [];
    if (localStorage.items) {
        console.log("its there!");
        items = JSON.parse(localStorage.items);
    } else {
        console.log(false);
    }

    return items;
}


function addStorage(items, intials, scores) {
    items.push([initials, scores]);
    localStorage.setItem("items", JSON.stringify(items));
    
}

items = getStorage();
addStorage(items, initials, scores);

console.log(items);

console.log(localStorage);
console.log(localStorage.getItem("items"));

function createScores(items) {
    for (let i = 0; i < items.length; i++) {
        var listEl = document.createElement("li");
        listEl.textContent = items[i][0] + " - " + items[i][1];
        ulEl.append(listEl);
    }
}

createScores(items);

