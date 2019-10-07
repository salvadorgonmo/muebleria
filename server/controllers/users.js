const Users = require('../models/users')

const postUser = async (req, res) => {
  try{
    const users = new Users(req.body)
    await users.save()
    res.json({users})
  }catch(err){
    res.json({message: `Error: ${err}`})
  }
}
const getUsers = async (req, res) => {
  try{
    const users = await Users.find({})
    res.json({users})
  }catch(err){
    res.json({message: `Error: ${err}`})
  }
  
}
const getUser = async (req, res) => {
  try{
    const {id} = req.params 
    const user = await Users.findById(id)
    res.json({user})
  }catch(err){
    res.json({message: `Error: ${err}`})
  }
}
const putUser = async (req, res) => {
  try{
    const {id} = req.params
    await Users.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
    res.status(200).json()
  } catch(err){
    res.json({message: `Error: ${err}`})
  }
}
const deleteUser = async (req,res) => {
  try{
    const {id} = re.params
    await Users.findByIdAndDelete(id)
    res.status(200).json()
  }catch(err){
    res.json({message: `Error: ${err}`})
  }
}

module.exports = {
  getUser,
  getUsers,
  postUser,
  deleteUser,
  putUser
}