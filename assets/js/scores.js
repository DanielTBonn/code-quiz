var initials = localStorage.getItem("initials");
var scores = localStorage.getItem("score");
var ulEl = document.querySelector("#history");


console.log(initials, scores);

var items = [];

if (localStorage.items) {
    console.log("its there!");
    items = JSON.parse(localStorage.items);
} else {
    console.log(false);
}

items.push([initials, scores]);
console.log(items);

localStorage.setItem("item", JSON.stringify(items));
console.log(localStorage.getItem("item"));

var listEl = document.createElement("li");
listEl.textContent = items[0][0] + " - " + items[0][1];
ulEl.append(listEl);

