const Profiles = require('../models/profiles.js')

const postProfile = async (req,res) => {
    try{
        const profile = new Profiles(req.body)
        await profile.save()
        res.json({profile})
    }catch(err){
        res.json({message: `Error: ${err}`})
    }
}
const getProfiles = async (req, res) => {
    try{
        const profile = await Profiles.find({})
        res.json({profile})
    }catch(err){
        res.json({message: `Error: ${err}`})
    }
}
const getProfile = async (req,res) => {
    try{
        const {id} = req.params
        const profile = await Profiles.findById(id)
        res.json({profile})
    }catch(err){
        res.json({message: `Error: ${err}`})
    }
}
const putProfile = async (req,res) => {
    try{
        const {id} = req.params
        await Profiles.findByIdAndUpdate(id,req.body)
        res.status(200).json()
    }catch(err){
        res.json({message: `Error: ${err}`})
    }
}
const deleteProfile = async (req,res) => {
    try{
        const {id} = req.params
        await Profiles.findOneAndDelete(id)
        res.status(200).json()
    }catch(err){
        res.json({message: `Error: ${err}`})
    }
}

module.exports = {
    getProfile,
    getProfiles,
    postProfile,
    putProfile,
    deleteProfile
}