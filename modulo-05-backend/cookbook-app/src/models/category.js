import mongoose from 'mongoose'

const categoryScheme = new mongoose.Schema(
    {
        title: {
            type: String
        },
    },
    { collection: 'categories' }
)

const Category = mongoose.model('Category', categoryScheme)

export default Category