const express = require('express')
const route = express.Router()
const {
  postClient,
  getClients,
  getClient,
  putClient,
  deleteClient
} = require('../controllers/clients')
const { authenticate } = require('../middlewares/auth')

route.post('/', authenticate(), postClient)
route.get('/', authenticate(), getClients)
route.get('/:id', authenticate(), getClient)
route.put('/:id', authenticate(), putClient)
route.delete('/:id', authenticate(), deleteClient)

module.exports = route
