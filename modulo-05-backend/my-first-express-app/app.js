/**
 * Esta aplicación maneja un CRUD de posts de un blog.
 * Pasos:
 * 1. Crear las rutas del CRUD
 */

// Importar el módulo express y crear una aplicación
// (app será nuestro servidor web)
require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT

// Usamos el middleware para convertir a JSON
app.use(express.json())

// Iniciar la conexión con BBDD
const connectDB = require('./src/config/db')
connectDB()

// Importar los modelos
const Post = require('./src/models/post')
const { default: mongoose } = require('mongoose')

// Read all
app.get('/blog/posts', async (req, res) => {
    try {
        // Busca todos los documentos en la colección "posts"
        const posts = await Post.find({})
        res.json(posts)
    } catch (err) {
        console.log('[ERROR]', err)
        res.status(500).send('DB Error')
    }
})

// Read specific post
app.get('/blog/posts/:id', async (req, res) => {
    try {
        const postId = req.params.id
        // Busca todos los documentos en la colección "posts"
        const posts = await Post.findById(postId)
        res.json(posts)
    } catch (err) {
        console.log('[ERROR]', err)
        res.status(500).send('DB Error')
    }
})

// ---------------------------------------------------------------
// TODO
// Queda pendiente implementar el resto de las llamadas de la API
// ---------------------------------------------------------------

// Create
app.post('/blog/posts', (req, res) => {
    const postData = req.body
    res.send(`Create new post with data: ${JSON.stringify(postData)}`)
})

// Update
app.put('/blog/posts/:id', (req, res) => {
    const postId = req.params.id
    const postData = req.body
    res.send(`Update post with id ${postId} with data: ${JSON.stringify(postData)}`)
})

// Delete
app.delete('/blog/posts/:id', (req, res) => {
    const postId = req.params.id
    res.send(`Delete post with id ${postId}`)
})


// Lanzamos la aplicación a escuchar en el puerto definido.
// Cuando el servidor esté listo, se mostrará un mensaje en la consola.
app.listen(PORT, () => {
    console.log('El servidor está escuchando en puerto ' + PORT)
})

