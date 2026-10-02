function hello() {
    console.log("inside hello function");
    console.log('Hello, world!');
}

function demo() {
    console.log("calling hello function");
    hello();
}


console.log("calling demo function");
demo();
console.log("done, bye!");
