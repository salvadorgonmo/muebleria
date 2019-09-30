const Usuarios = require('../models/usuarios')

const obtenerTodosLosUsuarios = async (req, res) => {
  const usuarios = await Usuarios.find({})
  res.send(usuarios)
}

module.exports = {
  obtenerTodosLosUsuarios
}