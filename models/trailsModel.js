const Trails = (connection, Sequelize) => connection.define('trails', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  state: { type: Sequelize.STRING, allowNull: false },
  town: { type: Sequelize.STRING, allowNull: false },
  type: { type: Sequelize.STRING, allowNull: false },
  difficulty: { type: Sequelize.STRING, allowNull: false },
  length: { type: Sequelize.STRING, allowNull: false },
  estTime: { type: Sequelize.STRING, allowNull: false },
})

module.exports = Trails
