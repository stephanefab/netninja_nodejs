const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creation du schema
const blogSchema = Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// connexion au model
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;