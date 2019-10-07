const Clients = require('../models/clients')

const postClient = async (req,res)=>{
    try {
        const client = new Clients(req.body)
        await client.save()
        res.json({client})
    } catch(err) {
        res.json({message: `Error: ${err}`})
    }
}
const getClients = async (req, res) => {
    try {
        const clients = await Clients.find({})
        res.json({clients})        
    } catch(err) {
        res.json({message: `Error: ${err}`})
    }
}
const getClient = async (req, res) => {
    try {
        const {id} = req.params
        const client = await Clients.findById(id)
        res.json({client})
    } catch(err) {
        res.json({message: `Error: ${err}`})
    }
}
const putClient = async (req, res) => {
    try {
        const {id} = req.params
        await Clients.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
        res.status(200).json()
    } catch(err) {
        res.json({message: `Error: ${err}`})
    }
}
const deleteClient = async (req, res) => {
    try {
        const {id} = req.params
        await Clients.findByIdAndRemove(id)
        res.status(200).json()
    } catch(err) {
        res.json({message: `Error: ${err}`})
    }
}

module.exports = {
    postClient,
    getClient,
    getClients,
    putClient,
    deleteClient
}