function arraytotype(arg) {
    var outputtype = arg;
    for (var i = 0; i < arg.length; i++) {
        outputtype[i] = typeof(arg[i]);
    }
    return outputtype;
}

var input = [1, 2, "apple", []];
console.log(input);
var output = arraytotype(input);

console.log(output);