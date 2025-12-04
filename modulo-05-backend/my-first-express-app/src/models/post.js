const mongoose = require('mongoose')

// Definición del esquema para la colección "posts"
const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            // minlength: 8,
            // maxlength: 20,
            validate: {
                validator: value => { return (value.length >= 8 && value.length <= 20) },
                message: 'title should be between 8-20 chars.'
            }
        },
        date: {
            type: String,
            required: true,
        },
    },
    { collection: 'posts' }
)

// Creamos un modelo basado en el esquema para interactuar con la colección "posts"
const Post = mongoose.model('Post', postSchema)

module.exports = Post
