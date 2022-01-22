function validateForm() {
    var validateUsername = document.forms["yourForm"]["yourUsername"].value; //username validation
    if (validateUsername.length < 3 || validateUsername == "") {
        forUsername.style.display = "block";
        usernameInput.style.border = "2px solid red";
    } else {
        usernameInput.style.border = "2px solid green";
    }

    var validateUseremail = document.forms["yourForm"]["yourEmail"].value; //email validation
    if (validateUseremail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

        emailInput.style.border = "2px solid green";
    } else {
        forEmail.style.display = "block";
        emailInput.style.border = "2px solid red";
    }

    var validatePassword = document.forms["yourForm"]["yourPassword"].value; // password validation
    if (validatePassword.length < 6 || validatePassword == "") {
        forPassword.style.display = "block";
        passwordInput.style.border = "2px solid red";
    } else {
        passwordInput.style.border = "2px solid green";
    }

    var validateConfirmPassword = document.forms["yourForm"]["yourConfirmPassword"].value; //confirm password validation
    if (validateConfirmPassword === validatePassword) {
        passwordConfirmInput.style.border = "2px solid green";
    } else {
        forConfirmPassword.style.display = "block";
        passwordConfirmInput.style.border = "2px solid red";
    }
}

button.addEventListener("click", function(event) { //adding event listener to submit button
    event.preventDefault();
    validateForm();
});