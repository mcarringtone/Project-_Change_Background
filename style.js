let button;
let body;
const colors = ['red','blue', 'green','yellow','pink', 'purple']

document.addEventListener("DOMContentLoaded", ()=> {
    button = document.querySelector("button");
    body = document.body;

    body.style.backgroundColor = "violet";
    button.addEventListener("click", changeBackground)
});

function changeBackground () {
    const colorIndex = parseInt(Math.random()*colors.length - 1)
    body.style.backgroundColor = colors[colorIndex];
}

