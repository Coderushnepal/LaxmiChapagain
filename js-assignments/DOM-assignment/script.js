// Wrapper div
var wrapper = document.createElement("div");
wrapper.classList = "wrapper";

// Create Input field 
var divForInput = document.createElement("div");
document.body.appendChild(divForInput);
divForInput.classList = "inputclass"
var userNameInput = document.createElement("input");
userNameInput.type = "password";
// userNameInput.className = "userNameInput";
userNameInput.id = "userNameInput";
userNameInput.placeholder = "Your Password";
divForInput.appendChild(userNameInput);
wrapper.appendChild(divForInput);

// Create icon
var eyeSlashIcon = document.createElement("i");
eyeSlashIcon.className = "fa fa-eye-slash";
eyeSlashIcon.id = "eyeToggle";
divForInput.appendChild(eyeSlashIcon);

// Logic for hiding and showing password
eyeSlashIcon.addEventListener("click", function() {
    if (userNameInput.type === "password") {
        userNameInput.type = "text";
        eyeSlashIcon.className = "fa fa-eye";
    } else {
        userNameInput.type = "password";
        eyeSlashIcon.className = "fa fa-eye-slash";
    }
});

//  Forgot Password
var divForForgotAndNext = document.createElement("div");
divForForgotAndNext.className = "divForForgotAndNext";
var forgotPassword = document.createElement("button");
forgotPassword.className = "forgotPassword";
forgotPassword.innerHTML = "Forgot Password";

// Logic for forgot password
forgotPassword.addEventListener("click", function(event) {
    var userNameInputValue = document.getElementById("userNameInput")
    userNameInputValue.value = "";
})

//  Creation of Next Button
var next = document.createElement("button");
next.innerHTML = "Next";
next.className = "next"
divForForgotAndNext.appendChild(forgotPassword);
divForForgotAndNext.appendChild(next);
wrapper.appendChild(divForForgotAndNext);
document.body.appendChild(wrapper)
    // document.body.appendChild(divForForgotAndNext);

// Logic for Next Button
next.addEventListener("click", function() {
    console.log("Your Password is:" + userNameInput.value);
})