'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('states', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('trails', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      town: { type: Sequelize.STRING, allowNull: false },
      type: { type: Sequelize.STRING, allowNull: false },
      difficulty: { type: Sequelize.STRING, allowNull: false },
      length: { type: Sequelize.STRING, allowNull: false },
      estTime: { type: Sequelize.STRING, allowNull: false },
      stateId: { type: Sequelize.INTEGER, references: { model: 'states', key: 'id' } },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('trails')

    return queryInterface.dropTable('states')
  }
}
