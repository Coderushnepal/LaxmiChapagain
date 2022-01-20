// Censor Words Longer Than Four Characters
// Create a function that takes a string and censors words over four characters with *
// Examples
// censor("The code is fourty") ➞ "The code is ******"
// censor("Two plus three is five") ➞ "Two plus ***** is five"
// censor("aaaa aaaaa 1234 12345") ➞ "aaaa ***** 1234 *****"

function censor(sentence) {
    var output = "";
    var splitted = sentence.split(" ");
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i].length > 4) {
            splitted[i] = "*".repeat(splitted[i].length);
        }
        output += splitted[i] + " ";
    }
    return output;
}

console.log(censor("The code is fourty"));
console.log(("Two plus three is five"));
console.log(censor("aaaa aaaaa 1234 12345"));