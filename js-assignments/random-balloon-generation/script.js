// Random Button Generation Using JS

// Create wrapper div
var wrapper = document.createElement("div");
wrapper.className = "wrapperContainer";

// Adding style to warpper div
wrapper.style.marginLeft = "300px";
wrapper.style.marginTop = "30px";

// Create  Button
var button = document.createElement("button");
button.className = "button";
button.textContent = "Generate Ballons";

// Adding Styles to button
button.style.backgroundColor = "skyblue";
button.style.border = "none";
button.style.padding = "10px";
button.style.borderRadius = "5px";
button.style.marginBottom = "20px";

// Appending button to wrapper
wrapper.appendChild(button);

// create frame and adding styles to frame
var frame = document.createElement("div");
frame.className = "frame"
frame.style.height = "600px";
frame.style.width = "800px";
frame.style.position = "relative";
frame.style.border = " 2px solid";

// Appending frame and wrapper
wrapper.appendChild(frame);
document.body.appendChild(wrapper);

// Adding eventListener to button
button.addEventListener("click", function(event) {
    var circle = document.createElement("div");
    circle.style.width = "20px";
    circle.style.height = "20px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "red";
    circle.style.position = "absolute";
    circle.style.left = "780" * Math.random() + "px";
    circle.style.top = "580" * Math.random() + "px";
    frame.appendChild(circle);
    // alert("Done!");
});