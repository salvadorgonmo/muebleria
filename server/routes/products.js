const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products')

router.post('/',productsController.postProducts)
router.get('/',productsController.getProducts)
router.get('/:id',productsController.getProduct)
router.put('/:id',productsController.putProduct)
router.delete('/:id',productsController.deleteProduct)

module.exports = router