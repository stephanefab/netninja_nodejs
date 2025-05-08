const express = require("express");
const morgan = require('morgan');

const app = express();


// register view engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // default value = views

// Middleware
app.use(morgan('dev'))
app.use(express.static('public'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Blog 1', snippet: 'This is the first blog'},
        {title: 'Blog 2', snippet: 'This is the second blog'},
        {title: 'Blog 3', snippet: 'This is the third blog'}
    ];
    res.render('index', {title: 'Index Page', message: 'Welcome to my website', blogs: blogs});
});
app.get('/about', (req, res) => {
    res.render('about', {title: 'About Page', message: 'This is the about page'});
});
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create Blog Post', message: 'Create a new blog post'});
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