const States = (connection, Sequelize) => {
  return connection.define('states', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
  }, { paranoid: true })
}

module.exports = States
