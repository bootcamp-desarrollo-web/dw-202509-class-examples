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

const routes = require('./src/routes/routes')
app.use('/', routes)

// Lanzamos la aplicación a escuchar en el puerto definido.
// Cuando el servidor esté listo, se mostrará un mensaje en la consola.
app.listen(PORT, () => {
    console.log('El servidor está escuchando en puerto ' + PORT)
})

