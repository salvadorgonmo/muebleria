const express = require('express')
const route = express.Router()
const clientsController = require('../controllers/clients')


route.post('/',clientsController.postClient)
route.get('/',clientsController.getClients)
route.get('/:id',clientsController.getClient)
route.put('/:id',clientsController.putClient)
route.delete('/:id',clientsController.deleteClient)

module.exports = route