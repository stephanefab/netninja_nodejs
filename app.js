const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');

const Blog = require('./models/blog');

const app = express();

// uri de connexion
const dbUri = "mongodb+srv://default_user:geGG6I5Qh8aiu9MA@expressjs-cluster-1.ecch1rq.mongodb.net/netninjas?retryWrites=true&w=majority&appName=expressjs-cluster-1";
// connexion à la bd mongo
mongoose.connect(dbUri)
    .then((result) => app.listen(5500))
    .catch((err) => console.log(err));



// register view engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // default value = views

// Middleware
app.use(morgan('dev'))
app.use(express.static('public'));

// mongoose and mongo sandbox routes
app.get('/add/mongoose', (req, res) => {
    const blog = new Blog();
    blog.title = 'Mongoose';
    blog.snippet = 'This is a mongoose blog';
    blog.body = 'This is a mongoose blog body';
    blog.save()
    .then((result) =>{
        res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get('/mongooses', (req, res) => {
    Blog.find()
    .then((result) =>{
        res.send(result);
    })
    .catch((err) => {
        console.log(err)
    });
});

app.get('/mongoose', (req, res) => {
    Blog.findById(req.query.id)
    .then((result) =>{
        if(!result){
            res.render('404');
        }else{
            res.send(result);
        }
    })
    .catch((err) => {
        console.log(err)
    });
});

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Blog 1', snippet: 'This is the first blog' },
        { title: 'Blog 2', snippet: 'This is the second blog' },
        { title: 'Blog 3', snippet: 'This is the third blog' }
    ];
    res.render('index', { title: 'Index Page', message: 'Welcome to my website', blogs: blogs });
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', message: 'This is the about page' });
});
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog Post', message: 'Create a new blog post' });
});
app.post('/blogs/create', (req, res) => {
    res.send("ok");
});

app.use((req, res) => {
    res.status(404).render("404");
});