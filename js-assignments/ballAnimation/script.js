var container = document.createElement("div");
var h2 = document.createElement("h2");
h2.innerHTML = "Click Ball for Observing Ball Animation ";
h2.style.textAlign = "center";
container.appendChild(h2);
document.body.appendChild(container);

var frame = document.createElement("div");
frame.style = `
width: 600px;
height: 400px;
position: relative;
margin: 0px auto;
background-color: black;`;
container.appendChild(frame);

var ball = document.createElement("div");
ball.style = `
 background-color:white;
 border-radius:50%;
 width:60px;
 height:60px;
 position:absolute;
 left:200px;
 top:200px;
 `;
frame.appendChild(ball);

ball.addEventListener("click", function(event) {
    direction = 1;
    var interval = setInterval(function() {
        var newTop = parseInt(event.target.style.top) + 5 * direction + "px";
        event.target.style.top = newTop;
        if (parseInt(newTop) >= frame.clientHeight - ball.clientHeight) {
            direction = -1;
        }
        if (parseInt(newTop) <= 0) {
            direction = 1;
        }
    }, 1000 / 60);
})