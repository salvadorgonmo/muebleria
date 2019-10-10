const Products = require('../models/products')

const postProducts = async (req, res) => {
  try {
    const product = new Products(req.body)
    await product.save()
    res.json(product)
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({})
    res.json({ products })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Products.findById(id)
    if (!product) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.json({ product })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const putProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Products
      .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    if (!product) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.status(200).json()
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Products.findByIdAndDelete(id)
    if (!product) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.status(200).json()
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

module.exports = {
  postProducts,
  getProduct,
  getProducts,
  putProduct,
  deleteProduct
}
