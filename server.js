const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    console.log(request.url);
    console.log(request.method);
    fs.readFile("./index.html", null, (err,data)=>{
        response.writeHead(200,{    // 200의 의미는 양호하다는 의미
            "Content-type":"text/html"
        });
        
        response.write(data);
        response.end();
    })
});

server.listen(3000);
