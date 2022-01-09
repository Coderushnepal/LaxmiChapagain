var filteredArray = [];

function filterArray(argument) {
    for (var i = 0; i < argument.length; i++) {
        if (typeof argument[i] != "string") {
            filteredArray.push(argument[i]);
        }
    }
}
var argument = [1, "a", "b", 0, 15];
console.log(argument);
filterArray(argument);
console.log(filteredArray);