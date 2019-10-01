const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategoriasModel = new Schema({
    categoria: String
})

module.exports = mongoose.model('categorias',CategoriasModel)