let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let yourEmail = document.getElementById("yourEmail");

let yourPassword = document.getElementById("yourPassword");

let btnSignIn = document.getElementById("btnSignIn");



btnSignIn.onclick = function() {
    let user = {
        full_name : `${firstName.value} ${lastName.value}`,
        Email : yourEmail.value,
        password : yourPassword.value,
    }
    localStorage.setItem("user" , JSON.stringify(user))
}