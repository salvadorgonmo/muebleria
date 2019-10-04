const categoriesModel = require('../models/Categories.js')

const postCategories = async function(req,res){
    const categories = new categoriesModel(req.body)
    await categories.save()
    res.json({categories})
}
const getCategories = async function(req,res){
    await categoriesModel.find({},(err,categories)=>{
        if(err) return res.json({message: `Error: ${err}`})
        res.json({categories})
    })
}
const getCategory = async function(req,res){
    const categoryId = req.params.id
    await categoriesModel.findById(categoryId,(err,category)=>{
        if(err) return res.json({message: `Error: ${err}`})
        res.json({category})
    })
}
const putCategory = async function(req,res){
    const categoryId = req.params.id
    await categoriesModel.findByIdAndUpdate(categoryId,(err,category)=>{
        if(err) return res.json({message: `Error: ${err}`})
        res.json({category})
    })
}
const deleteCategories = async function(req,res){
    const categoryId = req.params.id
    await categoriesModel.findByIdAndDelete(categoryId,(err,category)=>{
        if(err) return res.json({message: `Error: ${err}`})
        res.json({category})
    })
}
module.exports = {
    postCategories,
    getCategories,
    getCategory,
    putCategory,
    deleteCategories
}