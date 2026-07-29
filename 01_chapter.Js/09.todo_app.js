let todo=[];

let request = prompt("Please enter your request");

while(true) {
    if(request == "quit") {
        console.log("You have quit the app");
        break;
    } else if(request == "list") {
        console.log("**********");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        //console.log("**********");
    } else if(request == "add") {
       let task = prompt("please enter your task you want to add");
        todo.push(task);
        console.log("task added");
    }else if(request == "delete") {
        let index = prompt("Please enter the index of the task ");
        todo.splice(index, 1);
    }else {
        console.log("Unknown request");
    }
    
    request = prompt("Please enter your request");
}



//Guessing Game
const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("you guessed it right");
        break;
    } else if(guess < random) {
        guess = prompt("hint: your guess is too small, try again");
    }else{
        guess = prompt("hint: your guess is too large, try again");
    }
}
