let btns = document.querySelectorAll("button");
//console.dir(btn);

//btn.onclick = function() {
//  console.log("button was clicked");
//};

for (btn of btns) {
    btn.onclick = sayHello;
    btn.onmouseenter = function() {
        console.log("mouse is here");
    };  
    console.dir(btn);
}

function sayHello() {
    alert("Hello World");
}