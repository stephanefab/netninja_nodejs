const express = require("express");
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // default value = views

app.get('/', (req, res) => {
    res.render('index', {title: 'Home Page', message: 'Welcome to my website'});
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/blogs/create', (req, res) => {
    res.render('create');
});
app.post('/blogs/create', (req, res) => {
    res.send("ok");
});

app.use((req, res) => {
    res.status(404).render("404");
});
app.listen(5500, () => {
 console.log("Server is running on port 5500");
});