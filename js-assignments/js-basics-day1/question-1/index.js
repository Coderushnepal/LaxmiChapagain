//  Display Star Pattern
// The function needs to take a number as a parameter which represents how many asterisks are rendered on the first row.

function addTo() {
    var input = (document.getElementById("userinput").value);
    for (var i = input; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            var output = document.write("*" + "");
        }
        document.write("<br>")
    }
}