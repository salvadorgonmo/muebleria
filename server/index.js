const express = require('express')
const monggose = require('mongoose')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

monggose.connect('mongodb://localhost/muebleria')

const db = monggose.connection
db.on('error', console.error.bind(console, 'error'))
db.once('open', () => {
  console.log('connected succesfully')
})

app.listen(port, () => {
  console.log(`APP IS RUNNING IN: ${port}`)
})