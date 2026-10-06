function savetoDb(data) {
    let internetSpeed = Math.floor(Math. random() * 10) + 1;
    if (internetSpeed > 4) {
        console.log("your data was saved : " + data);
    } else {
        console.log("weak connection. data not saved");
    }
} 