const counter = document.querySelector("button#counter");
const proceed = document.querySelector("button#proceed");
const textarea = document.querySelector("#floatingTextarea2");

function switchCategory(category) {
    document.querySelectorAll("a.nav-link").forEach(e => {
        e.classList.remove("active")
    });
    document.querySelector("a.nav-link#"+category).classList.add("active")
}

function count(id) {
    return textarea.value.split(`${id == "symbol" ? "" : " "}`).length
}

proceed.onclick = () => {
    var a = document.querySelector("a.nav-link.active").id.split("");
    a[0] = a[0].toUpperCase();
    counter.innerText = `${a.join("")}s counted: ${count(document.querySelector("a.nav-link.active").id)}`
}