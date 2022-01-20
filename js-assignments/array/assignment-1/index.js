// Create a function that takes an array and returns the types of values (data types) in a new array
// arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"] 
// arrayValuesTypes(["214", true, false, 2, 2.15, [], null]) ➞ ["string","boolean", "boolean", "number", "number", "object", "object"] 
// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])➞["number", "string", "string", "object", "object", "boolean", "number"]

function arrayValuesTypes(argument) {
    var outputtype = argument;
    for (var i = 0; i < argument.length; i++) {
        outputtype[i] = typeof(argument[i]);

    }
    return outputtype;
}

console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));