console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

//for loop
for (let i = 0; i <=5; i++) {
    console.log(i);
}

//print odd numbers
for(let i = 1; i <= 15; i=i+2) {
    console.log(i);
}   

console.log("backwards");

for(let i =15; i>=1; i--) {
    console.log(i);
}


//print even numbers
for (let i = 2; i <= 10; i = i+2) {
    console.log(i);
}


//Multiplication table for 5
for(let i =5; i <= 50; i=i+5) {
    console.log(i);
}
   
//let n = prompt("write your number");
//n = parseInt(n);

//for(let i=n; i<=10*n; i=i+n) {
  //  console.log(i);
//}


//Favorite Movie
//const favoriteMovie = "Pritam and Petro";

//let guess = prompt("Guess my favorite movie");

//while( (guess != favoriteMovie) && (guess != "Quite") ) {
  //  guess = prompt("Wrong Guess! Please try again");
//}

//if (guess == favoriteMovie) {
 //   console.log("You guessed it right!");
//}
//else {
   // console.log("You gave up!");
//}

//Loop with Array
//let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

//for (let i = 0; i < fruits.length; i++) {
//    console.log(i,fruits[i]);
//}

//Nested Loop
let heroes = [
            ["Ironman", "Spiderman", "Batman", "Superman"],
            ["Wonder Woman", "Black Widow", "Carol Danvers", "Storm"]
         ]

         for (let i=0; i < heroes.length; i++) {
            console.log(i, heroes[i], heroes[i].length);
            for (let j = 0; j < heroes[i].length; j++) {
                console.log(`j=${j}, ${heroes[i][j]}`);
            }
        }
    

        //for-of loop
        let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

        for (let fruit of fruits) {
            console.log(fruit);
        }

        for(char of "MeghaRajak") {
            console.log(char);
        }
