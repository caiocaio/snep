const Sequelize = require('sequelize')
const instance = require('../connection')

class Event extends Sequelize.Model {
}

Event.init({
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  content: Sequelize.JSON,
  type: Sequelize.STRING
}, {
  sequelize: instance,
  tableName: 'events',
  excludes: [] 
});
module.exports = Event