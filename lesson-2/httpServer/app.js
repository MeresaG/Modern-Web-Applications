const http = require('http');
const fs = require('fs');
const path = require('path');


let statusCode;
let buffer;
PORT = 4444;

const readAFile = (req, res, filename) => {

    fs.readFile(path.join(__dirname, filename), (err, data) => {
        if(err) {
            statusCode = 404;
            buffer = "File Not Found";
        }
        else {
            statusCode = 200;
            buffer = data;
        }
        res.writeHead(statusCode);
        res.end(buffer);
    });
}

const serveAllRequests = (req, res) => {
    if(req.method == "POST") {
        res.setHeader("Content-type", "application/json");
        res.writeHead(200);
        res.end("{'message' : 'Hello World'}");
    }
    else if(req.method == "GET") {
    switch(req.url) {
        case '/json':
            res.setHeader("Content-type", "application/json");
            res.writeHead(200);
            res.end("{'message' : 'Hello World'}");
            break;
        case '/':
            res.setHeader("Content-type", "text/html");
            readAFile(req, res, 'index.html')
            break;
        case '/index.html':
            res.setHeader("Content-type", "text/html");
            readAFile(req, res, 'index.html')
            break;
        case '/page1.html':
            res.setHeader("Content-type", "text/html");
            readAFile(req, res, 'page1.html')
            break;
        case '/page2.html':
            res.setHeader("Content-type", "text/html");
            readAFile(req, res, 'page2.html')
            break;
    }
}
}

const server = http.createServer(serveAllRequests);

server.listen(PORT, "localhost", function() {
    console.log(`Server is running on http://localhost:${PORT}`);
});