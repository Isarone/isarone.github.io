
var arr = Array.from(document.querySelectorAll("ul.list-inspeccion a"));
arr.forEach(x => x.addEventListener("click", item));

function item(event) {
    console.log(event.currentTarget?.dataset.id)
}