const express = require('express')
const router = express.Router()

const postController = require('../controllers/postController')

const checkSecretKey = require('../middleware/checkSecretKey')
router.use(checkSecretKey)

// Read all
router.get('/blog/posts', postController.getPosts)

// Read specific post
router.get('/blog/posts/:id', postController.getPost)

// Create new post
router.post('/blog/posts', postController.createPost)

// Update an existing post
router.put('/blog/posts/:id', postController.updatePost)

// Delete a specific post
router.delete('/blog/posts/:id', postController.deletePost)

module.exports = router