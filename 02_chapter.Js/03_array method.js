
//Array Method
//let arr = [
//{
  //  name: "aman",
    //marks: 94.4,
//},
//{
  //  name: "megha",
    //marks: 90.9,
//},
//{
  //  name: "rajat",
    //marks: 85,
//},

//];

//arr .forEach((student) => {
  //  console.log(student.marks);
//});

//Map Method
//let num = [1, 2, 3, 4, 5];

//let double = num.map((el) => {
  //  return el * el;
//});

//Filter Method
//let nums = [1, 2, 3, 4, 5, 7, 9, 10, 11];
//let ans = nums.filter((el) => {
  //  return !(el % 2 == 0);

    //});

    //Reduce Method
   let nums = [1, 2, 3, 4];
    let finalVal = nums. reduce((res, el) => {
        console.log( res);
        return res + el;
    });
    console.log(finalVal);


    let arr = [1, 2, 3, 4, 5, 9, 10, 11];
    let max = -1;
    for (let i = 0; i < arr.length; i++) {
        if ( max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);