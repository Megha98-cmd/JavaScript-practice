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

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    console.log(randBtn);
    console.log(randColor);
    console.log(randomIdx);
    btnFlash(randBtn);
}