const express = require('express');
const router = express.Router();

const Blog = require('../models/blog');

router.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then((result) =>{
        res.render('index', { title: 'Index Page', message: 'Welcome to my website', blogs: result });
    })
    .catch((err) => {
        console.log(err)
    });
});
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Blog Post', message: 'Create a new blog post' });
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) =>{
        res.render('single', { title: 'Blog Info', message: 'Detail About Blog', blog: result });
    })
    .catch((err) => {
        res.status(404).render("404")
    });
});
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    // Blog.findByIdAndDelete(id) // delete the document if exists
    Blog.deleteOne({_id: id}) // delete one
    .then((result) =>{
        res.redirect('/blogs');
    })
    .catch((err) => {
        res.status(404).render("404")
    });
});
// create blog
router.post('/', (req, res) => {
    // sauvegarde de données dans la bd
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        // redirige vers la page d'accueil
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router