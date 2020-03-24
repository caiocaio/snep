const Sequelize = require('sequelize')

class Event extends Sequelize.Model {
}

Event.init({
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncremente: true,
    primaryKey: true,
  },
  content: Sequelize.JSON,
  createdAt: {type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW},
  updatedAt: {type: Sequelize.DATE},
  type: {type: Sequelize.STRING},
}, {
  sequelize: Sequelize,
  tableName: 'events' 
});
module.exports = Event