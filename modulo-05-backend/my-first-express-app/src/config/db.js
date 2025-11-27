const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        // Conexión a MongoDB usando la URI y el nombre de la base de datos
        // process.env.MONGO_URI - la URI base (ej: "mongodb+srv://user:pass@cluster")
        // process.env.MONGO_DB - el nombre de la base de datos
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`)
        console.log('[OK] Se ha conectado correctamente a MongoDB')

    } catch (err) {
        console.error('[ERROR] Error de conexión a MongoDB: ', err)

        // Salimos del servidor si hay un error de coneexión
        process.exit(1)
    }
}

module.exports = connectDB
