const http = require('http');
const fs = require('fs');

fileServer=http.createServer((request, response) => {
    try {
        const file = fs.readFileSync('sample-text.txt');
        // Send the response body
        response.end(file);
    } catch (err) {
        console.log('An error occurred:', err);
    }
})
fileServer.listen(1234);

// Console will print the message
console.log('Server running at http://127.0.0.1:1234/');