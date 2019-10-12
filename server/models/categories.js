const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categoriesModel = new Schema({
  category: String
})

module.exports = mongoose.model('categories', categoriesModel)
