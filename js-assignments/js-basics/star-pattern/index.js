function addTo() {
    var input = (document.getElementById("userinput").value);
    for (var i = input; i >= 1; i--) {
        for (var j = 1; j <= i; j++) {
            var output = document.write("*" + "");
        }
        document.write("<br>")
    }
}