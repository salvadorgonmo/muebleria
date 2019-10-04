const Users = require('../models/users')

const getUsers = async (req, res) => {
  const users = await Users.find({})
  res.send(users)
}

module.exports = {
  getUsers
}