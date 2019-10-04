const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categories.js')

router.get('/',categoryController.getCategories)
router.get('/:id',categoryController.getCategory)
router.post('/',categoryController.postCategories)
router.put('/:id',categoryController.putCategory)
router.delete('/:id',categoryController.deleteCategories)

module.exports = router
