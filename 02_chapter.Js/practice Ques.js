
//Practice Question 1
function printPoem() {
    console.log("Roses are red,");
    console.log("Violets are blue,");
    console.log("Sugar is sweet,");
    console.log("And so are you.");
}
//printPoem();


//practice Question 2
function rollDice() {
    let rand = Math.floor(Math.random()* 6) + 1;
    console.log(rand);
}

//rollDice();


//Practice Question 3
function calcAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}

//calcAvg(10, 20, 30);


//Practice Question 4
function printTable(n) {
    for (let i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}

//printTable(10);


//Practice Question 5
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

        return sum;
}
