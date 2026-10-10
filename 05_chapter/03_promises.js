//function savetoDb(data, success, failure) {
  //  let internetSpeed = Math.floor(Math. random() * 10) + 1;
    //if (internetSpeed > 4) {
      //  success();
    //} else {
      //  failure();
    //}
//} 

//savetoDb(
  //  "Megha Rajak",
    //() => {
      //  console.log(" success : your data was saved ");
        //savetoDb("hello world", () => {
          //  console.log(" success2 : your data was saved ");
        //}, () => {
          //  console.log(" failure2 : weak connection. data not saved");
        //});
   // },
    //() => {
      //  console.log(" failure : weak connection. data not saved");
    //}
//);


function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve();
        } else {
            reject();
        }
    });
}

savetoDb("Megha Rajak")