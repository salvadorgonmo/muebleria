const express = require('express')
const router = express.Router()
const userController = require('../controllers/users.js')
const authController = require('../controllers/auth.js')

router.get('/', userController.getUsers)
router.post('/',userController.postUser)
router.get('/:id',userController.getUser)
router.delete('/:id',userController.deleteUser)
router.put('/:id',userController.putUser)
router.post('/auth', authController.auth)

module.exports = router