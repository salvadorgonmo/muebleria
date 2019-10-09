const jwt = require('jwt-simple')
const User = require('../models/users')
const bcrypt = require('bcrypt')
const config = require('../../config')

const auth = (req, res) => {
  const { body } = req
  if (body.userName && body.password) {
    const { userName, password } = body
    User.findOne({ userName: userName }).then(user => {
      bcrypt.compare(password, user.password)
        .then(response => {
          if (response) {
            const payload = {
              id: user.id
            }
            res.json({
              token: jwt.encode(payload, config.secretOrKey)
            })
          } else {
            res.status(401).json({ message: 'Unauthorized' })
          }
        })
        .catch(error => res.json({
          error: `Error comparing passwords. Details: ${error}`
        }))
    })
    .catch(error => res.json({
      error: `Error searching in User model. Details: ${error}`
    }))
  }
}

module.exports = {
  auth
}