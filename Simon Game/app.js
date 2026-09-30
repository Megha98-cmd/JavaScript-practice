let gameSeq=[];
let userSeq=[];

let btns = ["green", "red", "yellow", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});  

function gameFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("Flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}


function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    //console.log(randBtn);
    //console.log(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
      if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length) {
           setTimeout(levelUp, 1000);
        }
      } else {
         h2.innerText = `Game over! Press any key to start.`;
      }
}

function btnPress () {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}