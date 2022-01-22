document.body.style.backgroundColor = "#f9fafb";

// Create Container
var container = document.createElement("div");
container.className = "container";

// Css to container
container.style.marginTop = "50px";
container.style.marginLeft = "500px";
container.style.paddingLeft = "40px";
container.style.paddingRight = "40px";
container.style.paddingTop = "20px";
container.style.paddingBottom = "20px";
container.style.backgroundColor = "#fff";
container.style.borderRadius = "5px";
container.style.boxShadow = "0 2 px 10 px rgba(0, 0, 0, 0.3)";
container.style.width = "300px";
document.body.appendChild(container); // appending container in body

// Create Form
var form = document.createElement("form");
form.className = "form";
form.setAttribute("name", "yourForm");
container.appendChild(form) //appending form to container

// form title
var h2 = document.createElement("h2");
h2.innerHTML = "Register With Us"
h2.style.paddingLeft = "50px";
h2.style.paddingBottom = "20px";
form.appendChild(h2);

var formControl = [{
        label: "Username",
        inputType: "text",
        value: "Enter Username",
        name: "yourUsername",
        size: "30",
        errorMessage: " Username must be atleast 3 character",
        id: "forUsername",
        id1: "usernameInput",

    },

    {
        label: " Email",
        inputType: "email",
        value: "Enter email",
        name: "yourEmail",
        size: "30",
        errorMessage: "Email is not vald",
        id: "forEmail",
        id1: "emailInput",
    },

    {
        label: "Password",
        inputType: "password",
        value: "Enter Password",
        name: "yourPassword",
        size: "30",
        errorMessage: "Password must be at least 6 characters",
        id: "forPassword",
        id1: "passwordInput",
    },

    {
        label: "Confirm Password",
        inputType: "password",
        value: "Enter password again",
        name: "yourConfirmPassword",
        size: "30",
        errorMessage: "Password did not match",
        id: "forConfirmPassword",
        id1: "passwordConfirmInput",
    },

];

formControl.forEach(function(element) {
    var formControlDiv = document.createElement("div");
    formControlDiv.classList.add("formControlDiv");
    formControlDiv.style.paddingBottom = "20px";

    // creating label
    var formControlLabel = document.createElement("label");
    formControlLabel.style.fontSize = "18px";
    formControlLabel.style.color = "#777";
    formControlLabel.innerHTML = element.label;
    formControlDiv.appendChild(formControlLabel);

    // Adding linebreak after label
    var linebreak = document.createElement("br")
    formControlDiv.appendChild(linebreak);

    // creating input
    var formControlinput = document.createElement("input");
    formControlinput.id = element.id1

    // Css to input
    formControlinput.style.marginTop = "7px";
    formControlinput.style.marginBottom = "5px";
    formControlinput.style.paddingTop = "10px";
    formControlinput.style.paddingBottom = "10px";
    formControlinput.style.borderRadius = "4px";
    formControlinput.style.border = "2px solid #f0f0f0";
    formControlinput.style.fontSize = "14px";

    // eventlistener to input onclick
    formControlinput.addEventListener("click", function() {
        formControlinput.style.border = "2px solid black";
    })
    formControlDiv.appendChild(formControlinput);
    var linebreak = document.createElement("br"); // Adding linebreak after inputfield
    formControlDiv.appendChild(linebreak);

    // attribute to input
    formControlinput.setAttribute("placeholder", element.value);
    formControlinput.setAttribute("type", element.inputType);
    formControlinput.setAttribute("size", element.size);
    formControlinput.setAttribute("name", element.name);


    // Create errormessagediv
    var formControlErrorMessage = document.createElement("small");
    formControlErrorMessage.id = element.id;
    formControlErrorMessage.style.display = "none";
    formControlErrorMessage.style.fontSize = "16px";
    formControlErrorMessage.style.color = "red";
    formControlErrorMessage.innerHTML = element.errorMessage;
    formControlDiv.appendChild(formControlErrorMessage);
    form.appendChild(formControlDiv);
});

// Create Button
var button = document.createElement("button");
button.className = "button";
button.innerHTML = "Submit";
form.appendChild(button);

// css to button
button.style.cursor = "pointer";
button.style.backgroundColor = "#3498db";
button.style.border = " 2px solid #3498db";
button.style.borderRadius = "4px";
button.style.color = "#fff";
button.style.fontSize = "16px";
button.style.paddingTop = "10px";
button.style.paddingBottom = "10px";
button.style.paddingLeft = "115px";
button.style.paddingRight = "115px";
button.style.marginTop = "20px";