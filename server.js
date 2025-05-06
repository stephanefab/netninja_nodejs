const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    uri = req.url;
    method = req.method;

    if (method === "GET") {
        // index: /
        if (uri === '/') {
            fs.readFile('./views/index.html', (err, data) => {
                res.end(data);
            });
        }
        // about: /about
        else if (uri === '/about') {
            fs.readFile('./views/about.html', (err, data) => {
                res.end(data);
            });
        }
        // contact: /contact
        else if (uri === '/contact') {
            fs.readFile('./views/contact.html', (err, data) => {
                res.end(data);
            });
        }
        // profil : /profil
        else if (uri === '/profil') {
            fs.readFile('./views/profil.html', (err, data) => {
                res.end(data);
            });
        }
        else {
            res.statusCode = 404;
            fs.readFile('./views/404.html', (err, data) => {
                res.end(data);
            });
        }
    } else {
        res.statusCode = 405;
        fs.readFile('./views/405.html', (err, data) => {
            res.end(data);
        });
    }

});

host = '127.0.0.1';
port = 5500;
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
})