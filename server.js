const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    uri = req.url
    method = req.method
    path = "./views/";
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;

    if(method==="GET"){
        switch(uri){
            case "/":
                path+= "index.html";
                break;
            case "/about":
                path+= "about.html";
                break;
            case "/contact":
                path+= "contact.html";
                break;
            case "/profil":
                path+= "profil.html";
                break;
            default:
                res.statusCode = 404;
                path+="404.html";
                break;
        }
        fs.readFile(path, (err, data) => {
            if(err){
                res.statusCode = 500;
                res.write("Error 500: Internal Server Error");
            }
            else{
                res.write(data);
            }
            res.end();
        })
    }else{
        res.statusCode = 405;
        path += '405.html';
        fs.readFile(path, (err, data) => {
            if(err){
                res.statusCode = 500;
                res.write("Error 500: Internal Server Error");
            }
            else{
                res.write(data);
            }
            res.end();
        })
    }
});

host = "127.0.0.1";
port = 5500;
server.listen(port, host, () => {
    console.log("Server launched on http://" + host + ":" + port);
});