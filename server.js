const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    console.log(request.url);
    console.log(request.method);
    fs.readFile("./index.html", null, (err,data)=>{
        response.write(data);
        response.end();
    })
});

server.listen(3000);