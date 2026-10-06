h1 = document.querySelector("h1");

function changeColor(color){
    setTimeout(() => {)
    h1.style.color = color;
}

setTimeout( () => {
    h1.style.color = "red";
}, 1000);


setTimeout( () => {
    h1.style.color = "blue";
}, 2000);


setTimeout( () => {
    h1.style.color = "green";
}, 3000);