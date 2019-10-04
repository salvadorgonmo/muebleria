const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
  name: String,
  userName: String,
  photo: String,
  status: Boolean,
  lastLogin: {type: Date, default: Date.now},
  lastName: String,
  profile: {type: Schema.Types.ObjectId, ref: "profiles"}
})

module.exports = mongoose.model('usuarios', Users)
