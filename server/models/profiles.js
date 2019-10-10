const mongoose = require('mongoose')

const Shema = mongoose.Schema

const profiles = new Shema({
  profile: String
})

module.exports = mongoose.model('profiles', profiles)
