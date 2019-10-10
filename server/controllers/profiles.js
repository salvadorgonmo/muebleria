const Profiles = require('../models/profiles.js')

const postProfile = async (req, res) => {
  try {
    const profile = new Profiles(req.body)
    await profile.save()
    res.json({ profile })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const getProfiles = async (req, res) => {
  try {
    const profile = await Profiles.find({})
    res.json({ profile })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const getProfile = async (req, res) => {
  try {
    const { id } = req.params
    const profile = await Profiles.findById(id)
    if (!profile) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.json({ profile })
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const putProfile = async (req, res) => {
  try {
    const { id } = req.params
    const profile = await Profiles.findByIdAndUpdate(id, req.body)
    if (!profile) {
      res.status(404).json({
        message: 'No valid entry found for provided ID.'
      })
    }
    res.status(200).json()
  } catch (err) {
    res.status(500).json({ message: `There was an error. Details: ${err}` })
  }
}

const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params
    const profile = await Profiles.findOneAndDelete(id)
    if (!profile) {
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
  getProfile,
  getProfiles,
  postProfile,
  putProfile,
  deleteProfile
}
