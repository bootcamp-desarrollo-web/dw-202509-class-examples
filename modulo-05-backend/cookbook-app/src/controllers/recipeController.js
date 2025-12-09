import RecipeModel from '../models/recipe.js'
import CategoryModel from '../models/category.js'

const getAll = async (req, res) => {
    try {
        const recieps1 = await RecipeModel.find({})
        const recieps2 = await RecipeModel.find({}).populate('category')
        res.json({no_populate: recieps1, with_populate: recieps2})
    } catch (err) {
        console.error('[ERROR]', err.message)
        res.status(500).send('DB Error')
    }
}

const getRecipe = (req, res) => { res.status(500).send('TBD') }
const createRecipe = (req, res) => { res.status(500).send('TBD') }
const updateRecipe = (req, res) => { res.status(500).send('TBD') }
const deleteRecipe = (req, res) => { res.status(500).send('TBD') }

export default {
    getAll,
    getRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe
}
