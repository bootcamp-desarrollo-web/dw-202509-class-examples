const mongoose = require('mongoose')

// Definición del esquema para la colección "posts"
const postSchema = new mongoose.Schema(
    {
        title: String,
        date: String
    },
    { collection: 'posts' }
)

// Creamos un modelo basado en el esquema para interactuar con la colección "posts"
const Post = mongoose.model('Post', postSchema)

module.exports = Post
