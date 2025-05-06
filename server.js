const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log("url: ", req.url, " method: ", req.method, " status: ", res.statusCode);
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views/index.html', (err, data) => {
        if(err){
            res.end('<p>Error</p>');
        }
        res.end(data);
    })
});

host = '127.0.0.1';
port = 5500;
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})