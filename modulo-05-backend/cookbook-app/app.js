import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()
const PORT = process.env.PORT

import connectDB from './src/config/db.js'
connectDB()

import router from './src/routes/routes.js'
app.use('/', router)

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en puerto ${PORT}`)
})