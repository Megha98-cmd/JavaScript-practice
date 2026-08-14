function sum(a = 2, b = 3) {
    return a + b;
}

sum(3, 5); // returns 8
sum(3); // returns 6
sum(); // returns 5



// Spread(Array literal)
let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];

let chars = [..."hello"];


let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];

//Rest  
function sum(...args) {
    //arguments is an array-like object, but not an array
    for (let i = 0; i < args.length; i++) {
        console.log("you gave us: ", args[i]);
    }

}

function min(...args) {
    return args.reduce((min, el) => {
        if(min > el) {
            return el;
        } else {
            return min;
        }
    });
}