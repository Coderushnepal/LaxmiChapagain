var myarr = [];

function addTo() {
    myarr.push(document.getElementById("userinput").value);
}

function minmax(myarr) {
    var min = myarr[0];
    var max = myarr[0];
    for (i = 0; i < myarr.length; i++) {
        if (myarr[i] < min) {
            min = myarr[i]

        } else(myarr[i] > max)
        max = myarr[i]

    }
    console.log(min, max);
}