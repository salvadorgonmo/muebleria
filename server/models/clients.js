const mongoose = require('mongoose')
const Shema = mongoose.Schema

const clients = new Shema({
    name: String,
    documentId: String,
    email: String,
    phone: String,
    address: String,
    dateBirth: Date,
    totalPurchases: Number,
    lastPurchaseDate: {type: Date, default: Date.now},
    systemEntryDate: {type: Date, default: Date.now}
})

module.exports = mongoose.model('clients', clients)