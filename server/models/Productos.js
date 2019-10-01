const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productosModel = new Schema({
    productoId: { type: Schema.Types.ObjectId},
    imagen: String,
    codigo: Number,
    descripcion: String,
    sock: Number,
    precioCompra:  Schema.Types.Decimal128,
    precioVenta:  Schema.Types.Decimal128,
    fechaAgragado: { type: Date, default: Date.now}
})

module.exports = mongoose.model('productos',productosModel)