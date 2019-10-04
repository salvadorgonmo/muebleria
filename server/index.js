const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


mongoose.connect('mongodb://localhost/muebleria', {useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'error'))
db.once('open', () => {
  console.log('Conectado satisfactoriamente a la base de datos muebleria')
})

app.use(bodyParser.urlencoded({ extended: false}))
app.use('/usuarios', require('./routes/users'))
app.use('/categorias',require('./routes/categories'))

app.listen(port, () => {
  console.log(`La aplicacion esta corriendo en el puerto: ${port}`)
})



module.exports = app
