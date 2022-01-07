function addTo() {

    var input = (document.getElementById("userinput").value);

    var output = "";
    var words = input.split(" ");
    words.forEach(word => {
        console.log(word);
        if (word.length >= 4) {
            var stars = "*".repeat(word.length);


            output = output + stars;
        } else {
            output = output + word;

        }
        output = output + " ";
    });
    output = output.trim();
    console.log(output);
}