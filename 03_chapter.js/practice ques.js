let para1 =document.createElement('p');
para1.innerText = "Hey I'm red!";
document.body.appendChild(para1);

para1.classList.add('red');



let h3 =document.createElement('h3');
h3.innerText = "I'm a blue h3!";
document.body.appendChild(h3);
h3.classList.add('blue');


//let div = document.createElement("div");
//let h1 = document.createElement("h1");
let para2 = document.createElement("p");

//h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

//div.appendChild(h1);
div.appendChild(para2);
div.classList.add('box');
document.body.appendChild(div);