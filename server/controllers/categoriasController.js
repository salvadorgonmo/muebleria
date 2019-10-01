const categoriasModel = require('../models/Categorias.js')

const postCategorias = async function(req,res){
    const Categorias = new categoriasModel(req.body)
    await Categorias.save()
    res.json({Categorias})
}
const getCategorias = async function(req,res){
    await categoriasModel.find({},(err,categorias)=>{
        if(err) return res.json({message: `Error: ${err}`})
        res.json({categorias})
    })
}
const getCategoria = async function(req,res){
    const categoriaId = req.params.id
    await categoriasModel.findById(categoriaId,(err,categoria)=>{
        if(err) return res.json({message: `Error: ${err}`})
        res.json({categoria})
    })
}
const putCategoria = async function(req,res){
    const categoriaId = req.params.id
    await categoriasModel.findByIdAndUpdate(categoriaId,(err,categoriaMod)=>{
        if(err) return res.json({message: `Error: ${err}`})
        res.json({categoriaMod})
    })
}
const deleteCategoria = async function(req,res){
    const categoriaId = req.params.id
    await categoriasModel.findByIdAndDelete(categoriaId,(err,categoriaElim)=>{
        if(err) return res.json({message: `Error: ${err}`})
        res.json({categoriaElim})
    })
}
module.exports = {
    postCategorias,
    getCategorias,
    getCategoria,
    putCategoria
}