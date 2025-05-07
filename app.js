const express = require('express');
const app = express(); // Create an instance of the express app

// routing
app.get('/', (req, res) => {
    //res.send("Hello World");
    res.sendFile('./views/index.html', {root: __dirname});
});
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname});
});
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});
app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.html', {root: __dirname});
});
app.get('/profil', (req, res) => {
    res.sendFile('./views/profil.html', {root: __dirname});
});

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});
// start server
app.listen(5500);