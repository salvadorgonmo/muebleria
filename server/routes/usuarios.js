const express = require('express')
const router = express.Router()
const controladorUsuarios = require('../controllers/usuarios')

router.get('/usuarios', controladorUsuarios.obtenerTodosLosUsuarios)

module.exports = router