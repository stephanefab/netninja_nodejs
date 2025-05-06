const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    uri = req.url;
    method = req.method;
    let path = './views/';

    if (method === "GET") {
        switch(uri){
            case '/':
                path += 'index.html';
                break;
            case '/about':
                path += 'about.html';
                break;
            case '/contact':
                path += 'contact.html';
                break;
            case '/profil':
                path += 'profil.html';
                break;
            default:
                path += '404.html';
                break;
        }
        fs.readFile(path, (err, data) => {
            if(err){
                console.log(err);
                res.end();
            }
            res.end(data);
        });
    } else {
        res.statusCode = 405;
        path += res.statusCode+'.html';
        fs.readFile(path, (err, data) => {
            if(err){
                console.log(err);
                res.end();
            }
            res.end(data);
        });
    }

});

host = '127.0.0.1';
port = 5500;
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})