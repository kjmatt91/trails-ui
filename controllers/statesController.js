const models = require('../models')

const getAllStates = async (request, response) => {
  const states = await models.States.findAll({
    include: [{ model: models.Trails }]
  })

  return response.send(states)
}

const getStateById = async (request, response) => {
  const { id } = request.params

  const state = await models.States.findOne({
    attributes: ['id', 'name'],
    where: { id },
    include: [{
      model: models.Trails,
      attributes: ['id', 'name', 'town', 'type', 'difficulty', 'length', 'estTime'],
    }]
  })

  return state
    ? response.send(state)
    : response.sendStatus(404)
}

module.exports = { getAllStates, getStateById }
