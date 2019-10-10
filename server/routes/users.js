const express = require('express')
const router = express.Router()
const {
  getUsers,
  postUser,
  getUser,
  deleteUser,
  putUser
} = require('../controllers/users.js')
const {
  auth
} = require('../controllers/auth.js')
const { authenticate } = require('../middlewares/auth')

router.get('/', authenticate(), getUsers)
router.post('/', authenticate(), postUser)
router.get('/:id', authenticate(), getUser)
router.delete('/:id', authenticate(), deleteUser)
router.put('/:id', authenticate(), putUser)
router.post('/auth', auth)

module.exports = router
