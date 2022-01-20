//  Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
//   filterArray([1, 2, "a", "b"]) ➞ [1, 2] 
//  filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

var filteredArray = [];

function filterArray(argument) {
    for (var i = 0; i < argument.length; i++) {
        if (typeof argument[i] != "string") {
            filteredArray.push(argument[i]);
        }
    }
    return filteredArray;

}
// console.log(filterArray([1, 2, "a", "b"]));
// console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));