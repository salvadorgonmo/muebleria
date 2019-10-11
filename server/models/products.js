const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsModel = new Schema({
  image: String,
  code: Number,
  description: String,
  stock: Number,
  buyPrice: Number,
  sellPrice: Number,
  createdDate: { type: Date, default: Date.now },
  category: { type: Schema.Types.ObjectId, ref: 'categories' }
})

module.exports = mongoose.model('products', productsModel)
