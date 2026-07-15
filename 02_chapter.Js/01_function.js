function hello() {
    console.log("hello");
}

function printName() {
    console.log("My name is Megha Rajak");
}

printName();


//function with arguments
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}

printInfo("Megha Rajak", 19);


//Function Scope
function calsum(a, b) {
    let sum = a + b;
    console.log(sum);
}

calsum(10, 20);
