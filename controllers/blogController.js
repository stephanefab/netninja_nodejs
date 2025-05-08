const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then((result) =>{
        res.render('index', { title: 'Index Page', message: 'Welcome to my website', blogs: result });
    })
    .catch((err) => {
        console.log(err)
    });
}

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create Blog Post', message: 'Create a new blog post' });
}

const blog_create_post = (req, res) => {
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
}

const blog_detail = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) =>{
        res.render('single', { title: 'Blog Info', message: 'Detail About Blog', blog: result });
    })
    .catch((err) => {
        res.status(404).render("404")
    });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    // Blog.findByIdAndDelete(id) // delete the document if exists
    Blog.deleteOne({_id: id}) // delete one
    .then((result) =>{
        res.redirect('/blogs');
    })
    .catch((err) => {
        res.status(404).render("404")
    });
}

module.exports = {
    blog_index,
    blog_create_get,
    blog_create_post,
    blog_detail,
    blog_delete
}