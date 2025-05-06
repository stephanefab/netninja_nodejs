const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made :: url: ', req.url, " method: ", req.method);

    // set header content type
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    // set status code
    res.statusCode = 200;
    // set response
    res.write("<p>Hello world</p>");
    res.end();
});

server.listen(5500, '127.0.0.1', () =>{
    console.log('Listening on host:3000');
});