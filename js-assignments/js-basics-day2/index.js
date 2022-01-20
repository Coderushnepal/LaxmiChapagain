// Question 1

// Convert the list of names in array of object like:

// [
//     {
//       id: 1,
//       firstName: 'Neeta',
//       lastName: 'Sapkota'
//     },
//     {
//       id: 2,
//       firstName: 'Neha',
//       lastName: 'Shiwakoti'
//     }
//     ...
//   ]

var nameList = ["Neeta Sapkota",
    "Neha Shiwakoti",
    "Srijana Khatiwada",
    "Smrity Dhakal",
    "Sami Chakradhar",
    "Kirtee Maharjan",
    "Trija Thebe",
    "Sindhu Aryal",
    "Kusum Ranjitkar",
    "Elish Bista",
    "Rachana kafle",
    "Barsha Maharjan",
    "Pooja Gurung",
    "Bisikha Subedi",
    "Kritika Baral",
    "Srijana Thulung"
];

var objectArray = nameList.map(function(value, index) {
    var splitted = value.split(" ");
    var obj = {
        id: index + 1,
        firstName: splitted[0],
        lastName: splitted[1],
    };
    return obj;
});
console.log(objectArray);


//Question 2
//Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter.
// find('s') -> 5 and 11
// find('a') -> 0 and 16

function find(firstCharacter) {
    var counts = 0;
    var counta = 0;
    for (i = 0; i < objectArray.length; i++) {
        var initialCharacter = objectArray[i].firstName[0].toLowerCase();
        if (initialCharacter == "s") {
            counts++
        }
        if (initialCharacter == "a") {
            counta++
        }
    }
    return counts++ + " and " + (objectArray.length - counts++);
    // return counta++ + " and " + (objectArray.length - counta++);
}
console.log(find('s'));
console.log(find('a'));


// Question 3
// Convert the array of the result in Question 1, in following format

// {
//     1: {
//       firstName: 'Neeta',
//       lastName: 'Sapkota'
//     },
//     2: {
//       firstName: 'Neha',
//       lastName: 'Shiwakoti'
//     },
//     ...
//   }
var input = objectArray;
// console.log(input);
var output = input.reduce(function(accumulator, value, index) {
    return input * accumulator;

}, {});
// console.log(output);