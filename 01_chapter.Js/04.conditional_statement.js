//Conditional Statement
console.log("Before my if statement");
let age = 20;
if (age >= 18) {
    console.log("you can vote");
    console.log("you can drive");
}
if (age > 20) {
    console.log("you can join the army");
}
console.log("After my if statement");



//else if statement
let marks = 28;
if (marks >= 90) {
    console.log("A+");
}
else if (marks >= 80) {
    console.log("A");
}
else if (marks >= 70) {
    console.log("B");
}
else if (marks >= 33) {
    console.log("D");
}
else if(marks < 33) {   
    console.log("Fail");
}



//else statement
let color = " ";

if (color === "red") {
    console.log("Stop");
}else if (color === "yellow") {
    console.log("Get Ready");
}else if (color === "green") {
    console.log("Go");
}else {
    console.log("Traffic light is broken.");
}