const express = require('express')
const router = express.Router()
const {
  getCategories,
  getCategory,
  postCategories,
  putCategory,
  deleteCategories
} = require('../controllers/categories.js')
const { authenticate } = require('../middlewares/auth')

router.get('/', authenticate(), getCategories)
router.get('/:id', authenticate(), getCategory)
router.post('/', authenticate(), postCategories)
router.put('/:id', authenticate(), putCategory)
router.delete('/:id', authenticate(), deleteCategories)

module.exports = router
