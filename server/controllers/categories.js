const categoriesModel = require('../models/Categories.js')

const postCategories = async (req,res) => {
    try{
        const categories = new categoriesModel(req.body)
        await categories.save()
        res.json({categories})
    }catch(err){
        res.json({message: `Error: ${err}`})
    }
}
const getCategories = async (req,res) => {
    try {
        const categories = await categoriesModel.find({})
        res.json({categories})
    } catch(err) {
        res.json({message: `Error: ${err}`})
    }
}
const getCategory = async (req,res) => {
    try{
        const {id} = req.params
        const category = await categoriesModel.findById(id)
        res.json({category})
    } catch(err){
        res.json({message: `Error: ${err}`})
    }
}
const putCategory = async (req,res) => {
    try{
        const {id} = req.params
        await categoriesModel.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
        res.status(200).json()
    } catch(err){
        res.json({message: `Error: ${err}`})
    }
}
const deleteCategories = async (req,res) => {
    try{
        const {id} = req.params
        await categoriesModel.findByIdAndDelete(id)
        res.status(200).json()
    } catch(err){
        res.json({message: `Error: ${err}`})
    }
}
module.exports = {
    postCategories,
    getCategories,
    getCategory,
    putCategory,
    deleteCategories
}