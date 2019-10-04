const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsModel = new Schema({
    image: String,
    code: Number,
    description: String,
    stock: Number,
    buyPrice:  Schema.Types.Decimal128,
    sellPrice:  Schema.Types.Decimal128,
    createdDate: { type: Date, default: Date.now},
    category: {type: Schema.Types.ObjectId, ref: "categories"}
})

module.exports = mongoose.model('products',productsModel)