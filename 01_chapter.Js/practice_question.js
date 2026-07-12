
//Practice Ques.1
let color = "yellow";

//Traffic light system
if (color === "red") {
    console.log("Stop - Light color is red.");
}
if (color === "yellow") {
    console.log("Get Ready - Light color is yellow.");
}
if (color === "green") {
    console.log("Go - Light color is green.");
}


//Practice Ques.2
let size = "XL";
//Popcorn size system
if (size === "S") {
    console.log("  Price is Rs. 50.");
}
if (size === "M") {
    console.log("  Price is Rs. 100.");
}
if (size === "L") {
    console.log("  Price is Rs. 200.");
}
if (size === "XL") {
    console.log("  Price is Rs. 250.");
}



//Practice Ques.3
let num = 12;
if((num % 3) === 0 && ( (num+1 == 15) || (num-1 == 11) )) {
    console.log("safe");
 } else {
    console.log("not safe");
}


//Practice Ques.4
let day = 5;
//Day of the week system
switch (day) {
 case 1:
  console.log("Monday.");
  break;
case 2:
  console.log("Tuesday.");
  break;
case 3:
  console.log("Wednesday.");
  break;
case 4:
  console.log("Thursday.");
  break;
case 5:
  console.log("Friday.");
  break;
case 6:
  console.log("Saturday , Fun day.");
  break;
case 7:
  console.log("Sunday.");
  break;
default:
  console.log("Invalid day.");
}


let msg = "hello!";
console.log(msg.trim().toUpperCase());


// tic-tac-toe game 
let game = [
        ['X', null,'O'],
        [null, 'X', null], 
        ['O', null, 'X']
       ];

       console.log(game);