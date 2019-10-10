const Categories = require('../models/Categories.js')

const postCategories = async (req, res) => {
  try {
    const category = new Categories(req.body)
    await category.save()
    res.json({
      message: `Category '${category.category}' was created successfully.`,
      category
    })
  } catch (err) {
    res.status(500).json({
      message: `There was an error. Details: ${err}`
    })
  }
}

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.find({})
    res.json({ categories })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const getCategory = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Categories.findById(id)
    if (!category) {
      return res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.json({ category })
  } catch (err) {
    res.status(500).json({
      message: `There was an error. Details: ${err}`
    })
  }
}

const putCategory = async (req, res) => {
  try {
    const { id } = req.params
    const result = await Categories
      .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    if (!result) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.status(200).json()
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const deleteCategories = async (req, res) => {
  try {
    const { id } = req.params
    const result = await Categories.findByIdAndDelete(id)
    if (!result) {
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
  postCategories,
  getCategories,
  getCategory,
  putCategory,
  deleteCategories
}
