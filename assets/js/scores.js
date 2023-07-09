var initials = localStorage.getItem("initials");
var scores = localStorage.getItem("score");

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

