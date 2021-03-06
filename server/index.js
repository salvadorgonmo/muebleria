const express = require('express')
const mongoose = require('mongoose')
const config = require('../config')
const app = express()
const port = config.PORT || 3000
const bodyParser = require('body-parser')
const {
  initialize,
  bootPassport
} = require('./middlewares/auth')

const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:8080',
}))

mongoose.connect('mongodb://localhost/furniture-store', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'error'))
db.once('open', () => {
  console.log('Successfully connected to FurnitureStore db.')
})
db.once('close', () => {
  console.log('The connection with the database furnitureStore was closed.')
})

bootPassport() // prepare auth strategy.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(initialize())
app.use('/usuarios', require('./routes/users'))
app.use('/categorias', require('./routes/categories'))
app.use('/perfiles', require('./routes/profiles'))
app.use('/productos', require('./routes/products'))
app.use('/clientes', require('./routes/clients'))

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})

module.exports = app
