const express = require('express')
const router = express.Router()
const {
  postProducts,
  getProducts,
  getProduct,
  putProduct,
  deleteProduct
} = require('../controllers/products')
const { authenticate } = require('../middlewares/auth')

router.post('/', authenticate(), postProducts)
router.get('/', authenticate(), getProducts)
router.get('/:id', authenticate(), getProduct)
router.put('/:id', authenticate(), putProduct)
router.delete('/:id', authenticate(), deleteProduct)

module.exports = router
