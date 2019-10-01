const express = require('express')
const bodyParser = require('body-parser');
const Router = express.Router()
const categoriasController = require('./controllers/categoriasController.js')

Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: false}))

Router.post('/categorias/',categoriasController.postCategorias);
Router.get('/categorias/',categoriasController.getCategorias);
module.exports = Router