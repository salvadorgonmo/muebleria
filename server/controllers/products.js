const Products = require('../models/products')

const postProducts = async (req, res) => {
    try{
        const product = new Products(req.body)
        await product.save()
        res.json(product)
    }catch(err){
        res.json({message: `Error: ${err}`})
    }
}
const getProducts = async (req, res) => {
    try{
        const products = await Products.find({})
        res.json({products})
    }catch(err){
        res.json({message: `Error: ${err}`})
    }
}
const getProduct = async (req, res) => {
    try{
        const {id} = req.params
        const product = await Products.findById(id)
        res.json({product})
    }catch(err){
        res.json({message: `Error: ${err}`})
    }
}
const putProduct = async (req, res) => {
    try {
        const {id} = req.params
        await Products.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
        res.status(200).json()
    } catch(err) {
        res.json({message: `Error: ${err}`})
    }
}
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params
        await Products.findByIdAndDelete(id)
        res.status(200).json()
    } catch(err) {
        res.json({message: `Error: ${err}`})
    }
}

module.exports = {
    postProducts,
    getProduct,
    getProducts,
    putProduct,
    deleteProduct
}