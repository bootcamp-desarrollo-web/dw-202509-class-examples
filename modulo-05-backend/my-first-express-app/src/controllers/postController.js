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

const updatePost = (req, res) => {
    console.log('-- updatePost --')
    const postId = req.params.id
    const postData = req.body
    res.send(`Update post with id ${postId} with data: ${JSON.stringify(postData)}`)
}

const deletePost = (req, res) => {
    console.log('-- deletePost --')
    const postId = req.params.id
    res.send(`Delete post with id ${postId}`)
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
}