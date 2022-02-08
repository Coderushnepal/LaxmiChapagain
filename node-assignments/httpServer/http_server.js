const http = require('http');

server = http.createServer((request, response) => {
    // Send the response body
    response.end('This is my first http server in NodeJS\n');
})
server.listen(1234);

// Console will print the message
console.log('Server running at http://127.0.0.1:1234/');