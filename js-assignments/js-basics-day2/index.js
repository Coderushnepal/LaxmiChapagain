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
var obj = {};
var resultArray = [];
for (i = 0; i < nameList.length; i++) {
    var splittedNames = nameList[i].split(" ");
    // console.log("splittedNames:" + splittedNames);
    obj.id = i + 1;
    // console.log("id" + obj.id);
    obj.firstNames = splittedNames[0];
    // console.log("firstNames" + obj.firstNames);
    obj.lastNames = splittedNames[1];
    // console.log("lastNames" + obj.lastNames);

    resultArray[i] = obj;
    obj = {};
}
console.log(resultArray);


//Question 2
//Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter.
// function find(character){

// }
function find(alphabet) {
    countFirstNames = resultArray.filter(function(value) {
        console.log(value);
        return value.firstName[0] == alphabet.toUpperCase();
    });
    counter = count++
        counter = countFirstNames.length;
    "find('" +
    alphabet +
        "') -> " +
        counter +
        " and " +
        (resultArray.length - counter)

}
find("s");
find("a");