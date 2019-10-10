const express = require('express')
const router = express.Router()
const {
  getProfiles,
  getProfile,
  postProfile,
  putProfile,
  deleteProfile
} = require('../controllers/profiles')
const { authenticate } = require('../middlewares/auth')

router.get('/', authenticate(), getProfiles)
router.get('/:id', authenticate(), getProfile)
router.post('/', authenticate(), postProfile)
router.put('/:id', authenticate(), putProfile)
router.delete('/:id', authenticate(), deleteProfile)

module.exports = router
