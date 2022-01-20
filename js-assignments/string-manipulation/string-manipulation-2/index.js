// Create a function that takes a word and returns the new word without including the first character.
// newWord("apple") ➞ "pple"
// newWord("cherry") ➞ "herry"
// newWord("plum") ➞ "lum"


function newWord(word) {
    var output = word.substr(1, word.length - 1);
    return output;
}

console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("plum"));