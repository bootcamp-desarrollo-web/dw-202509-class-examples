import mongoose from 'mongoose'

const recipeScheme = new mongoose.Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        ingredients: {
            type: String
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: 'Category',
            required: true
        }
    },
    { collection: 'recipes' }
)

const Recipe = mongoose.model('Recipe', recipeScheme)

export default Recipe