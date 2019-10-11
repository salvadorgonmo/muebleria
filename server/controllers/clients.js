const Clients = require('../models/clients')

const postClient = async (req, res) => {
  try {
    const client = new Clients(req.body)
    await client.save()
    res.json({ client })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const getClients = async (req, res) => {
  try {
    const clients = await Clients.find({})
    res.json({ clients })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const getClient = async (req, res) => {
  try {
    const { id } = req.params
    const client = await Clients.findById(id)
    if (!client) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.json({ client })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const putClient = async (req, res) => {
  try {
    const { id } = req.params
    const client = await Clients
      .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    if (!client) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.status(200).json()
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const deleteClient = async (req, res) => {
  try {
    const { id } = req.params
    const client = await Clients.findByIdAndRemove(id)
    if (!client) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.status(200).json()
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

module.exports = {
  postClient,
  getClient,
  getClients,
  putClient,
  deleteClient
}
