let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    console.log(username.value);
    console.log(password.value);


    alert(`Hi ${username.value}, your password is ${password.value}`);
});


//let user = document.querySelector("#user");

//user.addEventListener("change", function (){
//    console.log("input changed");
//    console.log("final value = ", this.value);
//});