// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).
// identicalFilter(["88", "999", "22", "545", "133"]) ➞ ["88", "999", "22"]
// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]) ➞ []

// Note * A string with a single character is trivially counted as a string with repeating identical characters. * If there are no strings with repeating identical characters, return an empty array (see example #3).

function identicalFilter(argument) {
    var identicalString = [];
    for (i = 0; i < argument.length; i++) {
        var firstChar = argument[i][0];
        if (argument[i] == firstChar.repeat(argument[i].length)) {
            identicalString.push(argument[i])
        }
    }
    return identicalString;
}
console.log(identicalFilter(["88", "999", "22", "545", "133"]));
console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));