function addTo() {
    var input = (document.getElementById("userinput").value);
    var output = input.substr(1, input.length - 1);
    console.log(output);
}
addTo();