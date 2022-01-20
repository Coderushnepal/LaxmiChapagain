// Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
// toArray({}) ➞ []

function toArray(argument) {
    var output = [];
    keyOfObject = Object.keys(argument);
    for (i = 0; i < keyOfObject.length; i++) {
        key = keyOfObject[i];
        output.push([key, argument[key]]);
    }
    return output;
}
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));