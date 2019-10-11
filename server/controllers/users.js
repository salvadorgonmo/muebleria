const Users = require('../models/users')
const bcrypt = require('bcrypt')
const config = require('../../config')

const formatData = async (payload) => {
  const { password } = payload
  const hash = await hashPassword(password)
  return {
    name: payload.name,
    lastName: payload.lastName,
    userName: payload.userName,
    photo: payload.photo,
    status: payload.status || '',
    password: hash,
    lastLogin: payload.lastLogin || ''
  }
}

const hashPassword = (password) => {
  const { saltRounds } = config
  return bcrypt.hash(password, saltRounds)
    .then(hash => {
      return hash
    })
    .catch(err => new Error(`There was an error generating hash: ${err}`))
}

const postUser = async (req, res) => {
  try {
    const data = await formatData(req.body)
    const users = new Users(data)
    await users.save()
    res.json({ users })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}
const getUsers = async (req, res) => {
  try {
    const users = await Users.find({})
    res.json({ users })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}
const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await Users.findById(id)
    if (!user) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.json({ user })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}
const putUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await Users
      .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    if (!user) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.status(200).json()
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await Users.findByIdAndDelete(id)
    if (!user) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.status(200).json()
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

module.exports = {
  getUser,
  getUsers,
  postUser,
  deleteUser,
  putUser
}
