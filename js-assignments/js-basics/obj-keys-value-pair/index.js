function objectToArray(obj) {
    var keysArray = Object.keys(obj);
    var valuesArray = [];
    for (var i = 0; i < keysArray.length; i++) {
        var loopKey = keysArray[i];
        var singleValueofIthKey = obj[loopKey];
        valuesArray.push(singleValueofIthKey);
    }
    var result = [];
    result.push(keysArray);
    result.push(valuesArray);
    return result;
}

// var car = { 'color': 'red', 'mileage': '5' };
// console.log(objectToArray( { 'color': 'red', 'mileage': '5' };);