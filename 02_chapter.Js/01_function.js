//function hello() {
    //console.log("hello");
//}

function printName() {
    console.log("My name is Megha Rajak");
}

printName();


//function with arguments
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}

printInfo("Megha", 19);


//Function Scope
function calsum(a, b) {
    let sum = a + b;
    console.log(sum);
}

calsum(10, 20);


//Block Scope
let age = 19;
if (age >= 18) {
    let str = "Adult";
    console.log(str);
}


//Lexical Scope
//function outerFunc() {
  //  let x = 5;
    //let y = 6;
   // function innerFunc() {
       // console.log( x );
//}

//innerFunc();
//}


//Function Expression
//let name = "megha";

//let sum = function (a, b) {
  //  return a + b;
//}

//let hello = function () {
  //  console.log("hello");
//}


//Higher order function
function multipleGreet(func, count) {
    for( let i=1; i<=count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(function() {console.log("nameste")}, 10000);