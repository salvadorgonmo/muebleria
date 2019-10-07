const express = require('express')
const router = express.Router()
const userController = require('../controllers/users.js')

router.get('/', userController.getUsers)
router.post('/',userController.postUser)
router.get('/:id',userController.getUser)
router.delete('/:id',userController.deleteUser)
router.put('/:id',userController.putUser)

module.exports = router