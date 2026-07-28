
//Array Method
let arr = [
{
    name: "aman",
    marks: 94.4,
},
{
    name: "megha",
    marks: 90.9,
},
{
    name: "rajat",
    marks: 85,
},

];

arr .forEach((student) => {
    console.log(student.marks);
});

//Map Method
let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
    return el * el;
});