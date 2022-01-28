// this is all to create the flexibility for OOP
var defaultBallSize = 30;
var containerSize = 500;

function position(size) {
    return {
        top: parseInt(Math.random() * size),
        left: parseInt(Math.random() * size),
    };
}
var container = new Container(containerSize); // creates container vanne object
container.create(document.body); // contaner vanne object chai document.body mah create hunxa

for (var i = 0; i < 20; i++) {
    var ball = new Ball(defaultBallSize, i);
    ball.create(container.element, position(containerSize - defaultBallSize));
}