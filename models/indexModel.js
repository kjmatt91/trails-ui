const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const TrailsModel = require('./trailsModel')

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Trails = TrailsModel(connection, Sequelize)

module.exports = { Trails }
