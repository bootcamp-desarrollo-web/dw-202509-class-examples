import express from 'express'
const router = express.Router()

import recipeController from '../controllers/recipeController.js'

// Implementación CRUD
// Read
router.get('/recipes', recipeController.getAll)
router.get('/recipes/:id', recipeController.getRecipe)

// Create
router.post('/recipe', recipeController.createRecipe)

// Update
router.put('/recipe/:id', recipeController.updateRecipe)

// Delete
router.delete('/recipe/:id', recipeController.deleteRecipe)

export default router