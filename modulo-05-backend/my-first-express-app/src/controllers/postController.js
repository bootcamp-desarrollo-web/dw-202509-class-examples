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
        const posts = await Post.findById(postId)
        res.json(posts)
    } catch (err) {
        console.log('[ERROR]', err)
        res.status(500).send('DB Error')
    }
}

const createPost = (req, res) => {
    console.log('-- createPost --')
    const postData = req.body
    res.send(`Create new post with data: ${JSON.stringify(postData)}`)
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