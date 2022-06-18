let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let yourEmail = document.getElementById("yourEmail");

let yourPassword = document.getElementById("yourPassword");

let btnSignIn = document.getElementById("btnSignIn");

btnSignIn.onclick = function() {
    let FULL_NAME = `${firstName.value} ${lastName.value}`;
    localStorage.setItem("fullName" , FULL_NAME)
    localStorage.setItem("Mail" , yourEmail.value)
    localStorage.setItem("password" , yourPassword.value);
    location.href = "../sign in of we here/index.html"
}