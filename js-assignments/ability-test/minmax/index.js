// Find the Smallest and Biggest Numbers Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

var myarr = [];

function minMax(myarr) {
    var min = myarr[0];
    console.log(min);
    var max = myarr[0];

    for (i = 1; i < myarr.length; i++) {
        if (myarr[i] < min) {
            min = myarr[i];
        } else if (myarr[i] > max) {
            max = myarr[i]
        }
    }
    return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));