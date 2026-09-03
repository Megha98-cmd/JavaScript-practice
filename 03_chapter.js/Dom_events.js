//let btns = document.querySelectorAll("button");
//console.dir(btn);

//btn.onclick = function() {
//  console.log("button was clicked");
//};

//for (btn of btns) {
   // btn.onclick = sayHello;
   // btn.onmouseenter = function() {
      //  btn.addEventListener("click", sayHello);
       // btn.addEventListener("click", sayName);
         //btn.addEventListener("dblclick", function () {
          //  console.log(" You Double Clicked me");
       // });
   // }  
    

//function sayHello() {
 //   alert("Hello World");
//}

//function sayName(){
 //   alert("My name is Megha");
//}


//Activity

let  btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

     let div = document.querySelector("div");
     div.style.backgroundColor = randomColor;

    console.log("Color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}