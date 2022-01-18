var divForInput = document.createElement("div");

document.body.appendChild(divForInput);

var userNameInput = document.createElement("input");

userNameInput.type = "password";

userNameInput.className = "userNameInput";

userNameInput.style.size = "50";

divForInput.appendChild(userNameInput);

userNameInput.placeholder = "Your Password";

var eyeSlashIcon = document.createElement("i");

eyeSlashIcon.className = "fa fa-eye-slash";

eyeSlashIcon.id = "eyeToggle";

divForInput.appendChild(eyeSlashIcon);

eyeSlashIcon.addEventListener("click", function() {
    if (userNameInput.type === "password") {
        userNameInput.type = "text";
        eyeSlashIcon.className = "fa fa-eye";
    } else {
        userNameInput.type = "password";
        eyeSlashIcon.className = "fa fa-eye-slash";
    }
});

var divForForgotAndNext = document.createElement("div");

divForForgotAndNext.className = "divForForgotAndNext";


var forgotPassword = document.createElement("a");

forgotPassword.className = "forgotPassword";

forgotPassword.innerHTML = "Forgot Password";

forgotPassword.setAttribute("href", "#");

var next = document.createElement("button");

next.innerHTML = "Next";

next.className = "next"

divForForgotAndNext.appendChild(forgotPassword);

divForForgotAndNext.appendChild(next);

document.body.appendChild(divForForgotAndNext);

next.addEventListener("click", function() {
    console.log("Your Password is:" + userNameInput.value);
})