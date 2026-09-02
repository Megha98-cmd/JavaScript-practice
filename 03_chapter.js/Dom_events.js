let btns = document.querySelectorAll("button");
//console.dir(btn);

//btn.onclick = function() {
//  console.log("button was clicked");
//};

for (btn of btns) {
   // btn.onclick = sayHello;
   // btn.onmouseenter = function() {
        btn.addEventListener("click", sayHello);
        btn.addEventListener("click", sayName);
    }  
    

function sayHello() {
    alert("Hello World");
}

function sayName(){
    alert("My name is Megha");
}