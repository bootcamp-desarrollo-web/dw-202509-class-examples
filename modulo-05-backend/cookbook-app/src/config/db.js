import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`)
        console.log(`[OK] Se ha conectado a MongoDB a la BBDD '${process.env.MONGO_DB}'`)
    } catch (err) {
        console.error('[ERROR] Error de conexión a MongoDB: ', err.message)
        process.exit(1)
    }
}

export default connectDB