let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game is started");
        started = true;
    }
});    

function levelUp() {
    level++;
    document.querySelector("#level-title").textContent = "Level " + level;
    let randomNum = Math.floor(Math.random() * 4);
    let randomColor = ["red", "blue", "green", "yellow"][randomNum];
    gameSeq.push(randomColor);
    console.log(gameSeq);
}