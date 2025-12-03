const { default: mongoose } = require('mongoose')
const Post = require('../models/post')

/**
 * Devuelve listado de todos los documentos Post en BBDD
 * @param {*} req 
 * @param {*} res 
 */
const getPosts = async (req, res) => {
    try {
        // Busca todos los documentos en la colección "posts"
        const posts = await Post.find({})
        res.json(posts)
    } catch (err) {
        console.log('[ERROR]', err)
        res.status(500).send('DB Error')
    }
}

/**
 * Devuelve un documento concreto Post de la BBDD (por la id que se pasa en la url)
 * @param {*} req 
 * @param {*} res 
 */
const getPost = async (req, res) => {
    try {
        const postId = req.params.id
        // Busca todos los documentos en la colección "posts"
        const post = await Post.findById(postId)
        res.json(post)
    } catch (err) {
        console.log('[ERROR]', err)
        res.status(500).send('DB Error')
    }
}

/**
 * Crear un nuevo post basado en la información enviada
 * @param {*} req 
 * @param {*} res 
 */
const createPost = async (req, res) => {
    try {
        // Obtenemos los datos enviados por el cuerpo de la petición
        const postData = req.body
        
        // Creamos un nuevo documento con los datos enviados
        const post = new Post(postData)

        // Guardamos el nuevo documento en la BBD
        await post.save()

        // Devolvemos el objeto creado, ahora con una ID
        res.status(201).json(post)
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

/**
 * Actualizar un post que ya existe.
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const updatePost = async (req, res) => {
    try {
        const postId = req.params.id
        const postData = req.body

        // Comprobar que la ID es válida
        const isValidId = mongoose.isValidObjectId(postId)
        if (!isValidId) {
            throw new Error(`ID ${postId} is not a valid id`)
        }

        const post = await Post.findByIdAndUpdate({ _id: postId }, postData, {new: true})
        
        // Comprobamos si existe un documento con la ID que se ha enviado
        if (!post) {
            return res.status(404).json({error: 'Post not found'})
        }
        res.json(post)

    } catch(e) {
        res.status(500).json({error: e.message})
    }
}

/**
 * Borrar un post
 * Esta función es casi idéntica a updatePost, cambiando findByIdAndUpdate -> findByIdAndDelete
 * (tampoco necesitamos aquí la variable postData ya que se trata de delete)
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const deletePost = async (req, res) => {
    try {
        const postId = req.params.id

        // Comprobar que la ID es válida
        const isValidId = mongoose.isValidObjectId(postId)
        if (!isValidId) {
            throw new Error(`ID ${postId} is not a valid id`)
        }

        const post = await Post.findByIdAndDelete(postId)

        // Comprobamos si existe un documento con la ID que se ha enviado
        if (!post) {
            return res.status(404).json({error: 'Post not found'})
        }
        res.json({message: 'Post deleted'})

    } catch(e) {
        res.status(500).json({error: e.message})
    }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
}