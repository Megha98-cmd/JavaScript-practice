h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        nextColorChange();
    }, delay);
}

changeColor("red", 1000);
changeColor("blue", 2000);
changeColor("green", 3000);