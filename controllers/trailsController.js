const models = require('../models/indexModel')

const getAllTrails = async (request, response) => {
  try {
    const trails = await models.Trails.findAll()

    return response.send(trails)
  } catch (error) {
    return response.status(500).send('Unknown error retrieving trails')
  }
}

const getTrailById = async (request, response) => {
  try {
    const id = parseInt(request.params.id)

    const trail = await models.Trails.findOne({
      where: { id },
    })

    return trail
      ? response.send(trail)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unknown error retrieving trail')
  }
}

const createTrail = async (request, response) => {
  try {
    const {
      name, state, town, type, difficulty, length, estTime
    } = request.body

    if (!name || !state || !town || !type || !difficulty || !length || !estTime) {
      return response.status(400).send('Please enter all required fields')
    }

    const newTrail = await models.Trails.create({
      name, state, town, type, difficulty, length, estTime
    })

    return response.status(201).send(newTrail)
  } catch (error) {
    return response.status(500).send('Unknown error creating trail')
  }
}

const deleteTrail = async (request, response) => {
  try {
    const id = parseInt(request.params.id)
    const trail = await models.Trails.findOne({ where: { id } })

    if (!trail) return response.status(409).send(`Unknown trail with ID: ${id}`)
  } catch (error) {
    return response.status(500).send('Unknown error while deleting trail')
  }
}

module.exports = {
  getAllTrails,
  getTrailById,
  createTrail,
  deleteTrail,
}
